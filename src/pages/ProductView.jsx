import ProductViewDetails from "../components/ProductViewDetails";

const ProductView = (props) => {
  return (
    <div>
      <ProductViewDetails addItemCart={props.addItemCart} />
    </div>
  );
};

export default ProductView;
