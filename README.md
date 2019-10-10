# Vue Spinner Plugin

A Vue.js spinner plugin which helps easily show/hide loading spinner in whole page or only specific section of your application.

## Benefits

* No extra depencencies
* No need to add local state to each component
* Simple API: `Vue.$spinner.show()` and `Vue.$spinner.hide()`

## Installation

The easiest way to use Vue Spinner Plugin is to install it from **npm** or **yarn**.

```sh
npm install vue-loader-spinner --save
```

Or

```sh
yarn add vue-loader-spinner
```

## Usage

First, import and install the plugin. 

```html
import Vue from 'vue'
import LoaderSpinner from 'vue-loader-spinner'
Vue.use(LoaderSpinner)
```

Then in your components you can show the spinner by calling `this.$spinner.show()` and hide by calling `this.$spinner.hide()`.

You can also pass additional options to the plugin when you install it:

```html
import Vue from 'vue'
import LoaderSpinner from 'vue-loader-spinner'
Vue.use(LoaderSpinner, {
    size: 5,
    color: 'green',
    background: 'rgba(10, 10, 10, 0.5)',
})
```

## Credits
Big thanks to [@FrontendSophie](https://github.com/FrontendSophie) for the initial idea of the spinner component.
