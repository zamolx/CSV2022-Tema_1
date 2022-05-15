import Product from "../product"

const Example1 = () => {
    return (
        <div className="example" >Example1
            <div className="example-flex">
                <Product name="Backpack" category="mountains" price="100" color="yellow" />
                <Product name="Backpack" category="mountains" price="30" color="green" />
                <Product name="Backpack" />
            </div>
        </div>)
}

export default Example1;