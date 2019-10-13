import LoaderSpinner from "./components/Spinner";

export { LoaderSpinner as Spinner };

let instance;

export default {
  install(Vue, options = {}) {
    if (!instance) {
      const Constructor = Vue.extend(LoaderSpinner);

      const size = "size" in options ? options.size : 1;
      const color = "color" in options ? options.color : "#DD4814";
      const background =
        "background" in options
          ? options.background
          : "rgba(255, 255, 255, 0.5)";

      instance = new Constructor({
        propsData: {
          size,
          color,
          background,
          showByDefault: false
        },
        el: document.createElement("div")
      });
    }

    const spinner = {
      show(selector) {
        if (selector) {
          if (selector instanceof HTMLDivElement) {
            selector.appendChild(instance.$el);
          } else {
            document.querySelector(selector).appendChild(instance.$el);
          }

          instance.showScoped();
        } else {
          document.querySelector("body").appendChild(instance.$el);
          instance.show();
        }
      },
      hide() {
        instance.hide();
      }
    };

    if (!Vue.$spinner) {
      Vue.$spinner = spinner;
    }

    Vue.prototype.$spinner = Vue.$spinner;
  }
};
