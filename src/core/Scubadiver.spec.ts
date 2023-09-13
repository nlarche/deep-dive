import { describe, it, expect } from 'vitest'

import { goDown, goUp, initialDiver } from './ScubaDiver'

describe('Scubadiver core domain', () => {
  it('should goDown', () => {
    const expected = goDown(initialDiver)
    expect(expected.dive.depth).toBe(0.5)
    expect(expected.dive.pressure).toBe(1.05)
  })

  it('should goDown faster below 30 m', () => {
    const expected = goDown({
      ...initialDiver,
      flotability: -2,
      dive: { ...initialDiver.dive, depth: 40, pressure: 5 }
    })
    expect(Math.round(expected.dive.depth * 10) / 10).toBe(41.7)
    expect(expected.dive.pressure).toBe(5.17)
  })

  it('should goUp', () => {
    const expected = goUp({
      ...initialDiver,
      flotability: 0,
      dive: { ...initialDiver.dive, depth: 20, pressure: 3 }
    })
    expect(expected.dive.depth).toBe(19.5)
    expect(expected.dive.pressure).toBe(2.95)
  })

  it('should goUp with positive flotability', () => {
    const expected = goUp({
      ...initialDiver,
      flotability: 2,
      dive: { ...initialDiver.dive, depth: 20, pressure: 3 }
    })
    expect(expected.dive.depth).toBe(19)
    expect(expected.dive.pressure).toBe(2.9)
  })
})
