<script setup lang="ts">
import { ref } from 'vue';
import { useTasksStore } from '@/stores/task';
import type { FilterOption } from './components.types';

const tasksStore = useTasksStore()
const activeFilter = ref<number | null>(null);

const filterOptions: Array<FilterOption> = [
  {
    id: 1,
    name: 'Все задачи',
  },
  {
    id: 2,
    name: 'Сделанные',
  },
  {
    id: 3,
    name: 'Не сделанные',
  },
]

const setActiveFilter = (filterId: number) => {
  activeFilter.value = filterId;
  if (filterId === 1) {
    tasksStore.allTasks()
  } else if (filterId === 2) {
    tasksStore.doneTasks()
  } else if(filterId === 3) {
    tasksStore.notDoneTasks()
  }
  // console.log() 
  // tasksStore.getTasks()
};
</script>

<template>
  <div class="tasks-filter">
    <div 
      v-for="option in filterOptions" :key="option.id" 
      class="task-filter-option"
    >
      <button 
        :class="{ 'filter-button': true, 'active': option.id === activeFilter }"
        @click="setActiveFilter(option.id)"
      >
        {{ option.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.tasks-filter {
  display: flex;
}

.task-filter-option {
  margin-bottom: 10px;
}

.filter-button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.filter-button:hover:not(.active) {
  background-color: #2980b9;
}

.active {
  background-color: #2ecc71;
  /* Add any additional styling for the active state if needed */
}
</style>