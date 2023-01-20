import { useState } from 'react'

interface CounterByProps {
	initialValue?: number
}

interface CounterState {
	counter: number
	clicks: number
}

export const CounterBy = ({ initialValue = 5 }: CounterByProps) => {
	const [{ counter, clicks }, setCounterState] = useState<CounterState>({
		counter: initialValue,
		clicks: 0,
	})

	const handleClick = (numberToAdd: number) => () =>
		setCounterState(({ counter, clicks }) => ({
			// ...prevCounter,
			counter: counter + numberToAdd,
			clicks: clicks + 1,
		}))

	return (
		<>
			<h1>Counter: {counter}</h1>
			<h1>Counter: {clicks}</h1>
			<button onClick={handleClick(1)}>+1</button>
			<button onClick={handleClick(5)}>+5</button>
		</>
	)
}
