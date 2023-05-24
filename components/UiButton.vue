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
  name: 'UiButton',
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

<style scoped></style>
