import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Iqe9fSGgEHwLmE0HoiFsbE2pHoKtx9Brb9bIrNrNO7qAFzmkwEMQA9J8u95tTYCwfUgfEMbySgJ9Lxs709iNpsc00DNsFJFk5'

    const onToken = (token) => {
        console.log(token)
    }
    return(
        <StripeCheckout
            label= 'Pay Bill'
            name= 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description = {'your total is $$$ 42'}
            amount= {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeButton;

