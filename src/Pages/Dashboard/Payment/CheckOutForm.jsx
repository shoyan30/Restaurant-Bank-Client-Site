import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import AxiosSecure from '../../../Hooks/AxiosSecure';
import useCart from '../../../Hooks/useCart';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOutForm = () => {

    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState()
    const [transactionId, SetTransactionId] = useState()
    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = AxiosSecure()
    const { user } = useContext(AuthContext)

    const [cart, refetch] = useCart()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    useEffect(() => {
        const res = axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret);
                console.log(res.data.clientSecret);

            })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('PaymentMethod', paymentMethod);
            setError(' ')
        }

        //confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Anonymous',
                    name: user?.displayName || 'Anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('Confirm Error')
        }
        else {
            console.log('PaymentIntent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                SetTransactionId(paymentIntent.id)

                //now save the payment history in the Database

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartId: cart.map(CartId => CartId._id),
                    menuId: cart.map(MenuId => MenuId.menuId),
                    status: 'Pending'

                }

                const res = await axiosSecure.post('/payment', payment);
                refetch()
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Successful Completed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                    
                }
                console.log('Payment History:', res)
            }
        }
    }
    return (
        <div className='bg-gray-400 p-8 text-white'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: 'white',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex justify-center mt-16">
                    <button className="px-6  w-48 py-2 bg-blue-500 text-white rounded" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>

                <div>
                    <p>{error}</p>
                </div>

                <div>
                    {transactionId && <p className='text-white font-bold'>Transaction ID:  {transactionId}</p>}
                </div>
            </form>
        </div>
    );
};

export default CheckOutForm;