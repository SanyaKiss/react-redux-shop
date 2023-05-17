import React, { useState } from "react";
import axios from "axios";
import "../scss/sections/ProductBlock.scss";

import { useNavigate, useParams } from "react-router";
import { Product } from "../store/products/types";
import { useAppDispatch } from "../store/store";
import { addProduct } from "../store/cart/slice";

import Button from "../components/UI/Button";
import Loader from "../components/UI/Loader";
import Counter from "../components/UI/Counter";

const ProductBlock: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [count, setCount] = useState<number>(1);
  const [product, setProduct] = React.useState<Product>();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get<Product>(
          `https://637374ac348e9472990cef38.mockapi.io/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    }

    fetchProduct();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) return <Loader />;

  const addToCart = () => {
    dispatch(addProduct({
      product,
      quantity: count,
    }));
    setCount(1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="product-block">
      {product.id === id ? (
        <>
          <img src={product.imgUrl} className="product-block__img" />
          <div className="product-block__content">
            <div className="product-block__container">
              <h2 className="product-block__title">{product.title}</h2>
              <h3 className="product-block__price">£{product.price}</h3>
              <p className="product-block__description">
                {product.description}
              </p>
              <div className="product-block__btn-container">
                <Button
                  text="Add to cart"
                  color="#FFF"
                  background="#2A254B"
                  className="product-block__btn"
                  onClick={addToCart}
                />
                <Counter
                  count={count}
                  increase={() => increase()}
                  decrease={() => decrease()}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductBlock;
