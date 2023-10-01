import React, { useEffect, useState } from "react";
import "./index.scss";
const Home = () => {
  const [lol , setLol] = useState([])
  function List(){
    let data = JSON.parse(localStorage.getItem('key')) || []
    setLol(data)
  }

  useEffect(()=>{
    List()
  },[])
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          {lol.slice(lol.length - 1 , lol.length).map((el) => (
            <div className="home--block">
              <div>
              <h1>{el.name}</h1>
              <p>Frontend Developer</p>
              <div style={{display:"flex" , justifyContent:'space-between' , width:'300px'}}>
                <button className="btn1">Download CV</button>
                <button className="btn2">Learn More</button>
              </div>
              </div>
              <div className="home--block__div">
                <img
                  style={{
                    width: "450px",
                    height:'450px',
                    borderRadius: "60%"
                  }}
                  src={el.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;



// let obj = {
//   image: image,
//   name: name,
// }

// function Data (obj) {
//   let data = JSON.parse(localStorage.getItem('contact')) || []
//   data.push(obj)
//   localStorage.setItem('contact', JSON.stringify(data))
// }

// Data(obj)

// function List (){
//   let data = JSON.parse(localStorage.getItem('contact')) || []
// }