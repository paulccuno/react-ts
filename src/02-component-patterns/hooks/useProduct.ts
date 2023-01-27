import { useEffect, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
	product: Product
	onChange?: (args: onChangeArgs) => void
	value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
	const [counter, setCounter] = useState(value)

	const increaseBy = (value: number) => () => {
		const valueIncreased = counter + value
		const newValue = Math.max(valueIncreased, 0)

		if (valueIncreased < 0) return

		setCounter(newValue)

		onChange && onChange({ count: newValue, product })
	}

	useEffect(() => {
		setCounter(value)
	}, [value])

	return {
		counter,
		increaseBy,
	}
}
