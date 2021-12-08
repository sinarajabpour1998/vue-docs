const app = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increaseValue(input_num = null) {
            if (input_num == null) { input_num = 1 }
            console.log(input_num)
            this.counter += input_num;
        },
        decreaseValue(input_num = null) {
            if (input_num == null) { input_num = 1 }
            this.counter -= input_num;
        }
    }
});
app.mount('#app');