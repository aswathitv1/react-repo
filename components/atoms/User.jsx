import { useState } from 'react'
const User = ({name,place}) => {
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>{name}</h1>
            <h2>{place}</h2>
            <h3>{count}</h3>
        </div>
    )
}

export default User