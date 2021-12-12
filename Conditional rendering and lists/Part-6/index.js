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
        },
        removeUser(index) {
            this.users.splice(index, 1);
        }
    }
});
app.mount('#app');