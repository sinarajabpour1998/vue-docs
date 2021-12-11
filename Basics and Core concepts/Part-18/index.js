const app = Vue.createApp({
    data() {
        return {
            BorderA: false,
            BorderB: false,
            BorderC: false,
        };
    },
    methods: {
        changeBorderColor (area) {
            if (area === 'A') {
                this.BorderA = !this.BorderA;
            } else if (area === 'B') {
                this.BorderB = !this.BorderB;
            }else {
                this.BorderC = !this.BorderC;
            }
        }
    }
});
app.mount('#app');