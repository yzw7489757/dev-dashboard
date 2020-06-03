import React from 'react'
import ReactDOM from 'react-dom';
import MaterialSingle, { MaterialSingleProps} from './material/entry/App';
import SimpleSingle, { SimpleProps } from './simple/App';

export const Material = (props: MaterialSingleProps, dom: HTMLElement = document.getElementById('root')) => {
  ReactDOM.render(<MaterialSingle {...props}/>, dom)
  createLink("https://fonts.googleapis.com/icon?family=Material+Icons")
  createLink("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")
}

export const Simple = (props: SimpleProps, dom: HTMLElement = document.getElementById('root')) => {
  ReactDOM.render(<SimpleSingle {...props}/>, dom)
}

function createLink(href: string) {
  const icons = document.createElement('link');
  icons.href = href
  icons.rel = "stylesheet"
  document.head.appendChild(icons)
}

export default Material
