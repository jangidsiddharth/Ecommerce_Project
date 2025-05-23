import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../contexts/cartcontext/cartctxt";
const HeaderPage = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="flex items-center h-14 w-full bg-gray-100 justify-start sticky top-0 z-10">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex gap-10">
          <Link to="/">Dashboard</Link>
          <div className="ml-4 flow-root lg:ml-8">
            <Link to="/cart" className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                aria-hidden="true"
                className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {totalItems}
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
