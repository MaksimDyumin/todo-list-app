<script setup lang="ts">
  import {useTasksStore} from '@/stores/task'
  import TasksList from '@/components/TasksList.vue'
  import TaskFilter from '@/components/TaskFilter.vue'
  import { onMounted } from 'vue';

  const TasksStore = useTasksStore()
  onMounted(() => {
    TasksStore.getTasks()
  })

</script>

<template>
  <main class="main-container">
    <TaskFilter/>
    <TasksList />
  </main>
</template>

<style>
.main-container{
  margin-top: 70px;
}
</style>
