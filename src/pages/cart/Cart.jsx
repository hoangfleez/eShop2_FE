import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cart.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteCart, getCart, increaseCart, reduceCart} from "../../sevives/cartService.js";
import {Link, useNavigate} from "react-router-dom";


const CartDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector(state => {
        return state.cart.cart;
    });


    useEffect(() => {
        dispatch(getCart());
    }, [])


    const handleDelete =  (id) =>{
        dispatch(deleteCart(id))
        navigate("/cart-detail")
    }

    const handleIncrease = (product,price) =>{
        let productFound = {
            productId: product.id,
            quantity: 1,
            price: price
        }
        console.log(productFound)
        dispatch(increaseCart(productFound))
    }

    const handleReduce = (product,price) => {
        let productFound = {
            productId: product.id,
            quantity: -1,
            price: price
        }
        dispatch(reduceCart(productFound))
    }
    let total = 0;

    return (
        <>

            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300"}}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Detail</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><a href="">Home</a></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shop Detail</p>
                    </div>
                </div>
            </div>


            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-bordered text-center mb-0">
                            <thead className="bg-secondary text-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            {cart && cart.map(item => (
                            <tbody className="align-middle">
                            <tr>
                                <td className="align-middle"><img src={item.product.image} alt=""
                                                                  style={{width: 50}}/> {item.product.name}</td>
                                <td className="align-middle">{item.price}</td>
                                <td className="align-middle">
                                    <div className="input-group quantity mx-auto" style={{width: 100}}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus"
                                            onClick={() => handleReduce(item.product,item.price)}

                                            >
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text"
                                               className="form-control form-control-sm bg-secondary text-center"
                                               value={item.quantity} />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-primary btn-plus"
                                                        onClick={() => handleIncrease(item.product,item.price)}
                                                >
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                    </div>
                                </td>
                                <td className="align-middle">{item.totalPrice}</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-primary"
                                    onClick={() => handleDelete(item.id)}
                                    ><i className="fa fa-times"></i></button>
                                </td>
                            </tr>
                            <input type="hidden"
                                   className="form-control form-control-sm bg-secondary text-center"
                                   value={total += item.totalPrice} />

                            </tbody>

                                ))}
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-5" action="">
                            <div className="input-group">
                                <input type="text" className="form-control p-4" placeholder="Coupon Code"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary">Apply Coupon</button>
                                    </div>
                            </div>
                        </form>
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                            </div>

                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">Total</h5>
                                    <h5 className="font-weight-bold">{total}</h5>
                                </div>
                                <button className="btn btn-block btn-primary my-3 py-3"><Link to={"/bill"}>Proceed To Checkout</Link></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CartDetail;