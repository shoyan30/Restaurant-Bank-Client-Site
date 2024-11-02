import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {

    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching menu:", error);
    //             setLoading(false);
    //         });
    // }, []);

    // Return both menu and the setter to update it outside the hook
    // return [menu, setMenu, loading];

    const {data: menu=[], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })
    return [menu, loading, refetch];
};

export default useMenu;
