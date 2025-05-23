import api from "../utils/api";

class ProductService {
  getProducts() {
    return api.get("/products");
  }

  getProductDetails(id: any) {
    const intId = parseInt(id);
    return api.get(`/products/${intId}`);
  }
}
const ProductServices = new ProductService();
export default ProductServices;
