import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mymode, mynewmode] = useState("light")
  const [mywritemode, mynewwritemode] = useState("Enable dark mode")
  const [myalert, mynewalert] = useState(null)

  const mybasealert = (mytype, mymessage) => {
    mynewalert({
      type: mytype,
      message: mymessage
    })
    setTimeout(() => {
      mynewalert(null)
    }, 1500);
  }

  const [mytxtmode, mynewtxtmode] = useState({
    color: "black",
    backgroundColor: "white"
  })

  const myclick = () => {
    remove()
    if (mymode === "light") {
      mynewmode("dark");
      mynewwritemode("Enable light mode");
      mynewtxtmode({
        color: "white",
        backgroundColor: "rgb(25 27 36)"
      });
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#070e2a"
      mybasealert("success", "Dark mode activated")
      setTimeout(() => {
        mynewalert(null)
      }, 1000);
      // document.title = "Text EDITOR-DARK MODE"


      // setInterval(() => {

      //   document.title = "Text EDITOR-DARK MODE"
      // }, 1000);
      // setInterval(() => {

      //   document.title = "Text EDITOR"
      // }, 2000);
    }
    else {
      mynewmode("light");
      mynewwritemode("Enable dark mode");
      mynewtxtmode({
        color: "black",
        backgroundColor: "white"
      })
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white"
      mybasealert("success", "Light mode activated")
      // document.title = "Text EDITOR"
      // setInterval(() => {

      //   document.title = "Text EDITOR-LIGHT MODE"
      // }, 1000);
      // setInterval(() => {

      //   document.title = "Text EDITOR"
      // }, 2000);
    }
  }
  const remove = () => {
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-info")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-light")
  }

  const mynew2click = (cls) => {
    remove()
    // console.log(cls)
    document.body.classList.add("bg-" + cls)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Editor" about="About us" mode={mymode} mytoggle={myclick} writemode={mywritemode} mynewclick={mynew2click} />
        <Alert alert={myalert} />
        <Routes>
          {/* <Navbar /> */}
          <Route exact path="/TextEditor/" element={<Textform title="Text Editor - Word and Character Counter" txtmode={mytxtmode} alert={mybasealert} />} />
          <Route exact path="/TextEditor/about" element={<About mystyle={mytxtmode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
