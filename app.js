let app = Vue.createApp({
    data(){
        return{
            title:'Hello Vue JS',
        };
    }
});
app.mount('.app');

let main_app = Vue.createApp({
    data(){
        return{
            message:'Hello Saikat',
        }
    }
});
main_app.mount('#app');