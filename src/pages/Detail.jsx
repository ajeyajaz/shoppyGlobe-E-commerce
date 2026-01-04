import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";
import ProductDetail from "../components/ProductDetail";
import { addCart } from "../redux/features/CartSlice";

function DetailPage() {

    const { id } = useParams();
    const url = `https://dummyjson.com/products/${id}`;
    const { data: product, loader, error } = useFetch(url);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
    if (!product || loader) return <p>Fetching...</p>;

    return (
        <main>
            <Header />
            <ProductDetail product={product} handleAddToCart={handleAddToCart}  />
        </main>

    )
}

export default DetailPage