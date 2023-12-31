import { reactive, ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { goDown, goUp, initialDiver, updateDiveTime, type Scubadiver } from '@/core/ScubaDiver'
import { useTimer } from './timer'

type Move = 'NO' | 'DOWN' | 'UP'

export const useScubaDiver = defineStore('scubadivers', () => {
  const scubadiver = reactive<Scubadiver>(initialDiver)
  const timer = useTimer()
  const move = ref<Move>('NO')
  const flotability = computed(() => scubadiver.flotability)

  function down() {
    Object.assign(scubadiver, goDown(scubadiver))
    if (scubadiver.dive.depth > 0) {
      timer.start()
    }
    move.value = 'DOWN'
  }

  function up() {
    Object.assign(scubadiver, goUp(scubadiver))
    if (scubadiver.dive.depth === 0) {
      timer.stop()
    }
    move.value = 'UP'
  }

  function stopMoving() {
    move.value = 'NO'
  }

  function updateTime(value: number) {
    Object.assign(scubadiver, updateDiveTime(scubadiver, value))
  }

  watchEffect(() => {
    setInterval(() => {
      if (flotability.value > 0) {
        up()
      } else if (flotability.value < 0) {
        down()
      }
    }, 500)
  })

  return { scubadiver, down, up, stopMoving, move, updateTime }
})
