import React from "react";
import { Card } from "flowbite-react";
import { useContext } from "react";
import { AppContext } from "../../ContextApi/ContextApi";
import { NavLink } from "react-router-dom";

function ItemCard() {
  const { products, setItems } = useContext(AppContext);

  return (
    <div className="lg:flex lg:flex-wrap grid grid-cols-2 w-auto   md:justify-center p-5 md:gap-20 gap-5 ">
      {products.map((data) => (
        <NavLink to={`/ProductDetail/${data.id}`} key={data.id}>
          <div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <Card className="max-w-sm flex flex-col bg-white p-4 shadow-md sm:w-72   ">
                <img
                  src={data.image}
                  className="hover:scale-105 hover:ease-out duration-300 "
                />
                <NavLink href="#">
                  <h5 className="md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    <span className="block md:hidden">
                      {data.name.length > 18
                        ? `${data.name.substring(0, 18)}...`
                        : data.name}
                    </span>
                    <span className="hidden md:block">{data.name}</span>
                  </h5>
                </NavLink>

                <div className="md:mb-5 md:mt-2.5  flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 ">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="md:text-3xl text-xl mt-4 font-bold text-gray-900 dark:text-white"> 
                    ${data.price}
                  </span>
                  <button
                    href="#"
                    className="rounded-lg bg-cyan-700 md:px-5 px-2 mt-4 md:py-2.5 py-2 text-center text-xs md:text-sm md:font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    View Items
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default ItemCard;
