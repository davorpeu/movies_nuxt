<template>
  <div class="form-container">
    <form class="form" @submit.prevent="submitForm">
      <h2 class="form-title">{{ formTitle }}</h2>

      <div v-for="field in formFields" :key="field.id" class="form-row">
        <label :for="field.id" class="form-label">{{ field.label }}</label>
        <input
          :id="field.id"
          v-model="field.value"
          :type="field.type"
          :placeholder="field.placeholder"
          class="form-input"
        />
      </div>

      <div v-for="field in formActions" :key="field.id" class="form-actions">
        <uibutton class="form-button" type="submit">
          <label :for="field.id" class="button-label">{{ field.label }}</label>
        </uibutton>
      </div>
    </form>

    <Snackbar
      v-if="snackbarVisible"
      :message="snackbarMessage"
      :visible="snackbarVisible"
      @close="snackbarVisible = false"
    />
  </div>
</template>

<script>
import uibutton from './uibutton.vue'

export default {
  components: {
    uibutton
  },
  props: {
    formTitle: {
      type: String,
      required: true
    },
    formFields: {
      type: Array,
      required: true
    },
    formActions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      snackbarVisible: false,
      snackbarMessage: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      this.$emit('submitForm')
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
  justify-content: center;
}

.form-button {
  padding: 10px 20px;
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

.snackbar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  opacity: 0.9;
}
</style>
