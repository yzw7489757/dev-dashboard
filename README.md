## introduce
为产生本地 💻 调试环境，提效 🚀 而二次封装的 Dashboard。

## usage

### 单路由极简风格

```ts
import { Simple } from "dev-dashoard";

<Simple />
```

Props

```ts
type SimpleProps = {
  title?: string;
  useHash?: boolean; // 是否使用 hash 模式
  routes: Array<{
    name: string
    icon: React.ReactNode
    path: string
    component: React.FunctionComponent | React.ComponentClass
  }>
}
```

![alt="星彩"](https://s1.ax1x.com/2020/06/03/ta7t56.jpg);
