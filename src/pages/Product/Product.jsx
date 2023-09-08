import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          ipsum dicta suscipit soluta, recusandae reprehenderit quis unde
          officia molestias cum deserunt eius voluptas nihil ratione dolor.
          Ipsam ullam culpa dolores.
        </p>
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prevState) => (prevState === 1 ? 1 : prevState - 1))
            }
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prevState) => prevState + 1)}>
            +
          </button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
          <div className="info">
            <span>Vendor : Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag : T-Shirt, Women, Top</span>
          </div>
          <div className="details">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr/>
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
