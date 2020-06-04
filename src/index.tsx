import React from 'react'
import ReactDOM from 'react-dom';
import MaterialSingle, { MaterialSingleProps} from './material/entry/App';
import SimpleSingle, { SimpleProps } from './simple/App';

export const Material = (props: MaterialSingleProps) => {
  React.useEffect(() => {
    const font = createLink("https://fonts.googleapis.com/icon?family=Material+Icons")
    const icons = createLink("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")
    return () => {
      document.head.removeChild(font)
      document.head.removeChild(icons)
    }
  }, [])
  
  return <MaterialSingle {...props}/>
}

export const Simple = (props: SimpleProps) => {
  return <SimpleSingle {...props}/>
}

function createLink(href: string) {
  const icons = document.createElement('link');
  icons.href = href
  icons.rel = "stylesheet"
  document.head.appendChild(icons)
  return icons
}

export default Material
