<template>
  <div class="h-full">
    <n-space :vertical="true" :size="16">
      <n-card title="GraphQL Composition API" class="h-full shadow-sm rounded-16px">
        <n-space :vertical="true">
          <n-space>
            <n-button @click="getDataSource">刷新数据</n-button>
            <n-button @click="getEmptyDataSource">清空数据</n-button>
          </n-space>
          <loading-empty-wrapper class="h-480px" :loading="loading" :empty="empty">
            <n-data-table :columns="graphqlColums" :data="dataSource" :flex-height="true" class="h-480px" />
          </loading-empty-wrapper>
        </n-space>
      </n-card>
    </n-space>
  </div>
</template>

<script setup lang="tsx">
import { onMounted, ref, toRefs } from 'vue';
import { NSpace, NButton, NPopconfirm } from 'naive-ui';
import type { DataTableColumn } from 'naive-ui';
import { useQuery } from '@vue/apollo-composable';
import { logErrorMessages } from '@vue/apollo-util';
import { useLoadingEmpty } from '@/hooks';
import { ALL_CONTACTS, SEARCH_CONTACTS } from '../../graphql/schemas';

/*
 * 定义表格相关数据结构：数据源接口 DataSource；表格列： graphqlColums；
 */
interface DataSource {
  firstName: string;
  lastName: string;
  email: string;
}

interface SearchOptions {
  id: string;
  limit: number;
}

const graphqlColums: DataTableColumn[] = [
  {
    title: 'id',
    key: 'id',
    align: 'center'
  },
  {
    title: 'FirstName',
    key: 'firstName',
    align: 'center'
  },
  {
    title: 'LastName',
    key: 'lastName',
    align: 'center'
  },
  {
    title: 'Email',
    key: 'email',
    align: 'center'
  },
  {
    key: 'action',
    title: 'Action',
    align: 'center',
    render: () => {
      return (
        <NSpace justify={'center'}>
          <NButton size={'small'} onClick={() => {}}>
            编辑
          </NButton>
          <NPopconfirm onPositiveClick={() => {}}>
            {{
              default: () => '确认删除',
              trigger: () => <NButton size={'small'}>删除</NButton>
            }}
          </NPopconfirm>
        </NSpace>
      );
    }
  }
];
const dataSource = ref<DataSource[]>([]);

// 加载状态及清空
const { startLoading, endLoading, empty, setEmpty } = useLoadingEmpty();

// 定义prop，传入Graphql 搜索选项
// const prop = defineProps<{
//   searchOptions: Record<string, any>  // Record<string, any> 类型为：key为string类型，value为任意类型的索引类型；替代object来用，更加语义化
// }>()

const prop = defineProps<{
  searchOptions: SearchOptions;
}>();

const { searchOptions } = toRefs(prop);

const { result: resultById, onResult } = useQuery(SEARCH_CONTACTS, searchOptions);

onResult(() => {
  if (resultById && resultById.value) {
    if (resultById.value.contacts.length !== 0) {
      dataSource.value = resultById.value.contacts;
    }
  }

  if (resultById && resultById.value) {
    if (resultById.value.contacts.length === 0) {
      dataSource.value = createDataSource();
    }
  }
});

// 查询Graphql
const {
  result: allContacts,
  loading,
  onError,
  onResult: onAllResult
} = useQuery(ALL_CONTACTS, { fetchPolicy: 'cache-and-network' });

onError(error => {
  logErrorMessages(error);
});

onAllResult(() => {
  getDataSource();
});

function createDataSource(): DataSource[] {
  if (allContacts && allContacts.value) {
    return allContacts.value.contacts;
  }
  return [];
}

function getDataSource() {
  startLoading();
  setTimeout(() => {
    dataSource.value = createDataSource();
    endLoading();
    setEmpty(!dataSource.value.length);
  }, 1000);
}

function getEmptyDataSource() {
  startLoading();
  setTimeout(() => {
    dataSource.value = [];
    endLoading();
    setEmpty(!dataSource.value.length);
  }, 1000);
}

onMounted(() => {
  getDataSource();
});
</script>

<style scoped></style>
