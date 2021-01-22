var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})

var ex3 = new Vue({
    el: '#example-3',
    methods: {
        say: function(message) {
            alert(message)
        }
    }
})