import React from 'react';
import "./Vegetables.css";
import {useSelector,useDispatch} from "react-redux";
import {clearErrors,getProduct} from "../../actions/productAction"; 


const Vegetables = () => {
  return (
   <>
   <body className="back">
    <div className="sidenav">
    <a href="seasonals.html" style={{ borderBottom: "#333 solid" }}>
      <b>-Seasonals</b>
    </a>
    <a href="#Green" style={{ borderBottom: "#333 solid" }}>
      <b>-Green vegetables</b>
    </a>
    <a href="vegetables.html" style={{ borderBottom: "#333 solid" }}>
      <b>-Daily veggies</b>
    </a>
    <a href="#Fruits" style={{ borderBottom: "#333 solid" }}>
      <b>-Fruits</b>
    </a>
    <a href="#Exotics" style={{ borderBottom: "#333 solid" }}>
      <b>-Exotics</b>
    </a>
  </div>
  <h1 style={{ textAlign: "center", marginTop: 20 }}>
    <b>DAILY VEGGIES</b>
  </h1>
  <div className="rect">
    <div className="box" style={{ marginLeft: 40 }}>
      <div
        className="content"
        style={{ backgroundImage: 'url("potato.webp")' }}
      />
      <b>
        {" "}
        <p id="po">Potato(Aloo)</p>
      </b>
      <p>Rs 20/kg</p>
      <form>
        <label htmlFor="quantity" style={{ color: "white" }}>
          quantity (Kg):
        </label>
        <input type="number" id="quantity" name="quantity" min={1} max={10} />
        <br />
        ;
        <input
          type="submit"
          defaultValue="Add to cart"
          style={{ marginTop: 5 }}
        />
      </form>
    </div>
    <div className="box">
      <div
        className="content"
        style={{ backgroundImage: 'url("tomato.webp")' }}
      />
      <b>
        {" "}
        <p id="po">Tomato(tamatar)</p>
      </b>
      <p>Rs 130/kg</p>
      <form>
        <label htmlFor="quantity" style={{ color: "white" }}>
          quantity (Kg):
        </label>
        <input type="number" id="quantity" name="quantity" min={1} max={10} />
        <br />
        ;
        <input
          type="submit"
          defaultValue="Add to cart"
          style={{ marginTop: 5 }}
        />
      </form>
    </div>
    <div className="box">
      <div
        className="content"
        style={{ backgroundImage: 'url("onion2.jpg")' }}
      />
      <b>
        <p id="po">Onion(pyaaz)</p>
      </b>
      <p>Rs 40/kg</p>
      <form>
        <label htmlFor="quantity" style={{ color: "white" }}>
          quantity (Kg):
        </label>
        <input type="number" id="quantity" name="quantity" min={1} max={10} />
        <br />
        ;
        <input
          type="submit"
          defaultValue="Add to cart"
          style={{ marginTop: 5 }}
        />
      </form>
    </div>
  </div>
  <div className="rect">
    <div className="box1" style={{ marginLeft: 40 }}>
      <div
        className="content"
        style={{ backgroundImage: 'url("ginger.jpg")' }}
      />
      <b>
        {" "}
        <p id="po">Ginger(adrak)</p>
      </b>
      <p>Rs 200/kg</p>
      <form>
        <label htmlFor="quantity" style={{ color: "white" }}>
          quantity (Kg):
        </label>
        <input type="number" id="quantity" name="quantity" min={1} max={10} />
        <br />
        ;
        <input
          type="submit"
          defaultValue="Add to cart"
          style={{ marginTop: 5 }}
        />
      </form>
    </div>
    <div className="box1">
      <div
        className="content"
        style={{ backgroundImage: 'url("garlic2.jpg")' }}
      />
      <b>
        {" "}
        <p id="po">Garlic(lehsun)</p>
      </b>
      <p>Rs 55/kg</p>
      <form>
        <label htmlFor="quantity" style={{ color: "white" }}>
          quantity (Kg):
        </label>
        <input type="number" id="quantity" name="quantity" min={1} max={10} />
        <br />
        ;
        <input
          type="submit"
          defaultValue="Add to cart"
          style={{ marginTop: 5 }}
        />
      </form>
    </div>
    <div className="box1">
      <div
        className="content"
        style={{ backgroundImage: 'url("Lemon.jpg")' }}
      />
      <b>
        {" "}
        <p id="po">Lemon(nimbu)</p>
      </b>
      <p>Rs 40/kg</p>
      <form>
        <label htmlFor="quantity" style={{ color: "white" }}>
          quantity (Kg):
        </label>
        <input type="number" id="quantity" name="quantity" min={1} max={10} />
        <br />
        ;
        <input
          type="submit"
          defaultValue="Add to cart"
          style={{ marginTop: 5 }}
        />
      </form>
    </div>
  </div>
  <div className="rect">
    <div className="box2" style={{ marginLeft: 40 }}>
      <div
        className="content"
        style={{ backgroundImage: 'url("carrot2.jpg")' }}
      />
      <b>
        <p id="po">Carrot(gajar)</p>
      </b>
      <p>Rs 30/kg</p>
      <form>
        <label htmlFor="quantity" style={{ color: "white" }}>
          quantity (Kg):
        </label>
        <input type="number" id="quantity" name="quantity" min={1} max={10} />
        <br />
        ;
        <input
          type="submit"
          defaultValue="Add to cart"
          style={{ marginTop: 5 }}
        />
      </form>
    </div>
    <div className="box2">
      <div
        className="content"
        style={{ backgroundImage: 'url("pumpkin2.jpg")' }}
      />
      <b>
        <p id="po">Pumpkin(kaddu)</p>
      </b>
      <p>Rs 22/kg</p>
      <form>
        <label htmlFor="quantity" style={{ color: "white" }}>
          quantity (Kg):
        </label>
        <input type="number" id="quantity" name="quantity" min={1} max={10} />
        <br />
        ;
        <input
          type="submit"
          defaultValue="Add to cart"
          style={{ marginTop: 5 }}
        />
      </form>
    </div>
    <div className="box2">
      <div
        className="content"
        style={{ backgroundImage: 'url("brinjal.jpg")' }}
      />
      <b>
        <p id="po">Brinjal(baingan)</p>
      </b>
      <p>Rs 30/kg</p>
      <form>
        <label htmlFor="quantity" style={{ color: "white" }}>
          quantity (Kg):
        </label>
        <input type="number" id="quantity" name="quantity" min={1} max={10} />
        <br />
        ;
        <input
          type="submit"
          defaultValue="Add to cart"
          style={{ marginTop: 5 }}
        />
      </form>
    </div>
  </div>
  </body>
  </>
  );
};

export default Vegetables;
