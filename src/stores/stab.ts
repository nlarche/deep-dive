import { defineStore } from 'pinia'
import {
  inflateAirInStab,
  deflateAirInStab,
  rapidPurge,
  computeFloatbility
} from '@/core/ScubaDiver'
import { useScubaDiver } from './scubadiver'
import { computed } from 'vue'

export const useStab = defineStore('stab', () => {
  const store = useScubaDiver()
  const stab = computed(() => store.scubadiver.stab)

  function inflate() {
    const diver = inflateAirInStab(store.scubadiver)
    Object.assign(store.scubadiver, computeFloatbility(diver))
  }
  function deflate() {
    const diver = deflateAirInStab(store.scubadiver)
    Object.assign(store.scubadiver, computeFloatbility(diver))
  }
  function purge() {
    const diver = rapidPurge(store.scubadiver)
    Object.assign(store.scubadiver, computeFloatbility(diver))
  }

  return { inflate, deflate, purge, stab }
})
