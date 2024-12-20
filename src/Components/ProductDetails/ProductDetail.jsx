import Images from "./Images";
import { Link, NavLink, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../../ContextApi/ContextApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add, updatePrice } from "../Redux/slice/addcart";
import { IoMdRemoveCircle } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);
  const { id } = useParams();
  const { products } = useContext(AppContext);
  const product = products.find((item) => item.id === parseInt(id));  
  const [updatedValue, setUpdatedValue] = useState(product.price);
  const price = updatedValue  
  const dispatch = useDispatch();
  const notify = () =>
    toast("Sticker added to your cart! 🛒", { 
      progressStyle: { background: 'green' }, bodyClassName: "text-md ",  className: " lg:left-0 left-20 w-[80%]  md:w-full mr-0 sm:mr-auto",
      position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, 
      
    });
  
  
  const handleAddToCart = () => {
    dispatch(add({ ...product, quantity }));  // Dispatch add action with quantity
  };
  const handlePrice = () => {
    dispatch(updatePrice({ ...product, price }));  // Dispatch add action with price
  };


  useEffect(() => {
    const value = (product.price + parseInt(size)) * quantity;
    setUpdatedValue(value);
  }, [size, quantity, product.price]);
  return (
    <>
      <div className="flex justify-center flex-wrap gap-10 pt-16 pb-20  bg-primary-quaternary dark:bg-gray-400">
        <div>
          <Images/>
        </div>
        <div>
          <Link>
            <NavLink to="/">
              <button className="border-2 border-primary p-2  mb-3 hover:bg-primary hover:text-primary-quaternary  sm:w-22  w-full">
                Back to all products
              </button>
            </NavLink>
          </Link>
          <h1 className="text-4xl font-bold text-primary mb-3  w-96">
            {product.name}
          </h1> 
          <p className="w-96 text-sm pb-2">{product.description} </p>
          <p className="text-5xl text-primary mb-3"> $ {updatedValue} </p>
          <p className="text-red-900 line-through">$ 15</p>
          <div className="flex gap-10 mb-8 pt-2">
            <div className="relative w-32 ">
              <label htmlFor="Quantity" className="block ">
                Quantity
              </label>
              <input
                type="number"
                name="Quantity"
                className=" bg-white  p-2 pl-10 pr-10 w-full rounded-3xl text-center"  
                defaultValue={1}
                min={1}
                value={quantity}
                readOnly
              />

              <IoMdRemoveCircle
                className=" absolute bottom-1  text-3xl   text-primary "
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              />
              <IoMdAddCircle
                className=" absolute bottom-1 right-0 text-3xl   text-primary "
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              />
            </div>
            <div>
              <label htmlFor="size" className="block  ">
                Select Size
              </label>
              <select
                name="Select Size"
                className="p-2 pl-10  pr-10 w-full "
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="0">4 x 4</option>
                <option value="3">5 x 5</option>
                <option value="5">6 x 6</option>
              </select>
            </div>
          </div>
          <div>
            <Link className="gap-2 ">
              <NavLink to="#">
                <button
                  onClick={() => {
                    dispatch(add(product)),handleAddToCart() ,handlePrice(),notify();
                  }}
                  
                  className=" m-auto w-6/12  bg-cyan-700 px-5 py-2.5 text-center -medium text-white hover:bg-cyan-800  dark:hover:bg-cyan-700 text-lg mr- "
                >
                  Add to cart
                  <i className="fa-solid fa-cart-shopping  text-lg ml-2"></i>
                </button>
              </NavLink>
              <NavLink to="/Cart">
                <button className=" m-auto  border-2 border-primary p-2 ml-6 mb-4 hover:bg-primary hover:text-primary-quaternary  text-lg w-5/12 ">
                  Go to cart
                  <i className="fa-solid fa-cart-shopping  text-lg ml-2"></i>
                </button>
              </NavLink>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
