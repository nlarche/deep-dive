import ScubaDiverVue from '@/components/ScubaDiver.vue'

type Depth = number
type Pressure = number

interface Tank {
  volume: number
  pressure: Pressure
  reserve: Pressure
}

interface Dive {
  depth: Depth
  maxDepth: Depth
  time: number
  pressure: Pressure
}

interface Stab {
  volume: number
  max: number
}
export interface Scubadiver {
  dive: Dive
  airConsumption: number
  readonly apparentWeight: number
  flotability: number // positive : sink, negatif: float
  tank: Tank
  stab: Stab
}

export const initialDiver: Scubadiver = {
  airConsumption: 15, // l/min
  apparentWeight: -2,
  flotability: 4,
  dive: {
    depth: 0,
    maxDepth: 0,
    pressure: 1,
    time: 0
  },
  tank: {
    volume: 12,
    pressure: 200,
    reserve: 50
  },
  stab: {
    volume: 6,
    max: 15
  }
}

export function goDown(scubadivers: Scubadiver): Scubadiver {
  const accelerator = scubadivers.dive.pressure >= 4 ? scubadivers.dive.pressure / 3 : 1
  const delta = (scubadivers.flotability / -2) * accelerator || 0.1
  const depth = Math.min(120, scubadivers.dive.depth + delta)
  const maxDepth = Math.max(depth, scubadivers.dive.maxDepth)
  const pressure = getPressure(depth)
  return {
    ...scubadivers,
    dive: { ...scubadivers.dive, depth, pressure, maxDepth }
  }
}

export function goUp(scubadivers: Scubadiver): Scubadiver {
  const delta = scubadivers.flotability / -2 || -0.1
  const depth = Math.max(0, scubadivers.dive.depth + delta)
  const pressure = getPressure(depth)
  return {
    ...scubadivers, 
    dive: { ...scubadivers.dive, depth, pressure }
  }
}

export function updateDiveTime(scubadivers: Scubadiver, time: number): Scubadiver {
  return {
    ...scubadivers,
    dive: { ...scubadivers.dive, time },
    tank: { ...scubadivers.tank, pressure: calculNewTankPressureAfterOneMinute(scubadivers) }
  }
}

export function computeFloatbility(scubadiver: Scubadiver): Scubadiver {
  return { ...scubadiver, flotability: scubadiver.apparentWeight + scubadiver.stab.volume }
}

export function inflateAirInStab(scubadiver: Scubadiver): Scubadiver {
  const volumeInflated = 0.5
  const volume = Math.min(scubadiver.stab.max, scubadiver.stab.volume + volumeInflated)
  let pressure = scubadiver.tank.pressure
  if (volume != scubadiver.stab.max) {
    pressure = calculNewTankPressure(scubadiver, volumeInflated)
  }
  return {
    ...scubadiver,
    stab: { ...scubadiver.stab, volume },
    tank: { ...scubadiver.tank, pressure }
  }
}

export function deflateAirInStab(scubadiver: Scubadiver): Scubadiver {
  const volume = Math.max(0, scubadiver.stab.volume - 0.5)
  return { ...scubadiver, stab: { ...scubadiver.stab, volume } }
}

export function rapidPurge(scubadiver: Scubadiver): Scubadiver {
  return { ...scubadiver, stab: { ...scubadiver.stab, volume: 0 } }
}

const getPressure = (depth: Depth) => 1 + Math.round(depth * 0.1 * 10) / 10

interface GasParameters {
  tankGas: number
  autonomy: number
}
export const getGasParameters = (diver: Scubadiver): GasParameters => {
  const tankGas = diver.tank.pressure * diver.tank.volume
  const reserve = diver.tank.reserve * diver.tank.volume
  const autonomy = Math.round((tankGas - reserve) / diver.airConsumption / diver.dive.pressure)
  return { tankGas, autonomy }
}

export const calculNewTankPressureAfterOneMinute = (diver: Scubadiver): Pressure => {
  return calculNewTankPressure(diver, diver.airConsumption)
}

export const calculNewTankPressure = (diver: Scubadiver, volume: number): Pressure => {
  const tankGas = diver.tank.pressure * diver.tank.volume
  const rest = tankGas - volume * diver.dive.pressure
  return Math.max(0, rest / diver.tank.volume)
}
