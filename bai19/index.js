MyPlugin.install = function(Vue,options){
    Vue.global = function()
    {
        console.log('abc')
    }
}
Vue.use(MyPlugin)
