// Định nghĩa một component với tên là "button-counter"
Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>'
})
new Vue({ el: '#components-demo' })


Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})
new Vue({ el: '#blog-post' })

Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text')">
            Phóng to
        </button>
        <div v-html="post.content"></div>
      </div>`
})

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title: 'Id thứ nhất' },
            { id: 2, title: 'Id thứ hai' },
            { id: 3, title: 'Id thứ ba' }
        ],
        postFontSize: 1
    }
})

Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
  })`
})

new Vue({ el: '#alert' })