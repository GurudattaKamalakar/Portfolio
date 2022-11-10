import React, { Fragment } from "react";
import "./Skills.css";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiJava,
  SiPython,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
function Skills() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">
                  Technologies I know
                </h1>
                <hr></hr>

                <div className="row my-2">
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiCplusplus className="fs-4" /> C++
                    </span>
                  </div>
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiJava className="fs-4" /> Java
                    </span>
                  </div>
                  {/* <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiPython className="fs-4" /> Python
                    </span>
                  </div> */}

                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiHtml5 className="fs-4" /> HTML
                    </span>
                  </div>
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiCss3 className="fs-4" /> Css
                    </span>
                  </div>
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiJavascript className="fs-4" /> JavaScript
                    </span>
                  </div>
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiReact className="fs-4" /> React
                    </span>
                  </div>
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <TbBrandNextjs className="fs-4" /> Nextjs
                    </span>
                  </div>

                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiNodedotjs className="fs-4" /> Node.js
                    </span>
                  </div>
                  {/* <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiMongodb className="fs-4" /> MongoDB
                    </span>
                  </div> */}
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiExpress className="fs-4" /> Express
                    </span>
                  </div>

                  {/* <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiMysql className="fs-4" /> Mysql
                    </span>
                  </div> */}
                  <div className="mx-2 my-3 border rounded py-1 px-2 mw-fc">
                    <span>
                      <SiBootstrap className="fs-4" /> Bootstrap
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid"
                src="../images/Skill_page.png"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;
