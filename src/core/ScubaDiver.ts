type Depth = number
type Pressure = number

interface Tank {
  volume: number
  pressure: Pressure
  reserve: number
}

export interface Scubadiver {
  depth: Depth
  maxDepth: Depth
  pressure: Pressure
  airConsumption: number
  tank: Tank
}

export const initialDiver: Scubadiver = {
  depth: 0,
  maxDepth: 0,
  pressure: 1,
  airConsumption: 15, // l/min
  tank: {
    volume: 12,
    pressure: 200,
    reserve: 50
  }
}

export function goDown(scubadivers: Scubadiver): Scubadiver {
  const depth = Math.min(80, scubadivers.depth + 0.5)
  const maxDepth = Math.max(depth, scubadivers.maxDepth)
  const pressure = getPressure(depth)
  return { ...scubadivers, depth, pressure, maxDepth }
}

export function goUp(scubadivers: Scubadiver): Scubadiver {
  const depth = Math.max(0, scubadivers.depth - 0.5)
  const pressure = getPressure(depth)
  return { ...scubadivers, depth, pressure }
}

const getPressure = (depth: Depth) => 1 + Math.round(depth * 0.1 * 10) / 10

interface GasParameters {
  tankGas: number
  autonomy: number
}
export const getGasParameters = (diver: Scubadiver): GasParameters => {
  const tankGas = diver.tank.pressure * diver.tank.volume
  const reserve = diver.tank.reserve * diver.tank.volume
  const autonomy = Math.round((tankGas - reserve) / diver.airConsumption / diver.pressure)
  return { tankGas, autonomy }
}
