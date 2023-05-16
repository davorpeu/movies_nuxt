<template>
  <button
    :class="[
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
      color && `button-${color}`,
      size && `button-${size}`,
      outlined && 'button-outlined',
      disabled && 'button-disabled'
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'uibutton',
  props: {
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.button {
  /* Button styles */
}

.button-primary {
  /* Primary button styles */
}

.button-secondary {
  /* Secondary button styles */
}

.button-small {
  /* Small button styles */
}

.button-medium {
  /* Medium button styles */
}

.button-large {
  /* Large button styles */
}

.button-outlined {
  /* Outlined button styles */
}

.button-disabled {
  /* Disabled button styles */
}
</style>
