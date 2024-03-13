<script setup lang="ts">
import { useTasksStore } from '@/stores/task';

const tasksStore = useTasksStore()
</script>

<template>
  <transition mode="out-in">
    <div v-if="tasksStore.isLoaded" class="tasks-list">
      <div v-for="task in tasksStore.taskBuff" :key="task.id" class="task-card">
        <span class="task-name">{{ task.todo }}</span>
        <input type="checkbox" :checked="task.completed" class="task-checkbox">
      </div>
    </div>
  </transition>
</template>

<style scoped>
.tasks-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.task-card {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  margin: 10px;
  width: calc(33.33% - 20px);
  /* Adjust the width as needed */
  box-sizing: border-box;
}

.task-card:hover {
  transform: translateY(-5px);
}

.task-name {
  font-weight: bold;
  padding: 15px;
  margin: 0;
  border-bottom: 1px solid #ddd;
}

.task-checkbox {
  margin: 10px;
  /* Add any additional styling for the checkbox if needed */
}
</style>
