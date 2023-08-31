import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { inflateAirInStab, deflateAirInStab, rapidPurge } from '@/core/ScubaDiver'
import { useScubaDiver } from './scubadiver'

export const useStab = defineStore('stab', () => {
  const store = useScubaDiver()

  function inflate() {
    Object.assign(store.scubadiver, inflateAirInStab(store.scubadiver))
  }
  function deflate() {
    Object.assign(store.scubadiver, deflateAirInStab(store.scubadiver))
  }
  function purge() {
    Object.assign(store.scubadiver, rapidPurge(store.scubadiver))
  }

  return { inflate, deflate, purge }
})
