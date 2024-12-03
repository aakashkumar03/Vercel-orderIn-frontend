import { useEffect, useState ,useCallback} from "react";
import { ShareableCart } from "../components/index.component";
import apiCall from "../utils/API";
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom'


const ShareableCartPage = () => {
  const [cartDetails,setCartDetails] = useState({})
  const [isLoading,setIsLoading] = useState(true)
  const { cartId } = useParams();

  const getCartDetails = useCallback(async () => {
    try {
      const response = await apiCall(
        import.meta.env.VITE_BACKEND_BASE_URL+`/api/cart/getCart/${cartId}`,
        "GET"
      );
      setCartDetails(response);
    } catch (error) {
      console.error("Failed to fetch cart details:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(()=>{
    getCartDetails()
  },[])
  

  if(isLoading)return <Loader/>
  
  return (
    <>
        <ShareableCart items={cartDetails?.items ??[]} total={cartDetails?.totalAmount ??0}/>
    </>
  )
}

export default ShareableCartPage