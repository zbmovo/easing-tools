# 导出概括
```typescript
import {
  easings,
  utils,
  cubicBezier,
  cubicBezierWithMath
} from './src'
```

## easings
该导出的函数集合来自 [Easing Functions Cheat Sheet](https://easings.net/)

## utils
```typescript
const {
  // 定时器
  setAnimationFrame,
  // 过渡函数
  transition
} = utils


setAnimationFrame((progress, countTime) => {

//

  // 从0 - 100区间过渡
  const value = transition([0, 100], easings.easeInCubic(progress))
  
  // Your code ...
  // div.style.left = value + 'px'
}, 3000)
```

## cubicBezier
```typescript
setAnimationFrame((progress, countTime) => {
  /**
   * 自定义贝塞尔函数
   * 与 css 中 transition-timing-function: cubic-bezier(1, 0, 0, 1) 行为一致
   * 
   * 该函数是基于 cubicBezierWithMath 函数编写
   */
  const myEasing = cubicBezier(1, 0, 0, 1)
  const value = transition([0, 100], myEasing(progress))

  // Your code ...
  // div.style.left = value + 'px'
}, 3000)
```

## cubicBezierWithMath
该函数内部描述了三次贝塞尔曲线方程
```typescript
const myCubicBezier = cubicBezierWithMath(P0, P1, P2, P3)
// 0 <= t <= 1
myCubicBezier(t)
```
其中 `cubicBezierWithMath` 的四个参数分别是三次贝塞尔方程的四个控制点，分别具备 `xy` 坐标值，具体请看 [Bézier curve - Wikipedia](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)

为了更深的理解，接下来利用该函数绘制一下三次贝塞尔曲线
```typescript
// 定义一个测试函数
function cubicBezierTest(x1: number, y1: number, x2: number, y2: number, t: number,) {
  const points = {
    P0: [0, 0],
    P1: [x1, y1],
    P2: [x2, y2],
    P3: [1, 1],
  }

  return {
    x: cubicBezierWithMath(
      points.P0[0],
      points.P1[0],
      points.P2[0],
      points.P3[0],
    )(t),
    y: cubicBezierWithMath(
      points.P0[1],
      points.P1[1],
      points.P2[1],
      points.P3[1],
    )(t)
  }
}

// 这是画布上下文
let context: CanvasRenderingContext2D

// 绘制大小（画布大小）
const size = 500

// 原点向下平移
context.translate(0, size)

// 绘制方法
function draw(x: number, y: number, r = 1) {
  context.beginPath()
  context.arc(x, y, r, 0, Math.PI * 2)
  context.fill()
  context.closePath()
}

// 绘制精度
const accuracy = 0.01
// 循环绘制每个点
for (let index = 0; index < 1; index += accuracy) {
  // easeInOutQuint = cubic-bezier(0.83, 0, 0.17, 1)
  const easeInOutQuintValue = [0.83, 0, 0.17]
  const { x, y } = cubicBezierTest(
    easeInOutQuintValue[0],
    easeInOutQuintValue[1],
    easeInOutQuintValue[2],
    easeInOutQuintValue[3],
    index
  )
  // 绘制
  draw(x * size, y * size * -1)
}
```
不出意外应该会画出一个S形状，并且和 `css` 中 `cubic-bezier` 曲线完全一致

自己尝试一下绘制，对比测试请前往 [cubic-bezier](https://cubic-bezier.com/)


# 更多玩法提示
1、利用 `setAnimationFrame` 中的 `progress` 和 `countTime` 参数可以实现类似于 `timeline` 的函数让多个动画串联起来
  
2、利用 `transition` 函数第二个参数和 `easings` 函数可以实现手动控制动画进度，实现类似于：
```typescript
rangeInput.addEventListener('input', event => {
  const progress = event.target.value
  const value = transition([0, 100], easings.easeInCubic(progress))
  // Your code ...
  // console.log(value);
})
```





