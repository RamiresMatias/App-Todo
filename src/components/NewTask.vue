<template>
  <div class="new-task">
    <input
      type="text"
      v-model="name"
      @keydown.enter="add"
      class="form-element"
      placeholder="Digite sua tarefa"
    />
    <button @click="add" class="form-element">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      this.$emit("taskAdd", { name: this.name });
      this.name = "";
    },
  },
};
</script>

<style>
.new-task {
  margin: 35px;
}
.form-element {
  outline: none;
  font-size: 2em;
  border: 1px solid #fff;
  padding: 5px 10px 8px;
  color: #fff;
}

input.form-element {
  width: 500px;
  background-color: #fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

button.form-element {
  border-left: none;
  background-color: #2196f3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

@media screen and (max-width: 630px) {
  input.form-element {
    width: 300px;
  }
}

@media screen and (max-width: 438px) {
  input.form-element {
    width: 250px;
  }
}

@media screen and (max-width: 383px) {
  input.form-element {
    width: 200px;
  }
  .form-element {
    font-size: 1.5em;
  }
}

@media screen and (max-width: 330px) {
  input.form-element {
    width: 180px;
  }
  .form-element {
    font-size: 1.5em;
  }
}
</style>