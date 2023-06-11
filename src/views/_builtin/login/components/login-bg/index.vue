<template>
  <div :style="{ backgroundColor: bgColor }"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useThemeStore } from '@/store';
import { getColorPalette } from '@/utils';

interface Props {
  /** 主题颜色 */
  themeColor: string;
}
const theme = useThemeStore();

const props = defineProps<Props>();

const lightColor = computed(() => getColorPalette(props.themeColor, 1));
const darkColor = computed(() => getColorPalette(props.themeColor, 6));

const bgColor = theme.darkMode ? darkColor : lightColor;
</script>

<style scoped></style>
