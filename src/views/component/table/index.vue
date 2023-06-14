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
            <!-- <ApolloMutation :mutation="(gql: any) => gql`
              mutation deleteContact ($id: ID) {
                deleteContacts(where: {id: $id}) {
                  bookmark
                  nodesDeleted
                  relationshipsDeleted
                }
              }
            `" :variables="{ id }"> -->
            <n-card title="GraphQL CRUD" class="h-full shadow-sm rounded-16px">
              <n-space :vertical="true">
                <loading-empty-wrapper class="h-480px" :loading="loading" :empty="empty">
                  <n-data-table :columns="graphqlColums" :data="data.contacts" :flex-height="true" class="h-480px" />
                </loading-empty-wrapper>
              </n-space>
            </n-card>
            <!-- </ApolloMutation> -->
          </div>
          <!-- No result -->
          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </ApolloQuery>
      <n-card title="表格" class="h-full shadow-sm rounded-16px">
        <n-space :vertical="true">
          <n-space>
            <n-button @click="getDataSource">有数据</n-button>
            <n-button @click="getEmptyDataSource">空数据</n-button>
          </n-space>
          <loading-empty-wrapper class="h-480px" :loading="loading" :empty="empty">
            <n-data-table :columns="columns" :data="dataSource" :flex-height="true" class="h-480px" />
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
import { useLoadingEmpty } from '@/hooks';
import { getRandomInteger } from '@/utils';
// import gql from "graphql-tag";
// import { useQuery } from '@vue/apollo-composable'

interface DataSource {
  name: string;
  age: number;
  address: string;
}
let id: string;
const { loading, startLoading, endLoading, empty, setEmpty } = useLoadingEmpty();

const columns: DataTableColumn[] = [
  {
    title: 'Name',
    key: 'name',
    align: 'center'
  },
  {
    title: 'Age',
    key: 'age',
    align: 'center'
  },
  {
    title: 'Address',
    key: 'address',
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

function createDataSource(): DataSource[] {
  return Array(100)
    .fill(1)
    .map((_item, index) => {
      return {
        name: `Name${index}`,
        age: getRandomInteger(30, 20),
        address: '中国'
      };
    });
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
