<script setup lang="ts">
import TaskCard from "./TaskCard/TaskCard.vue";

const props = defineProps<{
  tasks: string[];
  removeTask: (index: number) => void;
}>();
</script>

<template>
  <div class="w-full" v-for="(task, index) in props.tasks" :key="index">
    <TaskCard
      :task-title="task"
      :index="index"
      :remove-task="props.removeTask"
    />
  </div>
</template>
