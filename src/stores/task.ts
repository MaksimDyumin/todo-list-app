import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import type { Task } from '@/stores/store.types'

async function sleep(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

export const useTasksStore = defineStore('tasks', () => {
  const tasks: Ref<Array<Task>> = ref([])
  const taskBuff: Ref<Array<Task>> = ref([])
  const isLoaded: Ref< boolean> = ref(true)

  const allTasks = async () => {
    isLoaded.value = false
    await sleep(300)
    taskBuff.value = tasks.value
    isLoaded.value = true
  }

  const doneTasks = async () => {
    isLoaded.value = false
    await sleep(300)
    let res = []
    taskBuff.value = tasks.value
    res = taskBuff.value.filter((value, index, array) => {
      if (value.completed) {
        return value
      }
    })
    taskBuff.value = res
    isLoaded.value = true
  }

  const notDoneTasks = async () => {
    isLoaded.value = false
    await sleep(300)
    taskBuff.value = tasks.value
    const res = taskBuff.value.filter((value, index, array) => {
      if (!value.completed) {
        return value
      }
    })
    taskBuff.value = res
    isLoaded.value = true
  }


  async function getTasks() {
    isLoaded.value = false
    await sleep(300)
    const response = await axios.get('https://dummyjson.com/todos')

    tasks.value = response.data.todos
    taskBuff.value = response.data.todos
    isLoaded.value = true
  }

  return { tasks, taskBuff, getTasks, allTasks, doneTasks, notDoneTasks, isLoaded }
})
