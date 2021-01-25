var vm = new Vue({
    el: '#example',
    data: {
        message: 'người đông bến đợi thuyền xuôi ngược'
    },
    computed: {
        // một computed getter
        reversedMessage: function() {
            // `this` trỏ tới đối tượng vm
            return this.message.split(' ').reverse().join(' ')
        }
    }
})


var app = new Vue({
    el: '#app',
    data: {
        name: 'Nguyen Dinh Chien'
    },
    watch: {
        name: function() {
            alert(this.name);
        }
    }
});
//thiết lập lại giá trị
app.name = "Xin chào mọi người";