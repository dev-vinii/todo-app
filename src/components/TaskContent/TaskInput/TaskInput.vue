<script setup lang="ts">
import { Plus } from "lucide-vue-next";
import { useTask } from "../../../composables/useTask";
import { ref } from "vue";

const taskInput = ref<string>("");

const { addTasks } = useTask();
</script>

<template>
  <div class="flex w-full items-center gap-2">
    <input
      type="text"
      class="h-10 w-full rounded-md p-3"
      v-model="taskInput"
      @keydown.enter="
        () => {
          addTasks(taskInput);
          taskInput = '';
        }
      "
    />
    <div
      class="h-full cursor-pointer rounded-lg bg-white p-1 transition duration-200 hover:opacity-90"
      @click="
        () => {
          addTasks(taskInput);
          taskInput = '';
        }
      "
    >
      <Plus :size="32" :stroke-width="2" />
    </div>
  </div>
</template>
