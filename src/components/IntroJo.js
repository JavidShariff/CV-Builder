import React, { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./IntroRv.css";
import { MyContext } from "../context/MyContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const filterjo = (searchjo,jo) => {
  if(!searchjo) return jo;

  return jo.filter((app)=>{ return app.NoR.includes(searchjo)});
}

const IntroRv = () => {
  const { jo, deleteJo, setJo,uid,editJo,clearjo } = useContext(MyContext);
  const [searchjo,setSearchjo] = useState("");
  const filterit = filterjo(searchjo,jo)
  useEffect(() => {
    const fetchdata = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "JobOrder"));
        querySnapshot.forEach((doc) => {
          if(doc.data().id === uid){
            list.push({id:doc.id,NoR:doc.data().NoR,APNo : doc.data().APNo,Cname:doc.data().Cname,Ename:doc.data().Ename,...doc});
            console.log(doc.id, " => ", doc.data().id);
          }
        });
        setJo(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  },[]);
  return (
    <div className="intro">
      <div className="d-flex title">
        <h3 className="mx-3">Job Order</h3>
        <input type="text" className="searchrv" placeholder="Search By Recipt No " onChange={(e)=>{setSearchjo(e.target.value)}}/>
        <Link className="navbar-brand" to="/createjoborder">
          <button className="btn" onClick={clearjo} style={{ width: "15rem" }}>
            create Job Order
          </button>
        </Link>
      </div>
      <hr />
      <div className="d-flex card1">
        {filterit.map((note) => {
          return (
            <div className="card mx-2 my-2" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Recepit Number : {note.NoR}</h5>
                <h5 className="card-title"> Customer Name : {note.Cname}</h5>
                <h5 className="card-title">Employee Name : {note.Ename}</h5>
                <i
                  className="icon fa-solid fa-trash mx-1"
                  onClick={() => {
                    deleteJo(note.id);
                  }}
                ></i>
                <Link className="navbar-brand" to="/createjoborder">
                <i className="icon fa-solid fa-pen-to-square mx-1" onClick={()=>{editJo(note.id)}}></i>
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
