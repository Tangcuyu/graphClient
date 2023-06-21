<template>
  <n-card :bordered="false" class="rounded-16px shadow-sm">
    <Graphin :data="state.data" :layout="state.layout"></Graphin>
  </n-card>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
// import { useAuthStore } from "@/store";
import type { GraphinData } from '@antv/graphin';
import Graphin, { Utils } from 'antv-graphin-vue';
// const { DragCanvas, ZoomCanvas, DragNode, ResizeCanvas } = Behaviors;
// const { MiniMap } = Components;

defineOptions({ name: 'DashboardWorkbenchHeader' });

// const auth = useAuthStore();

// interface StatisticData {
//   id: number;
//   label: string;
//   value: string;
// }

interface GraphConfig {
  data: GraphinData;
  layout: {
    type: string;
  };
}

// const statisticData: StatisticData[] = [
//   {
//     id: 0,
//     label: "项目数",
//     value: "25",
//   },
//   {
//     id: 1,
//     label: "待办",
//     value: "4/16",
//   },
//   {
//     id: 2,
//     label: "消息",
//     value: "12",
//   },
// ];

const state: GraphConfig = reactive({
  data: {
    nodes: [],
    edges: []
  },
  layout: {
    type: 'force'
  }
});

onMounted(() => {
  state.data = Utils.mock(10).circle().graphin();
});
</script>

<style scoped></style>
