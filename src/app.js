import logo from './logo.svg';
import './app.css';
import AppHeader from './appheader';
import { useState, useEffect } from 'react';
import Bloglist from './bloglist';
import Company from './company';
import useFetch from './useFetch';

function App() {
  const couse = "React js"
  const [blogdata, change] = useState([
    { 'id': '1', 'title': 'Angular', 'desc': 'this content described about angular', 'author': 'jhon' },
    { 'id': '2', 'title': 'reactjs', 'desc': 'this content described about reactjs', 'author': 'rishan' },
    { 'id': '3', 'title': 'dot net core', 'desc': 'this content described about dot net core', 'author': 'jhon' },
    { 'id': '4', 'title': 'jQuery', 'desc': 'this content described about jQuery', 'author': 'rishan' },
    { 'id': '5', 'title': 'sql', 'desc': 'this content described about Sql', 'author': 'rishan' }
  ]);
  const [header, headchange] = useState("React class");
  // const [companydata, campanychange] = useState(null);
  // const [isloaded, changeload] = useState(true);
  // const [errorinfo, SetError] = useState(null);
  const FunctionDelete = (id) => {
    const newlist = blogdata.filter(item => item.id != id);
    change(newlist)
    headchange("React");


  }
  
  // useEffect(() => {

  //   fetch("http://localhost:8000/company").then(res => {
  //     console.log(res);
  //     if (!res.ok) {
  //       throw Error('Failed to fatch the data');
  //     }
  //     return res.json();
  //   }).then(result => {
  //     setTimeout(() => {
  //       campanychange(result);
  //       changeload(false);
  //     }, 3000);
  //   }).catch(res => {
  //     SetError(res.message);
  //     changeload(false);
  //   })

  // }, [])
  const{data : companydata,isloaded,errorinfo}=useFetch('http://localhost:8000/company');
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader title="Welcome Gannu Techiees" course={couse}></AppHeader>

        {/* <Bloglist blog={blogdata.filter(item=>item.author=='rishan')} author="Author is Rishan" />
        <Bloglist blog={blogdata.filter(item=>item.author=='jhon')} author="Author is Jhon" /> */}
        {/* <Bloglist blog={blogdata} author="All blogs" FunctionDelete={FunctionDelete} /> */}
        {errorinfo && <div className='errormessage'>{errorinfo}</div>}
        {isloaded && <div>Please Wait .....</div>}
        {companydata && <Company companydata={companydata}></Company>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;