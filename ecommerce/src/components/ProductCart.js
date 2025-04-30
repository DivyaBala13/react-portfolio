    import React from 'react'

    const ProductCart = ({product}) =>{
        return (
            <div style={{border:"1px solid #ccc", padding :"1 rem", margin: "1 rem "}}>
                <img src={product.image} alt={product.name} width="150"/>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
            </div>
        );
    };

    export default ProductCart
