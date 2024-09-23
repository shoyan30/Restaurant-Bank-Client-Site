import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import AxiosSecure from './AxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = AxiosSecure();
    const queryClient = useQueryClient();

    // Fetch the cart items
    const { data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    });

    // Mutation for deleting an item
    const deleteMutation = useMutation({
        mutationFn: async (id) => {
            return axiosSecure.delete(`/carts/${id}`);
        },
        onSuccess: () => {
            // Invalidate the cart query to refetch the updated cart data
            queryClient.invalidateQueries(['cart', user?.email]);
        }
    });

    return [cart, deleteMutation.mutateAsync]; // Return both cart and delete mutation
};

export default useCart;
