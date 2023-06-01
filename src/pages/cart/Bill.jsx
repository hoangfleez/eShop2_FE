import './Bill.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {getCart} from "../../sevives/cartService.js";

const Bill = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector(state => {
        return state.cart.cart;
    });
    let user = useSelector(({user}) => {
        return user.currentUser;
    })
    console.log(user )

    useEffect(() => {
        dispatch(getCart());
    }, [])

    let total = 0;


    return(
        <table className="body-wrap">
            <tbody>
            <tr>
                <td></td>
                <td className="container" width="600">
                    <div className="content">
                        <table className="main" width="100%" cellPadding="0" cellSpacing="0">
                            <tbody>
                            <tr>
                                <td className="content-wrap aligncenter">
                                    <table width="100%" cellPadding="0" cellSpacing="0">
                                        <tbody>
                                        <tr>
                                            <td className="content-block">
                                                <h2>Thanks for using our app</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="content-block">
                                                <table className="invoice">
                                                    <tbody>
                                                    <tr>
                                                        <td> Khach hang: {user.username}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>ten san pham</td>
                                                        <td>so luong</td>
                                                        <td>gia</td>
                                                        <td>tong gia</td>
                                                    </tr>
                                                    {cart && cart.map (item => (
                                                    <tr>
                                                        <td>
                                                            <table className="invoice-items" cellPadding="0"
                                                                   cellSpacing="0">
                                                                <tbody>

                                                                <tr>
                                                                    <td> {item.product.name}</td>
                                                                    <td> {item.quantity}</td>
                                                                    <td className="alignright">{item.price}$</td>
                                                                    <td className="alignright">{item.totalPrice}$</td>
                                                                </tr>
                                                                <input type="hidden"
                                                                       className="form-control form-control-sm bg-secondary text-center"
                                                                       value={total += item.totalPrice} />


                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>

                                                    ))}
                                                    <tr className="total">
                                                        <td className="alignright" width="80%">Total</td>
                                                        <td className="alignright">{total}$</td>

                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="content-block">
                                                <a href="#">View in browser</a>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </td>
                <td></td>
            </tr>
            </tbody>
        </table>
    )
}

export default Bill;