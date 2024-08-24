<script setup lang="ts">
import { defineProps } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUp } from "lucide-vue-next";
import TaskList from "../TaskList/TaskList.vue";

const props = defineProps<{
  title: string;
  tasks: string[];
  removeTask: (index: number) => void;
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
    <DisclosurePanel class="w-full">
      <TaskList :tasks="props.tasks" :removeTask="props.removeTask" />
    </DisclosurePanel>
  </Disclosure>
</template>
