import Header from '../components/Header'
import ProductList from '../components/ProductList'
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/features/CartSlice';
import Loader from '../components/Loader';

function Home() {

    const { data, error, loader } = useFetch('https://dummyjson.com/products');
    const dispatch = useDispatch();

    const handleAddCart = (product) => {
        const cartItem = {
            id: product.id,
            brand: product.brand || null,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
            discountPercentage: product.discountPercentage,
        };
        dispatch(addCart(cartItem))
    }


    if (error) {
        return <p>something went wrong..</p>
    }

    return (
        <>
            <Header />
            {data && <ProductList products={data?.products}  onClick={handleAddCart} /> }
            {loader && <Loader />}
        </>
    )
}

export default Home