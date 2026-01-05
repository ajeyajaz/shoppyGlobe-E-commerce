import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { useParams} from "react-router";
import ProductDetail from "../components/ProductDetail";
import { addCart } from "../redux/features/CartSlice";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import Message from "../components/Message";

function DetailPage() {

    const { id } = useParams();
    const url = `https://dummyjson.com/products/${id}`;

    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(()=> {
        const controller = new AbortController();
        setLoader(true);

        axios.get(url, {signal: controller.signal})
        .then((res) => setProduct(res.data))
        .catch((e)=> {
            if(!axios.isCancel(e)) setError(e.message);
        })
        .finally(()=> setLoader(false));

        return () => controller.abort();
    }, []);

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            brand: product.brand || null,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
            discountPercentage: product.discountPercentage,
        };
        dispatch(addCart(cartItem));
    }

    return (
        <>
            <Header />
            {product && <ProductDetail product={product} handleAddToCart={handleAddToCart} />}
            {loader && <Loader />}
            {error && (
                <Message
                    title="Guess something went wrong!"
                    message={error}        
                 />
            )}
        </>

    )
}

export default DetailPage