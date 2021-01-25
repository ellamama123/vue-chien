Vue.component('my-list', {
    template: "<li>{{message}}</li>",
    props: ['message']


});
new Vue({
    el: "#app-component",
    data() {
        return {
            title: "Xin chào bạn đến với Vuejs",
        }
    }

});