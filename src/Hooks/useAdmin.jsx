// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import AxiosSecure from "./AxiosSecure";


// const useAdmin = () => {

//     const {user} = useContext(AuthContext);
//     const axiosSecure = AxiosSecure()
//     const {data:isAdmin, isAdminPending:isAdminLoading} = useQuery({
//         queryKey: [user?.email, 'isadmin'],
//         queryFn: async() =>{
//             const res = await axiosSecure.get(`/users/admin/${user.email}`);
//             // console.log(res.data)
//             return res.data?.admin
//         }
//     })
//      return[isAdmin, isAdminLoading]
// };

// export default useAdmin;

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AxiosSecure from "./AxiosSecure";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext); // Access loading from AuthContext
    const axiosSecure = AxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isadmin'],
        queryFn: async () => {
            if (!user?.email) {
                return false;
            }
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        },
        enabled: !!user?.email && !loading, // Only run when user is loaded and defined
    });

    return [isAdmin, isAdminLoading];
};


export default useAdmin;
