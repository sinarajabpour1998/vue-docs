const app = Vue.createApp({
    data() {
        return {
            user: '',
            users: [],
            tests: {'name': 'ali', 'age': 26, 'job': 'IT'}
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