import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/ProductContext';
import Title from '../components/Title';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const { obtenerProducto, product, agregarProductoCarrito } = useContext(ProductContext);

  const handleAgregarProductoCarrito = () => {
    agregarProductoCarrito(product);
  };

  useEffect(() => {
    obtenerProducto(id);
  }, [id, obtenerProducto]);

  return (
    <>
      <Title titulo="Pagina de producto" />

      <div className="card mb-3 mt-5" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt={product.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <h5 className="card-text"><small className="text-muted">${product.price}.00 mxn.</small></h5>
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleAgregarProductoCarrito}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;