import React from 'react'
import { useParams } from 'react-router-dom'

const Learn = () => {
    const params = useParams();
    return (
        <h2>Learn about <span style={{ textDecoration: "underline" }}>{params.id}</span></h2>
    )
}

export default Learn