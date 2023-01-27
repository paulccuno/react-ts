import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import {
	InitialValues,
	onChangeArgs,
	Product,
	ProductCardHandlers,
	ProductContextProps,
} from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface ProductCardProps {
	product: Product
	// children?: React.ReactElement | React.ReactElement[]
	children: (args: ProductCardHandlers) => JSX.Element
	className?: string
	style?: React.CSSProperties
	onChange?: (args: onChangeArgs) => void
	value?: number
	initialValues?: InitialValues
}

export const ProductCard = ({
	product,
	children,
	className,
	style,
	onChange,
	value,
	initialValues,
}: ProductCardProps) => {
	const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({
		initialValues,
		product,
		value,
		onChange,
	})

	return (
		<Provider value={{ counter, increaseBy, product, maxCount }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,
					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	)
}
