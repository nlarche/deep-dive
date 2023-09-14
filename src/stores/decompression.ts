type Depth =
  | 6
  | 8
  | 10
  | 12
  | 15
  | 18
  | 20
  | 22
  | 15
  | 28
  | 30
  | 32
  | 35
  | 38
  | 40
  | 42
  | 45
  | 48
  | 50
  | 52
  | 55
  | 58
  | 60
  | 62
  | 65

interface Upwelling {
  time: number
  stops: Stop[]
}

interface Stop {
  depth: number
  time: number
}

interface Table {
  [key in Depth]: Upwelling[]
}

const table: Table = {
  6: [],
  8: [],
  10: [],
  12: [],
  15: [
    { time: 80, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 4 },
    { time: 85, stops: [{ depth: 3, time: 4 }], totalTimeToSurface: 6 },
    { time: 90, stops: [{ depth: 3, time: 6 }], totalTimeToSurface: 8 },
    { time: 95, stops: [{ depth: 3, time: 8 }], totalTimeToSurface: 10 },
    { time: 100, stops: [{ depth: 3, time: 11 }], totalTimeToSurface: 13 },
    { time: 105, stops: [{ depth: 3, time: 13 }], totalTimeToSurface: 15 },
    { time: 110, stops: [{ depth: 3, time: 15 }], totalTimeToSurface: 17 },
    { time: 115, stops: [{ depth: 3, time: 17 }], totalTimeToSurface: 19 },
    { time: 120, stops: [{ depth: 3, time: 18 }], totalTimeToSurface: 20 }
  ],
  18: [
    { time: 55, stops: [{ depth: 3, time: 1 }], totalTimeToSurface: 3 },
    { time: 60, stops: [{ depth: 3, time: 5 }], totalTimeToSurface: 7 },
    { time: 65, stops: [{ depth: 3, time: 8 }], totalTimeToSurface: 10 },
    { time: 70, stops: [{ depth: 3, time: 11 }], totalTimeToSurface: 13 },
    { time: 75, stops: [{ depth: 3, time: 14 }], totalTimeToSurface: 16 },
    { time: 80, stops: [{ depth: 3, time: 17 }], totalTimeToSurface: 19 },
    { time: 85, stops: [{ depth: 3, time: 21 }], totalTimeToSurface: 23 },
    { time: 90, stops: [{ depth: 3, time: 23 }], totalTimeToSurface: 25 },
    { time: 95, stops: [{ depth: 3, time: 26 }], totalTimeToSurface: 28 },
    { time: 100, stops: [{ depth: 3, time: 28 }], totalTimeToSurface: 30 },
    { time: 105, stops: [{ depth: 3, time: 31 }], totalTimeToSurface: 33 },
    { time: 110, stops: [{ depth: 3, time: 34 }], totalTimeToSurface: 36 },
    { time: 115, stops: [{ depth: 3, time: 36 }], totalTimeToSurface: 38 },
    { time: 120, stops: [{ depth: 3, time: 38 }], totalTimeToSurface: 40 }
  ],
  20: [
    { time: 45, stops: [{ depth: 3, time: 1 }], totalTimeToSurface: 3 },
    { time: 50, stops: [{ depth: 3, time: 4 }], totalTimeToSurface: 6 },
    { time: 55, stops: [{ depth: 3, time: 9 }], totalTimeToSurface: 11 },
    { time: 60, stops: [{ depth: 3, time: 13 }], totalTimeToSurface: 15 },
    { time: 65, stops: [{ depth: 3, time: 16 }], totalTimeToSurface: 18 },
    { time: 70, stops: [{ depth: 3, time: 20 }], totalTimeToSurface: 22 },
    { time: 75, stops: [{ depth: 3, time: 24 }], totalTimeToSurface: 26 },
    { time: 80, stops: [{ depth: 3, time: 27 }], totalTimeToSurface: 29 },
    { time: 85, stops: [{ depth: 3, time: 30 }], totalTimeToSurface: 32 },
    { time: 90, stops: [{ depth: 3, time: 34 }], totalTimeToSurface: 36 }
  ],
  22: [
    { time: 40, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 4 },
    { time: 45, stops: [{ depth: 3, time: 7 }], totalTimeToSurface: 9 },
    { time: 50, stops: [{ depth: 3, time: 12 }], totalTimeToSurface: 14 },
    { time: 55, stops: [{ depth: 3, time: 16 }], totalTimeToSurface: 18 },
    { time: 60, stops: [{ depth: 3, time: 20 }], totalTimeToSurface: 22 },
    { time: 65, stops: [{ depth: 3, time: 25 }], totalTimeToSurface: 27 },
    { time: 70, stops: [{ depth: 3, time: 29 }], totalTimeToSurface: 31 },
    { time: 75, stops: [{ depth: 3, time: 33 }], totalTimeToSurface: 35 },
    { time: 80, stops: [{ depth: 3, time: 39 }], totalTimeToSurface: 39 },
    { time: 85, stops: [{ depth: 3, time: 43 }], totalTimeToSurface: 43 },
    { time: 90, stops: [{ depth: 3, time: 46 }], totalTimeToSurface: 46 }
  ],
  25: [
    { time: 25, stops: [{ depth: 3, time: 1 }], totalTimeToSurface: 3 },
    { time: 30, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 4 },
    { time: 35, stops: [{ depth: 3, time: 5 }], totalTimeToSurface: 7 },
    { time: 40, stops: [{ depth: 3, time: 10 }], totalTimeToSurface: 12 },
    { time: 45, stops: [{ depth: 3, time: 16 }], totalTimeToSurface: 18 },
    { time: 50, stops: [{ depth: 3, time: 21 }], totalTimeToSurface: 23 },
    { time: 55, stops: [{ depth: 3, time: 27 }], totalTimeToSurface: 29 },
    { time: 60, stops: [{ depth: 3, time: 32 }], totalTimeToSurface: 34 },
    { time: 65, stops: [{ depth: 3, time: 37 }], totalTimeToSurface: 39 },
    {
      time: 70,
      stops: [
        { depth: 3, time: 41 },
        { depth: 6, time: 1 }
      ],
      totalTimeToSurface: 45
    },
    {
      time: 75,
      stops: [
        { depth: 3, time: 43 },
        { depth: 6, time: 4 }
      ],
      totalTimeToSurface: 50
    },
    {
      time: 80,
      stops: [
        { depth: 3, time: 45 },
        { depth: 6, time: 7 }
      ],
      totalTimeToSurface: 55
    },
    {
      time: 85,
      stops: [
        { depth: 3, time: 48 },
        { depth: 6, time: 9 }
      ],
      totalTimeToSurface: 55
    },
    {
      time: 90,
      stops: [
        { depth: 3, time: 50 },
        { depth: 6, time: 11 }
      ],
      totalTimeToSurface: 64
    }
  ],
  28: [
    { time: 20, stops: [{ depth: 3, time: 1 }], totalTimeToSurface: 4 },
    { time: 25, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 5 },
    { time: 30, stops: [{ depth: 3, time: 6 }], totalTimeToSurface: 9 },
    { time: 35, stops: [{ depth: 3, time: 12 }], totalTimeToSurface: 15 },
    { time: 40, stops: [{ depth: 3, time: 19 }], totalTimeToSurface: 22 },
    { time: 45, stops: [{ depth: 3, time: 25 }], totalTimeToSurface: 28 },
    { time: 50, stops: [{ depth: 3, time: 32 }], totalTimeToSurface: 35 },
    {
      time: 55,
      stops: [
        { depth: 3, time: 36 },
        { depth: 6, time: 2 }
      ],
      totalTimeToSurface: 41
    },
    {
      time: 60,
      stops: [
        { depth: 3, time: 40 },
        { depth: 6, time: 4 }
      ],
      totalTimeToSurface: 47
    },
    {
      time: 65,
      stops: [
        { depth: 3, time: 43 },
        { depth: 6, time: 8 }
      ],
      totalTimeToSurface: 54
    },
    {
      time: 70,
      stops: [
        { depth: 3, time: 46 },
        { depth: 6, time: 11 }
      ],
      totalTimeToSurface: 60
    },
    {
      time: 75,
      stops: [
        { depth: 3, time: 48 },
        { depth: 6, time: 14 }
      ],
      totalTimeToSurface: 65
    },
    {
      time: 80,
      stops: [
        { depth: 3, time: 50 },
        { depth: 6, time: 17 }
      ],
      totalTimeToSurface: 70
    },
    {
      time: 85,
      stops: [
        { depth: 3, time: 53 },
        { depth: 6, time: 20 }
      ],
      totalTimeToSurface: 76
    },
    {
      time: 90,
      stops: [
        { depth: 3, time: 56 },
        { depth: 6, time: 23 }
      ],
      totalTimeToSurface: 82
    }
  ],
  30: [
    { time: 15, stops: [{ depth: 3, time: 1 }], totalTimeToSurface: 4 },
    { time: 20, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 5 },
    { time: 25, stops: [{ depth: 3, time: 4 }], totalTimeToSurface: 7 },
    { time: 30, stops: [{ depth: 3, time: 9 }], totalTimeToSurface: 12 },
    { time: 35, stops: [{ depth: 3, time: 17 }], totalTimeToSurface: 20 },
    { time: 40, stops: [{ depth: 3, time: 24 }], totalTimeToSurface: 27 },
    {
      time: 45,
      stops: [
        { depth: 3, time: 31 },
        { depth: 6, time: 1 }
      ],
      totalTimeToSurface: 35
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 36 },
        { depth: 6, time: 3 }
      ],
      totalTimeToSurface: 42
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 39 },
        { depth: 6, time: 6 }
      ],
      totalTimeToSurface: 48
    },
    {
      time: 60,
      stops: [
        { depth: 3, time: 43 },
        { depth: 6, time: 10 }
      ],
      totalTimeToSurface: 56
    },
    {
      time: 65,
      stops: [
        { depth: 3, time: 46 },
        { depth: 6, time: 14 }
      ],
      totalTimeToSurface: 63
    },
    {
      time: 70,
      stops: [
        { depth: 3, time: 48 },
        { depth: 6, time: 17 }
      ],
      totalTimeToSurface: 68
    }
  ],
  32: [
    { time: 15, stops: [{ depth: 3, time: 1 }], totalTimeToSurface: 4 },
    { time: 20, stops: [{ depth: 3, time: 3 }], totalTimeToSurface: 6 },
    { time: 25, stops: [{ depth: 3, time: 6 }], totalTimeToSurface: 9 },
    { time: 30, stops: [{ depth: 3, time: 14 }], totalTimeToSurface: 17 },
    { time: 35, stops: [{ depth: 3, time: 22 }], totalTimeToSurface: 25 },
    {
      time: 40,
      stops: [
        { depth: 3, time: 24 },
        { depth: 6, time: 1 }
      ],
      totalTimeToSurface: 33
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 34 },
        { depth: 6, time: 4 }
      ],
      totalTimeToSurface: 41
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 39 },
        { depth: 6, time: 7 }
      ],
      totalTimeToSurface: 49
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 43 },
        { depth: 6, time: 11 }
      ],
      totalTimeToSurface: 57
    },
    {
      time: 60,
      stops: [
        { depth: 3, time: 46 },
        { depth: 6, time: 15 }
      ],
      totalTimeToSurface: 64
    },
    {
      time: 65,
      stops: [
        { depth: 3, time: 48 },
        { depth: 6, time: 19 }
      ],
      totalTimeToSurface: 70
    },
    {
      time: 70,
      stops: [
        { depth: 3, time: 50 },
        { depth: 6, time: 23 }
      ],
      totalTimeToSurface: 76
    }
  ],
  35: [
    { time: 15, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 5 },
    { time: 20, stops: [{ depth: 3, time: 5 }], totalTimeToSurface: 8 },
    { time: 25, stops: [{ depth: 3, time: 11 }], totalTimeToSurface: 14 },
    {
      time: 30,
      stops: [
        { depth: 3, time: 20 },
        { depth: 6, time: 1 }
      ],
      totalTimeToSurface: 24
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 27 },
        { depth: 6, time: 2 }
      ],
      totalTimeToSurface: 32
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 34 },
        { depth: 6, time: 5 }
      ],
      totalTimeToSurface: 42
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 39 },
        { depth: 6, time: 9 }
      ],
      totalTimeToSurface: 51
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 43 },
        { depth: 6, time: 14 }
      ],
      totalTimeToSurface: 60
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 18 },
        { depth: 6, time: 47 }
      ],
      totalTimeToSurface: 68
    },
    {
      time: 60,
      stops: [
        { depth: 3, time: 50 },
        { depth: 6, time: 22 }
      ],
      totalTimeToSurface: 75
    },
    {
      time: 65,
      stops: [
        { depth: 3, time: 26 },
        { depth: 6, time: 52 },
        { depth: 9, time: 2 }
      ],
      totalTimeToSurface: 84
    },
    {
      time: 70,
      stops: [
        { depth: 3, time: 57 },
        { depth: 6, time: 28 },
        { depth: 9, time: 4 }
      ],
      totalTimeToSurface: 93
    }
  ],
  38: [
    { time: 10, stops: [{ depth: 3, time: 1 }], totalTimeToSurface: 4 },
    { time: 15, stops: [{ depth: 3, time: 4 }], totalTimeToSurface: 7 },
    {
      time: 20,
      stops: [{ depth: 3, time: 8 }],
      totalTimeToSurface: 11
    },
    {
      time: 25,
      stops: [
        { depth: 3, time: 16 },
        { depth: 6, time: 1 }
      ],
      totalTimeToSurface: 21
    },
    {
      time: 30,
      stops: [
        { depth: 3, time: 24 },
        { depth: 6, time: 3 }
      ],
      totalTimeToSurface: 31
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 33 },
        { depth: 6, time: 5 }
      ],
      totalTimeToSurface: 42
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 38 },
        { depth: 6, time: 10 }
      ],
      totalTimeToSurface: 52
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 43 },
        { depth: 6, time: 15 }
      ],
      totalTimeToSurface: 62
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 47 },
        { depth: 6, time: 20 }
      ],
      totalTimeToSurface: 71
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 50 },
        { depth: 6, time: 23 },
        { depth: 9, time: 2 }
      ],
      totalTimeToSurface: 79
    },
    {
      time: 60,
      stops: [
        { depth: 3, time: 53 },
        { depth: 6, time: 27 },
        { depth: 9, time: 5 }
      ],
      totalTimeToSurface: 89
    },
    {
      time: 65,
      stops: [
        { depth: 3, time: 58 },
        { depth: 6, time: 29 },
        { depth: 9, time: 8 }
      ],
      totalTimeToSurface: 99
    },
    {
      time: 70,
      stops: [
        { depth: 3, time: 62 },
        { depth: 6, time: 31 },
        { depth: 9, time: 11 }
      ],
      totalTimeToSurface: 108
    }
  ],
  40: [
    { time: 10, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 5 },
    { time: 15, stops: [{ depth: 3, time: 4 }], totalTimeToSurface: 7 },
    {
      time: 20,
      stops: [
        { depth: 3, time: 9 },
        { depth: 6, time: 1 }
      ],
      totalTimeToSurface: 14
    },
    {
      time: 25,
      stops: [
        { depth: 3, time: 19 },
        { depth: 6, time: 2 }
      ],
      totalTimeToSurface: 25
    },
    {
      time: 30,
      stops: [
        { depth: 3, time: 28 },
        { depth: 6, time: 4 }
      ],
      totalTimeToSurface: 36
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 35 },
        { depth: 6, time: 8 }
      ],
      totalTimeToSurface: 47
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 40 },
        { depth: 6, time: 13 }
      ],
      totalTimeToSurface: 57
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 45 },
        { depth: 6, time: 18 },
        { depth: 9, time: 1 }
      ],
      totalTimeToSurface: 68
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 48 },
        { depth: 6, time: 23 },
        { depth: 9, time: 2 }
      ],
      totalTimeToSurface: 71
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 52 },
        { depth: 6, time: 26 },
        { depth: 9, time: 5 }
      ],
      totalTimeToSurface: 87
    },
    {
      time: 60,
      stops: [
        { depth: 3, time: 57 },
        { depth: 6, time: 29 },
        { depth: 9, time: 8 }
      ],
      totalTimeToSurface: 98
    },
    {
      time: 65,
      stops: [
        { depth: 3, time: 61 },
        { depth: 6, time: 31 },
        { depth: 9, time: 12 }
      ],
      totalTimeToSurface: 108
    },
    {
      time: 70,
      stops: [
        { depth: 3, time: 66 },
        { depth: 6, time: 33 },
        { depth: 9, time: 15 }
      ],
      totalTimeToSurface: 118
    }
  ],
  42: [
    { time: 10, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 6 },
    { time: 15, stops: [{ depth: 3, time: 5 }], totalTimeToSurface: 9 },
    {
      time: 20,
      stops: [
        { depth: 3, time: 12 },
        { depth: 6, time: 1 }
      ],
      totalTimeToSurface: 17
    },
    {
      time: 25,
      stops: [
        { depth: 3, time: 22 },
        { depth: 6, time: 3 }
      ],
      totalTimeToSurface: 29
    },
    {
      time: 30,
      stops: [
        { depth: 3, time: 31 },
        { depth: 6, time: 6 }
      ],
      totalTimeToSurface: 41
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 37 },
        { depth: 6, time: 11 }
      ],
      totalTimeToSurface: 52
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 43 },
        { depth: 6, time: 16 },
        { depth: 9, time: 1 }
      ],
      totalTimeToSurface: 64
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 47 },
        { depth: 6, time: 21 },
        { depth: 9, time: 3 }
      ],
      totalTimeToSurface: 75
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 50 },
        { depth: 6, time: 24 },
        { depth: 9, time: 6 }
      ],
      totalTimeToSurface: 84
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 55 },
        { depth: 6, time: 29 },
        { depth: 9, time: 8 }
      ],
      totalTimeToSurface: 96
    },
    {
      time: 60,
      stops: [
        { depth: 3, time: 60 },
        { depth: 6, time: 30 },
        { depth: 9, time: 13 }
      ],
      totalTimeToSurface: 107
    }
  ],
  45: [
    { time: 10, stops: [{ depth: 3, time: 3 }], totalTimeToSurface: 7 },
    {
      time: 15,
      stops: [
        { depth: 3, time: 6 },
        { depth: 6, time: 1 }
      ],
      totalTimeToSurface: 11
    },
    {
      time: 20,
      stops: [
        { depth: 3, time: 15 },
        { depth: 6, time: 3 }
      ],
      totalTimeToSurface: 22
    },
    {
      time: 25,
      stops: [
        { depth: 3, time: 25 },
        { depth: 6, time: 5 }
      ],
      totalTimeToSurface: 34
    },
    {
      time: 30,
      stops: [
        { depth: 3, time: 35 },
        { depth: 6, time: 9 }
      ],
      totalTimeToSurface: 48
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 40 },
        { depth: 6, time: 15 },
        { depth: 9, time: 1 }
      ],
      totalTimeToSurface: 60
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 46 },
        { depth: 6, time: 20 },
        { depth: 9, time: 3 }
      ],
      totalTimeToSurface: 73
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 50 },
        { depth: 6, time: 24 },
        { depth: 9, time: 6 }
      ],
      totalTimeToSurface: 84
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 54 },
        { depth: 6, time: 28 },
        { depth: 9, time: 10 }
      ],
      totalTimeToSurface: 96
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 60 },
        { depth: 6, time: 30 },
        { depth: 9, time: 14 }
      ],
      totalTimeToSurface: 108
    },
    {
      time: 60,
      stops: [
        { depth: 3, time: 65 },
        { depth: 6, time: 32 },
        { depth: 9, time: 19 },
        { depth: 12, time: 1 }
      ],
      totalTimeToSurface: 121
    }
  ],
  48: [
    { time: 10, stops: [{ depth: 3, time: 4 }], totalTimeToSurface: 8 },
    {
      time: 15,
      stops: [
        { depth: 3, time: 7 },
        { depth: 6, time: 2 }
      ],
      totalTimeToSurface: 13
    },
    {
      time: 20,
      stops: [
        { depth: 3, time: 19 },
        { depth: 6, time: 4 }
      ],
      totalTimeToSurface: 27
    },
    {
      time: 25,
      stops: [
        { depth: 3, time: 30 },
        { depth: 6, time: 7 }
      ],
      totalTimeToSurface: 41
    },
    {
      time: 30,
      stops: [
        { depth: 3, time: 37 },
        { depth: 6, time: 12 },
        { depth: 9, time: 1 }
      ],
      totalTimeToSurface: 55
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 44 },
        { depth: 6, time: 18 },
        { depth: 9, time: 3 }
      ],
      totalTimeToSurface: 70
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 48 },
        { depth: 6, time: 23 },
        { depth: 9, time: 6 }
      ],
      totalTimeToSurface: 82
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 53 },
        { depth: 6, time: 27 },
        { depth: 9, time: 10 }
      ],
      totalTimeToSurface: 95
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 59 },
        { depth: 6, time: 30 },
        { depth: 9, time: 14 },
        { depth: 12, time: 1 }
      ],
      totalTimeToSurface: 109
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 64 },
        { depth: 6, time: 32 },
        { depth: 9, time: 18 },
        { depth: 12, time: 2 }
      ],
      totalTimeToSurface: 121
    },
    {
      time: 60,
      stops: [
        { depth: 3, time: 70 },
        { depth: 6, time: 36 },
        { depth: 9, time: 19 },
        { depth: 12, time: 5 }
      ],
      totalTimeToSurface: 135
    }
  ],
  50: [
    { time: 5, stops: [{ depth: 3, time: 1 }], totalTimeToSurface: 5 },

    {
      time: 10,
      stops: [{ depth: 3, time: 4 }],
      totalTimeToSurface: 8
    },
    {
      time: 15,
      stops: [
        { depth: 3, time: 9 },
        { depth: 6, time: 2 }
      ],
      totalTimeToSurface: 15
    },
    {
      time: 20,
      stops: [
        { depth: 3, time: 22 },
        { depth: 6, time: 4 }
      ],
      totalTimeToSurface: 30
    },
    {
      time: 25,
      stops: [
        { depth: 3, time: 32 },
        { depth: 6, time: 8 },
        { depth: 9, time: 1 }
      ],
      totalTimeToSurface: 46
    },
    {
      time: 30,
      stops: [
        { depth: 3, time: 39 },
        { depth: 6, time: 14 },
        { depth: 9, time: 2 }
      ],
      totalTimeToSurface: 60
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 45 },
        { depth: 6, time: 20 },
        { depth: 9, time: 5 }
      ],
      totalTimeToSurface: 75
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 50 },
        { depth: 6, time: 24 },
        { depth: 9, time: 9 }
      ],
      totalTimeToSurface: 88
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 55 },
        { depth: 6, time: 29 },
        { depth: 9, time: 12 },
        { depth: 12, time: 1 }
      ],
      totalTimeToSurface: 102
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 62 },
        { depth: 6, time: 30 },
        { depth: 9, time: 17 },
        { depth: 12, time: 2 }
      ],
      totalTimeToSurface: 116
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 67 },
        { depth: 6, time: 34 },
        { depth: 9, time: 19 },
        { depth: 12, time: 5 }
      ],
      totalTimeToSurface: 130
    }
  ],
  52: [
    { time: 5, stops: [{ depth: 3, time: 1 }], totalTimeToSurface: 5 },

    {
      time: 10,
      stops: [
        { depth: 3, time: 4 },
        { depth: 6, time: 1 }
      ],
      totalTimeToSurface: 10
    },
    {
      time: 15,
      stops: [
        { depth: 3, time: 10 },
        { depth: 6, time: 3 }
      ],
      totalTimeToSurface: 18
    },
    {
      time: 20,
      stops: [
        { depth: 3, time: 23 },
        { depth: 6, time: 5 },
        { depth: 9, time: 1 }
      ],
      totalTimeToSurface: 34
    },
    {
      time: 25,
      stops: [
        { depth: 3, time: 34 },
        { depth: 6, time: 9 },
        { depth: 9, time: 2 }
      ],
      totalTimeToSurface: 50
    },
    {
      time: 30,
      stops: [
        { depth: 3, time: 41 },
        { depth: 6, time: 15 },
        { depth: 9, time: 4 }
      ],
      totalTimeToSurface: 65
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 47 },
        { depth: 6, time: 22 },
        { depth: 9, time: 6 }
      ],
      totalTimeToSurface: 80
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 52 },
        { depth: 6, time: 26 },
        { depth: 9, time: 10 },
        { depth: 12, time: 1 }
      ],
      totalTimeToSurface: 88
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 59 },
        { depth: 6, time: 29 },
        { depth: 9, time: 15 },
        { depth: 12, time: 2 }
      ],
      totalTimeToSurface: 110
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 64 },
        { depth: 6, time: 32 },
        { depth: 9, time: 17 },
        { depth: 12, time: 5 }
      ],
      totalTimeToSurface: 123
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 71 },
        { depth: 6, time: 36 },
        { depth: 9, time: 19 },
        { depth: 12, time: 8 }
      ],
      totalTimeToSurface: 139
    }
  ],
  55: [
    { time: 5, stops: [{ depth: 3, time: 1 }], totalTimeToSurface: 5 },

    {
      time: 10,
      stops: [
        { depth: 3, time: 5 },
        { depth: 6, time: 1 }
      ],
      totalTimeToSurface: 11
    },
    {
      time: 15,
      stops: [
        { depth: 3, time: 13 },
        { depth: 6, time: 4 }
      ],
      totalTimeToSurface: 22
    },
    {
      time: 20,
      stops: [
        { depth: 3, time: 27 },
        { depth: 6, time: 6 },
        { depth: 9, time: 1 }
      ],
      totalTimeToSurface: 39
    },
    {
      time: 25,
      stops: [
        { depth: 3, time: 37 },
        { depth: 6, time: 11 },
        { depth: 9, time: 3 }
      ],
      totalTimeToSurface: 56
    },
    {
      time: 30,
      stops: [
        { depth: 3, time: 44 },
        { depth: 6, time: 18 },
        { depth: 9, time: 6 }
      ],
      totalTimeToSurface: 73
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 50 },
        { depth: 6, time: 23 },
        { depth: 9, time: 9 }
      ],
      totalTimeToSurface: 88
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 55 },
        { depth: 6, time: 29 },
        { depth: 9, time: 12 },
        { depth: 12, time: 3 }
      ],
      totalTimeToSurface: 104
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 62 },
        { depth: 6, time: 31 },
        { depth: 9, time: 17 },
        { depth: 12, time: 5 }
      ],
      totalTimeToSurface: 120
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 69 },
        { depth: 6, time: 35 },
        { depth: 9, time: 19 },
        { depth: 12, time: 8 }
      ],
      totalTimeToSurface: 136
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 76 },
        { depth: 6, time: 37 },
        { depth: 9, time: 22 },
        { depth: 12, time: 12 }
      ],
      totalTimeToSurface: 152
    }
  ],
  58: [
    { time: 5, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 7 },

    {
      time: 10,
      stops: [
        { depth: 3, time: 5 },
        { depth: 6, time: 2 }
      ],
      totalTimeToSurface: 12
    },
    {
      time: 15,
      stops: [
        { depth: 3, time: 16 },
        { depth: 6, time: 4 },
        { depth: 1, time: 1 }
      ],
      totalTimeToSurface: 26
    },
    {
      time: 20,
      stops: [
        { depth: 3, time: 30 },
        { depth: 6, time: 7 },
        { depth: 9, time: 2 }
      ],
      totalTimeToSurface: 44
    },
    {
      time: 25,
      stops: [
        { depth: 3, time: 40 },
        { depth: 6, time: 13 },
        { depth: 9, time: 4 }
      ],
      totalTimeToSurface: 62
    },
    {
      time: 30,
      stops: [
        { depth: 3, time: 46 },
        { depth: 6, time: 21 },
        { depth: 9, time: 7 },
        { depth: 12, time: 1 }
      ],
      totalTimeToSurface: 81
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 52 },
        { depth: 6, time: 26 },
        { depth: 9, time: 11 },
        { depth: 12, time: 2 }
      ],
      totalTimeToSurface: 97
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 59 },
        { depth: 6, time: 30 },
        { depth: 9, time: 15 },
        { depth: 12, time: 5 }
      ],
      totalTimeToSurface: 115
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 66 },
        { depth: 6, time: 33 },
        { depth: 9, time: 18 },
        { depth: 12, time: 8 }
      ],
      totalTimeToSurface: 131
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 78 },
        { depth: 6, time: 37 },
        { depth: 9, time: 21 },
        { depth: 12, time: 11 },
        { depth: 15, time: 1 }
      ],
      totalTimeToSurface: 150
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 83 },
        { depth: 6, time: 39 },
        { depth: 9, time: 23 },
        { depth: 12, time: 14 },
        { depth: 15, time: 1 }
      ],
      totalTimeToSurface: 168
    }
  ],
  60: [
    { time: 5, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 7 },

    {
      time: 10,
      stops: [
        { depth: 3, time: 6 },
        { depth: 6, time: 2 }
      ],
      totalTimeToSurface: 13
    },
    {
      time: 15,
      stops: [
        { depth: 3, time: 19 },
        { depth: 6, time: 4 },
        { depth: 1, time: 1 }
      ],
      totalTimeToSurface: 29
    },
    {
      time: 20,
      stops: [
        { depth: 3, time: 32 },
        { depth: 6, time: 8 },
        { depth: 9, time: 3 }
      ],
      totalTimeToSurface: 48
    },
    {
      time: 25,
      stops: [
        { depth: 3, time: 41 },
        { depth: 6, time: 15 },
        { depth: 9, time: 5 }
      ],
      totalTimeToSurface: 66
    },
    {
      time: 30,
      stops: [
        { depth: 3, time: 48 },
        { depth: 6, time: 22 },
        { depth: 9, time: 8 },
        { depth: 12, time: 1 }
      ],
      totalTimeToSurface: 85
    },
    {
      time: 35,
      stops: [
        { depth: 3, time: 54 },
        { depth: 6, time: 28 },
        { depth: 9, time: 11 },
        { depth: 12, time: 4 }
      ],
      totalTimeToSurface: 103
    },
    {
      time: 40,
      stops: [
        { depth: 3, time: 62 },
        { depth: 6, time: 30 },
        { depth: 9, time: 17 },
        { depth: 12, time: 6 }
      ],
      totalTimeToSurface: 139
    },
    {
      time: 45,
      stops: [
        { depth: 3, time: 69 },
        { depth: 6, time: 35 },
        { depth: 9, time: 19 },
        { depth: 12, time: 9 },
        { depth: 15, time: 1 }
      ],
      totalTimeToSurface: 139
    },
    {
      time: 50,
      stops: [
        { depth: 3, time: 78 },
        { depth: 6, time: 37 },
        { depth: 9, time: 22 },
        { depth: 12, time: 13 },
        { depth: 15, time: 2 }
      ],
      totalTimeToSurface: 158
    },
    {
      time: 55,
      stops: [
        { depth: 3, time: 88 },
        { depth: 6, time: 40 },
        { depth: 9, time: 24 },
        { depth: 12, time: 15 },
        { depth: 15, time: 5 }
      ],
      totalTimeToSurface: 178
    }
  ],
  62: [
    { time: 5, stops: [{ depth: 3, time: 2 }], totalTimeToSurface: 7 },
    {
      time: 10,
      stops: [
        { depth: 3, time: 7 },
        { depth: 6, time: 2 }
      ],
      totalTimeToSurface: 14
    },
    {
      time: 15,
      stops: [
        { depth: 3, time: 21 },
        { depth: 6, time: 5 },
        { depth: 1, time: 1 }
      ],
      totalTimeToSurface: 33
    }
  ],
  65: [
    { time: 5, stops: [{ depth: 3, time: 3 }], totalTimeToSurface: 8 },
    {
      time: 10,
      stops: [
        { depth: 3, time: 8 },
        { depth: 6, time: 2 }
      ],
      totalTimeToSurface: 16
    },
    {
      time: 15,
      stops: [
        { depth: 3, time: 24 },
        { depth: 6, time: 5 },
        { depth: 1, time: 2 }
      ],
      totalTimeToSurface: 37
    }
  ]
}
