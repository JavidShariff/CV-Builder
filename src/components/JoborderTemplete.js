import React, { useRef, useContext } from "react";
import { MyContext } from "../context/MyContext";
import ReactToPrint from "react-to-print";
import "./JoborderTemplete.css";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const JoborderTemplete = () => {
  const { joInfo, setJoInfo,componentRef,handleJo } = useContext(MyContext);
  return (
    <div className="container">
      <div className="Joborder card">
      <div ref={componentRef} className="card">
        <h4 style={{ margin: "30px 10px 5px auto" }}>JOB ORDER</h4>
        <h4 style={{ margin: "0px 10px 5px auto" }}>2024</h4>

        <div className="d-flex mt-4">
          <div className="d-flex">
            <label
              htmlFor="inputPassword4"
              className="form-label font mx-1"
              style={{ "font-size": "12px" }}
            >
              DATE
            </label>
            <input
              type="text"
              name="Date"
              value={joInfo.Date}
              disabled
              className="form-control mx-1 inputInfo"
              id="inputPassword4"
            />
          </div>
          <div className="d-flex">
            <label className="form-label mx-2 font" style={{ "font-size": "12px" }}>
              NEW
            </label>
            <input
              type="checkbox"
              className="Checkbox"
              name="New"
              checked={joInfo.New}
            />
          </div>
          <div className="d-flex">
            <label className="form-label mx-1 font" style={{ "font-size": "12px" }}>
              CHANGE
            </label>
            <input
              type="checkbox"
              className="Checkbox"
              checked={joInfo.Change}
              name="Change"
            />
          </div>
          <div className="d-flex">
            <label
              htmlFor="inputPassword4"
              className="form-label mx-2 font"
              style={{ "font-size": "12px" }}
              >
              POST
            </label>
            <input
              type="text"
              name="Post"
              value={joInfo.Post}
              disabled
              className="form-control mx-1 inputInfo"
              id="inputPassword4"
              />
          </div>
          <div className="d-flex">
            <label
              htmlFor="inputPassword4"
              className="form-label mx-2 font"
              style={{ "font-size": "12px" }}
            >
              COUNTRY
            </label>
            <input
              type="text"
              name="JCountry"
              value={joInfo.JCountry}
              disabled
              className="form-control mx-1 inputInfo"
              id="inputPassword4"
              />
          </div>
        </div>
        <h4
          className="card mt-5"
          style={{ width: "79rem", padding: "0px 0px 0px 500px" }}
        >
          SPONSER DETAILS
        </h4>
        <div className="d-flex mx-5 px-5">
          <label htmlFor="inputEmail4" className="form-label font Cname">
            CUSTOMER NAME
          </label>
          <label htmlFor="inputEmail4" className="form-label font building">
            BUILDING
          </label>
          <label htmlFor="inputEmail4" className="form-label font APT">
            APT NO
          </label>
        </div>
        <div className="d-flex">
          <input
            type="text"
            value={joInfo.Cname}
            name="Cname"
            style={{ width: "500px" }}
            className="form-control inputInfo"
            id="inputEmail4"
            disabled
          />

          <input
            type="text"
            name="Building"
            style={{ width: "300px" }}
            value={joInfo.Building}
            className="inputInfo form-control"
            id="inputEmail4"
            disabled
          />
          <input
            type="text"
            value={joInfo.APNo}
            name="APNo"
            style={{ width: "300px" }}
            className="form-control inputInfo"
            id="inputEmail4"
            disabled
          />
        </div>
        <div className="d-flex QID">
          <label
            htmlFor="inputEmail4"
            style={{ "margin-left": "80px" }}
            className="form-label font"
          >
            QID
          </label>
          <label
            htmlFor="inputEmail4"
            style={{ "margin-left": "130px" }}
            className="form-label font"
          >
            MOB/TEL
          </label>
          <label
            htmlFor="inputEmail4"
            style={{ "margin-left": "130px" }}
            className="form-label font "
          >
            E-MAIL
          </label>
          <label
            htmlFor="inputEmail4"
            style={{ "margin-left": "200px" }}
            className="form-label font"
          >
            ZONE
          </label>
          <label
            htmlFor="inputEmail4"
            style={{ "margin-left": "290px" }}
            className="form-label font"
          >
            STREET
          </label>
        </div>
        <div className="d-flex">
          <input
            type="text"
            value={joInfo.Qid}
            name="Qid"
            style={{ width: "155px" }}
            className="form-control inputInfo"
            id="inputEmail4"
            disabled
          />

          <input
            type="text"
            name="MOB"
            style={{ width: "155px" }}
            disabled
            value={joInfo.MOB}
            className="inputInfo form-control"
            id="inputEmail4"
          />
          <input
            type="text"
            value={joInfo.Email}
            name="Email"
            style={{ width: "155px" }}
            className="form-control inputInfo"
            disabled
            id="inputEmail4"
          />
          <input
            type="text"
            name="Zone"
            style={{ width: "300px" }}
            value={joInfo.Zone}
            disabled
            className="inputInfo form-control"
            id="inputEmail4"
          />
          <input
            type="text"
            value={joInfo.Street}
            name="Street"
            disabled
            style={{ width: "300px" }}
            className="form-control inputInfo"
            id="inputEmail4"
          />
        </div>
        <div className="d-flex mx-2 my-4">
          <label htmlFor="inputPassword4" className="form-label font">
            APPROVEL NO
          </label>
          <input
            type="text"
            name="AplNo"
            value={joInfo.AplNo}
            className="form-control inputInfo"
            style={{ width: "300px" }}
            id="inputPassword4"
            disabled
          />
          <label htmlFor="inputEmail4" className="form-label font">
            ISSUED
          </label>
          <input
            type="text"
            name="IssuedS"
            value={joInfo.IssuedS}
            className="form-control inputInfo"
            style={{ width: "300px" }}
            id="inputCity"
            disabled
          />
          <label htmlFor="inputPassword4" className="form-label font">
            EXPIRED
          </label>
          <input
            type="text"
            name="ExpireS"
            value={joInfo.ExpireS}
            style={{ width: "340px" }}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />
        </div>
        <h4
          className="card"
          style={{ width: "79rem", padding: "0px 0px 0px 500px" }}
        >
          RECEIPT
        </h4>

        <div className=" my-3 d-flex">
          <label className="mx-3 font">CASH</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked={joInfo.CashR}
            name="CashR"
          />
          <label className="font">CHEQUE</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked={joInfo.ChequeR}
            name="ChequeR"
          />
          <label htmlFor="inputPassword4" className="form-label mx-2 font">
            NO
          </label>
          <input
            type="text"
            style={{ width: "15rem", height: "2rem" }}
            name="NoR"
            value={joInfo.NoR}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />
          <label htmlFor="inputPassword4" className="form-label mx-2 font">
            DATE
          </label>
          <input
            type="text"
            style={{ width: "15rem", height: "2rem" }}
            name="DateR"
            value={joInfo.DateR}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />
          <label htmlFor="inputPassword4" className="form-label mx-2 font">
            AMOUNT
          </label>
          <input
            type="text"
            style={{ width: "15rem", height: "2rem" }}
            name="AmountR"
            value={joInfo.AmountR}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />
        </div>
        <div className="d-flex">
          <div className="mx-3">
            <label htmlFor="inputPassword4" className="form-label font">
              DATE
            </label>
            <input
              type="text"
              name="DateR1"
              value={joInfo.DateR1}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="DateR2"
              value={joInfo.DateR2}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="DateR3"
              value={joInfo.DateR3}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
          </div>
          <div className="mx-5">
            <label htmlFor="inputPassword4" className="form-label font">
              RECEIPT NO
            </label>
            <input
              type="text"
              name="RNo1"
              value={joInfo.RNo1}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="RNo2"
              value={joInfo.RNo2}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="RNo3"
              value={joInfo.RNo3}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
          </div>
          <div className="mx-5">
            <label htmlFor="inputPassword4" className="form-label font">
              AMOUNT QR
            </label>
            <input
              type="text"
              name="Aqr1"
              value={joInfo.Aqr1}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="Aqr2"
              value={joInfo.Aqr2}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="Aqr3"
              value={joInfo.Aqr3}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
          </div>
          <div className="mx-5">
            <label htmlFor="inputPassword4" className="form-label font">
              BALANCE QR
            </label>
            <input
              type="text"
              name="Bqr1"
              value={joInfo.Bqr1}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="Bqr2"
              value={joInfo.Bqr2}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="Bqr3"
              value={joInfo.Bqr3}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
          </div>
        </div>
        <div className="d-flex mx-2 my-3">
          <p className="mx-4 font">VISA Paid By</p>
          <label className="font">OFFICE</label>
          <input
            type="checkbox"
            className="Checkbox"
            name="Office"
            checked={joInfo.Office}
          />
          <label className="font">SPONSER</label>
          <input
            type="checkbox"
            className="Checkbox"
            name="Sponser"
            checked={joInfo.Sponser}
          />
          <label className="font">QR 100/-</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked={joInfo.Qr100}
            name="Qr100"
          />
          <label className="font">QR 200/-</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked={joInfo.Qr200}
            name="Qr200"
          />
          <label className="font">QR 300/-</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked={joInfo.Qr300}
            name="Qr300"
          />
          <label className="font">QR 500/-</label>
          <input
            type="checkbox"
            checked={joInfo.Qr500}
            className="Checkbox"
            name="Qr500"
          />
          <label className="font">QR 1200/-</label>
          <input type="checkbox" className="Checkbox" name="Qr1200" checked={joInfo.Qr1200} />
        </div>
        <h4 className="card" style={{ width: "79rem", padding: "0px 0px 0px 500px" }}>
          EMPLOYEE
        </h4>
        <div className="d-flex" style={{"margin":"10px 0px 2px 0px"}}>
        <label htmlFor="inputPassword4" style={{"margin-left":"170px"}} className="form-label font">
            NAME OF EMPLOYEE
          </label>
          <label htmlFor="inputPassword4" style={{"margin-left":"250px"}} className="form-label font">
            PASSPORT NO
          </label>
          <label htmlFor="inputPassword4" style={{"margin-left":"200px"}} className="form-label font">
            RELIGION
          </label>
          <label htmlFor="inputPassword4" style={{"margin-left":"170px"}} className="form-label font">
            AGENT
          </label>
        </div>
        <div className="d-flex">
          <input
            type="text"
            name="Ename"
            value={joInfo.Ename}
            style={{"width":"25em"}}
            className="form-control inputInfo"
            id="inputCity"
            disabled
            />
          <input
            type="text"
            name="PasNo"
            style={{"width":"20em"}}
            value={joInfo.PasNo}
            className="form-control inputInfo"
            id="inputCity"
            disabled
            />
          <input
            type="text"
            name="ReligionE"
            style={{"width": "13em"}}
            value={joInfo.ReligionE}
            className="form-control inputInfo"
            id="inputCity"
            disabled
            />
          <input
            type="text"
            name="Agent"
            style={{"width": "13em"}}
            value={joInfo.Agent}
            className="form-control inputInfo"
            id="inputCity"
            disabled
            />
            </div>
            <div className="d-flex" style={{"margin-top":"10px"}}>
            <label htmlFor="inputPassword4" className="form-label font" style={{"margin-left":"120px"}}>
            VISA NO
          </label>
          <label htmlFor="inputPassword4" className="form-label font" style={{"margin-left":"230px"}}>
            ISSUED
          </label>
          <label htmlFor="inputPassword4" className="form-label font" style={{"margin-left":"180px"}}>
            EXPIRY
          </label>
          <label htmlFor="inputPassword4" className="form-label font" style={{"margin-left":"170px"}}>
            ARRIVAL
          </label>
          <label htmlFor="inputPassword4" className="form-label font" style={{"margin-left":"140px"}}>
            WARRNTY EXPIRY
          </label>
          </div>
          <div className="d-flex">
          <input
            type="text"
            name="VisaNo"
            value={joInfo.VisaNo}
            className="form-control inputInfo"
            style={{"width": "18em"}}
            id="inputCity"
            disabled
            />

          <input
            type="text"
            name="IssuedE"
            value={joInfo.IssuedE}
            style={{"width": "13em"}}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />

          <input
            type="text"
            name="ExpiryE"
            style={{"width": "13em"}}
            value={joInfo.ExpiryE}
            className="form-control inputInfo"
            id="inputCity"
            disabled
            />

          <input
            type="text"
            name="ArrivalE"
            style={{"width": "13em"}}
            value={joInfo.ArrivalE}
            className="form-control inputInfo"
            id="inputCity"
            disabled
            />
          <input
            type="text"
            name="WarrExpiry"
            style={{"width": "13em"}}
            value={joInfo.WarrExpiry}
            className="form-control inputInfo"
            id="inputCity"
            disabled
            />
            </div>

            <div className="d-flex" style={{"margin":"10px 0px 2px 0px"}}>
            <label htmlFor="inputPassword4" className="form-label font" style={{"margin-left":"90px"}}>
            EMPLOYEE QID
          </label>
          <label htmlFor="inputPassword4" className="form-label font" style={{"margin-left":"160px"}}>
            QID EXPIRY
          </label>
          <label htmlFor="inputPassword4" className="form-label font" style={{"margin-left":"160px"}}>
            RETURN DATE
          </label>
          <label htmlFor="inputPassword4" className="form-label font" style={{"margin-left":"120px"}}>
            TOTAL WORKING DAYS
          </label>
          <label htmlFor="inputPassword4" className="form-label font" style={{"margin-left":"110px"}}>
            TOTAL SALARY
          </label>
            </div>

            <div className="d-flex">

          <input
            type="text"
            name="Eqid"
            value={joInfo.Eqid}
            style={{"width": "14em"}}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />

          <input
            type="text"
            name="QidExp"
            style={{"width": "14em"}}
            value={joInfo.QidExp}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />

          <input
            type="text"
            name="ReturnDT"
            value={joInfo.ReturnDT}
            style={{"width": "14em"}}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />

          <input
            type="text"
            name="TWD"
            value={joInfo.TWD}
            style={{"width": "14em"}}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />

          <input
            type="text"
            name="TotalSL"
            value={joInfo.TotalSL}
            style={{"width": "14em"}}
            className="form-control inputInfo"
            id="inputCity"
            disabled
            />
      </div>
      <h4
          className="card mt-5"
          style={{ width: "79rem", padding: "0px 0px 0px 500px" }}
        >
          PAYMENT
        </h4>

        <div className=" my-3 d-flex">
          <label className="mx-3 font">CASH</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked={joInfo.CashP}
            name="CashP"
          />
          <label className="font">CHEQUE</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked={joInfo.ChequeP}
            name="ChequeP"
          />
          <label htmlFor="inputPassword4" className="form-label mx-2 font">
            NO
          </label>
          <input
            type="text"
            style={{ width: "15rem", height: "2rem" }}
            name="NoP"
            value={joInfo.NoP}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />
          <label htmlFor="inputPassword4" className="form-label mx-2 font">
            DATE
          </label>
          <input
            type="text"
            style={{ width: "15rem", height: "2rem" }}
            name="DateP"
            value={joInfo.DateP}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />
          <label htmlFor="inputPassword4" className="form-label mx-2 font">
            AMOUNT
          </label>
          <input
            type="text"
            style={{ width: "15rem", height: "2rem" }}
            name="AmountP"
            value={joInfo.AmountP}
            className="form-control inputInfo"
            id="inputCity"
            disabled
          />
        </div>
        <div className="d-flex">
          <div className="mx-3">
            <label htmlFor="inputPassword4" className="form-label font">
              DATE
            </label>
            <input
              type="text"
              name="DateP1"
              value={joInfo.DateP1}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="DateP2"
              value={joInfo.DateP2}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="DateP3"
              value={joInfo.DateP3}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
          </div>
          <div className="mx-5">
            <label htmlFor="inputPassword4" className="form-label font">
              BILL NO
            </label>
            <input
              type="text"
              name="BNo1"
              value={joInfo.BNo1}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="BNo2"
              value={joInfo.BNo2}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="BNo3"
              value={joInfo.BNo3}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
          </div>
          <div className="mx-5">
            <label htmlFor="inputPassword4" className="form-label font">
              AMOUNT
            </label>
            <input
              type="text"
              name="A1"
              value={joInfo.A1}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="A2"
              value={joInfo.A2}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="A3"
              value={joInfo.A3}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
          </div>
          <div className="mx-5">
            <label htmlFor="inputPassword4" className="form-label font">
              BALANCE
            </label>
            <input
              type="text"
              name="B1"
              value={joInfo.B1}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="B2"
              value={joInfo.B2}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
            <input
              type="text"
              name="B3"
              value={joInfo.B3}
              className="form-control inputInfoR"
              id="inputCity"
              disabled
            />
          </div>
        </div>
        <label htmlFor="floatingTextarea2" className="font mx-3 my-3">NOTE</label>
        <div class="form-floating">
          <textarea
            className="form-control mx-3"
            value={joInfo.Note}
            name="Note"
            id="floatingTextarea2"
            style={{"height": "100px","width":"70em"}}
            disabled
          ></textarea>
        </div>
        </div>
      </div>
      <ToastContainer/>
      <ReactToPrint
        trigger={() => <button className="btn but mx-1">Print</button>}
        content={() =>componentRef.current}
      />
      <Link className="navbar-brand" to="/introjo">
          <button className="btn but mx-1" onClick={handleJo}>
            Save
          </button>
      </Link>
      <Link className="navbar-brand" to="/createjoborder">
          <button className="btn but mx-1">
            Edit Job Order
          </button>
        </Link>
    </div>
  );
};

export default JoborderTemplete;