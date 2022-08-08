import ShippingPayment from "../components/ShippingPayment";

const Checkout = ({ totalCartItems, totalPriceCartItems }) => {
  return (
    <div>
      <ShippingPayment
        totalCartItems={totalCartItems}
        totalPriceCartItems={totalPriceCartItems}
      />
    </div>
  );
};

export default Checkout;
