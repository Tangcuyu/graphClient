<template>
  <div class="h-full">
    <n-space :vertical="true" :size="16">
      <ApolloQuery
        :query="(gql: any) => gql`
        query ($id: ID){
          contacts(where: {id: $id}) {
            id
            firstName
            lastName
            email
          }
        } 
      `"
        :variables="{ id }"
      >
        <template #default="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">An error occurred</div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">
            <n-card title="GraphQL Component" class="h-full shadow-sm rounded-16px">
              <n-space :vertical="true">
                <loading-empty-wrapper class="h-480px" :loading="loading" :empty="empty">
                  <n-data-table :columns="graphqlColums" :data="data.contacts" :flex-height="true" class="h-480px" />
                </loading-empty-wrapper>
              </n-space>
            </n-card>
          </div>
          <!-- No result -->
          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </ApolloQuery>
      <n-card title="GraphQL Composition API" class="h-full shadow-sm rounded-16px">
        <n-space :vertical="true">
          <n-space>
            <n-button @click="getDataSource">获取数据</n-button>
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
import { onMounted, ref } from 'vue';
import { NSpace, NButton, NPopconfirm } from 'naive-ui';
import type { DataTableColumn } from 'naive-ui';
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { useLoadingEmpty } from '@/hooks';

interface DataSource {
  firstName: string;
  lastName: string;
  email: string;
}
let id: string;
const { loading, startLoading, endLoading, empty, setEmpty } = useLoadingEmpty();

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
        // <template v-slot="{ mutate, loading, error }">
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
        // </template>
      );
    }
  }
];

const dataSource = ref<DataSource[]>([]);

const { result } = useQuery(gql`
  query ($id: ID) {
    contacts(where: { id: $id }) {
      id
      firstName
      lastName
      email
    }
  }
`);

function createDataSource(): DataSource[] {
  return result.value.contacts;
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
