const app = Vue.createApp({
    data() {
        return {
            counter: 6
        };
    },
    methods: {
        addToCounter () {
            this.counter ++;
        }
    }
});
app.mount('#app');