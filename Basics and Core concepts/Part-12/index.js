const app = Vue.createApp({
    data() {
        return {
            name: '',
            last_name: '',
            data: ''
        };
    },
    computed: {
        fullName() {
            return 'Your full name is: ' + this.name + ' ' + this.last_name;
        }
    }
});
app.mount('#app');