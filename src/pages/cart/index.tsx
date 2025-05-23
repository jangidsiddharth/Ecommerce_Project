import { useCart } from "../../contexts/cartcontext/cartctxt";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {cart.length === 0 ? (
                <li className="py-10 text-center text-gray-500">
                  Your cart is empty.
                </li>
              ) : (
                cart.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="shrink-0">
                      <img
                        alt={product.title}
                        src={product.image}
                        className="size-24 rounded-md object-contain sm:size-32"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm font-medium text-gray-700">
                            {product.title}
                          </h4>
                          <p className="ml-4 text-sm font-medium text-gray-900">
                            ${product.price}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Quantity: {product.quantity}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-1 items-end justify-between">
                        <div className="ml-4">
                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </section>
        </form>
      </div>
    </div>
  );
};

export default CartPage;
