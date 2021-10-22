import React from "react";
import CartContainer from "components/cart/CartContainer";
import PageTemplate from "components/pageTemplate/PageTemplate";

export default function Cart() {
  return (
    <PageTemplate className="cart-page">
      <CartContainer />
    </PageTemplate>
  );
}
