import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/animals/658abe477a8a1ab88b95843e").then(res => {
            setData(res.data)
        })
    }, [])
    return (
        <div>
            <img src={`http://localhost:8000/public/${data.image}`} alt="" />
        </div>
    )
}

export default App