import { useState } from 'react'
import './App.css'

const data = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

interface Product {
    name: string;
    stocked: boolean;
    price: number;
    category: string;
    // Add other properties as needed
}

interface ProductTableProps {
    products: Product[];
    filterText: string;
    inStockOnly: boolean;
}
interface ProductCategoryRowProps {
    category: string
}

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState<string>('')
    const [inStockOnly, setInStockOnly] = useState<boolean>(false)
    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    )
}

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
    return (
        <form>
            <input
                type="search"
                placeholder='Search...'
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                    {' '}
                    Only show products in stock
                </label>
            </div>
        </form>
    )
}

const ProductCategoryRow = ({ category }: ProductCategoryRowProps) => {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}

const ProductRow: React.FC<{ product: Product }> = ({ product }) => {
    const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
};

const ProductTable: React.FC<ProductTableProps> = ({ products, filterText, inStockOnly }) => {
    const rows: any = []
    let lastCategory: null = null

    products.forEach((product: any) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return
        }
        if (inStockOnly && !product.stocked) {
            return
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            )
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        )
        lastCategory = product.category
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default function App() {
    return <FilterableProductTable products={data} />
}
