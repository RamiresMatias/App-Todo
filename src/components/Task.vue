<template>
  <div class="task" :class="stateClass" @click="$emit('changeStateTask', task)">
    <!-- Ao utilizar click.stop , não será propagado o evento de click. Pois sem o stop, ele exclui a task e tentar alterar o stado, mesmo após excluído, gerando um erro-->
    <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true },
  },
  computed: {
    stateClass() {
      return {
        /* Propriedade computada com base no estado da task, ao clicar ele altera o estado e aplica a classe a ela relacionado */
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>

<style>
.task {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2em;
  font-weight: 300;
  cursor: pointer;
  -webkit-user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pending {
  border-left: 12px solid #b73229;
  background-color: #f44336;
}

.done {
  color: #ddd;
  border-left: 12px solid #0a8f08;
  background-color: #4caf50;
  text-decoration: line-through;
}

.pending .close {
  background-color: #b73229;
}

.done .close {
  background-color: #0a8f08;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  text-align: center;
}

@media screen and (max-width: 438px) {
  .task {
    width: 280px;
  }
}
@media screen and (max-width: 383px) {
  .task {
    width: 240px;
  }
}
</style>