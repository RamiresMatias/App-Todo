<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TaskProgress :progress="progress" />
    <NewTask @taskAdd="addTask" />
    <TaskGrid
      :tasks="tasks"
      @taskDeleted="deleteTask"
      @changeStateTask="taskChanged"
    />
  </div>
</template>

<script>
import TaskProgress from "./components/TaskProgress.vue";
import TaskGrid from "./components/TasksGrid.vue";
import NewTask from "./components/NewTask.vue";
export default {
  components: { TaskGrid, NewTask, TaskProgress },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    /* Atributo da propriedade de progress bar */
    progress() {
      let total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  watch: {
    /* Por padrão, o watch não está detectando as mudanças acontecidas dentro dos objetos do array. Portanto n hora de recarregar a página ele está voltando os estados da task para false. Para que o problema seja resolvido é setando o atributo deep como true, para ele fazer um monitoramento mais profundo, monitorando não só o estado interno da task como as alterações no array */
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  methods: {
    /* Método para adicionar a task, com base no evento emitido */
    addTask(task) {
      const sameName = (t) => t.name === task.name;
      const reallyNew = this.tasks.filter(sameName).length == 0;
      if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
      }
    },

    /* Método pára deletar task */
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },

    /* Método para alterar o estado da task com base no click */
    taskChanged(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },

  /* Quando o componente é criado, ele traz todos os registros de localStorage */
  created() {
    const json = localStorage.getItem("tasks");
    this.tasks = JSON.parse(json) || [];
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
