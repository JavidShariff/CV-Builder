import React, { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./IntroRv.css";
import { MyContext } from "../context/MyContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const filterRv = (searchrv,rv) => {
  if(!searchrv) return rv;

  return rv.filter((app)=>{ return app.FileNo.includes(searchrv)});
}
const IntroRv = () => {

  const { rv, deleteRv, setRv,uid,editRv,clearinfo } = useContext(MyContext);
  const [searchrv,setSearchrv] = useState("");
  const filterit = filterRv(searchrv,rv)
  useEffect(() => {
    const fetchdata = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          if(doc.data().id === uid){
            list.push({id:doc.id,FileNo : doc.data().FileNo,img:doc.data().img,PAF:doc.data().PAF,Name:doc.data().Name,...doc});
          }
        });
        setRv(list);
      } catch (error) {
      }
    };
    fetchdata();
  },[]);
  return (
    <div className="intro">
      <div className="d-flex title">
        <h3 className="mx-3">Resume</h3>
        <input type="text" className="searchrv" placeholder="Search By File NO " onChange={(e)=>{setSearchrv(e.target.value)}}/>
        <Link className="navbar-brand" to="/createresume">
          <button className="btn" onClick={clearinfo} style={{ width: "15rem" }}>
            create resume
          </button>
        </Link>
      </div>
      <hr />
      <div className="d-flex card1">
        {
        filterit.map((note) => {
          return (
            <div className="card mx-2 my-2" style={{ width: "18rem" }}>
              <div className="card-body">
              <div >
                <img src = {note.img}  className = "cardimg"alt="" />
              </div>
                <h5 className="card-title">File Number : {note.FileNo}</h5>
                <h5 className="card-title">Name : {note.Name}</h5>
                <h5 className="card-title">Post Applied For : {note.PAF}</h5>
                <i
                  className="icon fa-solid fa-trash mx-1"
                  onClick={() => {
                    deleteRv(note.id);
                  }}
                ></i>
                <Link className="navbar-brand" to="/createresume">
                <i className="icon fa-solid fa-pen-to-square mx-1" onClick={()=>{editRv(note.id)}}></i>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default IntroRv;
