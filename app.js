const app = Vue.createApp({
    data() {
        return {
            entaredTask: '',
            tasks: [],
            tasksVisibility: true
        };
    },
    computed: {
        buttonCaption() {
            return this.tasksVisibility ? 'Hide List' : 'Show List';
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        visibilityOfTasks(){
            this.tasksVisibility = !this.tasksVisibility;
        }
    },
});

app.mount('#assignment');