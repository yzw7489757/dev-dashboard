import { Flight, GitHub, Group,InsertChart} from '@material-ui/icons';
import { Simple, Material } from '../src/index'
import demo from './demo'

Simple({
  routes : [
    {
      path: '/demo',
      name: 'demo',
      icon: Flight,
      component: demo
    },
    {
      path: '/demo1',
      name: 'Git',
      icon: GitHub,
      component: demo
    },
    {
      path: '/demo2',
      name: 'Group',
      icon: Group,
      component: demo
    },
    {
      path: '/demo3',
      name: 'Chart',
      icon: InsertChart,
      component: demo
    },
  ]
});