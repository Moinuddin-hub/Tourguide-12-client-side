import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePackage = () => {
    const AxiosSecure=useAxiosSecure();
    const {user}=useAuth();
    const {refetch, data: cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn:async ()=>{
            const res=await AxiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return[cart,refetch]
};

export default usePackage;