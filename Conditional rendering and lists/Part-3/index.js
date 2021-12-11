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
        }
    }
});
app.mount('#app');