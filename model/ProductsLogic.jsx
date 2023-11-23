
const API_URL = "http://145.120.189.164//bit-academy/React_lessen/React_native/React-native-Frontend&Backend/index.php?class=products&method=";
const httpOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json',
  }
};
const ProductsLogic = {

  async getProducts() {
    const url = `${API_URL}list`;

    try {
      const response = await fetch(url, httpOptions);
      const data = await response.json();
      if (data) {
        return data.data;
      }
      return [];
    } catch (error) {
      console.log("error", error);
    }
  },
  async getProduct(id) {
    const url = `${API_URL}read&id=${id}`;
    try {
      const response = await fetch(url, httpOptions);
      const data = await response.json();
      if (data) {
        return data.data
      }
      return [];
    } catch (error) {
      console.log("error", error);
    }
  },
}
export default ProductsLogic;