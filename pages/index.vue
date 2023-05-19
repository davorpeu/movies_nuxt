<template>
  <div class="container">
    <div>
      <Form
        :formTitle="formTitle"
        :formFields="formFields"
        :formActions="formActions"
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
          label: 'login'
        }
      ]
    }
  },
  methods: {
    submitForm() {
      // Perform form submission logic here
      if (
        this.formFields.id('username') &&
        this.formFields.id('password' !== null)
      ) {
        console.log('Form submitted:', this.formFields)
      } else {
        console.log('Form not submitted:')
      }
    }
  },
  mounted() {
    const existingUsersJson = this.$cookies.get('users')
    let existingUsers = []
    if (existingUsers) {
      try {
        existingUsers = JSON.parse(existingUsersJson)
        if (!Array.isArray(existingUsers)) {
          existingUsers = []
        }
      } catch (error) {
        console.error('error parrsing users JSON', error)
        existingUsers = []
      }
    }
    const newUser = {
      username: `admin`,
      password: `admin`
    }
    existingUsers.push(newUser)

    const updatedUsersJson = JSON.stringify(existingUsers)
    this.$cookies.set('users', updatedUsersJson)
    console.log(this.$cookies.get('users'))
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
