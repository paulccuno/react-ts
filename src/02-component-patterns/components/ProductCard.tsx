import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface ProductCardProps {
	product: Product
	children?: React.ReactElement | React.ReactElement[]
	className?: string
	style?: React.CSSProperties
	onChange?: (args: onChangeArgs) => void
	value?: number
}

export const ProductCard = ({
	product,
	children,
	className,
	style,
	onChange,
	value,
}: ProductCardProps) => {
	const { counter, increaseBy } = useProduct({ onChange, product, value })

	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	)
}
