import React from 'react';

import Product from '#product';

export default function ProductList(props) {
    return (
        <div className={`product_list ${props.view}`}>
            <div className="no-products">{props.noProducts}</div>
            {props.data.map(product => {
                return <Product product={product} view={props.view} key={product.id} />;
            })}
        </div>
    );
}
