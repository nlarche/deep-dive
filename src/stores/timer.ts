import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTimer = defineStore('timer', () => {
  const timer = ref(0)
  let interval: NodeJS.Timer

  function start() {
    if (!interval) {
      interval = setInterval(() => {
        timer.value++
      }, 10000)
    }
  }

  function stop() {
    clearInterval(interval)
  }

  function reset() {
    timer.value = 0
  }

  return { timer, start, stop, reset }
})
