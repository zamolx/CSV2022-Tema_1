import PropTypes from 'prop-types'

const nf = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
    roundingIncrement: 5
});

const Product = (props) => {
    console.log({ props });

    return (
        <div className="product-container" style={{ backgroundColor: props.color }}>
            <ul>Price: {!isNaN(props.price) ? nf.format(props.price) : Product.defaultProps.price}</ul>
            <ul>Name: {props.name}</ul>
            <ul>Category: {props.category}</ul>
        </div>
    )
}

Product.propTypes = {
    color: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string
};

Product.defaultProps = {
    price: "Preț inexistent",
    name: "Preț inexistent",
    category: "Preț inexistent",
    color: "red"
};

export default Product;