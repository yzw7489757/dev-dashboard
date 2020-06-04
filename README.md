## introduce

By [creative](https://www.creative-tim.com/);

为产生本地💻调试环境，提效🚀而二次封装的 Dashboard。

## usage

### 单路由极简风格

```ts 
import { Simple } from 'dev-dashoard';

<Simple />
```
Props
``` ts
type SimpleProps = { 
  title?: string, 
  routes: Array<{
    name: string,
    icon: React.ReactNode,
    path: string,
    component: React.FunctionComponent | React.ComponentClass
  }> 
}
```
![alt="星彩"](https://s1.ax1x.com/2020/06/03/ta7t56.jpg);


### 单路由星彩风格

```ts 
import { Material } from 'dev-dashoard';
// or
import Material from 'dev-dashoard';

<Material />
```
porps
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
![alt="星彩"](https://s1.ax1x.com/2020/06/03/ta7UPK.jpg);

Material-ui/icons Map [https://material-ui.com/components/material-icons/](https://material-ui.com/components/material-icons/)

