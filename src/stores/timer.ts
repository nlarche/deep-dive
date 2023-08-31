import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useScubaDiver } from './scubadiver'

export const useTimer = defineStore('timer', () => {
  const scubadiverStore = useScubaDiver()
  const timer = ref(0)
  let interval: NodeJS.Timer

  function start() {
    if (!interval) {
      interval = setInterval(() => {
        timer.value++
        scubadiverStore.updateTime(timer.value)
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
