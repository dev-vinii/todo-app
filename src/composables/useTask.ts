import { ref } from "vue";

const tasks = ref<string[]>([]);
const donetasks = ref<string[]>([]);

export function useTask() {
  const addTasks = (todo: string) => {
    if (todo === "") {
      alert("Escreva uma tarefa antes de adicionar");
      return;
    }
    tasks.value = [...tasks.value, todo];
  };

  const removeTask = (index: number) => {
    tasks.value = tasks.value.filter((_, i) => i !== index);
  };

  const addDoneTask = (index: number) => {
    donetasks.value = [...donetasks.value, tasks.value[index]];
    tasks.value = tasks.value.filter((_, i) => i !== index);
  };

  return {
    tasks,
    donetasks,
    addTasks,
    removeTask,
    addDoneTask,
  };
}
