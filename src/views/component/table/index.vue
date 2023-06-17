<template>
  <div class="h-full">
    <search-bar @searchevent="search"></search-bar>
    <contacts-list :search-options="searchOptions"></contacts-list>
  </div>
</template>

<script setup lang="tsx">
import { reactive } from 'vue';
import SearchBar from '../../../components/common/search-bar.vue';
import ContactsList from '../../../components/graph/contacts-list.vue';

interface SearchOptions {
  id: string;
  limit: number;
}

const searchOptions: SearchOptions = reactive({
  id: '',
  limit: 10
});

const search = (id: string) => {
  searchOptions.id = trim(id);
};

function trim(str: string) {
  const reg = /^\s+|\s+$/g;
  return str.replace(reg, '');
}
</script>

<style scoped></style>
