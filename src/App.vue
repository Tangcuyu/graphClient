<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-full"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { dateZhCN, zhCN } from 'naive-ui';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { subscribeStore, useThemeStore } from '@/store';
import { useGlobalEvents } from '@/composables';
import { apolloClient } from './apollo.provider';

provide(DefaultApolloClient, apolloClient);

const theme = useThemeStore();

subscribeStore();
useGlobalEvents();
</script>

<style scoped></style>
