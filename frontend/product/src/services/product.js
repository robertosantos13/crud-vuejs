import { http } from './config';

export default {
  search() {
    return http.get('products');
  },
  create(product) {
    return http.post('product/form', product);
  },
  update(product) {
    return http.put('product/edit', product);
  },
  delete(product) {
    return http.delete(`product/delete?id=${product.id}`);
  },
};
