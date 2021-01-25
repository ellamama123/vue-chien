var mixin = {
    methods: {
        test1: function() {
            console.log('Function test1')
        },
        test2: function() {
            console.log('Function test2')
        }
    }
}

var mixi = new Vue({
    mixins: [mixin],
    methods: {
        test1: function() {
            console.log('Function test1')
        },
        test2: function() {
            console.log('Function test2')
        }
    }
})

mixi.test1()
mixi.test2()