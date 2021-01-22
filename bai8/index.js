var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { name: 'Cà phê' },
            { name: 'Trà đặc' },
            { name: 'Bò húc' }
        ]
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { name: 'Cà phê' },
            { name: 'Trà đặc' },
            { name: 'Bò húc' }
        ]
    }
})

var example3 = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            'họ': 'Bành',
            'tên': 'Tổ',
            'tuổi': 800
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        student: [
            { name: 'Vũ Thanh Tài' },
            { name: 'Trần Như Nhộng' },
            { age: 22 },
            { name: 'Nguyễn Văn B' },
        ]
    }
});