<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task
        v-for="(task, i) in tasks"
        :key="task.name"
        :task="task"
        @taskDeleted="$emit('taskDeleted', i)"
        @changeStateTask="$emit('changeStateTask', i)"
      ></Task>
    </template>
    <p class="no-task" v-else>Sua vida está em dias</p>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true },
  },
};
</script>

<style>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.task-grid .task {
  margin: 10px;
}

.no-task {
  color: #aaa;
  font-size: 1.7em;
}
</style>