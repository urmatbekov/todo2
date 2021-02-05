import React from "react"
import ReactDOM from "react-dom"
import Footer from "./components/footer";
import Header from "./components/header"
import Main from "./components/main";

ReactDOM.render(
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
  , document.getElementById("root"))

const todu = (
  <div>
    <div>
      <h2>My To Do List</h2>
      <span >Add</span>
    </div>
    <ul >
      <li>Hit the gym</li>
      <li>Pay bills</li>
      <li>Meet George</li>
      <li>Buy eggs</li>
      <li>Read a book</li>
      <li>Organize office</li>
    </ul>
  </div>
  )