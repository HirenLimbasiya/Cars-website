import React from 'react'
import { useParams } from 'react-router-dom';

const Shop = () => {
    const params = useParams();
    return (
        <h2>Shop the car <span style={{ textDecoration: "underline" }}>{params.id}</span> NOW</h2>
    )
}

export default Shop