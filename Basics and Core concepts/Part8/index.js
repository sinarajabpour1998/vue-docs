const app = Vue.createApp({
    data() {
        return {
            name: ''
        };
    },
    methods: {
        setFullName(event) {
            this.name = event.target.value;
        }
    }
});
app.mount('#app');