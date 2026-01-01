import ProductItem from "./ProductItem";

function ProductList({ products, onClick = ()=> {} }) {

    return (
        <div className="pt-15">
            <div
                className="grid grid-cols-1 justify-items-center mt-10 gap-y-14 gap-x-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products?.map(product => <ProductItem
                    product={product}
                    key={product.id}
                    onClick={onClick}
                    className="max-w-60" />)
                }
            </div>
        </div>
    )
}

export default ProductList