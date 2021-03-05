import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IRPLRIoaSSqiOgeGJ2cTnTExPNgj1yfqSFcjlyMTrS4kU4wPwUyyxJdMPM6s7WvODd6U2lMQhZPv6Id2FnmIpKs00tnWZ46JG';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label = "Pay Now"
        name = 'React shop'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = { onToken }
        stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;