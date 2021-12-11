const app = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    watch: {
        counter(value) {
            if (value > 50){
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 2000);
            }
        }
    },
    methods: {
        increaseCounter() {
            this.counter += 10;
        },
        decreaseCounter() {
            this.counter --;
        }
    }
});
app.mount('#app');