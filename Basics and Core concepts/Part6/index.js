const app = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increaseValue() {
            this.counter ++;
        },
        decreaseValue() {
            this.counter --;
        }
    }
});
app.mount('#app');