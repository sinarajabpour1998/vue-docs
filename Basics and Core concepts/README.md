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
* <a href="#part-10">Part 10: v-once</a>
* <a href="#part-11">Part 11: v-model directive: two-way data binding (v-on + v-bind)</a>
* <a href="#part-12">Part 12: computed properties</a>
* <a href="#part-13">Part 13: watchers</a>
* <a href="#part-14">Part 14: v-on and v-bind alternatives</a>
* <a href="#part-15">Part 15: dynamic in-line styling</a>
* <a href="#part-16">Part 16: dynamic class styling</a>

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
{
    data()
    {
        return {
            first: "It's down !",
            second: "It's up !"
        };
    },
    methods: {
        testOutput()
        {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.first;
            } else {
                return this.second;
            }
        }
    }
}
```
```html
<p>{{ testOutput() }}</p>
```

## Part 5
#### v-html directive
```js
data() {
    return {
        htmCode: "<h1>First vue html code</h1>"
    };
}
```
```html
<p v-html="htmCode"></p>
```

## Part 6
#### event binding v-on directive
```js
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
```
```html
<button v-on:click="increaseValue">Increase Value</button>
<button v-on:click="decreaseValue">Decrease Value</button>
<p>{{ counter }}</p>
```

## Part 7
#### event arguments
```js
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
```
```html
<button v-on:click="increaseValue(5)">Increase Value</button>
<button v-on:click="decreaseValue(10)">Decrease Value</button>
<p>{{ counter }}</p>
```

## Part 8
#### v-on:input directive

```js
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
```
```html
<input type="text" name="full_name" id="full_name" v-on:input="setFullName">
<p>Your name is : {{ name }}</p>
```

## Part 9
#### v-on:keyup ,v-on:click and v-on:submit directives, Event modifiers

```js
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
```
```html
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
```

## Part 10
#### v-once directive

```js
data() {
    return {
        counter: 6
    };
},
methods: {
    addToCounter () {
        this.counter ++;
    }
}
```
```html
<button type="button" v-on:click="addToCounter">Add to counter</button>
<p v-once>
    First value : {{ counter }}
</p>
<p>
    New value : {{ counter }}
</p>
```

## Part 11
#### v-model: two-way data binding (v-on + v-bind)

```js
data() {
    return {
        fullName: '',
        data: ''
    };
},
methods: {
    submitForm() {
        this.data = 'Your full name is ' + this.fullName;
    },
    resetForm() {
        this.fullName = '';
        this.data = '-';
    }
}
```
```html
<form v-on:submit.prevent="submitForm">
    <input type="text" name="fullName" id="fullName" v-model="fullName" value="" />
    <button type="submit">Submit</button>
    <button type="button" v-on:click="resetForm">Reset</button>
</form>
<p>{{ data }}</p>
```

## Part 12
#### computed properties

Note: computed properties runs once after vue initialization but only runs again after dependencies changing.
```js
    data() {
        return {
            name: '',
            last_name: '',
            data: ''
        };
    },
    computed: {
        fullName() {
            return 'Your full name is: ' + this.name + ' ' + this.last_name;
        }
    }
```
```html
    <input type="text" name="name" id="name" v-model="name" value="" placeholder="First name" />
    <input type="text" name="last_name" id="last_name" v-model="last_name" value="" placeholder="Last name" />
    <hr>
    <p>{{ fullName }}</p>
```

## Part 13
#### watchers

```js
    watch: {
        counter(value) {
            if (value > 50){
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 2000);
            }
        }
    },
```

## Part 14
#### v-on and v-bind alternatives

```html
v-on:click="method" equals to @click="method"

v-bind:value="variable" equals to :value="variable"
```

## Part 15
#### dynamic in-line styling

```html
<div class="area" @click="changeBorderColor" :style="{borderColor: color}"></div>
```

```js
changeBorderColor () {
    if (this.color === 'aquamarine') {
        this.color = 'red';
    }else {
        this.color = 'aquamarine';
    }
}
```

## Part 16
#### dynamic class styling

```html
<div class="area" @click="changeBorderColor('A')" :class="{active: BorderA}">
</div>
```

```js
changeBorderColor (area) {
    if (area === 'A') {
        this.BorderA = !this.BorderA;
    }
}
```