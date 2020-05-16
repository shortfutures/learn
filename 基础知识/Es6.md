# Iterator接口

```js
function iterator(arr) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < arr.length ?  {
                    value: arr[nextIndex++],
                    done: false
                } :
                {
                    value: undefined,
                    done: true
                }
        }
    }
}
```

