import React from "react";
import { Link } from "react-router-dom";
import ProductServices from "../../services/productServices";
import { Products } from "../../models/product.model";

const Dashboard = () => {
  const [products, setProducts] = React.useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<Products[]>(
    []
  );
  const [categories, setCategories] = React.useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");

  React.useEffect(() => {
    ProductServices.getProducts().then((res) => {
      const data = res.data;
      setProducts(data);
      setFilteredProducts(data);

      const uniqueCategories = Array.from(
        new Set(data.map((item: Products) => item.category))
      ) as string[];
      setCategories(uniqueCategories);
    });
  }, []);

  React.useEffect(() => {
    if (!selectedCategory) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  const handleCategory = (e: any) => {};

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <select
          className="mb-6 p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <img
                alt={""}
                src={product.image}
                className="aspect-[3/4] w-full object-contain group-hover:opacity-75 sm:aspect-auto sm:h-96"
              />
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link to={`/product/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </Link>
                </h3>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
