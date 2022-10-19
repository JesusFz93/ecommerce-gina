import React, { useState, useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import CartList from "../components/CartList";
import Title from "../components/Title";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
import { NavLink } from 'react-router-dom';

const CartPage = () => {
  const { cart } = useContext(ProductContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((acc, producto) => acc + producto.price, 0));
  }, [cart]);

  return (
    <>
      <Title titulo="Tu carrito de compras" />
      <main className="row pt-5">
        <article className="col-md-12">
          <CartList />
        </article>
      </main>
      {
        cart.length > 0 ? (
          <>
            <section className="row pt-5">
              <h5>Monto a pagar</h5>
              <article className="col-md-12">
                <h2>${total}.00 MXN</h2>
              </article>
            </section>
            <br />
            <section className="row">
              <h5>Métodos de pago</h5>
              <article className="col">
                <PaypalCheckoutButton
                  currency={"MXN"}
                  amount={total}
                  showSpinner={false} />
              </article>
            </section>
          </>
        ) : (
          <section className="row">
            <article className="col">
              <h5>Aún no hay productos en el carrito...</h5>
              <NavLink to="/productos" >
                <button className="btn btn-success btn-lg" type="button">Ver productos</button>
              </NavLink>
            </article>
          </section>
        )
      }
    </>
  );
};

export default CartPage;