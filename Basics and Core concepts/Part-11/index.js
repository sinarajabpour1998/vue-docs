const app = Vue.createApp({
    data() {
        return {
            fullName: '',
            data: ''
        };
    },
    methods: {
        submitForm() {
            this.data = 'Your full name is ' + this.fullName;
        },
        resetForm() {
            this.fullName = '';
            this.data = '-';
        }
    }
});
app.mount('#app');