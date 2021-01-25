var obj = {
    foo: 'bar'
}

// Chúng ta khởi tạo một object "data"
var data = { a: 1 }

// Object này được truyền vào một đối tượng Vue
var vm = new Vue({
    data: data
})

// Truy xuất đến thuộc tính của đối tượng 
// trả về giá trị của object "data" đã khởi tạo 
vm.a == data.a // => true

// Thay đổi thuộc tính của vm cũng
// ảnh hưởng đến dữ liệu ban đầu
vm.a = 2
data.a // => 2

// ... và ngược lại
data.a = 3
vm.a // => 3