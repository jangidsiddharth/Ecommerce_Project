import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../components/elements/Layout";
const Dashboard = React.lazy(() => import("../pages/dashboard"));
const ProductDetail = React.lazy(() => import("../pages/productdetails"));
const Cart = React.lazy(() => import("../pages/cart"));
const Routers = () => {
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ];
  return (
    <Suspense
      fallback={
        <div>
          <h3>Loading...</h3>
        </div>
      }
    >
      <Layout />
      {useRoutes(routes)}
    </Suspense>
  );
};

export default Routers;
