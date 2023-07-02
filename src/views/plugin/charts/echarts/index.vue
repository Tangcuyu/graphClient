<template>
  <n-space :vertical="true" :size="16">
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div ref="pieRef" class="h-400px"></div>
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div ref="lineRef" class="h-400px"></div>
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div ref="barRef" class="h-400px"></div>
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div ref="pictorialBarRef" class="h-600px"></div>
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div ref="scatterRef" class="h-600px"></div>
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div ref="radarRef" class="h-400px"></div>
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div ref="sankeyRef" class="h-400px"></div>
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div ref="graphRef" class="h-400px"></div>
    </n-card>
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div ref="gaugeRef" class="h-640px"></div>
    </n-card>
  </n-space>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import type { Ref } from 'vue';
import { graphic } from 'echarts';
import { type ECOption, useEcharts } from '@/composables';

// 饼图
const pieOptions = ref<ECOption>({
  legend: {},
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 150],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
}) as Ref<ECOption>;
const { domRef: pieRef } = useEcharts(pieOptions);

// 折线/面积图
const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  title: {
    text: 'Stacked Line'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      color: '#000000',
      name: 'Email',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#37a2da'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      color: '#9fe6b8',
      name: 'Union Ads',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#9fe6b8'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      color: '#fedb5c',
      name: 'Video Ads',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#fedb5c'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      color: '#fb7293',
      name: 'Direct',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#fb7293'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      color: '#e7bcf3',
      name: 'Search Engine',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#e7bcf3'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}) as Ref<ECOption>;
const { domRef: lineRef } = useEcharts(lineOptions);

// 柱状图
const barOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 260, 150, 80, 70, 110, 130],
      type: 'bar',
      color: '#7648293',
      showBackground: true,
      barGap: 100,
      itemStyle: {
        borderRadius: [40, 40, 0, 0]
      },
      backgroundStyle: {
        color: 'rgba(150, 180, 180, 0.2)'
      }
    }
  ]
}) as Ref<ECOption>;
const { domRef: barRef } = useEcharts(barOptions);

// 象形柱图
const pictorialBarOption = ref<ECOption>(getPictorialBarOption()) as Ref<ECOption>;
const { domRef: pictorialBarRef } = useEcharts(pictorialBarOption);
function getPictorialBarOption(): ECOption {
  const category: string[] = [];
  let dottedBase = Number(new Date());
  const lineData: number[] = [];
  const barData: number[] = [];

  for (let i = 0; i < 20; i += 1) {
    const date = new Date((dottedBase += 3600 * 24 * 1000));
    category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
    const b = Math.random() * 200;
    const d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
  }

  const options: ECOption = {
    title: {
      text: '象形柱图',
      subtext: '用于多个分类间的数据（大小、数值）的对比'
    },
    backgroundColor: '#0f375f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['line', 'bar'],
      textStyle: {
        color: '#ccc'
      }
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    series: [
      {
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
      },
      {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#14c8d4' },
            { offset: 1, color: '#43eec6' }
          ])
        },
        data: barData
      },
      {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(20,200,212,0.5)' },
            { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
            { offset: 1, color: 'rgba(20,200,212,0)' }
          ])
        },
        z: -12,
        data: lineData
      },
      {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          color: '#0f375f'
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
      }
    ]
  };

  return options;
}

// 散点图
const scatterOptions = ref<ECOption>(getScatterOption()) as Ref<ECOption>;
const { domRef: scatterRef } = useEcharts(scatterOptions);

