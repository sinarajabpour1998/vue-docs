# Vue 3 Docs: Basics and Core concepts

## Quick Links
* <a href="#part-1">Part 1: create vue instance</a>
* <a href="#part-2">Part 2: v-if, v-else-if and v-else directives</a>
* <a href="#part-3">Part 3: v-show directive</a>
* <a href="#part-4">Part 4: v-for directive</a>
* <a href="#part-5">Part 5: v-for index and key, v-for on objects and numbers</a>
* <a href="#part-6">Part 6: Remove item from list</a>
* <a href="#part-7">Part 7: List key</a>

## Part 1
#### v-if directive

```html
<p v-if="users.length === 0">No user found...</p>
```
```js
users: []
```

## Part 2
#### v-if, v-else-if and v-else directives

```html
<p v-if="users.length === 0">No user found...</p>
<ul v-else>
    <li></li>
</ul>
```

## Part 3
#### v-show directive

```html
<p v-show="users.length === 0">No user found...</p>
<ul v-show="users.length > 0">
    <li></li>
</ul>
```

## Part 4
#### v-for directive

```html
<li v-for="user in users">
    {{ user }}
</li>
```

## Part 5
#### v-for index and key, v-for on objects and numbers

```html
    <ul>
        <li v-for="(test, key, index) in tests">
            {{ key }} : {{ test }} - {{ index }}
        </li>
    </ul>
    <ul>
        <li v-for="number in 10">
            {{ number }}
        </li>
    </ul>
```
```js
tests: {'name': 'ali', 'age': 26, 'job': 'IT'}
```

## Part 6
#### Remove item from list

```html
<li v-for="(user, index) in users">
    {{ user }} - {{ index }} -
    <a href="#" @click.prevent="removeUser(index)">Delete</a>
</li>
```
```js
removeUser(index) {
    this.users.splice(index, 1);
}
```

## Part 7
#### list key

```html
<li v-for="(user, index) in users" :key="user">
    {{ user }} - {{ index }} -
    <a href="#" @click.prevent="removeUser(index)">Delete</a>
    <br>
    <input type="text" @click.stop value="">
</li>
```