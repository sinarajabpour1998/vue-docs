const app = Vue.createApp({
    data() {
        return {
            first: "It's down !",
            second: "It's up !"
        };
    }
    , methods: {
        testOutput() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.first;
            }else {
                return this.second;
            }
        }
    }
});
app.mount('#app');