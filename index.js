console.log('STARTED GAME');

const app = require('express')();
const PORT = 8080; // setting it here

const carc_component ={
    data() {
        return {
            cnt : 0
        };
    },
    methods: {
        increment()
        {
            this.cnt += 1;
        },
        reset()
        {
            this.cnt = 0;
        }
    }
};

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/tshirt')

const carc = Vue.createApp(carc_component).mount('#carc');