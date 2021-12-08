const app = Vue.createApp({
    data() {
        return {
            data: ''
        };
    },
    methods: {
        submitPersonalForm() {
            this.data = "You have been submitted the form !";
        },
        leftClickAction() {
            this.data = "Left clicked";
        },
        rightClickAction() {
            this.data = "Right clicked";
        },
        middleClickAction() {
            this.data = "Middle clicked";
        },
        actionOnEnter() {
            this.data = "Keyup.enter pressed !";
        }
    }
});
app.mount('#app');