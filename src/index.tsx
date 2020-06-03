import React from 'react'
import ReactDOM from 'react-dom';
import MaterialSingle from './entry/App';

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

export const Material = (props: IMaterial, dom: HTMLElement = document.getElementById('root')) => {
  ReactDOM.render(<MaterialSingle {...props}/>, dom)
  createLink("https://fonts.googleapis.com/icon?family=Material+Icons")
  createLink("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")
}

function createLink(href: string) {
  const icons = document.createElement('link');
  icons.href = href
  icons.rel = "stylesheet"
  document.head.appendChild(icons)
}

export default Material
