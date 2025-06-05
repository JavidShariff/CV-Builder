import React, { useRef, useContext } from "react";
import { MyContext } from "../context/MyContext";
import ReactToPrint from "react-to-print";
import "./Resumetemplete.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Resumetemplete = () => {
  const componentRef = useRef();
  const { info, setInfo,handleRv } = useContext(MyContext);
  return (
    <div className="container">
      <div className="Rv">

      <div ref={componentRef} className="card">
        <form onSubmit={onsubmit} className="row">
          <div className="d-flex">
          <div className="d-inline photo card">
            <img src={info.img} className="img" alt="" />
          </div>
          <div className="introInfo">
              <p className="mx-4">EMPLOYMENT APPLICATION</p>
            <div className="introInfoFont">
            <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label mx-2"
                  style={{ "font-size": "12px" }}
                >
                  FILE NO
                </label>
                <input
                  type="text"
                  value={info.FileNo}
                  disabled
                  className="form-control mb-1 mx-5 inputInfo"
                  id="inputEmail1"
                  // style={{ "height": "20px"}}
                />
              </div>
            </div>
            <div className="introInfoFont">
            <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label mx-1"
                  style={{ "font-size": "12px" }}
                >
                  COUNTRY
                </label>
                <input
                  type="text"
                  value={info.Country}
                  disabled
                  className="form-control mx-5 mb-1 inputInfo"
                  id="inputEmail1"
                  // style={{ "height": "20px"}}
                />
              </div>
            </div>
            <div className="introInfoFont">
            <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label"
                  style={{ "font-size": "12px" }}
                >
                  POST APPLIED FOR
                </label>
                <input
                  type="text"
                  value={info.PAF}
                  disabled
                  className="form-control inputInfo mb-1"
                  id="inputEmail1"
                  // style={{ "height": "20px"}}
                />
              </div>
            </div>
            <div className="introInfoFont">
            <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label"
                  style={{ "font-size": "12px" }}
                >
                  MONTHLY SALARY
                </label>
                <input
                  type="text"
                  value={info.MSalary}
                  disabled
                  className="form-control inputInfo"
                  id="inputEmail1"
                  // style={{ "height": "20px"}}
                />
              </div>
            </div>
          </div>
          </div>
          <div className="row">
            <div className="card my-3 mx-3">DETAILS</div>
            <div className="col">
              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input mx-3"
                  style={{ "font-size": "12px" }}
                >
                  NAME
                </label>
                <input
                  type="text"
                  value={info.Name}
                  disabled
                  className="form-control input"
                  id="inputEmail1"
                  // style={{ "height": "20px"}}
                />
              </div>

              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input mx-3"
                  style={{ "font-size": "12px" }}
                >
                  COUNTRY
                </label>
                <input
                  type="text"
                  value={info.Country}
                  disabled
                  className="form-control input"
                  id="inputEmail2"
                  // style={{ "height": "20px" }}
                />
              </div>

              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input mx-3"
                  style={{ "font-size": "12px" }}
                >
                  DATE OF BIRTH
                </label>
                <input
                  type="text"
                  value={info.DOB}
                  disabled
                  className="form-control input"
                  id="inputEmail3"
                  // style={{ "height": "20px" }}
                />
              </div>

              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input mx-3"
                  style={{ "font-size": "12px" }}
                >
                  PLACE OF BIRTH
                </label>
                <input
                  type="text"
                  value={info.POB}
                  disabled
                  className="form-control input"
                  id="inputEmail4"
                  // style={{ "height": "20px" }}
                />
              </div>

              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input mx-3"
                  style={{ "font-size": "12px" }}
                >
                  HEIGHT
                </label>
                <input
                  type="text"
                  value={info.Height}
                  disabled
                  className="form-control input"
                  id="inputEmail5"
                  // style={{ "height": "20px" }}
                />
              </div>

              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input mx-3"
                  style={{ "font-size": "12px" }}
                >
                  WEIGHT
                </label>
                <input
                  type="text"
                  value={info.Weight}
                  disabled
                  className="form-control input"
                  id="inputEmail6"
                  // style={{ "height": "20px" }}
                />
              </div>
            </div>
            <div className="col md-2">
              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input"
                  style={{ "font-size": "12px" }}
                >
                  SEX
                </label>
                <input
                  type="text"
                  value={info.Sex}
                  disabled
                  className="form-control input"
                  id="inputEmail7"
                  // style={{ "height": "20px" }}
                />
              </div>

              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input"
                  style={{ "font-size": "12px" }}
                >
                  RELIGION
                </label>
                <input
                  type="text"
                  value={info.Religion}
                  disabled
                  className="form-control input"
                  id="inputEmail8"
                  // style={{ "height": "20px" }}
                />
              </div>

              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input"
                  style={{ "font-size": "12px" }}
                >
                  AGE
                </label>
                <input
                  type="text"
                  value={info.Age}
                  disabled
                  className="form-control input"
                  id="inputEmail9"
                  // style={{ "height": "20px" }}
                />
              </div>

              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input"
                  style={{ "font-size": "12px" }}
                >
                  MARTIAL STATUS
                </label>
                <input
                  type="text"
                  value={info.MS}
                  disabled
                  className="form-control input"
                  id="inputEmail10"
                  // style={{ "height": "20px","width":"100px" }}
                />
              </div>
              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input"
                  style={{ "font-size": "12px" }}
                >
                  CHILDREN
                </label>
                <input
                  type="text"
                  value={info.Children}
                  disabled
                  className="form-control input"
                  id="inputEmail10"
                  // style={{ "height": "20px","width":"100px" }}
                />
              </div>
              <div className="d-flex">
                <label
                  htmlFor="inputEmail4"
                  className="form-label input"
                  style={{ "font-size": "12px" }}
                >
                  COMPLEXTION
                </label>
                <input
                  type="text"
                  value={info.Complextion}
                  disabled
                  className="form-control input"
                  id="inputEmail10"
                  // style={{ "height": "20px","width":"100px" }}
                />
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="card mx-2 mb-3" style={{ "width": "30rem" }}>
              KNOWN LANGUAGE
            </div>
            <div className="card mx-4 mb-3" style={{ "width": "37rem" }}>
              QUALIFICATION
            </div>
          </div>
          <div className="row">
            <div className="col md-1">

              <div className="d-flex">
              <label
                htmlFor="inputEmail4"
                className="form-label mx-2"
                style={{ "font-size": "12px" }}
              >
                READING
              </label>
              <input
                type="text"
                value={info.Reading}
                disabled
                className="form-control input1"
                id="inputEmail13"
                style={{ height: "20px" }}
                />
                </div>

                <div className="d-flex">
              <label
                htmlFor="inputEmail4"
                className="form-label mx-2"
                style={{ "font-size": "12px" }}
              >
                WRITING
              </label>
              <input
                type="text"
                value={info.Writing}
                disabled
                className="form-control input1"
                id="inputEmail14"
                style={{ height: "20px" }}
                />
                </div>

                <div className="d-flex">

              <label
                htmlFor="inputEmail4"
                className="form-label mx-2"
                style={{ "font-size": "12px" }}
              >
                SPEAKING
              </label>
              <input
                type="text"
                value={info.Speaking}
                disabled
                className="form-control input1"
                id="inputEmail15"
                // style={{ height: "20px" }}
                />
                </div>


            </div>
            <div className="col md-2">

              <div className="d-flex">

              <label
                htmlFor="inputEmail4"
                className="form-label mx-2"
                style={{ "font-size": "12px" }}
                >
                ELEMENTRY SCHOOL
              </label>
              <input
                type="text"
                value={info.ES}
                disabled
                className="form-control input1"
                id="inputEmail7"
                // style={{ height: "20px" }}
                />
                </div>

                <div className="d-flex">

              <label
                htmlFor="inputEmail4"
                className="form-label mx-3"
                style={{ "font-size": "12px" }}
              >
                HIGH SCHOOL
              </label>
              <input
                type="text"
                value={info.HS}
                disabled
                className="form-control mx-3 input1"
                id="inputEmail7"
                // style={{ height: "20px" }}
                />
                </div>

                <div className="d-flex">
                <label
                htmlFor="inputEmail4"
                className="form-label mx-2"
                style={{ "font-size": "12px" }}
              >
                   COLLEGE
              </label>
              <input
                type="text"
                value={info.College}
                disabled
                className="form-control mx-5 input1"
                id="inputEmail7"
                // style={{ height: "20px" }}
                />
                </div>

            </div>
          </div>
          <div className="row">
            <div className="col md-1">
              <div className="col md-2">
                <div className="card my-3 mx-2" style={{ width: "25rem" }}>
                  PASSPORT DETAILS
                </div>
                <div className="d-flex">

                <label
                  htmlFor="inputEmail4"
                  className="form-label mx-2"
                  style={{ "font-size": "12px" }}
                >
                  PASSPORT NO
                </label>
                <input
                  type="text"
                  value={info.PassportNo}
                  disabled
                  className="form-control mx-3 input1"
                  id="inputEmail7"
                  style={{ height: "20px" }}
                  />
                  </div>

                  <div className="d-flex">

                <label
                  htmlFor="inputEmail4"
                  className="form-label mx-2"
                  style={{ "font-size": "12px" }}
                >
                  PLACE OF ISSUE
                </label>
                <input
                  type="text"
                  value={info.POI}
                  disabled
                  className="form-control mx-2 input1"
                  id="inputEmail7"
                  style={{ height: "20px" }}
                  />
                  </div>

                  <div className="d-flex">

                <label
                  htmlFor="inputEmail4"
                  className="form-label mx-2"
                  style={{ "font-size": "12px" }}
                  >
                  DATE OF ISSUE
                </label>
                <input
                  type="text"
                  value={info.DOI}
                  disabled
                  className="form-control mx-3 input1"
                  id="inputEmail7"
                  style={{ height: "20px" }}
                  />
                  </div>

                  <div className="d-flex">

                <label
                  htmlFor="inputEmail4"
                  className="form-label mx-2"
                  style={{ "font-size": "12px" }}
                >
                  DATE OF EXPIRE
                </label>
                <input
                  type="text"
                  value={info.DOE}
                  disabled
                  className="form-control mx-2 input1"
                  id="inputEmail7"
                  style={{ height: "20px" }}
                  />
                  </div>

              </div>
              <div className="d-flex my-3">
                <div className="card mx-2">NEW-FIRST TIME</div>
                <input
                  type="text"
                  value={info.FT}
                  disabled
                  className="form-control mx-2"
                  id="inputEmail7"
                  style={{ height: "20px", width: "100px" }}
                />
              </div>
              <div className="d-flex my-3">
                <div className="card mx-2">EXPERIENCE</div>
                <input
                  type="text"
                  value={info.Exp}
                  disabled
                  className="form-control mx-4"
                  id="inputEmail7"
                  style={{ height: "20px", width: "100px" }}
                />
              </div>
              <div className="card mx-2">PREVIOUS EXPERIENCE</div>
              <div className="d-flex my-3">
                <div className="mx-2">COUNTRY</div>
                <input
                  type="text"
                  value={info.PCN}
                  disabled
                  className="form-control mx-2 input"
                  id="inputEmail7"
                  style={{ height: "20px" }}
                />
              </div>
              <div className="d-flex my-3">
                <div className="mx-2">PERIOD</div>
                <input
                  type="text"
                  value={info.Period}
                  disabled
                  className="form-control mx-4 input"
                  id="inputEmail7"
                  style={{ height: "20px" }}
                />
              </div>
              <div className="card my-3 mx-2">WORKING PREFERENCE</div>
              <div className="row my-2">
                <div className="col">
                  <div className="d-flex">

                <label
                  style={{ "font-size": "12px" }}
                  className="form-label mx-1"
                  >
                  1th
                </label>
                  <input
                    type="text"
                    className="form-control inp"
                    value={info.Pref1}
                    disabled
                    />
                    </div>
                </div>
                <div className="col">
                  <div className="d-flex">

                <label
                  htmlFor="inputEmail4"
                  className="form-label mx-1"
                  style={{ "font-size": "12px" }}
                >
                  2th
                </label>
                  <input
                    type="text"
                    className="form-control inp"
                    value={info.Pref2}
                    disabled
                    />
                    </div>
                </div>
              </div>
              <div className="row my-2">
                <div className="col">
                  <div className="d-flex">
                  <label
                  htmlFor="inputEmail4"
                  className="form-label mx-1"
                  style={{ "font-size": "12px" }}
                >
                  3th
                </label>
                  <input
                    type="text"
                    className="form-control inp"
                    value={info.Pref3}
                    disabled
                    />
                    </div>
                </div>
                <div className="col">
                  <div className="d-flex">
                  <label
                  htmlFor="inputEmail4"
                  className="form-label mx-1"
                  style={{ "font-size": "12px" }}
                >
                  4th
                </label>
                  <input
                    type="text"
                    className="form-control inp"
                    value={info.Pref4}
                    disabled
                    />
                    </div>
                </div>
              </div>
              <div className="row my-2">
                <div className="col">
                  <div className="d-flex">
                  <label
                  htmlFor="inputEmail4"
                  className="form-label mx-1"
                  style={{ "font-size": "12px" }}
                >
                  5th
                </label>
                  <input
                    type="text"
                    className="form-control inp"
                    value={info.Pref5}
                    disabled
                    />
                    </div>
                </div>
                <div className="col">
                  <div className="d-flex">
                  <label
                  htmlFor="inputEmail4"
                  className="form-label mx-1"
                  style={{ "font-size": "12px" }}
                >
                  6th
                </label>
                  <input
                    type="text"
                    className="form-control inp"
                    value={info.Pref6}
                    disabled
                    />
                    </div>
                </div>
              </div>
              <div className="row my-2">
                <div className="col">
                  <div className="d-flex">
                  <label
                  htmlFor="inputEmail4"
                  className="form-label mx-1"
                  style={{ "font-size": "12px" }}
                >
                  7th
                </label>
                  <input
                    type="text"
                    className="form-control inp"
                    value={info.Pref7}
                    disabled
                    />
                    </div>
                </div>
                <div className="col">

                  <div className="d-flex">
                  <label
                  htmlFor="inputEmail4"
                  className="form-label mx-1"
                  style={{ "font-size": "12px" }}
                >
                  8th
                </label>
                  <input
                    type="text"
                    className="form-control inp"
                    value={info.Pref8}
                    disabled
                    />
                    </div>
                </div>
              </div>
              <div className="row my-1">
                <div className="col">
                  <label
                  htmlFor="inputEmail4"
                  className="form-label mx-3"
                  style={{ "font-size": "12px" }}
                >
                  DATE AND AGENT
                </label>
                  <input
                    type="text"
                    className="form-control mx-3 inp"
                    disabled
                    />
                </div>
                <div className="col">

                  <label
                  htmlFor="inputEmail4"
                  className="form-label mx-3"
                  style={{ "font-size": "12px" }}
                >
                 SIGNATURE AND APPLICANT
                </label>
                  <input
                    type="text"
                    className="form-control mx-3 inp"
                    disabled
                    />
                </div>
              </div>
            </div>
            
            <div className="col md-2">
              <div className="card d-flex">
                <img src={info.img} className="img2" />
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
      <ToastContainer/>
      <ReactToPrint
        trigger={() => <button className="btn but mx-1">Print</button>}
        content={() => componentRef.current}
      />
      <Link className="navbar-brand" to="/introrv">
            <button className="btn but mx-1" onClick={handleRv}>
              Save
            </button>
      </Link>
      <Link className="navbar-brand" to="/createresume">
            <button className="btn but mx-1">
              Edit Rv
            </button>
      </Link>
    </div>
  );
};

export default Resumetemplete;
