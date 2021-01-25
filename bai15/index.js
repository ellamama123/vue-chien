Vue.component('child', {
    template: '<div class="children">' +
        '<h2>Đây là compoment con</h2>' +
        '<slot><slot>' +
        '</div>'
})

new Vue({
    el: '#app'
})