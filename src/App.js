import React, { useState } from 'react'
import './App.css';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#212d3a',
  },
  titleLabe: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  counterLabel: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#42c0b8',
    padding: '8px 16px',
    border: 'none',
    borderRadius: 5,
  }
}

function TitleLabel(props) {
  console.log('🚀 [Title Label] render')
  return (
    <span {...props} style={styles.titleLabe} />
  ) 
}

function CounterLabel(props) {
  console.log('😲 [Counter Label] render')
  return (
    <span {...props} style={styles.counterLabel} />
  ) 
}

function Button(props) {
  console.log('✅ [Button] render')
  return (
    <button type="button" {...props} style={styles.button} />
  )
}

function App() {
  const [count, setCount] = useState(0)
  const countUp = () => setCount(pre => pre + 1)
  return (
    <div style={styles.root}>
      <TitleLabel>Counter</TitleLabel>
      <CounterLabel>{count}</CounterLabel>
      <Button onClick={countUp}>
        Count Up
      </Button>
    </div>
  );
}

export default App;
