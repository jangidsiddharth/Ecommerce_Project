import React from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import ProductServices from "../../services/productServices";
import { Products } from "../../models/product.model";
import { useCart } from "../../contexts/cartcontext/cartctxt";
function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [productDetails, setProductDetails] = React.useState({} as Products);

  React.useEffect(() => {
    ProductServices.getProductDetails(id).then((res) => {
      setProductDetails(res.data);
    });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(productDetails);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {productDetails.title}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                ${productDetails.price}
              </p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            productDetails.rating?.rate > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "size-5 shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">
                      {productDetails.rating?.rate} out of 5 stars
                    </p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {productDetails.rating?.count} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                {productDetails.description}
              </p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <img
            alt={productDetails.category}
            src={productDetails.image}
            className="aspect-square w-full rounded-lg object-contain"
          />
        </div>
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <div className="mt-10">
              <button
                onClick={handleAddToCart}
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Add to Cart
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
