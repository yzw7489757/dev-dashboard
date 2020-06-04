/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useMemo} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const imagine1 = "https://s1.ax1x.com/2020/06/02/tt24qe.jpg";
const imagine2 = "https://s1.ax1x.com/2020/06/02/tt2oad.jpg";
const imagine3 = "https://s1.ax1x.com/2020/06/02/tt2hrD.jpg";
const imagine4 = "https://s1.ax1x.com/2020/06/02/tt2fKO.jpg";

function useDraggable(el) {
  const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 });
  const initial = React.useRef(true)
  const [{ pageX, pageY }, setPageOffset] = useState({
    pageX: 0,
    pageY: 0,
  });
  
  useEffect(() => {
   const { top, left } = el.current.getBoundingClientRect();
    setPageOffset({ pageX: top, pageY: left });
    const handleMouseDown = event => {
      const startX = event.pageX - dx;
      const startY = event.pageY - dy;
      const handleMouseMove = e => {
        const newDx = e.pageX - startX;
        const newDy = e.pageY - startY;
        setOffset({ dx: newDx, dy: newDy });
        console.log(newDx, newDy)
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleMouseMove);
        
        setOffset(p=>({ ...p, dx: 0 }))
        
      },{ once: true });
    };
    el.current.addEventListener('mousedown', handleMouseDown);
    return () => {
      el.current.removeEventListener('mousedown', handleMouseDown);
    };
  }, [dx, dy, el]);

  useEffect(() => {
    const fixedPluginX = localStorage.getItem('dashboard-fixed-plugin-dx');
    const fixedPluginY = localStorage.getItem('dashboard-fixed-plugin-dy');
    if(initial.current && fixedPluginX && fixedPluginY) {
      setOffset({ dx: fixedPluginX, dy: fixedPluginY })
      initial.current = false
      return
    }
    el.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    localStorage.setItem('dashboard-fixed-plugin-dx', dx)
    localStorage.setItem('dashboard-fixed-plugin-dy', dy)
  }, [dx, dy, el]);

  return { x: dx, y: dy, pageX, pageY };
}

export default function FixedPlugin(props) {
  const [bgImage, setBgImage] = React.useState(props.bgImage);
  const el = React.useRef()

  const coordinate = useDraggable(el);

  return (
    <div
      className={classnames("fixed-plugin")}
      ref={el}
    >
      <div id="fixedPluginClasses" className={props.fixedClasses}>
        <div onClick={props.handleFixedClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu">
          <li className="header-title">主题</li>
          <li className="adjustments-line">
            <a className="switch-trigger">
              <div>
                <span
                  className={
                    props.bgColor === "purple"
                      ? "badge filter badge-purple active"
                      : "badge filter badge-purple"
                  }
                  data-color="purple"
                  onClick={() => {
                    props.handleColorClick("purple");
                  }}
                />
                <span
                  className={
                    props.bgColor === "blue"
                      ? "badge filter badge-blue active"
                      : "badge filter badge-blue"
                  }
                  data-color="blue"
                  onClick={() => {
                    props.handleColorClick("blue");
                  }}
                />
                <span
                  className={
                    props.bgColor === "green"
                      ? "badge filter badge-green active"
                      : "badge filter badge-green"
                  }
                  data-color="green"
                  onClick={() => {
                    props.handleColorClick("green");
                  }}
                />
                <span
                  className={
                    props.bgColor === "red"
                      ? "badge filter badge-red active"
                      : "badge filter badge-red"
                  }
                  data-color="red"
                  onClick={() => {
                    props.handleColorClick("red");
                  }}
                />
                <span
                  className={
                    props.bgColor === "orange"
                      ? "badge filter badge-orange active"
                      : "badge filter badge-orange"
                  }
                  data-color="orange"
                  onClick={() => {
                    props.handleColorClick("orange");
                  }}
                />
              </div>
            </a>
          </li>
          <li className="header-title">Sider背景</li>
          <li className={bgImage === imagine1 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine1);
                props.handleImageClick(imagine1);
              }}
            >
              <img src={imagine1} alt="..." />
            </a>
          </li>
          <li className={bgImage === imagine2 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine2);
                props.handleImageClick(imagine2);
              }}
            >
              <img src={imagine2} alt="..." />
            </a>
          </li>
          <li className={bgImage === imagine3 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine3);
                props.handleImageClick(imagine3);
              }}
            >
              <img src={imagine3} alt="..." />
            </a>
          </li>
          <li className={bgImage === imagine4 ? "active" : ""}>
            <a
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine4);
                props.handleImageClick(imagine4);
              }}
            >
              <img src={imagine4} alt="..." />
            </a>
          </li>
          <li className="adjustments-line" />
        </ul>
      </div>
    </div>
  );
}

FixedPlugin.propTypes = {
  bgImage: PropTypes.string,
  handleFixedClick: PropTypes.func,
  fixedClasses: PropTypes.string,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  handleColorClick: PropTypes.func,
  handleImageClick: PropTypes.func
};
