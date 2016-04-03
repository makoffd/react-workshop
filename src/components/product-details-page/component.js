import React from 'react';
import ProductRating from '#product-rating';
import Price from '#price';

export default function ProcductDetailsPage(props) {
    const { product } = props;
    const rating = product.data.ratings_total;

    return (
        <div block="pdp">
            <span block="pdp" elem="back" onClick={props.handleClickBack}>
                &#8678; Back
            </span>
            <div className="prod_header_title">
                <h1 id="prod_title">
                    {product.data.name}
                </h1>
                <ProductRating value={rating.avr} total={rating.sum} />
            </div>
            <img
                alt={product.data.name}
                src={product.images[0].path}
                />
            <div>
                <Price
                    block = "product"
                    elem= "price"
                    value={product.data.price}
                    discount={product.data.special_price}
                    discountPercentage={product.data.max_saving_percentage}
                    currency="VND"
                    />
            </div>
            <div block="pdp" elem="descr">
                {product.data.description}
            </div>
        </div>

    );
}
