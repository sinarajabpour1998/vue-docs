const app = Vue.createApp({
    data() {
        return {
            BorderA: false,
            BorderB: false,
            BorderC: false
        };
    },
    computed: {
        changeBorderClass (area) {
            if (area === 'A') {
                return '{active: this.BorderA}';
            } else if (area === 'B') {
                return '{active: this.BorderB}';
            }else {
                return '{active: this.BorderC}';
            }
        }
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