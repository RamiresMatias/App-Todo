import Vue from "vue";
export default new Vue({
    methods: {
        changeTaskState(task) {
            this.$emit("changeStateTask", task);
        }
    }
})