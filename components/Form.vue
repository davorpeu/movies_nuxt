<template>
  <div class="form-container">
    <form class="form">
      <h2 class="form-title">{{ formTitle }}</h2>

      <div v-for="field in formFields" :key="field.id" class="form-row">
        <label :for="field.id" class="form-label">{{ field.label }}</label>
        <input
          :id="field.id"
          :type="field.type"
          v-model="field.value"
          :placeholder="field.placeholder"
          class="form-input"
        />
      </div>

      <div class="form-actions">
        <button class="form-button" @click.prevent="submitForm">Submit</button>
        <button class="form-button" @click.prevent="resetForm">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    formTitle: {
      type: String,
      required: true
    },
    formFields: {
      type: Array,
      required: true
    }
  },
  methods: {
    submitForm() {
      // Perform form submission logic here
      console.log('Form submitted:', this.formFields)
    },
    resetForm() {
      // Reset form field values
      this.formFields.forEach((field) => {
        field.value = ''
      })
    }
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
}

.form {
  max-width: 400px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-title {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.form-row {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.form-button {
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #0056b3;
}
</style>
