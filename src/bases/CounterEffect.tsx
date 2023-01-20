import { useEffect, useState } from 'react'

const MAXIMUM_COUNT = 10

export const CounterEffect = () => {
	const [counter, setCounter] = useState(5)

	const handleClick = () => {
		// setCounter(prevCounter => (prevCounter >= MAXIMUM_COUNT ? prevCounter : prevCounter + 1))
		setCounter(prevCounter => Math.min(prevCounter + 1, MAXIMUM_COUNT))
	}

	useEffect(() => {
		if (counter < 10) return
		console.log('%cSe llego al valor maximo', 'color: red; background-color: black;')
	}, [counter])

	return (
		<>
			<h1>CounterEffect:</h1>
			<h2>{counter}</h2>
			<button onClick={handleClick}>+1</button>
		</>
	)
}
