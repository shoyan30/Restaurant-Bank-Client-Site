import React, { useContext } from 'react';
import SectionTitles from '../../../Components/SectionTitles';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import AxiosSecure from '../../../Hooks/AxiosSecure';


const PaymentHistory = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = AxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`);
            return res.data;
        }
    });
    return (
        <div>
            <SectionTitles
                subHeading={"At a glance"}
                heading={"payment history"}
            />

            <div>
                <p className='text-2xl font-bold mb-4'>Total Payment:{payments.length}</p>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        <thead>
                            <tr className="bg-gray-400 w-full text-lg font-bold">

                                <th>EMAIL</th>
                                <th>CATEGORY</th>
                                <th>TOTAL PRICE</th>
                                <th>PAYMENT DATE</th>
                                <th>STATUS</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map(payment => <tr key={payment._id}>
                                    <td>{payment.email}</td>
                                    <td>Category</td>
                                    <td>${payment.price}</td>
                                    <td>{payment.date}</td>
                                    <button className="btn btn-info text-white mb-2"><td>{payment.status}</td></button>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;