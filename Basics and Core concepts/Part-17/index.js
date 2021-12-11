const app = Vue.createApp({
    data() {
        return {
            BorderA: false,
        };
    },
    computed: {
        changeBorderClass () {
            return {active: this.BorderA};
        }
    },
    methods: {
        changeBorderColor () {
            this.BorderA = !this.BorderA;
        }
    }
});
app.mount('#app');