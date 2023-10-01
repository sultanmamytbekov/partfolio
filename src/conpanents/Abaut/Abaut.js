import React, { useEffect, useState } from "react";
import food from "../../img/Rectangle 13.png";
import './index.scss'
const Abaut = ({ onAddMenuItem  , num  , setNum}) => {
  const [productName, setProductName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const createProduct = () => {
    if(productName.length !== 0){
      const productData = {
        id: Date.now(),
        name: productName,
        image: selectedImage,
      };
      function Add(obj){
        let data = JSON.parse(localStorage.getItem('key')) || []
        data.push(obj);
        localStorage.setItem('key' , JSON.stringify(data))
      }

      Add(productData)
      if (onAddMenuItem) {
        onAddMenuItem(productData);
      }
    }
    
  
    setProductName("");
    setSelectedImage(null);
  };

  

  return (
    <div id="admin">
      <div className="container"></div>
      <div className="admin">
        
        <div className="info">
          <div className="admin-inputs">
            <input
              className="in1"
              placeholder="choose file"
              type="file"
              onChange={handleImageChange}
            />
            <input
              className="in2"
              type="text"
              placeholder="food name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            
          </div>
          <div className="foto">
            {selectedImage ? (
              <img src={selectedImage} alt="" />
            ) : (
              <img
                src={food}
                alt=""
                style={{
                  marginTop: "60px",
                  width: "477px",
                  height: "477px",
                }}
              />
            )}
          </div>
        </div>
        <div className="admin-btn">
          <button onClick={() => {
            createProduct()
            if (productName.length !== 0){
              setNum(num + 1)
            }
          }}>create</button>
        </div>
      </div>
    </div>
  );
};

export default Abaut;
