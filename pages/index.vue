<template>
  <div class="container">
    <div>
      <Form
        :formTitle="formTitle"
        :formFields="formFields"
        :formActions="formActions"
        :submitForm="submitForm"
      />
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  components: {
    Form
  },
  data() {
    return {
      formTitle: 'Log In',
      formFields: [
        {
          id: 'username',
          label: 'user',
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
      existingUsers: [] // Define the existingUsers array in the data section
    }
  },
  methods: {
    submitForm() {
      const username = this.formFields.find((field) => field.id === 'username')
        .value
      const password = this.formFields.find((field) => field.id === 'password')
        .value

      const user = this.existingUsers.find(
        (u) => u.username === username && u.password === password
      )
      if (user) {
        // Authentication successful
        console.log('Authentication successful')
      } else {
        // Authentication failed
        console.log('Invalid username or password')
      }
    }
  },
  mounted() {
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
        this.existingUsers.push(newUser)
      }
    } catch (error) {
      console.error('Error parsing users JSON:', error)
      this.existingUsers = []
    }

    const updatedUsersJson = JSON.stringify(this.existingUsers)
    this.$cookies.set('users', updatedUsersJson)
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
