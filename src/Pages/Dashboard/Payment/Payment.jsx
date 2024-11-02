import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import SectionTitles from '../../../Components/SectionTitles';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {
    return (
        <div>
            <div>
                <SectionTitles

                    heading={"Payment"}
                />
            </div>
            <div className='w-2/4 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;