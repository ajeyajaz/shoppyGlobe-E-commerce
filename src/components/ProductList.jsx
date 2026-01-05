import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import Message from "./Message";

// Show only products that match the search text
// If nothing matches, show a friendly message


function ProductList({ products, onClick = ()=> {} }) {

    const query = useSelector(state => state.search.query.trim());

    const filteredProduct = products.filter(product => {
        return product.title?.toLowerCase().includes(query.toLowerCase()) ||
        product.brand?.toLowerCase().includes(query.toLowerCase());
    });

    if(!filteredProduct.length) return <Message/>
    
    return (
            <div
                className="grid grid-cols-1 justify-items-center mt-20 gap-y-14 gap-x-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProduct.map(product => <ProductItem
                    product={product}
                    key={product.id}
                    onClick={onClick}
                    className="max-w-60" />)
                }
            </div>
    )
}

export default ProductList