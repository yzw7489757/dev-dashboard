import { Simple,Material } from '../src/index'
import demo from './demo'

Material({routes : [{
  path: '/demo',
  name: 'demo',
  icon: '',
  component: demo
}]});