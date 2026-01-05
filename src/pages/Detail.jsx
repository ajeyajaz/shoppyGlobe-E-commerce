import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";
import ProductDetail from "../components/ProductDetail";
import { addCart } from "../redux/features/CartSlice";
import Loader from "../components/Loader";

function DetailPage() {

    const { id } = useParams();
    const url = `https://dummyjson.com/products/${id}`;
    const { data: product, loader, error } = useFetch(url);
    const dispatch = useDispatch();

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


    if (error) return <p>Error loading product</p>;
    if (loader) return <p>Fetching...</p>;

    return (
        <>
            <Header />
            {product && <ProductDetail product={product} handleAddToCart={handleAddToCart} />}
            {loader && <Loader />}
        </>

    )
}

export default DetailPage