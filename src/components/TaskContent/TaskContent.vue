<script setup lang="ts">
import TaskInput from "./TaskInput/TaskInput.vue";
import TaskSection from "./TaskSection/TaskSection.vue";
import { useTask } from "@/composables/useTask";

const { tasks, donetasks } = useTask();
</script>

<template>
  <div
    class="flex h-4/6 w-[600px] flex-col items-center gap-10 rounded-xl bg-[#42B883] p-10 shadow-lg"
  >
    <TaskInput />

    <div class="w-full overflow-auto pr-10">
      <TaskSection :tasks="tasks" title="To-Do" />
      <TaskSection :tasks="donetasks" title="Done" isDoneList />
    </div>
  </div>
</template>
