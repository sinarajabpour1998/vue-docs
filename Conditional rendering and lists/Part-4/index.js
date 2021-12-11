const app = Vue.createApp({
    data() {
        return {
            user: '',
            users: []
        };
    },
    methods: {
        addUser() {
            this.users.push(this.user);
            this.user = '';
        }
    }
});
app.mount('#app');