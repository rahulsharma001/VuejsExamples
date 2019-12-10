Vue.component('task-list', {
    template: '<task></task>'
})

Vue.component('task', {
    template: `<ul>
                    <li>Hey</li>
                </ul>`
})

new Vue({
    el: '#app',
    data: {
        message:'Hello world'
    }
})