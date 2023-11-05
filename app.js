const app =Vue.createApp({
    data(){
        return{
            userinfo:{
                name:'saikat mondal',
                age:23,
                profession:'software developer',
                github:'https://github.com/codingbysaikat',
            },
            count:0,
        }
    },
    methods:{
        getCurrentTime(){
            let date = new Date();
            return date;
        },
        increase(){
            this.count++;

        }

    }
});
app.mount('#app')