var app = new Vue({
    el: '#app',
    data: {
        name: 'ký tự sẽ viết hoa',
    },
    filters: {
        afterChange: function(value) {
            return value.toUpperCase();
        }
    }
});