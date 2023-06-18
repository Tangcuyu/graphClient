<template>
  <div class="h-full">
    <n-space :vertical="true" :size="16">
      <n-card title="GraphQL Composition API" class="h-full shadow-sm rounded-16px">
        <n-space :vertical="true">
          <n-space>
            <n-button @click="getDataSource">刷新数据</n-button>
            <n-button @click="getEmptyDataSource">清空前端显示的数据</n-button>
          </n-space>
          <loading-empty-wrapper class="h-480px" :loading="loading" :empty="empty">
            <n-data-table
              :columns="graphqlColums"
              :data="dataSource"
              :flex-height="true"
              :pagination="pagination"
              class="h-480px"
            />
          </loading-empty-wrapper>
        </n-space>
      </n-card>
    </n-space>
  </div>
</template>

<script setup lang="tsx">
import { onMounted, ref, toRefs, computed } from 'vue';
import { NSpace, NButton, NPopconfirm } from 'naive-ui';
import type { DataTableColumn } from 'naive-ui';
import { useQuery, useMutation } from '@vue/apollo-composable';
import { logErrorMessages } from '@vue/apollo-util';
import { useLoadingEmpty } from '@/hooks';
import { ALL_CONTACTS, DEL_CONTACT, SEARCH_CONTACTS } from '../../graphql/schemas';
// import { ApolloCache } from "@apollo/client/core";

/*
 * 定义表格相关数据结构：数据源接口 DataSource；表格列： graphqlColums；
 */
interface DataSource {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface SearchOptions {
  id: string;
  limit: number;
}
const dataSource = ref<DataSource[]>([]);

const pagination = {
  pageSize: 5
};

/*
 * 删除操作：Graphql Mutation
 */
const { mutate: deleteById, onError: onDelError } = useMutation(DEL_CONTACT, () => ({
  fetchPolicy: 'network-only'
}));

onDelError(error => {
  if (process.env.NODE_ENV !== 'production') {
    logErrorMessages(error);
  }
});

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
    render: (row, index) => {
      return (
        <NSpace justify={'center'}>
          <NButton size={'small'} onClick={() => {}}>
            编辑
          </NButton>
          <NPopconfirm
            onPositiveClick={async () => {
              await deleteById({ id: dataSource.value[index].id });
              await getDataSource();
            }}
          >
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

/*
 * 加载状态及清空
 */
const { startLoading, endLoading, empty, setEmpty } = useLoadingEmpty();

/*
 * 查询ALL
 */
const { result: allContacts, loading, onError, refetch } = useQuery(ALL_CONTACTS, { fetchPolicy: 'cache-and-network' });

onError(error => {
  if (process.env.NODE_ENV !== 'production') {
    logErrorMessages(error);
  }
});

const contacts = computed(() => allContacts.value?.contacts ?? []);

/*
 * 定义查询byId
 */
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
      dataSource.value = contacts.value;
    }
  }
});

/*
 * 私有方法
 */

//  function createDataSource(): DataSource[] {
//   if (allContacts && allContacts.value) {
//     return allContacts.value.contacts
//   } else {
//     await refetch()
//     return []
//   }
// }

async function getDataSource() {
  await refetch();
  if (allContacts && allContacts.value) {
    startLoading();
    setTimeout(() => {
      dataSource.value = allContacts.value.contacts;
      endLoading();
      setEmpty(!dataSource.value.length);
    }, 0);
  }
}

function getEmptyDataSource() {
  startLoading();
  setTimeout(() => {
    dataSource.value = [];
    endLoading();
    setEmpty(!dataSource.value.length);
  }, 0);
}

onMounted(() => {
  getDataSource();
});
</script>

<style scoped></style>
