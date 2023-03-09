import { IProduct } from 'models';
interface IProp {
  productInfo: IProduct;
}
export default ({ productInfo }: IProp) => {
  return (
    <div>
      <img
        src={require(`static/products/${productInfo.sku}-1-product.webp`)}
        alt={productInfo.title}
      />
      <div style={{ textAlign: 'center', }}>
        {productInfo.title}
      </div>
      <div style={{ textAlign: 'center' }}>
        $
        <span style={{ fontSize: '18px', fontWeight: '500' }}>
        {productInfo.price}
        </span>
      </div>
      <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px', cursor: 'pointer', backgroundColor: 'black', color: 'white', padding: '10px 0px' }}>
        + 添加购物车
      </div>
    </div>
  );
};