function getScatterOption() {
  // prettier-ignore
  const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'];

  // prettier-ignore
  const days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

  const data: [number, number, number][] = [
    [0, 0, 5],
    [0, 1, 3],
    [0, 2, 6],
    [0, 3, 8],
    [0, 4, 5],
    [0, 5, 10],
    [0, 6, 6],
    [0, 7, 9],
    [0, 8, 7],
    [0, 9, 20],
    [0, 10, 10],
    [0, 11, 2],
    [0, 12, 4],
    [0, 13, 1],
    [0, 14, 1],
    [0, 15, 3],
    [0, 16, 4],
    [0, 17, 6],
    [0, 18, 4],
    [0, 19, 4],
    [0, 20, 3],
    [0, 21, 3],
    [0, 22, 2],
    [0, 23, 5],
    [1, 0, 7],
    [1, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
    [1, 6, 0],
    [1, 7, 0],
    [1, 8, 0],
    [1, 9, 0],
    [1, 10, 5],
    [1, 11, 2],
    [1, 12, 2],
    [1, 13, 6],
    [1, 14, 9],
    [1, 15, 11],
    [1, 16, 6],
    [1, 17, 7],
    [1, 18, 8],
    [1, 19, 12],
    [1, 20, 5],
    [1, 21, 5],
    [1, 22, 7],
    [1, 23, 2],
    [2, 0, 1],
    [2, 1, 1],
    [2, 2, 0],
    [2, 3, 0],
    [2, 4, 0],
    [2, 5, 0],
    [2, 6, 0],
    [2, 7, 0],
    [2, 8, 0],
    [2, 9, 0],
    [2, 10, 3],
    [2, 11, 2],
    [2, 12, 1],
    [2, 13, 9],
    [2, 14, 8],
    [2, 15, 10],
    [2, 16, 6],
    [2, 17, 5],
    [2, 18, 5],
    [2, 19, 5],
    [2, 20, 7],
    [2, 21, 4],
    [2, 22, 2],
    [2, 23, 4],
    [3, 0, 7],
    [3, 1, 3],
    [3, 2, 0],
    [3, 3, 0],
    [3, 4, 0],
    [3, 5, 0],
    [3, 6, 0],
    [3, 7, 0],
    [3, 8, 1],
    [3, 9, 0],
    [3, 10, 5],
    [3, 11, 4],
    [3, 12, 7],
    [3, 13, 14],
    [3, 14, 13],
    [3, 15, 12],
    [3, 16, 9],
    [3, 17, 5],
    [3, 18, 5],
    [3, 19, 10],
    [3, 20, 6],
    [3, 21, 4],
    [3, 22, 4],
    [3, 23, 1],
    [4, 0, 1],
    [4, 1, 3],
    [4, 2, 0],
    [4, 3, 0],
    [4, 4, 0],
    [4, 5, 1],
    [4, 6, 0],
    [4, 7, 0],
    [4, 8, 0],
    [4, 9, 2],
    [4, 10, 4],
    [4, 11, 4],
    [4, 12, 2],
    [4, 13, 4],
    [4, 14, 4],
    [4, 15, 14],
    [4, 16, 12],
    [4, 17, 1],
    [4, 18, 8],
    [4, 19, 5],
    [4, 20, 3],
    [4, 21, 7],
    [4, 22, 3],
    [4, 23, 0],
    [5, 0, 2],
    [5, 1, 1],
    [5, 2, 0],
    [5, 3, 3],
    [5, 4, 0],
    [5, 5, 0],
    [5, 6, 0],
    [5, 7, 0],
    [5, 8, 2],
    [5, 9, 0],
    [5, 10, 4],
    [5, 11, 1],
    [5, 12, 5],
    [5, 13, 10],
    [5, 14, 5],
    [5, 15, 7],
    [5, 16, 11],
    [5, 17, 6],
    [5, 18, 0],
    [5, 19, 5],
    [5, 20, 3],
    [5, 21, 4],
    [5, 22, 2],
    [5, 23, 0],
    [6, 0, 1],
    [6, 1, 0],
    [6, 2, 0],
    [6, 3, 0],
    [6, 4, 0],
    [6, 5, 0],
    [6, 6, 0],
    [6, 7, 0],
    [6, 8, 0],
    [6, 9, 0],
    [6, 10, 1],
    [6, 11, 0],
    [6, 12, 2],
    [6, 13, 1],
    [6, 14, 3],
    [6, 15, 4],
    [6, 16, 0],
    [6, 17, 0],
    [6, 18, 0],
    [6, 19, 0],
    [6, 20, 1],
    [6, 21, 2],
    [6, 22, 2],
    [6, 23, 6]
  ];

  const title: echarts.TitleComponentOption[] = [];
  const singleAxis: echarts.SingleAxisComponentOption[] = [];
  const series: echarts.ScatterSeriesOption[] = [];

  days.forEach((day, idx) => {
    title.push({
      textBaseline: 'middle',
      top: `${((idx + 0.5) * 100) / 7}%`,
      text: day
    });
    singleAxis.push({
      left: 150,
      type: 'category',
      boundaryGap: false,
      data: hours,
      top: `${(idx * 100) / 7 + 5}%`,
      height: `${100 / 7 - 10}%`,
      axisLabel: {
        interval: 2
      }
    });
    series.push({
      singleAxisIndex: idx,
      coordinateSystem: 'singleAxis',
      type: 'scatter',
      data: [],
      symbolSize(dataItem) {
        return dataItem[1] * 4;
      }
    });
  });

  data.forEach(dataItem => {
    (series as any)[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
  });

  const option: ECOption = {
    tooltip: {
      position: 'top'
    },
    title,
    singleAxis,
    series: series as any
  };

  // console.log(option);
  return option;
}

// 雷达图
const radarOptions = ref<ECOption>({
  title: {
    text: 'Multiple Radar'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    left: 'center',
    data: ['A Software', 'A Phone', 'Another Phone', 'Precipitation', 'Evaporation']
  },
  radar: [
    {
      indicator: [
        { name: 'Brand', max: 100 },
        { name: 'Content', max: 100 },
        { name: 'Usability', max: 100 },
        { name: 'Function', max: 100 }
      ],
      center: ['25%', '40%'],
      radius: 100
    },
    {
      indicator: [
        { name: 'Look', max: 100 },
        { name: 'Photo', max: 100 },
        { name: 'System', max: 100 },
        { name: 'Performance', max: 100 },
        { name: 'Screen', max: 100 }
      ],
      radius: 80,
      center: ['50%', '60%']
    },
    {
      indicator: (() => {
        const res = [];
        for (let i = 1; i <= 12; i += 1) {
          res.push({ name: `${i}月`, max: 100 });
        }
        return res;
      })(),
      center: ['75%', '40%'],
      radius: 120
    }
  ],
  series: [
    {
      type: 'radar',
      tooltip: {
        trigger: 'item'
      },
      areaStyle: {},
      data: [
        {
          value: [60, 73, 85, 40],
          name: 'A Software'
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 1,
      areaStyle: {},
      data: [
        {
          value: [85, 90, 90, 95, 95],
          name: 'A Phone'
        },
        {
          value: [95, 80, 95, 90, 93],
          name: 'Another Phone'
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 2,
      areaStyle: {},
      data: [
        {
          name: 'Precipitation',
          value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
          name: 'Evaporation',
          value: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
        }
      ]
    }
  ]
}) as Ref<ECOption>;
const { domRef: radarRef } = useEcharts(radarOptions);

// 桑基图
const sankeyOptions = ref<ECOption>(getSankeyOption()) as Ref<ECOption>;
const { domRef: sankeyRef } = useEcharts(sankeyOptions);
function getSankeyOption() {
  const data = {
    nodes: [
      { name: "Agricultural 'waste'" },
      { name: 'Bio-conversion' },
      { name: 'Liquid' },
      { name: 'Losses' },
      { name: 'Solid' },
      { name: 'Gas' },
      { name: 'Biofuel imports' },
      { name: 'Biomass imports' },
      { name: 'Coal imports' },
      { name: 'Coal' },
      { name: 'Coal reserves' },
      { name: 'District heating' },
      { name: 'Industry' },
      { name: 'Heating and cooling - commercial' },
      { name: 'Heating and cooling - homes' },
      { name: 'Electricity grid' },
      { name: 'Over generation / exports' },
      { name: 'H2 conversion' },
      { name: 'Road transport' },
      { name: 'Agriculture' },
      { name: 'Rail transport' },
      { name: 'Lighting & appliances - commercial' },
      { name: 'Lighting & appliances - homes' },
      { name: 'Gas imports' },
      { name: 'Ngas' },
      { name: 'Gas reserves' },
      { name: 'Thermal generation' },
      { name: 'Geothermal' },
      { name: 'H2' },
      { name: 'Hydro' },
      { name: 'International shipping' },
      { name: 'Domestic aviation' },
      { name: 'International aviation' },
      { name: 'National navigation' },
      { name: 'Marine algae' },
      { name: 'Nuclear' },
      { name: 'Oil imports' },
      { name: 'Oil' },
      { name: 'Oil reserves' },
      { name: 'Other waste' },
      { name: 'Pumped heat' },
      { name: 'Solar PV' },
      { name: 'Solar Thermal' },
      { name: 'Solar' },
      { name: 'Tidal' },
      { name: 'UK land based bioenergy' },
      { name: 'Wave' },
      { name: 'Wind' }
    ],
    links: [
      {
        source: "Agricultural 'waste'",
        target: 'Bio-conversion',
        value: 124.729
      },
      { source: 'Bio-conversion', target: 'Liquid', value: 0.597 },
      { source: 'Bio-conversion', target: 'Losses', value: 26.862 },
      { source: 'Bio-conversion', target: 'Solid', value: 280.322 },
      { source: 'Bio-conversion', target: 'Gas', value: 81.144 },
      { source: 'Biofuel imports', target: 'Liquid', value: 35 },
      { source: 'Biomass imports', target: 'Solid', value: 35 },
      { source: 'Coal imports', target: 'Coal', value: 11.606 },
      { source: 'Coal reserves', target: 'Coal', value: 63.965 },
      { source: 'Coal', target: 'Solid', value: 75.571 },
      { source: 'District heating', target: 'Industry', value: 10.639 },
      {
        source: 'District heating',
        target: 'Heating and cooling - commercial',
        value: 22.505
      },
      {
        source: 'District heating',
        target: 'Heating and cooling - homes',
        value: 46.184
      },
      {
        source: 'Electricity grid',
        target: 'Over generation / exports',
        value: 104.453
      },
      {
        source: 'Electricity grid',
        target: 'Heating and cooling - homes',
        value: 113.726
      },
      { source: 'Electricity grid', target: 'H2 conversion', value: 27.14 },
      { source: 'Electricity grid', target: 'Industry', value: 342.165 },
      { source: 'Electricity grid', target: 'Road transport', value: 37.797 },
      { source: 'Electricity grid', target: 'Agriculture', value: 4.412 },
      {
        source: 'Electricity grid',
        target: 'Heating and cooling - commercial',
        value: 40.858
      },
      { source: 'Electricity grid', target: 'Losses', value: 56.691 },
      { source: 'Electricity grid', target: 'Rail transport', value: 7.863 },
      {
        source: 'Electricity grid',
        target: 'Lighting & appliances - commercial',
        value: 90.008
      },
      {
        source: 'Electricity grid',
        target: 'Lighting & appliances - homes',
        value: 93.494
      },
      { source: 'Gas imports', target: 'Ngas', value: 40.719 },
      { source: 'Gas reserves', target: 'Ngas', value: 82.233 },
      { source: 'Gas', target: 'Heating and cooling - commercial', value: 0.129 },
      { source: 'Gas', target: 'Losses', value: 1.401 },
      { source: 'Gas', target: 'Thermal generation', value: 151.891 },
      { source: 'Gas', target: 'Agriculture', value: 2.096 },
      { source: 'Gas', target: 'Industry', value: 48.58 },
      { source: 'Geothermal', target: 'Electricity grid', value: 7.013 },
      { source: 'H2 conversion', target: 'H2', value: 20.897 },
      { source: 'H2 conversion', target: 'Losses', value: 6.242 },
      { source: 'H2', target: 'Road transport', value: 20.897 },
      { source: 'Hydro', target: 'Electricity grid', value: 6.995 },
      { source: 'Liquid', target: 'Industry', value: 121.066 },
      { source: 'Liquid', target: 'International shipping', value: 128.69 },
      { source: 'Liquid', target: 'Road transport', value: 135.835 },
      { source: 'Liquid', target: 'Domestic aviation', value: 14.458 },
      { source: 'Liquid', target: 'International aviation', value: 206.267 },
      { source: 'Liquid', target: 'Agriculture', value: 3.64 },
      { source: 'Liquid', target: 'National navigation', value: 33.218 },
      { source: 'Liquid', target: 'Rail transport', value: 4.413 },
      { source: 'Marine algae', target: 'Bio-conversion', value: 4.375 },
      { source: 'Ngas', target: 'Gas', value: 122.952 },
      { source: 'Nuclear', target: 'Thermal generation', value: 839.978 },
      { source: 'Oil imports', target: 'Oil', value: 504.287 },
      { source: 'Oil reserves', target: 'Oil', value: 107.703 },
      { source: 'Oil', target: 'Liquid', value: 611.99 },
      { source: 'Other waste', target: 'Solid', value: 56.587 },
      { source: 'Other waste', target: 'Bio-conversion', value: 77.81 },
      {
        source: 'Pumped heat',
        target: 'Heating and cooling - homes',
        value: 193.026
      },
      {
        source: 'Pumped heat',
        target: 'Heating and cooling - commercial',
        value: 70.672
      },
      { source: 'Solar PV', target: 'Electricity grid', value: 59.901 },
      {
        source: 'Solar Thermal',
        target: 'Heating and cooling - homes',
        value: 19.263
      },
      { source: 'Solar', target: 'Solar Thermal', value: 19.263 },
      { source: 'Solar', target: 'Solar PV', value: 59.901 },
      { source: 'Solid', target: 'Agriculture', value: 0.882 },
      { source: 'Solid', target: 'Thermal generation', value: 400.12 },
      { source: 'Solid', target: 'Industry', value: 46.477 },
      {
        source: 'Thermal generation',
        target: 'Electricity grid',
        value: 525.531
      },
      { source: 'Thermal generation', target: 'Losses', value: 787.129 },
      { source: 'Thermal generation', target: 'District heating', value: 79.329 },
      { source: 'Tidal', target: 'Electricity grid', value: 9.452 },
      {
        source: 'UK land based bioenergy',
        target: 'Bio-conversion',
        value: 182.01
      },
      { source: 'Wave', target: 'Electricity grid', value: 19.013 },
      { source: 'Wind', target: 'Electricity grid', value: 289.366 }
    ]
  };

  const options: ECOption = {
    title: {
      text: '桑基图',
      subtext: '适合表现分配情况、归类情况，以及变化和流动情况'
    },
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'sankey',
        top: '15%',
        data: data.nodes,
        links: data.links,
        emphasis: {
          focus: 'adjacency'
        },
        lineStyle: {
          color: 'gradient',
          curveness: 0.5
        }
      }
    ]
  };

  return options;
}

// 关系图
interface GraphNode {
  symbolSize: number;
  label?: {
    show?: boolean;
  };
}

const graphOptions = ref<ECOption>(getGraphOption()) as Ref<ECOption>;
const { domRef: graphRef } = useEcharts(graphOptions);

function getGraphOption() {
  const graph = {
    nodes: [
      {
        id: '0',
        name: 'Myriel',
        symbolSize: 19.12381,
        x: -266.82776,
        y: 299.6904,
        value: 28.685715,
        category: 0
      },
      {
        id: '1',
        name: 'Napoleon',
        symbolSize: 2.6666666666666665,
        x: -418.08344,
        y: 446.8853,
        value: 4,
        category: 0
      },
      {
        id: '2',
        name: 'MlleBaptistine',
        symbolSize: 6.323809333333333,
        x: -212.76357,
        y: 245.29176,
        value: 9.485714,
        category: 1
      },
      {
        id: '3',
        name: 'MmeMagloire',
        symbolSize: 6.323809333333333,
        x: -242.82404,
        y: 235.26283,
        value: 9.485714,
        category: 1
      },
      {
        id: '4',
        name: 'CountessDeLo',
        symbolSize: 2.6666666666666665,
        x: -379.30386,
        y: 429.06424,
        value: 4,
        category: 0
      },
      {
        id: '5',
        name: 'Geborand',
        symbolSize: 2.6666666666666665,
        x: -417.26337,
        y: 406.03506,
        value: 4,
        category: 0
      },
      {
        id: '6',
        name: 'Champtercier',
        symbolSize: 2.6666666666666665,
        x: -332.6012,
        y: 485.16974,
        value: 4,
        category: 0
      },
      {
        id: '7',
        name: 'Cravatte',
        symbolSize: 2.6666666666666665,
        x: -382.69568,
        y: 475.09113,
        value: 4,
        category: 0
      },
      {
        id: '8',
        name: 'Count',
        symbolSize: 2.6666666666666665,
        x: -320.384,
        y: 387.17325,
        value: 4,
        category: 0
      },
      {
        id: '9',
        name: 'OldMan',
        symbolSize: 2.6666666666666665,
        x: -344.39832,
        y: 451.16772,
        value: 4,
        category: 0
      },
      {
        id: '10',
        name: 'Labarre',
        symbolSize: 2.6666666666666665,
        x: -89.34107,
        y: 234.56128,
        value: 4,
        category: 1
      },
      {
        id: '11',
        name: 'Valjean',
        symbolSize: 66.66666666666667,
        x: -87.93029,
        y: -6.8120565,
        value: 100,
        category: 1
      },
      {
        id: '12',
        name: 'Marguerite',
        symbolSize: 4.495239333333333,
        x: -339.77908,
        y: -184.69139,
        value: 6.742859,
        category: 1
      },
      {
        id: '13',
        name: 'MmeDeR',
        symbolSize: 2.6666666666666665,
        x: -194.31313,
        y: 178.55301,
        value: 4,
        category: 1
      },
      {
        id: '14',
        name: 'Isabeau',
        symbolSize: 2.6666666666666665,
        x: -158.05168,
        y: 201.99768,
        value: 4,
        category: 1
      },
      {
        id: '15',
        name: 'Gervais',
        symbolSize: 2.6666666666666665,
        x: -127.701546,
        y: 242.55057,
        value: 4,
        category: 1
      },
      {
        id: '16',
        name: 'Tholomyes',
        symbolSize: 17.295237333333333,
        x: -385.2226,
        y: -393.5572,
        value: 25.942856,
        category: 2
      },
      {
        id: '17',
        name: 'Listolier',
        symbolSize: 13.638097333333334,
        x: -516.55884,
        y: -393.98975,
        value: 20.457146,
        category: 2
      },
      {
        id: '18',
        name: 'Fameuil',
        symbolSize: 13.638097333333334,
        x: -464.79382,
        y: -493.57944,
        value: 20.457146,
        category: 2
      },
      {
        id: '19',
        name: 'Blacheville',
        symbolSize: 13.638097333333334,
        x: -515.1624,
        y: -456.9891,
        value: 20.457146,
        category: 2
      },
      {
        id: '20',
        name: 'Favourite',
        symbolSize: 13.638097333333334,
        x: -408.12122,
        y: -464.5048,
        value: 20.457146,
        category: 2
      },
      {
        id: '21',
        name: 'Dahlia',
        symbolSize: 13.638097333333334,
        x: -456.44113,
        y: -425.13303,
        value: 20.457146,
        category: 2
      },
      {
        id: '22',
        name: 'Zephine',
        symbolSize: 13.638097333333334,
        x: -459.1107,
        y: -362.5133,
        value: 20.457146,
        category: 2
      },
      {
        id: '23',
        name: 'Fantine',
        symbolSize: 28.266666666666666,
        x: -313.42786,
        y: -289.44803,
        value: 42.4,
        category: 2
      },
      {
        id: '24',
        name: 'MmeThenardier',
        symbolSize: 20.95238266666667,
        x: 4.6313396,
        y: -273.8517,
        value: 31.428574,
        category: 7
      },
      {
        id: '25',
        name: 'Thenardier',
        symbolSize: 30.095235333333335,
        x: 82.80825,
        y: -203.1144,
        value: 45.142853,
        category: 7
      },
      {
        id: '26',
        name: 'Cosette',
        symbolSize: 20.95238266666667,
        x: 78.64646,
        y: -31.512747,
        value: 31.428574,
        category: 6
      },
      {
        id: '27',
        name: 'Javert',
        symbolSize: 31.923806666666668,
        x: -81.46074,
        y: -204.20204,
        value: 47.88571,
        category: 7
      },
      {
        id: '28',
        name: 'Fauchelevent',
        symbolSize: 8.152382000000001,
        x: -225.73984,
        y: 82.41631,
        value: 12.228573,
        category: 4
      },
      {
        id: '29',
        name: 'Bamatabois',
        symbolSize: 15.466666666666667,
        x: -385.6842,
        y: -20.206686,
        value: 23.2,
        category: 3
      },
      {
        id: '30',
        name: 'Perpetue',
        symbolSize: 4.495239333333333,
        x: -403.92447,
        y: -197.69823,
        value: 6.742859,
        category: 2
      },
      {
        id: '31',
        name: 'Simplice',
        symbolSize: 8.152382000000001,
        x: -281.4253,
        y: -158.45137,
        value: 12.228573,
        category: 2
      },
      {
        id: '32',
        name: 'Scaufflaire',
        symbolSize: 2.6666666666666665,
        x: -122.41348,
        y: 210.37503,
        value: 4,
        category: 1
      },
      {
        id: '33',
        name: 'Woman1',
        symbolSize: 4.495239333333333,
        x: -234.6001,
        y: -113.15067,
        value: 6.742859,
        category: 1
      },
      {
        id: '34',
        name: 'Judge',
        symbolSize: 11.809524666666666,
        x: -387.84915,
        y: 58.7059,
        value: 17.714287,
        category: 3
      },
      {
        id: '35',
        name: 'Champmathieu',
        symbolSize: 11.809524666666666,
        x: -338.2307,
        y: 87.48405,
        value: 17.714287,
        category: 3
      },
      {
        id: '36',
        name: 'Brevet',
        symbolSize: 11.809524666666666,
        x: -453.26874,
        y: 58.94648,
        value: 17.714287,
        category: 3
      },
      {
        id: '37',
        name: 'Chenildieu',
        symbolSize: 11.809524666666666,
        x: -386.44904,
        y: 140.05937,
        value: 17.714287,
        category: 3
      },
      {
        id: '38',
        name: 'Cochepaille',
        symbolSize: 11.809524666666666,
        x: -446.7876,
        y: 123.38005,
        value: 17.714287,
        category: 3
      },
      {
        id: '39',
        name: 'Pontmercy',
        symbolSize: 6.323809333333333,
        x: 336.49738,
        y: -269.55914,
        value: 9.485714,
        category: 6
      },
      {
        id: '40',
        name: 'Boulatruelle',
        symbolSize: 2.6666666666666665,
        x: 29.187843,
        y: -460.13132,
        value: 4,
        category: 7
      },
      {
        id: '41',
        name: 'Eponine',
        symbolSize: 20.95238266666667,
        x: 238.36697,
        y: -210.00926,
        value: 31.428574,
        category: 7
      },
      {
        id: '42',
        name: 'Anzelma',
        symbolSize: 6.323809333333333,
        x: 189.69513,
        y: -346.50662,
        value: 9.485714,
        category: 7
      },
      {
        id: '43',
        name: 'Woman2',
        symbolSize: 6.323809333333333,
        x: -187.00418,
        y: -145.02663,
        value: 9.485714,
        category: 6
      },
      {
        id: '44',
        name: 'MotherInnocent',
        symbolSize: 4.495239333333333,
        x: -252.99521,
        y: 129.87549,
        value: 6.742859,
        category: 4
      },
      {
        id: '45',
        name: 'Gribier',
        symbolSize: 2.6666666666666665,
        x: -296.07935,
        y: 163.11964,
        value: 4,
        category: 4
      },
      {
        id: '46',
        name: 'Jondrette',
        symbolSize: 2.6666666666666665,
        x: 550.3201,
        y: 522.4031,
        value: 4,
        category: 5
      },
      {
        id: '47',
        name: 'MmeBurgon',
        symbolSize: 4.495239333333333,
        x: 488.13535,
        y: 356.8573,
        value: 6.742859,
        category: 5
      },
      {
        id: '48',
        name: 'Gavroche',
        symbolSize: 41.06667066666667,
        x: 387.89572,
        y: 110.462326,
        value: 61.600006,
        category: 8
      },
      {
        id: '49',
        name: 'Gillenormand',
        symbolSize: 13.638097333333334,
        x: 126.4831,
        y: 68.10622,
        value: 20.457146,
        category: 6
      },
      {
        id: '50',
        name: 'Magnon',
        symbolSize: 4.495239333333333,
        x: 127.07365,
        y: -113.05923,
        value: 6.742859,
        category: 6
      },
      {
        id: '51',
        name: 'MlleGillenormand',
        symbolSize: 13.638097333333334,
        x: 162.63559,
        y: 117.6565,
        value: 20.457146,
        category: 6
      },
      {
        id: '52',
        name: 'MmePontmercy',
        symbolSize: 4.495239333333333,
        x: 353.66415,
        y: -205.89165,
        value: 6.742859,
        category: 6
      },
      {
        id: '53',
        name: 'MlleVaubois',
        symbolSize: 2.6666666666666665,
        x: 165.43939,
        y: 339.7736,
        value: 4,
        category: 6
      },
      {
        id: '54',
        name: 'LtGillenormand',
        symbolSize: 8.152382000000001,
        x: 137.69348,
        y: 196.1069,
        value: 12.228573,
        category: 6
      },
      {
        id: '55',
        name: 'Marius',
        symbolSize: 35.58095333333333,
        x: 206.44687,
        y: -13.805411,
        value: 53.37143,
        category: 6
      },
      {
        id: '56',
        name: 'BaronessT',
        symbolSize: 4.495239333333333,
        x: 194.82993,
        y: 224.78036,
        value: 6.742859,
        category: 6
      },
      {
        id: '57',
        name: 'Mabeuf',
        symbolSize: 20.95238266666667,
        x: 597.6618,
        y: 135.18481,
        value: 31.428574,
        category: 8
      },
      {
        id: '58',
        name: 'Enjolras',
        symbolSize: 28.266666666666666,
        x: 355.78366,
        y: -74.882454,
        value: 42.4,
        category: 8
      },
      {
        id: '59',
        name: 'Combeferre',
        symbolSize: 20.95238266666667,
        x: 515.2961,
        y: -46.167564,
        value: 31.428574,
        category: 8
      },
      {
        id: '60',
        name: 'Prouvaire',
        symbolSize: 17.295237333333333,
        x: 614.29285,
        y: -69.3104,
        value: 25.942856,
        category: 8
      },
      {
        id: '61',
        name: 'Feuilly',
        symbolSize: 20.95238266666667,
        x: 550.1917,
        y: -128.17537,
        value: 31.428574,
        category: 8
      },
      {
        id: '62',
        name: 'Courfeyrac',
        symbolSize: 24.609526666666667,
        x: 436.17184,
        y: -12.7286825,
        value: 36.91429,
        category: 8
      },
      {
        id: '63',
        name: 'Bahorel',
        symbolSize: 22.780953333333333,
        x: 602.55225,
        y: 16.421427,
        value: 34.17143,
        category: 8
      },
      {
        id: '64',
        name: 'Bossuet',
        symbolSize: 24.609526666666667,
        x: 455.81955,
        y: -115.45826,
        value: 36.91429,
        category: 8
      },
      {
        id: '65',
        name: 'Joly',
        symbolSize: 22.780953333333333,
        x: 516.40784,
        y: 47.242233,
        value: 34.17143,
        category: 8
      },
      {
        id: '66',
        name: 'Grantaire',
        symbolSize: 19.12381,
        x: 646.4313,
        y: -151.06331,
        value: 28.685715,
        category: 8
      },
      {
        id: '67',
        name: 'MotherPlutarch',
        symbolSize: 2.6666666666666665,
        x: 668.9568,
        y: 204.65488,
        value: 4,
        category: 8
      },
      {
        id: '68',
        name: 'Gueulemer',
        symbolSize: 19.12381,
        x: 78.4799,
        y: -347.15146,
        value: 28.685715,
        category: 7
      },
      {
        id: '69',
        name: 'Babet',
        symbolSize: 19.12381,
        x: 150.35959,
        y: -298.50797,
        value: 28.685715,
        category: 7
      },
      {
        id: '70',
        name: 'Claquesous',
        symbolSize: 19.12381,
        x: 137.3717,
        y: -410.2809,
        value: 28.685715,
        category: 7
      },
      {
        id: '71',
        name: 'Montparnasse',
        symbolSize: 17.295237333333333,
        x: 234.87747,
        y: -400.85983,
        value: 25.942856,
        category: 7
      },
      {
        id: '72',
        name: 'Toussaint',
        symbolSize: 6.323809333333333,
        x: 40.942253,
        y: 113.78272,
        value: 9.485714,
        category: 1
      },
      {
        id: '73',
        name: 'Child1',
        symbolSize: 4.495239333333333,
        x: 437.939,
        y: 291.58234,
        value: 6.742859,
        category: 8
      },
      {
        id: '74',
        name: 'Child2',
        symbolSize: 4.495239333333333,
        x: 466.04922,
        y: 283.3606,
        value: 6.742859,
        category: 8
      },
      {
        id: '75',
        name: 'Brujon',
        symbolSize: 13.638097333333334,
        x: 238.79364,
        y: -314.06345,
        value: 20.457146,
        category: 7
      },
      {
        id: '76',
        name: 'MmeHucheloup',
        symbolSize: 13.638097333333334,
        x: 712.18353,
        y: 4.8131495,
        value: 20.457146,
        category: 8
      }
    ],
    links: [
      {
        source: '1',
        target: '0'
      },
      {
        source: '2',
        target: '0'
      },
      {
        source: '3',
        target: '0'
      },
      {
        source: '3',
        target: '2'
      },
      {
        source: '4',
        target: '0'
      },
      {
        source: '5',
        target: '0'
      },
      {
        source: '6',
        target: '0'
      },
      {
        source: '7',
        target: '0'
      },
      {
        source: '8',
        target: '0'
      },
      {
        source: '9',
        target: '0'
      },
      {
        source: '11',
        target: '0'
      },
      {
        source: '11',
        target: '2'
      },
      {
        source: '11',
        target: '3'
      },
      {
        source: '11',
        target: '10'
      },
      {
        source: '12',
        target: '11'
      },
      {
        source: '13',
        target: '11'
      },
      {
        source: '14',
        target: '11'
      },
      {
        source: '15',
        target: '11'
      },
      {
        source: '17',
        target: '16'
      },
      {
        source: '18',
        target: '16'
      },
      {
        source: '18',
        target: '17'
      },
      {
        source: '19',
        target: '16'
      },
      {
        source: '19',
        target: '17'
      },
      {
        source: '19',
        target: '18'
      },
      {
        source: '20',
        target: '16'
      },
      {
        source: '20',
        target: '17'
      },
      {
        source: '20',
        target: '18'
      },
      {
        source: '20',
        target: '19'
      },
      {
        source: '21',
        target: '16'
      },
      {
        source: '21',
        target: '17'
      },
      {
        source: '21',
        target: '18'
      },
      {
        source: '21',
        target: '19'
      },
      {
        source: '21',
        target: '20'
      },
      {
        source: '22',
        target: '16'
      },
      {
        source: '22',
        target: '17'
      },
      {
        source: '22',
        target: '18'
      },
      {
        source: '22',
        target: '19'
      },
      {
        source: '22',
        target: '20'
      },
      {
        source: '22',
        target: '21'
      },
      {
        source: '23',
        target: '11'
      },
      {
        source: '23',
        target: '12'
      },
      {
        source: '23',
        target: '16'
      },
      {
        source: '23',
        target: '17'
      },
      {
        source: '23',
        target: '18'
      },
      {
        source: '23',
        target: '19'
      },
      {
        source: '23',
        target: '20'
      },
      {
        source: '23',
        target: '21'
      },
      {
        source: '23',
        target: '22'
      },
      {
        source: '24',
        target: '11'
      },
      {
        source: '24',
        target: '23'
      },
      {
        source: '25',
        target: '11'
      },
      {
        source: '25',
        target: '23'
      },
      {
        source: '25',
        target: '24'
      },
      {
        source: '26',
        target: '11'
      },
      {
        source: '26',
        target: '16'
      },
      {
        source: '26',
        target: '24'
      },
      {
        source: '26',
        target: '25'
      },
      {
        source: '27',
        target: '11'
      },
      {
        source: '27',
        target: '23'
      },
      {
        source: '27',
        target: '24'
      },
      {
        source: '27',
        target: '25'
      },
      {
        source: '27',
        target: '26'
      },
      {
        source: '28',
        target: '11'
      },
      {
        source: '28',
        target: '27'
      },
      {
        source: '29',
        target: '11'
      },
      {
        source: '29',
        target: '23'
      },
      {
        source: '29',
        target: '27'
      },
      {
        source: '30',
        target: '23'
      },
      {
        source: '31',
        target: '11'
      },
      {
        source: '31',
        target: '23'
      },
      {
        source: '31',
        target: '27'
      },
      {
        source: '31',
        target: '30'
      },
      {
        source: '32',
        target: '11'
      },
      {
        source: '33',
        target: '11'
      },
      {
        source: '33',
        target: '27'
      },
      {
        source: '34',
        target: '11'
      },
      {
        source: '34',
        target: '29'
      },
      {
        source: '35',
        target: '11'
      },
      {
        source: '35',
        target: '29'
      },
      {
        source: '35',
        target: '34'
      },
      {
        source: '36',
        target: '11'
      },
      {
        source: '36',
        target: '29'
      },
      {
        source: '36',
        target: '34'
      },
      {
        source: '36',
        target: '35'
      },
      {
        source: '37',
        target: '11'
      },
      {
        source: '37',
        target: '29'
      },
      {
        source: '37',
        target: '34'
      },
      {
        source: '37',
        target: '35'
      },
      {
        source: '37',
        target: '36'
      },
      {
        source: '38',
        target: '11'
      },
      {
        source: '38',
        target: '29'
      },
      {
        source: '38',
        target: '34'
      },
      {
        source: '38',
        target: '35'
      },
      {
        source: '38',
        target: '36'
      },
      {
        source: '38',
        target: '37'
      },
      {
        source: '39',
        target: '25'
      },
      {
        source: '40',
        target: '25'
      },
      {
        source: '41',
        target: '24'
      },
      {
        source: '41',
        target: '25'
      },
      {
        source: '42',
        target: '24'
      },
      {
        source: '42',
        target: '25'
      },
      {
        source: '42',
        target: '41'
      },
      {
        source: '43',
        target: '11'
      },
      {
        source: '43',
        target: '26'
      },
      {
        source: '43',
        target: '27'
      },
      {
        source: '44',
        target: '11'
      },
      {
        source: '44',
        target: '28'
      },
      {
        source: '45',
        target: '28'
      },
      {
        source: '47',
        target: '46'
      },
      {
        source: '48',
        target: '11'
      },
      {
        source: '48',
        target: '25'
      },
      {
        source: '48',
        target: '27'
      },
      {
        source: '48',
        target: '47'
      },
      {
        source: '49',
        target: '11'
      },
      {
        source: '49',
        target: '26'
      },
      {
        source: '50',
        target: '24'
      },
      {
        source: '50',
        target: '49'
      },
      {
        source: '51',
        target: '11'
      },
      {
        source: '51',
        target: '26'
      },
      {
        source: '51',
        target: '49'
      },
      {
        source: '52',
        target: '39'
      },
      {
        source: '52',
        target: '51'
      },
      {
        source: '53',
        target: '51'
      },
      {
        source: '54',
        target: '26'
      },
      {
        source: '54',
        target: '49'
      },
      {
        source: '54',
        target: '51'
      },
      {
        source: '55',
        target: '11'
      },
      {
        source: '55',
        target: '16'
      },
      {
        source: '55',
        target: '25'
      },
      {
        source: '55',
        target: '26'
      },
      {
        source: '55',
        target: '39'
      },
      {
        source: '55',
        target: '41'
      },
      {
        source: '55',
        target: '48'
      },
      {
        source: '55',
        target: '49'
      },
      {
        source: '55',
        target: '51'
      },
      {
        source: '55',
        target: '54'
      },
      {
        source: '56',
        target: '49'
      },
      {
        source: '56',
        target: '55'
      },
      {
        source: '57',
        target: '41'
      },
      {
        source: '57',
        target: '48'
      },
      {
        source: '57',
        target: '55'
      },
      {
        source: '58',
        target: '11'
      },
      {
        source: '58',
        target: '27'
      },
      {
        source: '58',
        target: '48'
      },
      {
        source: '58',
        target: '55'
      },
      {
        source: '58',
        target: '57'
      },
      {
        source: '59',
        target: '48'
      },
      {
        source: '59',
        target: '55'
      },
      {
        source: '59',
        target: '57'
      },
      {
        source: '59',
        target: '58'
      },
      {
        source: '60',
        target: '48'
      },
      {
        source: '60',
        target: '58'
      },
      {
        source: '60',
        target: '59'
      },
      {
        source: '61',
        target: '48'
      },
      {
        source: '61',
        target: '55'
      },
      {
        source: '61',
        target: '57'
      },
      {
        source: '61',
        target: '58'
      },
      {
        source: '61',
        target: '59'
      },
      {
        source: '61',
        target: '60'
      },
      {
        source: '62',
        target: '41'
      },
      {
        source: '62',
        target: '48'
      },
      {
        source: '62',
        target: '55'
      },
      {
        source: '62',
        target: '57'
      },
      {
        source: '62',
        target: '58'
      },
      {
        source: '62',
        target: '59'
      },
      {
        source: '62',
        target: '60'
      },
      {
        source: '62',
        target: '61'
      },
      {
        source: '63',
        target: '48'
      },
      {
        source: '63',
        target: '55'
      },
      {
        source: '63',
        target: '57'
      },
      {
        source: '63',
        target: '58'
      },
      {
        source: '63',
        target: '59'
      },
      {
        source: '63',
        target: '60'
      },
      {
        source: '63',
        target: '61'
      },
      {
        source: '63',
        target: '62'
      },
      {
        source: '64',
        target: '11'
      },
      {
        source: '64',
        target: '48'
      },
      {
        source: '64',
        target: '55'
      },
      {
        source: '64',
        target: '57'
      },
      {
        source: '64',
        target: '58'
      },
      {
        source: '64',
        target: '59'
      },
      {
        source: '64',
        target: '60'
      },
      {
        source: '64',
        target: '61'
      },
      {
        source: '64',
        target: '62'
      },
      {
        source: '64',
        target: '63'
      },
      {
        source: '65',
        target: '48'
      },
      {
        source: '65',
        target: '55'
      },
      {
        source: '65',
        target: '57'
      },
      {
        source: '65',
        target: '58'
      },
      {
        source: '65',
        target: '59'
      },
      {
        source: '65',
        target: '60'
      },
      {
        source: '65',
        target: '61'
      },
      {
        source: '65',
        target: '62'
      },
      {
        source: '65',
        target: '63'
      },
      {
        source: '65',
        target: '64'
      },
      {
        source: '66',
        target: '48'
      },
      {
        source: '66',
        target: '58'
      },
      {
        source: '66',
        target: '59'
      },
      {
        source: '66',
        target: '60'
      },
      {
        source: '66',
        target: '61'
      },
      {
        source: '66',
        target: '62'
      },
      {
        source: '66',
        target: '63'
      },
      {
        source: '66',
        target: '64'
      },
      {
        source: '66',
        target: '65'
      },
      {
        source: '67',
        target: '57'
      },
      {
        source: '68',
        target: '11'
      },
      {
        source: '68',
        target: '24'
      },
      {
        source: '68',
        target: '25'
      },
      {
        source: '68',
        target: '27'
      },
      {
        source: '68',
        target: '41'
      },
      {
        source: '68',
        target: '48'
      },
      {
        source: '69',
        target: '11'
      },
      {
        source: '69',
        target: '24'
      },
      {
        source: '69',
        target: '25'
      },
      {
        source: '69',
        target: '27'
      },
      {
        source: '69',
        target: '41'
      },
      {
        source: '69',
        target: '48'
      },
      {
        source: '69',
        target: '68'
      },
      {
        source: '70',
        target: '11'
      },
      {
        source: '70',
        target: '24'
      },
      {
        source: '70',
        target: '25'
      },
      {
        source: '70',
        target: '27'
      },
      {
        source: '70',
        target: '41'
      },
      {
        source: '70',
        target: '58'
      },
      {
        source: '70',
        target: '68'
      },
      {
        source: '70',
        target: '69'
      },
      {
        source: '71',
        target: '11'
      },
      {
        source: '71',
        target: '25'
      },
      {
        source: '71',
        target: '27'
      },
      {
        source: '71',
        target: '41'
      },
      {
        source: '71',
        target: '48'
      },
      {
        source: '71',
        target: '68'
      },
      {
        source: '71',
        target: '69'
      },
      {
        source: '71',
        target: '70'
      },
      {
        source: '72',
        target: '11'
      },
      {
        source: '72',
        target: '26'
      },
      {
        source: '72',
        target: '27'
      },
      {
        source: '73',
        target: '48'
      },
      {
        source: '74',
        target: '48'
      },
      {
        source: '74',
        target: '73'
      },
      {
        source: '75',
        target: '25'
      },
      {
        source: '75',
        target: '41'
      },
      {
        source: '75',
        target: '48'
      },
      {
        source: '75',
        target: '68'
      },
      {
        source: '75',
        target: '69'
      },
      {
        source: '75',
        target: '70'
      },
      {
        source: '75',
        target: '71'
      },
      {
        source: '76',
        target: '48'
      },
      {
        source: '76',
        target: '58'
      },
      {
        source: '76',
        target: '62'
      },
      {
        source: '76',
        target: '63'
      },
      {
        source: '76',
        target: '64'
      },
      {
        source: '76',
        target: '65'
      },
      {
        source: '76',
        target: '66'
      }
    ],
    categories: [
      {
        name: 'A'
      },
      {
        name: 'B'
      },
      {
        name: 'C'
      },
      {
        name: 'D'
      },
      {
        name: 'E'
      },
      {
        name: 'F'
      },
      {
        name: 'G'
      },
      {
        name: 'H'
      },
      {
        name: 'I'
      }
    ]
  };

  graph.nodes.forEach((node: GraphNode) => {
    node.label = {
      show: node.symbolSize > 30
    };
  });

  const options: ECOption = {
    title: {
      text: '关系图',
      subtext: '展现节点及节点之间的关系'
    },
    tooltip: {},
    legend: [
      {
        // selectedMode: 'single',
        data: graph.categories.map(a => {
          return a.name;
        })
      }
    ],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  };
  return options;
}

// 仪表盘
const gaugeOptions = ref<ECOption>({
  series: [
    {
      name: 'hour',
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 12,
      splitNumber: 12,
      clockwise: true,
      axisLine: {
        lineStyle: {
          width: 15,
          color: [[1, 'rgba(0,0,0,0.7)']],
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 15
        }
      },
      splitLine: {
        lineStyle: {
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 3,
          shadowOffsetX: 1,
          shadowOffsetY: 2
        }
      },
      axisLabel: {
        fontSize: 50,
        distance: 25,
        formatter(value) {
          if (value === 0) {
            return '';
          }
          return `${value}`;
        }
      },
      anchor: {
        show: true,
        icon: 'path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z',
        showAbove: false,
        offsetCenter: [0, '-35%'],
        size: 120,
        keepAspect: true,
        itemStyle: {
          color: '#707177'
        }
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 12,
        length: '55%',
        offsetCenter: [0, '8%'],
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      detail: {
        show: false
      },
      title: {
        offsetCenter: [0, '30%']
      },
      data: [
        {
          value: 0
        }
      ]
    },
    {
      name: 'minute',
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 60,
      clockwise: true,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 8,
        length: '70%',
        offsetCenter: [0, '8%'],
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      anchor: {
        show: true,
        size: 20,
        showAbove: false,
        itemStyle: {
          borderWidth: 15,
          borderColor: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      detail: {
        show: false
      },
      title: {
        offsetCenter: ['0%', '-40%']
      },
      data: [
        {
          value: 0
        }
      ]
    },
    {
      name: 'second',
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 60,
      animationEasingUpdate: 'bounceOut',
      clockwise: true,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 4,
        length: '85%',
        offsetCenter: [0, '8%'],
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      anchor: {
        show: true,
        size: 15,
        showAbove: true,
        itemStyle: {
          color: '#C0911F',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      detail: {
        show: false
      },
      title: {
        offsetCenter: ['0%', '-40%']
      },
      data: [
        {
          value: 0
        }
      ]
    }
  ]
}) as Ref<ECOption>;

let intervalId: NodeJS.Timer;
const { domRef: gaugeRef } = useEcharts(gaugeOptions, chart => {
  intervalId = setInterval(() => {
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes() + second / 60;
    const hour = (date.getHours() % 12) + minute / 60;

    chart.setOption({
      animationDurationUpdate: 300,
      series: [
        {
          name: 'hour',
          animation: hour !== 0,
          data: [{ value: hour }]
        },
        {
          name: 'minute',
          animation: minute !== 0,
          data: [{ value: minute }]
        },
        {
          animation: second !== 0,
          name: 'second',
          data: [{ value: second }]
        }
      ]
    });
  }, 1000);
});
function clearClock() {
  clearInterval(intervalId);
}

onUnmounted(() => {
  clearClock();
});
</script>

<style scoped></style>
