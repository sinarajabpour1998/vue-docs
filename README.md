# Vue 3 Docs
This is an alternative docs for vue js with implemented examples in separated folders.
each part has its own code to understand better :)

## Quick Links
* <a href="#create-vue-instance">Part 1: create vue instance</a>
* <a href="#bind-data-to-tag-attributes">Part 2: bind data to tag attributes</a>
* <a href="#vue-methods">Part 3: vue methods</a>
* <a href="#access-to-data-objects-in-methods">Part 4: access to data objects in methods</a>
* <a href="#v-html-directive">Part 5: v-html directive</a>
* <a href="#event-binding-v-on-directive">Part 6: event binding, v-on directive</a>
* <a href="#event-arguments">Part 7: event arguments</a>

## Part 1
#### create vue instance
```js
const app = Vue.createApp();
```

#### mount vue instance to a html tag
```js
app.mount('#app');
```

#### create objects in vue instance
```js
const app = Vue.createApp({
    data() {
        return {
            testObject: "this is my test object"
        };
    }
});
```

#### data binding
in the html part, you can use the following syntax to bind your object to document:
```html
<div id="app">
    <p>{{ testObject }}</p>
</div>
```
the out must be something like this:
```html
this is my test object
```

## Part 2
#### bind data to tag attributes
```js
const app = Vue.createApp({
    data() {
        return {
            vueLink: "https://google.com"
        };
    }
});
```
```html
<div id="app">
    <a v-bind:href="vueLink">Google link</a>
</div>
```

## Part 3
#### vue methods
```js
const app = Vue.createApp({
    methods: {
        testOutput() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return "It's down !";
            }else {
                return "It's up !";
            }
        }
    }
});
```
```html
<div id="app">
    <p>{{ testOutput() }}</p>
    <span>{{ 1 + 1 }}</span>
</div>
```

## Part 4
#### access to data objects in methods
```js
const app = Vue.createApp({
    data() {
        return {
            first: "It's down !",
            second: "It's up !"
        };
    }
    , methods: {
        testOutput() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.first;
            }else {
                return this.second;
            }
        }
    }
});
app.mount('#app');
```
```html
<div id="app">
    <p>{{ testOutput() }}</p>
</div>
```

## Part 5
#### v-html directive
```js
const app = Vue.createApp({
    data() {
        return {
            htmCode: "<h1>First vue html code</h1>"
        };
    }
});
app.mount('#app');
```
```html
<div id="app">
    <p v-html="htmCode"></p>
</div>
```

## Part 6
#### event binding v-on directive
```js
const app = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increaseValue() {
            this.counter ++;
        },
        decreaseValue() {
            this.counter --;
        }
    }
});
app.mount('#app');
```
```html
<div id="app">
    <button v-on:click="increaseValue">Increase Value</button>
    <button v-on:click="decreaseValue">Decrease Value</button>
    <p>{{ counter }}</p>
</div>
```

## Part 7
#### event arguments
```js
const app = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increaseValue(input_num = null) {
            if (input_num == null) { input_num = 1 }
            console.log(input_num)
            this.counter += input_num;
        },
        decreaseValue(input_num = null) {
            if (input_num == null) { input_num = 1 }
            this.counter -= input_num;
        }
    }
});
app.mount('#app');
```
```html
<div id="app">
    <button v-on:click="increaseValue(5)">Increase Value</button>
    <button v-on:click="decreaseValue(10)">Decrease Value</button>
    <p>{{ counter }}</p>
</div>
```