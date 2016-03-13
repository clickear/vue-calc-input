# Vue Calc Input
A directive for [Vue.Js](http://vuejs.org) to make an calculator input behavior. Implementation of [readable-number.js](https://github.com/BosNaufal/readable-number)

#### [DEMO](http://codepen.io/BosNaufal/pen/mPrrLz?editors=1010)


## Install
Include the [vue-calc-input-standalone.js](./vue-calc-input-standalone.js) to your HTML or web page file, after [Vue.Js](http://vuejs.org). if you want to use it without a filter

OR

You can use [vue-calc-input.js](./build/vue-calc-input.js) with [vue-readable-number.js](./src/vue-readable-number.js) Filter to make two binding filter. Make it more powerfull. But you must include the [readable-number-js](./src/readable-number.js) First.



## Usage
```html
<div id="app">
	<!-- Input with calculator behavior -->
  <input type="text" v-calc-input />

	<!-- vue-calc-input with filter -->
	<input type="text" v-calc-input v-model="number | readable-number" />
	<p>Your see: <b>{{ number | readable-number }}</b></p>
	<p>Your model get: <b>{{ number }}</b> ({{ typeof number }})</p>
</div>
```


## Thank You for Making this useful
Hopefully it can be useful for your next projects.

## Let's talk about some projects
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
