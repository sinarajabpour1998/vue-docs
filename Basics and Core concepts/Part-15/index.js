const app = Vue.createApp({
    data() {
        return {
            color: 'aquamarine'
        };
    },
    methods: {
        changeBorderColor () {
            if (this.color === 'aquamarine') {
                this.color = 'red';
            }else {
                this.color = 'aquamarine';
            }
        }
    }
});
app.mount('#app');