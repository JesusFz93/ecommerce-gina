import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";

const CartList = () => {
  const { cart, eliminarProductoCarrito } = useContext(ProductContext);

  return (
    <>
      {
        cart?.map((producto) => (
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0" key={producto.id}>
              <div className="col-md-4">
                <img src={producto.image} className="img-fluid rounded-start" alt={producto.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{producto.name}</h4>
                  <h5 className="card-text">${producto.price}.00 mxn.</h5>

                  <button className="btn btn-danger"
                    onClick={() => eliminarProductoCarrito(producto.id)}>
                    Eliminar</button>
                </div>
              </div>
            </div>
            <br />
          </div>
        ))
      }
    </>
  );
};

export default CartList;