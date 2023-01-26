import { ProductButtonsProps } from '../components/ProductButtons'
import { ProductCardProps } from '../components/ProductCard'
import { ProductImageProps } from '../components/ProductImage'
import { ProductTitleProps } from '../components/ProductTitle'

export interface Product {
	id: string
	title: string
	img?: string
}

export interface ProductContextProps {
	counter: number
	product: Product
	increaseBy: (value: number) => () => void
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element
	Image: (props: ProductImageProps) => JSX.Element
	Title: (props: ProductTitleProps) => JSX.Element
	Buttons: (props: ProductButtonsProps) => JSX.Element
}
