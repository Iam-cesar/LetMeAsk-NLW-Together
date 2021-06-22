import { useState } from "react"

export const Button = () => {

    const [counter, setCounter] = useState(0)

    const increment = (counter: number) => {
        return setCounter(counter += 1)
    }

    return (
        <button onClick={() => increment(counter)} >{counter}</button>
    )
}