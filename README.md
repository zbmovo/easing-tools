# Easing Tools
一个 Javascript 过渡函数工具

## 安装
### npm
```bash
npm install easing-tools
```
### yarn
```bash
yarn add easing-tools
```

## 快速开始
### es modules
```typescript
import { easings, utils } from 'easing-tools'
const {
  // 定时器
  setAnimationFrame,
  // 过渡函数
  transition
} = utils


setAnimationFrame((progress, countTime) => {
  // 从0 - 100区间过渡
  const value = transition([0, 100], easings.easeInCubic(progress))
  // div.style.left = value + 'px'
}, 3000)
```

### umd
```html
<head>
  <!-- other -->
  <script src="https://www.unpkg.com/easing-tools/umd/index.min.js"></script>
</head>

<body>
  <script>
    console.log(
      window['easing-tools']
    );
  </script>
</body>
```

## 文档
请前往 [docs](/docs/README.md)

## License
easing-tools is [MIT licensed](./LICENSE).
