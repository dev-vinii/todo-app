<script setup lang="ts">
import TaskCard from "./TaskCard/TaskCard.vue";

const { tasks, isDoneList } = defineProps<{
  tasks: string[];
  isDoneList?: boolean;
}>();
</script>

<template>
  <div class="w-full" v-for="(task, index) in tasks" :key="index">
    <TaskCard :task-title="task" :index="index" :is-done-list="isDoneList" />
  </div>
</template>
