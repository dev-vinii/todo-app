<script setup lang="ts">
import { Check, Trash2 } from "lucide-vue-next";

const props = defineProps<{
  taskTitle: string;
  index: number;
  removeTask: (index: number) => void;
}>();
</script>

<template>
  <div class="flex w-full">
    <div
      class="flex h-[75px] flex-1 items-center justify-between rounded-lg bg-[#acf4d9] px-4 shadow-lg"
    >
      <span>{{ props.taskTitle }}</span>
      <div class="flex cursor-pointer gap-4">
        <Check />
        <Trash2 @click="props.removeTask(index)" />
      </div>
    </div>
  </div>
</template>
