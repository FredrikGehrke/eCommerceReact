import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {

    return (
        <div className="col mb-4">
            <div className="card">
                <div className="view overlay">
                    <img className="card-img-top" src={ product.image }
                    alt="Card image cap" />
                    <Link to={`/products/details/${product._id}`}>
                    <div className="mask rgba-white-slight"></div>
                    </Link>
                </div>

                <div className="card-body">
                    <h4 className="card-title"> { product.name } </h4>

                    <p className="card-text">{ product.shortDescription }</p>
                    <p className="card-text">{ product.price } SEK</p>

                    <Link to={`/products/details/${product._id}`} className="btn btn-green btn-md">Visa Produkt</Link>
                </div>
            </div>
        </div>
    )
}
