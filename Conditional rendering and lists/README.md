# Vue 3 Docs: Basics and Core concepts

## Quick Links
* <a href="#part-1">Part 1: create vue instance</a>

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



