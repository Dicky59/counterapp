import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
  
const App = (props) => {
	const [ counter, setCounter ] = useState(0)
	const setToValue = (value) => setCounter(value)

	const Display = ({ counter }) => <div className="counter">{counter}</div>

	const Button = ({ onClick, text }) => (
		<button onClick={onClick}>
			{text}
		</button>
	)

  return (
    <div className="App">
			<h2>The Counter App</h2>
			
      <Display counter={counter}/>
			
      <Button
        onClick={() => setToValue(counter + 1)}
        text='+'
      />
			<Button
        onClick={() => setToValue(0)}
        text='&#x21ba;'
      />
      <Button
        onClick={() => setToValue(counter - 1)}
        text='-'
      />  
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));