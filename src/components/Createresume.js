import React, { useContext } from "react";
// import './Resumetemplete';
import { Link , useNavigate } from "react-router-dom";
import "./Createresume.css";
import { MyContext } from "../context/MyContext";
import { update } from "firebase/database";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Createresume = () => {
  const navigate = useNavigate();
  const { info, onchange, addRv, updateRv,setInfo,changeimg,setFile } = useContext(MyContext);
  const check = (e)=>{
    e.preventDefault();
    if(info.Name === ""){
      toast.error("Please fill the name", {
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
    else if( info.FileNo === ""){
      toast.error("Please fill the File No", {
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
    else if(info.PAF === ""){
      toast.error("Please fill the post applied for section", {
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
      navigate("/tempresume")
    }
  }
  return (
    <div className=" card container">
      <form className="row g-3">
        <h4>DETAILS</h4>
        <div className="col-md-6">
        <label htmlFor="inputEmail4" className="fontCRv form-label">
            NAME
            <i class="mx-1 fa-solid fa-star-of-life"></i>
          </label>
          <input
            type="text"
            value={info.Name}
            name="Name"
            onChange={onchange}
            className="inpCRv form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            POST APPLIED FOR
            <i class="mx-1 fa-solid fa-star-of-life"></i>
          </label>
          <input
            type="text"
            value={info.PAF}
            name="PAF"
            onChange={onchange}
            className="inpCRv form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            MONTHLY SALARY
          </label>
          <input
            type="text"
            value={info.MSalary}
            name="MSalary"
            onChange={onchange}
            className="inpCRv form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label fontCRv">
            FILE NO
            <i class="mx-1 fa-solid fa-star-of-life"></i>
          </label>
          <input
            type="text"
            value={info.FileNo}
            name="FileNo"
            onChange={onchange}
            className="inpCRv form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="fontCRv form-label">
            COUNTRY
          </label>
          <input
            type="text"
            value={info.Country}
            onChange={onchange}
            name="Country"
            className="inpCRv form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="fontCRv form-label">
            DATE OF BIRTH
          </label>
          <input
            type="date"
            onChange={onchange}
            name="DOB"
            value={info.DOB}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="fontCRv form-label">
            PLACE OF BIRTH
          </label>
          <input
            type="text"
            onChange={onchange}
            name="POB"
            value={info.POB}
            className="inpCRv form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="fontCRv form-label">
            HEIGHT
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Height"
            value={info.Height}
            className="inpCRv form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="fontCRv form-label">
            WEIGHT
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Weight"
            value={info.Weight}
            className="inpCRv form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            SEX
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Sex"
            value={info.Sex}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="fontCRv form-label">
            RELIGION
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Religion"
            value={info.Religion}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="fontCRv form-label">
            AGE
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Age"
            value={info.Age}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="fontCRv form-label">
            MARTIAL STATUS
          </label>
          <input
            type="text"
            onChange={onchange}
            name="MS"
            value={info.MS}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="fontCRv form-label">
            CHILDREN
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Children"
            value={info.Children}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="fontCRv form-label">
            COMPLEXTION
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Complextion"
            value={info.Complextion}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="formFile" className="fontCRv form-label">
            UPLOAD THE IMAGE
          <input type="file" className="form-control my-1" id="formFile" name="file" onChange={changeimg}/>
          </label>
        </div>
        <div className="col-md-12">
        <hr />
        <h4 className="mt-4">KNOWM LANGUAGES</h4>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            READING
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Reading"
            value={info.Reading}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            SPEAKING
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Speaking"
            value={info.Speaking}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            WRITING
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Writing"
            value={info.Writing}
            className="inpCRv mb-4 form-control"
            id="inputCity"
          />
        </div>
        <hr />
        <h4>QUALIFICATION</h4>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            ELEMENTRY SCHOOL
          </label>
          <input
            type="text"
            onChange={onchange}
            name="ES"
            value={info.ES}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            HIGH SCHOOL
          </label>
          <input
            type="text"
            onChange={onchange}
            name="HS"
            value={info.HS}
            className="inpCRv form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            COLLEGE
          </label>
          <input
            type="text"
            onChange={onchange}
            name="College"
            value={info.College}
            className="inpCRv mb-4 form-control"
            id="inputCity"
          />
        </div>
        <hr />
        <h4>PASSPORT DETAILS</h4>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            PASSPORT NO
          </label>
          <input
            type="text"
            onChange={onchange}
            name="PassportNo"
            value={info.PassportNo}
            className="form-control inpCRv"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            PLACE OF ISSUE
          </label>
          <input
            type="text"
            onChange={onchange}
            name="POI"
            value={info.POI}
            className="form-control inpCRv"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            DATE OF ISSUE
          </label>
          <input
            type="text"
            onChange={onchange}
            name="DOI"
            value={info.DOI}
            className="form-control inpCRv"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            DATE OF EXPIRE
          </label>
          <input
            type="text"
            onChange={onchange}
            name="DOE"
            value={info.DOE}
            className="form-control inpCRv"
            id="inputCity"
          />
        </div>
        <div className="mb-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="fontCRv form-label">
              EXPERIENCE
            </label>
            <input
              type="text"
              onChange={onchange}
              name="Exp"
              value={info.Exp}
              className="form-control inpCRv"
              id="inputCity"
            />
          </div>
          <div className="col-md-6 my-2">
            <label htmlFor="inputEmail4" className="fontCRv form-label">
              FIRST TIME?
            </label>
            <input
              type="text"
              onChange={onchange}
              name="FT"
              placeholder="Yes/No"
              value={info.FT}
              className="form-control inpCRv"
              id="inputCity"
            />
          </div>
        </div>
        <hr />
        <h4>PREVIOUS EXPERIENCE</h4>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            COUNTRY
          </label>
          <input
            type="text"
            onChange={onchange}
            name="PCN"
            value={info.PCN}
            className="form-control inpCRv"
            id="inputCity"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="fontCRv form-label">
            PERIOD
          </label>
          <input
            type="text"
            onChange={onchange}
            name="Period"
            value={info.Period}
            className="form-control mb-4 inpCRv"
            id="inputCity"
          />
        </div>
        <hr />
        <h4>WORKING PERFERENCE</h4>
        <div className="col-md-4">
          <label htmlFor="inputState" className="fontCRv form-label">
            1st PERFERENCE
          </label>
          <select
            id="inputState"
            onChange={onchange}
            name="Pref1"
            value={info.Pref1}
            className="form-select"
          >
            <option selected>NONE</option>
            <option>CAR CLEANING</option>
            <option>CAR WASHING</option>
            <option>CAR CLEANING</option>
            <option>SEWING</option>
            <option>COOKING</option>
            <option>CLEANING</option>
            <option>WASHING</option>
            <option>BABY SITTING</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="fontCRv form-label">
            2st PERFERENCE
          </label>
          <select
            id="inputState"
            onChange={onchange}
            name="Pref2"
            value={info.Pref2}
            className="form-select"
          >
            <option selected>NONE</option>
            <option>CAR CLEANING</option>
            <option>CAR WASHING</option>
            <option>CAR CLEANING</option>
            <option>SEWING</option>
            <option>COOKING</option>
            <option>CLEANING</option>
            <option>WASHING</option>
            <option>BABY SITTING</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="fontCRv form-label">
            3st PERFERENCE
          </label>
          <select
            id="inputState"
            onChange={onchange}
            name="Pref3"
            value={info.Pref3}
            className="form-select"
          >
            <option selected>NONE</option>
            <option>CAR CLEANING</option>
            <option>CAR WASHING</option>
            <option>CAR CLEANING</option>
            <option>SEWING</option>
            <option>COOKING</option>
            <option>CLEANING</option>
            <option>WASHING</option>
            <option>BABY SITTING</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="fontCRv form-label">
            4st PERFERENCE
          </label>
          <select
            id="inputState"
            onChange={onchange}
            name="Pref4"
            value={info.Pref4}
            className="form-select"
          >
            <option selected>NONE</option>
            <option>CAR CLEANING</option>
            <option>CAR WASHING</option>
            <option>CAR CLEANING</option>
            <option>SEWING</option>
            <option>COOKING</option>
            <option>CLEANING</option>
            <option>WASHING</option>
            <option>BABY SITTING</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="fontCRv form-label">
            5st PERFERENCE
          </label>
          <select
            id="inputState"
            onChange={onchange}
            name="Pref5"
            value={info.Pref5}
            className="form-select"
          >
            <option selected>NONE</option>
            <option>CAR CLEANING</option>
            <option>CAR WASHING</option>
            <option>CAR CLEANING</option>
            <option>SEWING</option>
            <option>COOKING</option>
            <option>CLEANING</option>
            <option>WASHING</option>
            <option>BABY SITTING</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="fontCRv form-label">
            6st PERFERENCE
          </label>
          <select
            id="inputState"
            onChange={onchange}
            name="Pref6"
            value={info.Pref6}
            className="form-select"
          >
            <option selected>NONE</option>
            <option>CAR CLEANING</option>
            <option>CAR WASHING</option>
            <option>CAR CLEANING</option>
            <option>SEWING</option>
            <option>COOKING</option>
            <option>CLEANING</option>
            <option>WASHING</option>
            <option>BABY SITTING</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="fontCRv form-label">
            7st PERFERENCE
          </label>
          <select
            id="inputState"
            onChange={onchange}
            name="Pref7"
            value={info.Pref7}
            className="form-select"
          >
            <option selected>NONE</option>
            <option>CAR CLEANING</option>
            <option>CAR WASHING</option>
            <option>CAR CLEANING</option>
            <option>SEWING</option>
            <option>COOKING</option>
            <option>CLEANING</option>
            <option>WASHING</option>
            <option>BABY SITTING</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="fontCRv form-label">
            8st PERFERENCE
          </label>
          <select
            id="inputState"
            onChange={onchange}
            name="Pref8"
            value={info.Pref8}
            className="form-select"
          >
            <option selected>NONE</option>
            <option>CAR CLEANING</option>
            <option>CAR WASHING</option>
            <option>CAR CLEANING</option>
            <option>SEWING</option>
            <option>COOKING</option>
            <option>CLEANING</option>
            <option>WASHING</option>
            <option>BABY SITTING</option>
          </select>
        </div>

        <div className="col-12">
            <button className="btn"  onClick={check}>
              Generate
            </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Createresume;
