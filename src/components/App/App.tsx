import Filter from './../Filter/filter';
import Products from 'components/Products/products';
import './../App/app.css'
function App() {
  // 分两个部分size选择和内容显示
  return (
    <div id='container' style={{ marginTop: '50px', padding: '0 20px' }}>
        <Filter />
      {/* 产品图 */}
        <Products />
    </div>
  );
}

export default App;
