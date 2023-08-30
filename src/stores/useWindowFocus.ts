import { ref } from 'vue'

export function useWindowFocus() {
  const focused = ref(window.document.hasFocus())

  window.addEventListener('blur', () => {
    focused.value = false
  })

  window.addEventListener('focus', () => {
    focused.value = true
  })

  return focused
}
