import LoaderSpinner from './components/Spinner'

let instance

export default {
    install(Vue, options = {}) {
        if (!instance) {
            const Constructor = Vue.extend(LoaderSpinner)

            const size = 'size' in options ? options.size : 1
            const color = 'color' in options ? options.color : 1
            const background = 'background' in options ? options.background : 1

            instance = new Constructor({
                propsData: {
                    size,
                    color,
                    background,
                },
                el: document.createElement('div'),
            })
        }

        const spinner = {
            show(selector) {
                if (selector) {
                    document.querySelector(selector).appendChild(instance.$el)
                    instance.showScoped()
                } else {
                    document.querySelector('body').appendChild(instance.$el)
                    instance.show()
                }
            },
            hide() {
                instance.hide()
            },
        }

        if (!Vue.$spinner) {
            Vue.$spinner = spinner
        }

        Vue.prototype.$spinner = Vue.$spinner
    },
}