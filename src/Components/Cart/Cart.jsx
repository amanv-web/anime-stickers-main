import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/slice/addcart";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notify = () => toast("Sticker removed from your cart. 🗑️",{
    progressStyle: { background: 'red' },  bodyClassName: "text-md ",  className: "w-[80%] sm:w-[50%] md:w-full mx-0 sm:mx-auto",
    position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, 
  });

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center mt-10">
          <h1 className="text-4xl font-bold p-4">Your Cart</h1>
        </div>

        {/* Items Table */}
        {products.length > 0 ? (
          <div className="overflow-hidden flex justify-center ">
            <table className="w-3/4 border-collapse bg-white">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-4">Items</th>
                  <th className="p-4"></th> <th className="p-4">Quantity</th> 
                  <th className="p-4">Price</th>
                  <th className="p-4 ">Remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-4 flex items-center w-20">
                      <img
                        className="min-w-20 max-h-20 mr-4"
                        src={product.image}
                        alt={product.name}
                      />
                     
                    </td>
                    <td className="">
                    <span>{product.name}</span>
                    </td>
                    <td className="p-4">
                      <div className="relative w-20 ">
                        <input
                          type="number"
                          name="Quantity"
                          className=" bg-white  p-2 w-full  text-center"
                          min={1}
                          value={product.quantity}
                        />
                      </div>
                    </td>
                    <td className="p-4">${product.price}</td>
                    <td className="p-4">
                      <button onClick={() => { dispatch(remove(product.id)); notify(); } } >
                        <CloseIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <>
            <div className="flex justify-center p-4">
              <img
                className="md:w-40 bg-transparent"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXivEkJ2UUrt_cxUobj90UKk7QzAmiK8dTwg&s"
                alt="Empty cart"
              />
            </div>
            <div>
              <h1 className="text-2xl p-10 text-center font-bold">
                No Sticker in your cart
              </h1>
            </div>
          </>
        )}
      </div>

      <div className="w-full bg-primary sticky bottom-0 h-20 flex items-center justify-around">
        <div className=" p-4">
          <h1 className="text-xl text-white">Total</h1>
          <h1 className="text-2xl text-white">
            ${products.reduce((acc, product) => acc + product.price, 0)}
          </h1>
        </div>
        <div className=" ">
          <button className=" p-3  bg-primary-tertiary rounded-lg hover:bg-primary-secondary drop-shadow-sm  hover:text-white">
            Proceed to payment
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
