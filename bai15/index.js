Vue.component('child', {
    template: '<div class="children">' +
        '<h2>This is children component</h2>' +
        '<slot><slot>' +
        '</div>'
})

new Vue({
    el: '#app'
})