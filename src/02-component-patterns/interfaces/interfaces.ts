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
	maxCount?: number
	product: Product
	increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element
	Image: (props: ProductImageProps) => JSX.Element
	Title: (props: ProductTitleProps) => JSX.Element
	Buttons: (props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
	count: number
	product: Product
}

export interface ProductInCart extends Product {
	count: number
}

export interface InitialValues {
	count?: number
	maxCount?: number
}

export interface ProductCardHandlers {
	count: number
	isMaxCountReached: boolean
	maxCount?: number
	product: Product
	increaseBy: (value: number) => void
	reset: () => void
}
