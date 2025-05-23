import api from "../utils/api";

class CartService {
  getAllCarts() {
    return api.get("/carts");
  }
}
const CartServices = new CartService();
export default CartServices;
