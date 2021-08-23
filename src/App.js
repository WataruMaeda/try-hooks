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
  label: {
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

function Label(props) {
  console.log('😲 [Label] render')
  return (
    <p {...props} style={styles.label} />
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
      <Label>{count}</Label>
      <Button onClick={countUp}>
        Count Up
      </Button>
    </div>
  );
}

export default App;
