import './Bill.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {getCart, paymentCart} from "../../sevives/cartService.js";

const Bill = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector(state => {
        return state.cart.cart;
    });
    let user = useSelector(({user}) => {
        return user.currentUser;
    })

    useEffect(() => {
        dispatch(getCart());
    }, [])

    const handleBill = () =>{
        dispatch(paymentCart())
        navigate("/")
    }

    let total = 0;


    return(
        <div className="box-bill">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="invoice-title">
                            <h1>Thanks for using our app</h1>
                        </div>
                        <hr />
                    </div>
                </div>
                <h3>Name: {user.username}</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <strong>Order summary</strong>
                                </h4>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-condensed">
                                        <thead>
                                        <tr>
                                            <td>
                                                <strong>Item</strong>
                                            </td>
                                            <td className="text-center">
                                                <strong>Price</strong>
                                            </td>
                                            <td className="text-center">
                                                <strong>Quantity</strong>
                                            </td>
                                            <td className="text-right">
                                                <strong>Totals</strong>
                                            </td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {cart &&
                                            cart.map((item) => (
                                                <tr>
                                                    <td>{item.product.name}</td>
                                                    <td className="text-center">{item.quantity}</td>
                                                    <td className="text-center">${item.price}</td>
                                                    <td className="text-right">${item.totalPrice}</td>
                                                    <input
                                                        type="hidden"
                                                        classNameName="form-control form-control-sm bg-secondary text-center"
                                                        value={(total += item.totalPrice)}
                                                    />
                                                </tr>
                                            ))}
                                        <tr>
                                            <td className="thick-line"></td>
                                            <td className="thick-line"></td>
                                            <td className="thick-line text-center">
                                                <strong>Subtotal</strong>
                                            </td>
                                            <td className="thick-line text-right">${total}</td>
                                        </tr>
                                        <tr>
                                            <td className="no-line"></td>
                                            <td className="no-line"></td>
                                            <td className="no-line text-center">
                                                <strong>Total</strong>
                                            </td>
                                            <td className="no-line text-right">${total}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{justifyContent:"center", display:"flex"}}>
                <button type="button" className="btn btn-primary btn-lg" onClick={() =>{handleBill()}}>Payment</button>
            </div>
        </div>
    );
};


export default Bill;