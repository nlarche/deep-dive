import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { goDown, goUp, initialDiver, type Scubadiver } from '@/core/ScubaDiver'

type Move = 'NO' | 'DOWN' | 'UP'

export const useScubaDiver = defineStore('scubadivers', () => {
  const scubadiver = reactive<Scubadiver>(initialDiver)
  const move = ref<Move>('NO')

  function down() {
    Object.assign(scubadiver, goDown(scubadiver))
    move.value = 'DOWN'
  }

  function up() {
    Object.assign(scubadiver, goUp(scubadiver))
    move.value = 'UP'
  }

  function stopMoving() {
    move.value = 'NO'
  }
  return { scubadiver, down, up, stopMoving, move }
})
