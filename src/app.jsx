import { useState } from 'preact/hooks'
import './app.css'
import {TopBar} from "./components/TopBar"
import {PokeList} from "./components/PokeList"
import {BottomBar} from "./components/BottomBar"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TopBar/>
      <PokeList/>
      <BottomBar/>
    </div>
  )
}
