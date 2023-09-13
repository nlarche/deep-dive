import { defineStore } from 'pinia'
import { reactive } from 'vue'

import clown from '@/assets/animals/clown.png'
import fish from '@/assets/animals/fish.png'
import tuna from '@/assets/animals/tuna.png'
import lotte from '@/assets/animals/lotte.png'
import shark from '@/assets/animals/shark.png'
import whale from '@/assets/animals/whale.png'
import squid from '@/assets/animals/squid.png'
import jellyfish from '@/assets/animals/jellyfish.png'

const data = [
  {
    image: clown,
    depth: 5,
    size: 1,
    startLeft: false
  },
  {
    image: fish,
    depth: 10,
    size: 5,
    startLeft: true
  },
  {
    image: fish,
    depth: 11,
    size: 3,
    startLeft: false,
    scaleX: -1
  },
  {
    image: fish,
    depth: 12,
    size: 4,
    startLeft: true
  },
  {
    image: fish,
    depth: 35,
    size: 4,
    startLeft: false,
    scaleX: -1
  },
  {
    image: tuna,
    depth: 65,
    size: 3,
    startLeft: true
  },
  {
    image: tuna,
    depth: 66,
    size: 2,
    startLeft: true
  },
  {
    image: tuna,
    depth: 66,
    size: 3,
    startLeft: true
  },
  {
    image: fish,
    depth: 50,
    size: 5,
    startLeft: true
  },
  {
    image: shark,
    depth: 65,
    size: 7,
    rotate: -45,
    startLeft: false
  },
  {
    image: whale,
    depth: 80,
    size: 8,
    startLeft: true
  },
  {
    image: lotte,
    depth: 95,
    size: 4,
    startLeft: false
  },
  {
    image: squid,
    depth: 115,
    size: 4,
    startLeft: true,
    rotate: 90
  },
  {
    image: jellyfish,
    depth: 105,
    size: 2,
    startLeft: false
  },
  {
    image: jellyfish,
    depth: 106,
    size: 2,
    startLeft: false
  },
  {
    image: jellyfish,
    depth: 107,
    size: 2,
    startLeft: false
  },
  {
    image: jellyfish,
    depth: 108,
    size: 2,
    startLeft: false
  }
]

export const useAnimals = defineStore('animals', () => {
  const animals = reactive(data)

  return { animals }
})
