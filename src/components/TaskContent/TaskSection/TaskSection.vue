<script setup lang="ts">
import { defineProps } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUp } from "lucide-vue-next";
import TaskList from "../TaskList/TaskList.vue";

const { title, tasks, isDoneList } = defineProps<{
  title: string;
  tasks: string[];
  isDoneList?: boolean;
}>();
</script>

<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton class="flex w-full justify-between p-5 font-bold">
      {{ title }}
      <span class="transition duration-300" :class="open ? 'rotate-180' : ''">
        <ChevronUp />
      </span>
    </DisclosureButton>
    <DisclosurePanel class="animate-slide-down flex w-full flex-col gap-2">
      <TaskList :tasks="tasks" :isDoneList="isDoneList" />
    </DisclosurePanel>
  </Disclosure>
</template>
