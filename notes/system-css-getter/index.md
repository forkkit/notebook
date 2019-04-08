import GetterDemo from './getter-demo'

# System CSS Getter

<GetterDemo />

```jsx
<div
  css={css({
    border: get`1px solid ${'colors.muted'}`,
  })}
/>
```
