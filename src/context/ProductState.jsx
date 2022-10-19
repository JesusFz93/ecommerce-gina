import React, { useReducer, useCallback } from 'react';
import ProductContext from './ProductContext';
import productReducer from './ProductReducer';
import { 
  obtenerProductosService, 
  obtenerProductoService 
} from "../services/productServices";


const initialState = {
  products: [],
  product: {
    id: "",
    name: "",
    description: "",
    image: "",
    price: "",
  },
  cart: [],
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  const obtenerProductos = useCallback(
    async () => {
      const resp = await obtenerProductosService()
      const products = resp.data.map((obj) => {
        return {
          id: obj._id,
          name: obj.name,
          description: obj.description,
          image: obj.image,
          price: obj.price,
        };
      });

      dispatch({
        type: "OBTENER_PRODUCTOS",
        payload: products,
      });
    },
    [],
  );

  const obtenerProducto = useCallback(async (id) => {
    const res = await obtenerProductoService(id);
    const producto = {
      id: res.data._id,
      name: res.data.name,
      description: res.data.description,
      image: res.data.image,
      price: res.data.price,
    };

    dispatch(
      {
        type: "OBTENER_PRODUCTO",
        payload: producto
      }
    );
  }, []);

  const agregarProductoCarrito = async (id) => {
    const res = await obtenerProductoService(id);
    const product = {
      id: res.data._id,
      name: res.data.name,
      description: res.data.description,
      image: res.data.image,
      price: res.data.price,
    };

    const productoEncontrado = globalState.cart.find((producto) => {
      return product.id === producto.id
    })

    if(!productoEncontrado) {
      dispatch({
        type: "AGREGAR_PRODUCTO_CARRITO",
        payload: product,
      });
        
    }
  };

  const eliminarProductoCarrito = (id) => {
    dispatch({
      type: "ELIMINAR_PRODUCTO_CARRITO",
      payload: id,
    })
  }

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        obtenerProductos,
        obtenerProducto,
        product: globalState.product,
        agregarProductoCarrito,
        cart: globalState.cart,
        eliminarProductoCarrito,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;