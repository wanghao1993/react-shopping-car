import ProductItem from './productItem';
import productList from 'static/json/products.json';
import './production.css';
const Products = () => {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ marginBottom: '20px' }}>Products found</div>
      <div id="products">
        {productList.data.products.map((item) => (
          <ProductItem productInfo={item} key={item.sku} />
        ))}
      </div>
    </div>
  );
};

export default Products;
