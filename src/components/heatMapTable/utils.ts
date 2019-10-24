function generateData(count: any, yrange: any) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = (i + 1).toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x,
      y
    });
    i++;
  }
  return series;
}

export const data = [
  {
    name: 'Floor 1',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Floor 2',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Floor 3',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Floor 4',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Floor 5',
    data: generateData(8, {
      min: 0,
      max: 90
    })
  }
];

export const colors = ['#333;'];
