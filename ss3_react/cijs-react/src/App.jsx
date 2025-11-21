import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IconInput from './components/IconInput/IconInput.jsx'
import Card from './components/Card/Card.jsx'
import SS4 from './SS4/SS4.jsx'
import SS5 from './SS5/SS5.jsx'
import AuthForm from './components/AuthForm/AuthForm.jsx'
function App() {
  // Đây là 1 cách khai báo biến trong component (Biến >< State)
  const [count, setCount] = useState(0)
  let example = {
    name: "DHBKHN",
    age: 18
  }

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src="" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {example}
      </p> */}
{/* 
      <Card name="ĐHBKHN" age="18" demo={example} />
      <Card name="MindX" age="10" /> */}

      {/* <SS5></SS5> */}

      <AuthForm></AuthForm>
    </>
  )
}

export default App

/*
1. Không phải 1 string cụ thể khi truyền src mà la 1 biến trong dấu ngoặc nhọn
2. class -> className
3. onclick -> onClick
=> Chỗ nào muốn truyền BIẾN thì dùng dấu ngoặc nhọn
=> Template Literal `${}`
*/
