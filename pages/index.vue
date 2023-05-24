<template>
  <div class="container">
    <div>
      <Form
        :form-title="formTitle"
        :form-fields="formFields"
        :form-actions="formActions"
        @submitForm="submitForm"
      />
    </div>
    <Snackbar
      v-if="snackbarVisible"
      :message="snackbarMessage"
      :visible="snackbarVisible"
      @close="snackbarVisible = false"
    />
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Snackbar from '@/components/Snackbar.vue'

export default {
  auth: false,
  components: {
    Form,
    Snackbar
  },
  data() {
    return {
      formTitle: 'Log In',
      formFields: [
        {
          id: 'username',
          label: 'Username',
          type: 'text',
          value: '',
          placeholder: 'Enter your username'
        },
        {
          id: 'password',
          label: 'Password',
          type: 'password',
          value: '',
          placeholder: 'Enter your password'
        }
      ],
      formActions: [
        {
          id: 'login',
          label: 'Login'
        }
      ],
      snackbarVisible: false,
      snackbarMessage: '',
      existingUsers: []
    }
  },
  mounted() {
    try {
      const isValidToken = false /* this.$auth.checkAuthStatus(this.$cookies) */
      if (isValidToken) {
        this.$router.push('/movies')
      } else {
        this.$router.push('/')
      }
    } catch (error) {
      console.error('Error parsing users JSON:', error)
      this.existingUsers = []
    }

    try {
      const existingUsersJson = this.$cookies.get('users')

      if (existingUsersJson) {
        if (Array.isArray(existingUsersJson)) {
          this.existingUsers = existingUsersJson
        } else {
          this.existingUsers = JSON.parse(existingUsersJson)
          if (!Array.isArray(this.existingUsers)) {
            this.existingUsers = []
          }
        }
      } else {
        const newUser = {
          username: 'admin',
          password: 'admin'
        }
        this.existingUsers = [newUser] // Create a new array with the new user object
      }
    } catch (error) {
      console.error('Error parsing users JSON:', error)
      this.existingUsers = []
    }

    const updatedUsersJson = JSON.stringify(this.existingUsers)
    this.$cookies.set('users', updatedUsersJson)
  },
  methods: {
    submitForm() {
      const usernameField = this.formFields.find(
        (field) => field.id === 'username'
      )
      const passwordField = this.formFields.find(
        (field) => field.id === 'password'
      )

      const username = usernameField.value
      const password = passwordField.value

      if (!username || !password) {
        this.snackbarMessage = 'Please enter both username and password.'
        this.snackbarVisible = true
        return
      }

      this.$auth
        .login(username, password)
        .then(() => {
          console.log('Authentication successful')
          this.snackbarMessage = 'Authentication successful'
          this.snackbarVisible = true
          this.$router.push('/movies')
        })
        .catch((error) => {
          console.error(error)
          this.snackbarMessage = 'Invalid username or password.'
          this.snackbarVisible = true
        })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
