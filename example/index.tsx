import React from 'react'
import ReactDOM from 'react-dom'
import { MaterialSingle } from '../src/index'
// import { MaterialSingle } from 'dev-dashboard/build/main'

ReactDOM.render(<MaterialSingle routes={[
  {
    path: '/aaa',
    name: 'aaa',
    icon: () => null,
    component: () => <div>123</div>
  }
]} />, document.getElementById('root'))