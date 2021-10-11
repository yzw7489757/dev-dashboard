import * as React from "react"

interface LayoutProps {
  title: string
}

const Layout: React.FC<LayoutProps> = props => {
  return (
    <div className="layout">
      <div className="layout-toolbar">
        <h3>{props.title}</h3>
      </div>
      <div className="layout-main">{props.children}</div>
      <div className="layout-footer">
        <div>@2021 行云</div>
        <div>Xy-front</div>
      </div>
    </div>
  )
}

export default Layout
