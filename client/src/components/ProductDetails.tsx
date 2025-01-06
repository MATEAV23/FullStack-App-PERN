import type { Product } from "../types"

type ProductDetailsProps = {
    product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">

            </td>
            <td className="p-3 text-lg text-gray-800">

            </td>
            <td className="p-3 text-lg text-gray-800 ">

            </td>
        </tr>
    )
}

export default ProductDetails
