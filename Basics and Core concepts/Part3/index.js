const app = Vue.createApp({
    methods: {
        testOutput() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return "It's down !";
            }else {
                return "It's up !";
            }
        }
    }
});
app.mount('#app');