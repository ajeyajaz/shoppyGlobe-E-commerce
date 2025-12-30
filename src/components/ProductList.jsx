import useFetch from "../hooks/useFetch";
import ProductItem from "./ProductItem";

function ProductList() {

    const { data, error, loader } = useFetch('https://dummyjson.com/products');

    console.log(data)
    if (loader) {
        return <p>fetching...</p>
    }

    if (error) {
        return <p>something went wrong..</p>
    }

    return (
        <div
            className="grid grid-cols-1 justify-items-center items-center gap-y-15 gap-x-10
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {data.products.map(product => <ProductItem
                product={product}
                key={product.id}
                className="max-w-60" />)
            }
        </div>
    )
}

export default ProductList