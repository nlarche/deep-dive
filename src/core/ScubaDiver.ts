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

export interface Scubadiver {
  dive: Dive
  airConsumption: number
  tank: Tank
}

export const initialDiver: Scubadiver = {
  airConsumption: 15, // l/min
  dive: {
    depth: 0,
    maxDepth: 0,
    pressure: 1,
    time: 0,
  },
  tank: {
    volume: 12,
    pressure: 200,
    reserve: 50
  }
}

export function goDown(scubadivers: Scubadiver): Scubadiver {
  const depth = Math.min(120, scubadivers.dive.depth + 0.5)
  const maxDepth = Math.max(depth, scubadivers.dive.maxDepth)
  const pressure = getPressure(depth)
  return { ...scubadivers, dive: { ...scubadivers.dive, depth, pressure, maxDepth }}
}

export function goUp(scubadivers: Scubadiver): Scubadiver {
  const depth = Math.max(0, scubadivers.dive.depth - 0.5)
  const pressure = getPressure(depth)
  return { ...scubadivers, dive: { ...scubadivers.dive, depth, pressure }}
}

export function updateDiveTime(scubadivers: Scubadiver, time: number): Scubadiver {
  return { ...scubadivers, dive: { ...scubadivers.dive, time  }, tank: { ...scubadivers.tank, pressure: calculNewTankPressureAfterOneMinute(scubadivers )} }
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
  const tankGas = diver.tank.pressure * diver.tank.volume
  const rest = tankGas - diver.airConsumption * diver.dive.pressure
  return Math.max(0, Math.round(rest / diver.tank.volume))
}
