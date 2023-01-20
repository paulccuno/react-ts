import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy'
import { CounterEffect } from './bases/CounterEffect'

function App() {
	return (
		<>
			<Counter initialValue={5} />
			<CounterBy initialValue={5} />
			<CounterEffect />
			<CounterEffect />
		</>
	)
}

export default App
