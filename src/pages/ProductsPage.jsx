import React from 'react';
import ProductList from '../components/ProductList';
import Title from '../components/Title';

const ProductsPage = () => {
  return (
    <>
      <Title titulo="Cafés Doodle" />
      <main className="row">
        <article className="col">
          <ProductList />
        </article>
      </main>
    </>
  );
};

export default ProductsPage;