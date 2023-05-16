<template>
  <div class="container">
    <div>
      <Form :formTitle="formTitle" :formFields="formFields" />
      <auth></auth>
    </div>
  </div>
</template>

<script>
import auth from '../layouts/auth.vue'
import Form from '@/components/Form.vue'
export default {
  components: {
    auth,
    Form
  },
  data() {
    return {
      formTitle: 'Contact Form',
      formFields: [
        {
          id: 'name',
          label: 'Name',
          type: 'text',
          value: '',
          placeholder: 'Enter your name'
        },
        {
          id: 'email',
          label: 'Email',
          type: 'email',
          value: '',
          placeholder: 'Enter your email'
        }
      ]
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
