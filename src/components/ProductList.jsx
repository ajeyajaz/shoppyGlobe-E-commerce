import useFetch from "../hooks/useFetch";
import ProductItem from "./ProductItem";

function ProductList() {

    const { data, error, loader } = useFetch('https://dummyjson.com/products');

    if (loader) {
        return <p>fetching...</p>
    }

    if (error) {
        return <p>something went wrong..</p>
    }

    return (
        <div className="pt-15">
            <div
                className="grid grid-cols-1 justify-items-center mt-10 gap-y-14 gap-x-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {data?.products?.map(product => <ProductItem
                    product={product}
                    key={product.id}
                    className="max-w-60" />)
                }
            </div>
        </div>
    )
}

export default ProductList