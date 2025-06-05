import React, { useContext } from "react";
import { Link,useNavigate  } from "react-router-dom";
import "./Createjoborder.css";
import { MyContext } from "../context/MyContext";
import { update } from "firebase/database";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Createjoborder = () => {
  const { joInfo, onchangeJo, handleJo, addJo, updateJo, componentRef } =
    useContext(MyContext);

    const navigate = useNavigate();
    const check = (e)=>{
      e.preventDefault();
      if(joInfo.NoR === ""){
        toast.error("Please fill the Receipt No", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
      else if( joInfo.Cname === ""){
        toast.error("Please fill the Customer name", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
      else if(joInfo.Ename === ""){
        toast.error("Please fill the Employee name", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
      else{
        navigate("/tempjoborder")
      }
    }

  return (
    <div className=" card container">
      <form className="row g-3">
      <h3> FORM DETAILS</h3>
          <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            POST
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="Post"
            value={joInfo.Post}
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            COUNTRY
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="JCountry"
            value={joInfo.JCountry}
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            DATE
          </label>
          <input
            type="date"
            onChange={onchangeJo}
            name="Date"
            value={joInfo.Date}
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="d-flex">
            <label className="fontCJo">NEW</label>
            <input
            type="checkbox"
            className="Checkbox"
            name="New"
            checked = {joInfo.New}
            onChange={onchangeJo}
            />
          </div>
          <div className="d-flex">
            <label className="fontCJo">CHANGE</label>
            <input
            type="checkbox"
            className="Checkbox"
            name="Change"
            checked = {joInfo.Change}
            onChange={onchangeJo}
            />
          </div>
          <hr className="mt-4" />
        <h3> SPONSER DETAILS</h3>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label fontCJo">
            CUSTOMER NAME
            <i className="fa-solid fa-star-of-life mx-2"></i>
          </label>
          <input
            type="text"
            value={joInfo.Cname}
            name="Cname"
            onChange={onchangeJo}
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label fontCJo">
            BUILDING
          </label>
          <input
            type="text"
            value={joInfo.Building}
            name="Building"
            onChange={onchangeJo}
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label fontCJo">
            APT NO
          </label>
          <input
            type="text"
            value={joInfo.APNo}
            name="APNo"
            onChange={onchangeJo}
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label fontCJo">
            QID
          </label>
          <input
            type="text"
            value={joInfo.Qid}
            name="Qid"
            onChange={onchangeJo}
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            MOB/TEL
          </label>
          <input
            type="text"
            value={joInfo.MOB}
            onChange={onchangeJo}
            name="MOB"
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label fontCJo">
            E-MAIL
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="Email"
            value={joInfo.Email}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            ZONE
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="Zone"
            value={joInfo.Zone}
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            STREET
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="Street"
            value={joInfo.Street}
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            APPROVEL NO
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="AplNo"
            value={joInfo.AplNo}
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label fontCJo">
            ISSUED
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="IssuedS"
            value={joInfo.IssuedS}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            EXPIRED
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="ExpireS"
            value={joInfo.ExpireS}
            className="form-control"
            id="inputCity"
          />
        </div>

        <h3>RECEIPT</h3>
        <div className="col-md-1">
          <label className="fontCJo">CASH</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked = {joInfo.CashR}
            name="CashR"
            onChange={onchangeJo}
          />
        </div>
        <div className="col-md-1">
          <label className="fontCJo">CHEQUE</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked = {joInfo.ChequeR}
            name="ChequeR"
            onChange={onchangeJo}
          />
        </div>
        <div className="col-md-3 mx-1">
          <div className="d-flex">
            <label htmlFor="inputPassword4" className="fontCJo form-label mx-1 ">
              NO 
            </label>
              <i className="fa-solid fa-star-of-life fontCJo"></i>
            <input
              type="text"
              onChange={onchangeJo}
              style={{ width: "20rem", height: "2rem" }}
              name="NoR"
              value={joInfo.NoR}
              className="form-control mx-2"
              id="inputCity"
            />
          </div>
        </div>
        <div className="col-md-3 mx-1">
          <div className="d-flex">
            <label htmlFor="inputPassword4" className="form-label mx-2 fontCJo">
              DATE
            </label>
            <input
              type="date"
              onChange={onchangeJo}
              style={{ width: "20rem", height: "2rem" }}
              name="DateR"
              value={joInfo.DateR}
              className="form-control"
              id="inputCity"
            />
          </div>
        </div>
        <div className="col-md-3 mx-1">
          <div className="d-flex">
            <label htmlFor="inputPassword4" className="form-label mx-2 fontCJo">
              AMOUNT
            </label>
            <input
              type="text"
              onChange={onchangeJo}
              style={{ width: "20rem", height: "2rem" }}
              name="AmountR"
              value={joInfo.AmountR}
              className="form-control"
              id="inputCity"
            />
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            DATE
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="DateR1"
            value={joInfo.DateR1}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="DateR2"
            value={joInfo.DateR2}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="DateR3"
            value={joInfo.DateR3}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            RECEIPT NO
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="RNo1"
            value={joInfo.RNo1}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="RNo2"
            value={joInfo.RNo2}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="RNo3"
            value={joInfo.RNo3}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            AMOUNT QR
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="Aqr1"
            value={joInfo.Aqr1}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="Aqr2"
            value={joInfo.Aqr2}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="Aqr3"
            value={joInfo.Aqr3}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            BALANCE QR
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="Bqr1"
            value={joInfo.Bqr1}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="Bqr2"
            value={joInfo.Bqr2}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="Bqr3"
            value={joInfo.Bqr3}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <div className="d-flex">
            <p className="mx-4 fontCJo">VISA Paid By</p>
            <label className="fontCJo">OFFICE</label>
            <input
            type="checkbox"
            className="Checkbox"
            name="Office"
            checked = {joInfo.Office}
            onChange={onchangeJo}
            />
          </div>
        </div>
        <div className="col-md-2">
          <label className="fontCJo">SPONSER</label>
          <input
            type="checkbox"
            className="Checkbox"
            name="Sponser"
            checked = {joInfo.Sponser}
            onChange={onchangeJo}
          />
        </div>
        <div className="col-md-1">
          <label className="fontCJo">QR 100/-</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked = {joInfo.Qr100}
            name="Qr100"
            onChange={onchangeJo}
          />
        </div>
        <div className="col-md-1">
          <label className="fontCJo">QR 200/-</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked = {joInfo.Qr200}
            name="Qr200"
            onChange={onchangeJo}
          />
        </div>
        <div className="col-md-1">
          <label className="fontCJo">QR 300/-</label>
          <input
            type="checkbox"
            className="Checkbox"
            checked = {joInfo.Qr300}
            name="Qr300"
            onChange={onchangeJo}
            />
        </div>
        <div className="col-md-1">
          <label className="fontCJo">QR 500/-</label>
          <input
            type="checkbox"
            checked = {joInfo.Qr500}
            className="Checkbox"
            name="Qr500"
            onChange={onchangeJo}
          />
        </div>
        <div className="col-md-1">
          <label className="fontCJo">QR 1200/-</label>
          <input
            type="checkbox"
            className="Checkbox"
            name="Qr1200"
            checked = {joInfo.Qr1200}
            onChange={onchangeJo}
          />
        </div>
        <hr />
        <h3>EMPLOYEE</h3> 
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            NAME OF EMPLOYEE
            <i className="fa-solid fa-star-of-life mx-2"></i>
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="Ename"
            value={joInfo.Ename}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            PASSPORT NO
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="PasNo"
            value={joInfo.PasNo}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            RELIGION
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="ReligionE"
            value={joInfo.ReligionE}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            AGENT
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="Agent"
            value={joInfo.Agent}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            VISA NO
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="VisaNo"
            value={joInfo.VisaNo}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            ISSUED
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="IssuedE"
            value={joInfo.IssuedE}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            EXPIRY
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="ExpiryE"
            value={joInfo.ExpiryE}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            ARRIVAL
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="ArrivalE"
            value={joInfo.ArrivalE}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            WARRNTY EXPIRY
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="WarrExpiry"
            value={joInfo.WarrExpiry}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            EMPLOYEE QID
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="Eqid"
            value={joInfo.Eqid}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            QID EXPIRY
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="QidExp"
            value={joInfo.QidExp}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            RETURN DATE
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="ReturnDT"
            value={joInfo.ReturnDT}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            TOTAL WORKING DAYS
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="TWD"
            value={joInfo.TWD}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputPassword4" className="form-label fontCJo">
            TOTAL SALARY
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="TotalSL"
            value={joInfo.TotalSL}
            className="form-control"
            id="inputCity"
          />
        </div>
        <hr className="mt-4" />
        <h3>PAYMENT DETAILS</h3>
        <div className="col-md-1">
          <label className="mx-2 fontCJo">CASH</label>
          <input
            type="checkbox"
            className="Checkbox"
            name="CashP"
            checked = {joInfo.CashP}
            onChange={onchangeJo}
          />
        </div>
        <div className="col-md-1">
          <label className="fontCJo">CHEQUE</label>
          <input
            type="checkbox"
            className="Checkbox"
            name="ChequeP"
            checked = {joInfo.ChequeP}
            onChange={onchangeJo}
          />
        </div>
        <div className="col-md-3 mx-1">
          <div className="d-flex">
            <label htmlFor="inputPassword4" className="fontCJo form-label mx-2 ">
              NO
            </label>
            <input
              type="text"
              onChange={onchangeJo}
              style={{ width: "20rem", height: "2rem" }}
              name="NoP"
              value={joInfo.NoP}
              className="form-control"
              id="inputCity"
            />
          </div>
        </div>
        <div className="col-md-3 mx-1">
          <div className="d-flex">
            <label htmlFor="inputPassword4" className="fontCJo form-label mx-2 ">
              DATE
            </label>
            <input
              type="date"
              onChange={onchangeJo}
              style={{ width: "20rem", height: "2rem" }}
              name="DateP"
              value={joInfo.DateP}
              className="form-control"
              id="inputCity"
            />
          </div>
        </div>
        <div className="col-md-3 mx-1">
          <div className="d-flex">
            <label htmlFor="inputPassword4" className="fontCJo form-label mx-2 ">
              AMOUNT
            </label>
            <input
              type="text"
              onChange={onchangeJo}
              style={{ width: "20rem", height: "2rem" }}
              name="AmountP"
              value={joInfo.AmountP}
              className="form-control"
              id="inputCity"
            />
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="fontCJo form-label">
            BILL NO
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="BNo1"
            value={joInfo.BNo1}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="BNo2"
            value={joInfo.BNo2}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="BNo3"
            value={joInfo.BNo3}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="fontCJo form-label">
            DATE
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="DateP1"
            value={joInfo.DateP1}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="DateP2"
            value={joInfo.DateP2}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="DateP3"
            value={joInfo.DateP3}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="fontCJo form-label">
            AMOUNT
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="A1"
            value={joInfo.A1}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="A2"
            value={joInfo.A2}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="A3"
            value={joInfo.A3}
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword4" className="fontCJo form-label">
            BALANCE
          </label>
          <input
            type="text"
            onChange={onchangeJo}
            name="B1"
            value={joInfo.B1}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="B2"
            value={joInfo.B2}
            className="form-control"
            id="inputCity"
          />
          <input
            type="text"
            onChange={onchangeJo}
            name="B3"
            value={joInfo.B3}
            className="form-control"
            id="inputCity"
          />
        </div>
        <label htmlFor="floatingTextarea2" className="fontCJo">NOTE</label>
        <div className="form-floating">
          <textarea
            className="form-control"
            value={joInfo.Note}
            onChange={onchangeJo}
            name="Note"
            id="floatingTextarea2"
            style={{"height": "100px"}}
          ></textarea>
        </div>
        <Link className="navbar-brand" to="/tempjoborder">
          <button className="btn" onClick={check}>
            Generate
          </button>
        </Link>

      </form>
      <ToastContainer/>
    </div>
  );
};

export default Createjoborder;
