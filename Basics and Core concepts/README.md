# Vue 3 Docs: Basics and Core concepts

## Quick Links
* <a href="#part-1">Part 1: create vue instance</a>
* <a href="#part-2">Part 2: bind data to tag attributes</a>
* <a href="#part-3">Part 3: vue methods</a>
* <a href="#part-4">Part 4: access to data objects in methods</a>
* <a href="#part-5">Part 5: v-html directive</a>
* <a href="#part-6">Part 6: event binding, v-on directive</a>
* <a href="#part-7">Part 7: event arguments</a>
* <a href="#part-8">Part 8: v-on:input directive</a>
* <a href="#part-9">Part 9: v-on:click and v-on:submit directives, Event modifiers</a>

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

## Part 8
#### v-on:input directive

```js
const app = Vue.createApp({
    data() {
        return {
            name: ''
        };
    },
    methods: {
        setFullName(event) {
            this.name = event.target.value;
        }
    }
});
app.mount('#app');
```
```html
<div id="app">
    <input type="text" name="full_name" id="full_name" v-on:input="setFullName">
    <p>Your name is : {{ name }}</p>
</div>
```

## Part 9
#### v-on:keyup ,v-on:click and v-on:submit directives, Event modifiers

```js
const app = Vue.createApp({
    data() {
        return {
            data: ''
        };
    },
    methods: {
        submitPersonalForm() {
            this.data = "You have been submitted the form !";
        },
        leftClickAction() {
            this.data = "Left clicked";
        },
        rightClickAction() {
            this.data = "Right clicked";
        },
        middleClickAction() {
            this.data = "Middle clicked";
        },
        actionOnEnter() {
            this.data = "Keyup.enter pressed !";
        }
    }
});
app.mount('#app');
```
```html
<div id="app">
    <button type="button" v-on:click.left="leftClickAction">Test Left Click only</button>
    <button type="button" v-on:click.middle="middleClickAction">Test Middle Click only</button>
    <button type="button" v-on:click.right="rightClickAction">Test Right Click only</button>
    <hr>
    <input type="text" name="test_enter" id="test_enter" v-on:keyup.enter="actionOnEnter" placeholder="Type and press enter...">
    <hr>
    <form id="personal" v-on:submit.prevent="submitPersonalForm">
        <input type="text" name="full_name" id="full_name">
        <button type="submit">
            Submit
        </button>
    </form>
    <p>{{ data }}</p>
</div>
```