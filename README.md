## introduce

为产生本地💻调试环境，提效🚀而二次封装的 Dashboard。

## usage

### 单路由风格1
```ts 
import { Material } from 'dev-dashoard';
// or
import Material from 'dev-dashoard';

Material(IMaterial, dom?) //default #root
```

``` ts
type IMaterial = {
  routes: {
    path: string,
    name: string,
    icon: React.ReactNode,
    component: React.ReactNode
  }[],
  title?: React.ReactNode,
  logo?: React.ReactNode,

  [key: string]: any;
}
```

Material-ui/icons Map (https://material-ui.com/components/material-icons/)[https://material-ui.com/components/material-icons/]

