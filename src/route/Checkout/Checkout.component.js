import React, { Component } from "react";
import SourceCheckout from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper";

import CheckoutSteps from "../../component/CheckoutSteps/CheckoutSteps.component";

export default class Checkout extends SourceCheckout {
  render() {
    const steps = [
      {
        name: "SHIPPING_STEP",
        title: "Shipping",
        blockName: "Shipping",
      },
      {
        name: "BILLING_STEP",
        title: "Review & Payments",
        blockName: "Billing",
      },
      {
        name: "DETAILS_STEP",
        title: "Details",
        blockName: "Details",
      },
    ];

    return (
      <main block="Checkout">
        <CheckoutSteps checkoutStep={this.props.checkoutStep} steps={steps} />
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}
