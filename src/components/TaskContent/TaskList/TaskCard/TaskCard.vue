<script setup lang="ts">
import { useTask } from "@/composables/useTask";
import { Check, Trash2 } from "lucide-vue-next";

const props = defineProps<{
  taskTitle: string;
  index: number;
  isDoneList?: boolean;
}>();

const { removeTask, addDoneTask, removeDoneTask } = useTask();
</script>

<template>
  <div class="flex w-full">
    <div
      class="flex h-[75px] flex-1 items-center justify-between rounded-lg bg-[#acf4d9] px-4 shadow-lg"
    >
      <span>{{ props.taskTitle }}</span>
      <div class="flex cursor-pointer gap-4">
        <Check @click="addDoneTask(index)" v-if="!isDoneList" />
        <Trash2
          @click="
            () => {
              if (isDoneList) {
                removeDoneTask(index);
              } else {
                removeTask(index);
              }
            }
          "
        />
      </div>
    </div>
  </div>
</template>
