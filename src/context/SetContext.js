import React, { useState, useRef, useContext } from "react";
import { MyContext } from "./MyContext";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SetContext(props) {
  const componentRef = useRef();
  const [uid, setUid] = useState(`${localStorage.getItem("id")}`);
  const [rvid, setRvid] = useState("");
  const [rv, setRv] = useState([]);
  const [searchjo, setSearchjo] = useState("");
  const [joid, setJoid] = useState("");
  const [jo, setJo] = useState([]);
  const [img1, setImg1] = useState("");
  const [info, setInfo] = useState({
    FileNo: "",
    img: "",
    imgname: "",
    PAF: "",
    MSalary: "",
    Name: "", //DETAILS
    DOB: "",
    POB: "",
    Height: "",
    Weight: "",
    Age: "",
    Sex: "",
    Complextion: "",
    Religion: "",
    Children: "",
    Country: "",
    MS: "", //QUALIFICATION
    HS: "",
    College: "",
    ES: "",
    Reading: "", //KNOWN LANGUAGES
    Writing: "",
    Speaking: "",
    PassportNo: "", //PASSPORT DETAILS
    DOI: "",
    POI: "",
    DOE: "",
    Exp: "",
    PExp: "",
    FT: "",
    PCN: "", //PREVIOUS EXPERIENCE
    Period: "",
    Pref1: "", //PREFERENCE
    Pref2: "",
    Pref3: "",
    Pref4: "",
    Pref5: "",
    Pref6: "",
    Pref7: "",
    Pref8: "",
  });

  const changeimg = async (e) => {
    try {
      const file = e.target.files[0];
      const name = new Date().getTime() + file.name;
      info.imgname = name;
      setInfo({ ...info, imgname: name });
      if (file !== "") {
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
              case "paused":
                break;
              case "running":
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              toast.success(`The Image ${file.name} is uploaded successfully`, {
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
              setInfo({...info,img:downloadURL});
            });
          }
        );
      }
    } catch (error) {}
  };

  const handleRv = async (e) => {
    try {
      if (rvid !== "") {
        try {
          await setDoc(doc(db, "users", rvid), {
            ...info,
            id: uid,
            timestamp: serverTimestamp(),
          });
        } catch (error) {
          console.log(error)
        }

        setRvid("");
        toast.success("The document is updated successfully", {
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
        return;
      }
      const docRef = await addDoc(collection(db, "users"), {
        ...info,
        id: uid,
        timestamp: serverTimestamp(),
      });

      toast.success("The document is added successfully", {
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
    } catch (e) {
      toast.error("There is a error in adding document. Try again ", {
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
  };

  const onchange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const deleteRv = async (id) => {
    try {
      const docRef = doc(db, "users", `${id}`);
      const docSnap = await getDoc(docRef);
      const img = docSnap.data().imgname;
      if (img !== "") {
        // Create a reference to the file to delete
        const desertRef = ref(storage, `${img}`);

        // Delete the file
        deleteObject(desertRef)
          .then(() => {
            // File deleted successfully
            console.log("deleted img")
          })
          .catch((error) => {
            // Uh-oh, an error occurred!
            console.log(" cant deleted img")
          });
      }
      const deletedata = await deleteDoc(doc(db, "users", `${id}`));
      setRv(
        rv.filter((e) => {
          return e.id !== id;
        })
      );
      toast.success("The document is deleted successfully", {
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
    } catch (error) {
      console.log(error.message);
      toast.error("There is a error in deleting. Try again ", {
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
  };

  const editRv = async (id) => {
    const docRef = doc(db, "users", `${id}`);
    const docSnap = await getDoc(docRef);
    setInfo({
      img: docSnap.data().img,
      imgname: docSnap.data().imgname,
      FileNo: docSnap.data().FileNo,
      PAF: docSnap.data().PAF,
      MSalary: docSnap.data().MSalary,
      Name: docSnap.data().Name, //DETAILS
      DOB: docSnap.data().DOB,
      POB: docSnap.data().POB,
      Height: docSnap.data().Height,
      Weight: docSnap.data().Weight,
      Age: docSnap.data().Age,
      Sex: docSnap.data().Sex,
      Complextion: docSnap.data().Complextion,
      Religion: docSnap.data().Religion,
      Children: docSnap.data().Children,
      Country: docSnap.data().Country,
      MS: docSnap.data().MS, //QUALIFICATION
      HS: docSnap.data().HS,
      College: docSnap.data().College,
      ES: docSnap.data().ES,
      Reading: docSnap.data().Reading, //KNOWN LANGUAGES
      Writing: docSnap.data().Writing,
      Speaking: docSnap.data().Speaking,
      PassportNo: docSnap.data().PassportNo, //PASSPORT DETAILS
      DOI: docSnap.data().DOI,
      POI: docSnap.data().POI,
      DOE: docSnap.data().DOE,
      Exp: docSnap.data().Exp,
      PExp: docSnap.data().PExp,
      FT: docSnap.data().FT,
      PCN: docSnap.data().PCN, //PREVIOUS EXPERIENCE
      Period: docSnap.data().Period,
      Pref1: docSnap.data().Pref1, //PREFERENCE
      Pref2: docSnap.data().Pref2,
      Pref3: docSnap.data().Pref3,
      Pref4: docSnap.data().Pref4,
      Pref5: docSnap.data().Pref5,
      Pref6: docSnap.data().Pref6,
      Pref7: docSnap.data().Pref7,
      Pref8: docSnap.data().Pref8,
    });
    setRvid(id);
  };

  const clearinfo = () => {
    setInfo({
      imgname:"",
      img: "",
      FileNo: "",
      PAF: "",
      MSalary: "",
      Name: "", //DETAILS
      DOB: "",
      POB: "",
      Height: "",
      Weight: "",
      Age: "",
      Sex: "",
      Complextion: "",
      Religion: "",
      Children: "",
      Country: "",
      MS: "", //QUALIFICATION
      HS: "",
      College: "",
      ES: "",
      Reading: "", //KNOWN LANGUAGES
      Writing: "",
      Speaking: "",
      PassportNo: "", //PASSPORT DETAILS
      DOI: "",
      POI: "",
      DOE: "",
      Exp: "",
      PExp: "",
      FT: "",
      PCN: "", //PREVIOUS EXPERIENCE
      Period: "",
      Pref1: "", //PREFERENCE
      Pref2: "",
      Pref3: "",
      Pref4: "",
      Pref5: "",
      Pref6: "",
      Pref7: "",
      Pref8: "",
    });
  };

  const [joInfo, setJoInfo] = useState({
    Date: "",
    New: "",
    Change: "",
    Post: "",
    JCountry: "",
    Cname: "",
    Building: "",
    APNo: "",
    Qid: "",
    MOB: "",
    Email: "",
    Zone: "",
    Street: "",
    AplNo: "",
    IssuedS: "",
    ExpireS: "",
    CashR: "",
    ChequeR: "",
    NoR: "",
    DateR: "",
    AmountR: "",
    DateR1: "",
    DateR2: "",
    DateR3: "",
    RNo1: "",
    RNo2: "",
    RNo3: "",
    Aqr1: "",
    Aqr2: "",
    Aqr3: "",
    Bqr1: "",
    Bqr2: "",
    Bqr3: "",
    Office: "",
    Sponser: "",
    Qr100: "",
    Qr200: "",
    Qr300: "",
    Qr500: "",
    Qr1200: "",
    Ename: "",
    PasNo: "",
    ReligionE: "",
    Agent: "",
    VisaNo: "",
    IssuedE: "",
    ExpiryE: "",
    ArrivalE: "",
    WarrExpiry: "",
    Eqid: "",
    QidExp: "",
    ReturnDT: "",
    TWD: "",
    TotalSL: "",
    CashP: "",
    ChequeP: "",
    NoP: "",
    DateP: "",
    AmountP: "",
    DateP1: "",
    DateP2: "",
    DateP3: "",
    BNo1: "",
    BNo2: "",
    BNo3: "",
    A1: "",
    A2: "",
    A3: "",
    B1: "",
    B2: "",
    B3: "",
    Note: "",
    id: "",
  });

  const clearjo = () => {
    setJoInfo({
      Date: "",
      New: "",
      Change: "",
      Post: "",
      JCountry: "",
      Cname: "",
      Building: "",
      APNo: "",
      Qid: "",
      MOB: "",
      Email: "",
      Zone: "",
      Street: "",
      AplNo: "",
      IssuedS: "",
      ExpireS: "",
      CashR: "",
      ChequeR: "",
      NoR: "",
      DateR: "",
      AmountR: "",
      DateR1: "",
      DateR2: "",
      DateR3: "",
      RNo1: "",
      RNo2: "",
      RNo3: "",
      Aqr1: "",
      Aqr2: "",
      Aqr3: "",
      Bqr1: "",
      Bqr2: "",
      Bqr3: "",
      Office: "",
      Sponser: "",
      Qr100: "",
      Qr200: "",
      Qr300: "",
      Qr500: "",
      Qr1200: "",
      Ename: "",
      PasNo: "",
      ReligionE: "",
      Agent: "",
      VisaNo: "",
      IssuedE: "",
      ExpiryE: "",
      ArrivalE: "",
      WarrExpiry: "",
      Eqid: "",
      QidExp: "",
      ReturnDT: "",
      TWD: "",
      TotalSL: "",
      CashP: "",
      ChequeP: "",
      NoP: "",
      DateP: "",
      AmountP: "",
      DateP1: "",
      DateP2: "",
      DateP3: "",
      BNo1: "",
      BNo2: "",
      BNo3: "",
      A1: "",
      A2: "",
      A3: "",
      B1: "",
      B2: "",
      B3: "",
      Note: "",
    });
  };

  const handleJo = async (e) => {
    try {
      if (joid !== "") {
        try {
          await setDoc(doc(db, "JobOrder", joid), {
            ...joInfo,
            id: uid,
            timestamp: serverTimestamp(),
          });
        } catch (error) {
          console.log(error)
        }
        setJoid("");
        toast.success("The document is updated successfully", {
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
        return;
      }
      const docRef = await addDoc(collection(db, "JobOrder"), {
        ...joInfo,
        id: uid,
        timestamp: serverTimestamp(),
      });
      toast.success("The document is added successfully", {
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
    } catch (e) {
      toast.error("There is an error in adding the document", {
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
  };

  const onchangeJo = (e) => {
    if (e.target.type === "checkbox") {
      setJoInfo({ ...joInfo, [e.target.name]: e.target.checked });
    } else {
      setJoInfo({ ...joInfo, [e.target.name]: e.target.value });
    }
  };

  const deleteJo = async (id) => {
    try {
      let deletedata = await deleteDoc(doc(db, "JobOrder", `${id}`));
      setJo(
        jo.filter((e) => {
          return e.id !== id;
        })
      );
      toast.success("The document is deleted successfully", {
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
    } catch (error) {
      toast.error("There is an error in deleting the document. Try again", {
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
  };

  const editJo = async (id) => {
    const docRef = doc(db, "JobOrder", `${id}`);
    const docSnap = await getDoc(docRef);
    setJoInfo({
      Date: docSnap.data().Date,
      New: docSnap.data().New,
      Change: docSnap.data().Change,
      Post: docSnap.data().Post,
      JCountry: docSnap.data().JCountry,
      Cname: docSnap.data().Cname,
      Building: docSnap.data().Building,
      APNo: docSnap.data().APNo,
      Qid: docSnap.data().Qid,
      MOB: docSnap.data().MOB,
      Email: docSnap.data().Email,
      Zone: docSnap.data().Zone,
      Street: docSnap.data().Street,
      AplNo: docSnap.data().AplNo,
      IssuedS: docSnap.data().IssuedS,
      ExpireS: docSnap.data().ExpireS,
      CashR: docSnap.data().CashR,
      ChequeR: docSnap.data().ChequeR,
      NoR: docSnap.data().NoR,
      DateR: docSnap.data().DateR,
      AmountR: docSnap.data().AmountR,
      DateR1: docSnap.data().DateR1,
      DateR2: docSnap.data().DateR2,
      DateR3: docSnap.data().DateR3,
      RNo1: docSnap.data().RNo1,
      RNo2: docSnap.data().RNo2,
      RNo3: docSnap.data().RNo3,
      Aqr1: docSnap.data().Aqr1,
      Aqr2: docSnap.data().Aqr2,
      Aqr3: docSnap.data().Aqr3,
      Bqr1: docSnap.data().Bqr1,
      Bqr2: docSnap.data().Bqr2,
      Bqr3: docSnap.data().Bqr3,
      Office: docSnap.data().Office,
      Sponser: docSnap.data().Sponser,
      Qr100: docSnap.data().Qr100,
      Qr200: docSnap.data().Qr200,
      Qr300: docSnap.data().Qr300,
      Qr500: docSnap.data().Qr500,
      Qr1200: docSnap.data().Qr1200,
      Ename: docSnap.data().Ename,
      PasNo: docSnap.data().PasNo,
      ReligionE: docSnap.data().ReligionE,
      Agent: docSnap.data().Agent,
      VisaNo: docSnap.data().VisaNo,
      IssuedE: docSnap.data().IssuedE,
      ExpiryE: docSnap.data().ExpiryE,
      ArrivalE: docSnap.data().ArrivalE,
      WarrExpiry: docSnap.data().WarrExpiry,
      Eqid: docSnap.data().Eqid,
      QidExp: docSnap.data().QidExp,
      ReturnDT: docSnap.data().ReturnDT,
      TWD: docSnap.data().TWD,
      TotalSL: docSnap.data().TotalSL,
      CashP: docSnap.data().CashP,
      ChequeP: docSnap.data().ChequeP,
      NoP: docSnap.data().NoP,
      DateP: docSnap.data().DateP,
      AmountP: docSnap.data().AmountP,
      DateP1: docSnap.data().DateP1,
      DateP2: docSnap.data().DateP2,
      DateP3: docSnap.data().DateP3,
      BNo1: docSnap.data().BNo1,
      BNo2: docSnap.data().BNo2,
      BNo3: docSnap.data().BNo3,
      A1: docSnap.data().A1,
      A2: docSnap.data().A2,
      A3: docSnap.data().A3,
      B1: docSnap.data().B1,
      B2: docSnap.data().B2,
      B3: docSnap.data().B3,
      Note: docSnap.data().Note,
    });
    setJoid(id);
  };

  return (
    <MyContext.Provider
      value={{
        info,
        setInfo,
        onchange,
        handleRv,
        // setFile,
        uid,
        setUid,
        deleteRv,
        rv,
        setRv,
        editRv,
        clearinfo,
        joInfo,
        setJoInfo,
        onchangeJo,
        handleJo,
        deleteJo,
        jo,
        setJo,
        editJo,
        componentRef,
        clearjo,
        changeimg,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default SetContext;
