# button

## Properties

| Property  | Attribute | Description | Type     | Default     |
| --------- | --------- | ----------- | -------- | ----------- |
| `id`      | `id`      |             | `string` | `undefined` |
| `type`    | `type`    |             | `string` | `undefined` |
| `classes` | `classes` |             | `string[]` | `undefined` |
| `children`| `children`| Label slot  | `ReactNode` | `undefined` |
| `clicked` | `clicked` | Callback    | `SyntheticEvent` | `undefined` |

## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `clicked` |             | `Event<any>` |

```javascript
<Button
      id="MyButton"
      type="submit"
      classes={['btn', 'btn-primary']}
      clicked={clickHandler}
    >{'My Submit Button'}</Button>
```
----------------------------------------------

*Built with ❤ [Justin Wellesley-Smith](https://github.com/Synergi/)*
