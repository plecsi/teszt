import React from 'react';

const Product = props => {

    const product = props.product_json

    const ret = product.map((p, i) => {
        let img = []
        for(let j = 0; j < p.qty; j++) {
            img.push(<li style={{top: -j*10,left: (45 + j * 5 + '%'), zIndex: p.qty -j}}><img src={`assets/${p.img}.png`}/></li>)
        }
        
        return (
        <li key={p.id} className="product-item">      
            <span>{p.id}</span>
            <span className="product_name sr-only"> {p.product_name} </span>
            <ul className="img_array">{!!p.img && img}</ul>
      </li>
        )
    })

    return <ul className="products-list">{ret}</ul>
}

export default Product;