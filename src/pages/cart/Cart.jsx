import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cart.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteCart, getCart, increaseCart, reduceCart} from "../../sevives/cartService.js";
import {Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const CartDetail = () => {
    const MySwal = withReactContent(Swal)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector(state => {
    return state.cart.cart;
    });


    const handleDelete = (id) => {
    dispatch(deleteCart(id));
    }

    const handleIncrease = (product, price) => {
    let productFound = {
        productId: product.id,
        quantity:1,
        price: price
    }
    dispatch(increaseCart(productFound))
    }

    const handleReduce = (product, price) => {
    let productFound = {
        productId: product.id,
        quantity:cart.length === 0 ? 0 :-1,
        price: price
    }
    dispatch(reduceCart(productFound))
    }

    const toPayment = () => {
    if (cart.length === 0) {
        MySwal.fire({
        icon: 'warning',
        title: 'Ooopss....',
        text: 'Không có sản phẩm nào để thanh toán!!',
        showConfirmButton: false,
        timer: 1500
        }).then(() => {navigate("/")})
    } else {
        navigate("/bill")
    }
    }




    return (
        <>

            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300"}}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Giỏ hàng</h1>
                    <div className="d-inline-flex">
                        <p className="m-0">Cảm ơn bạn đã lựa chọn tin dùng shop</p>
                    </div>
                </div>
            </div>


            <div className="container-fluid pt-5">
                <div className="row px-xl-5 " style={{marginBottom:200}}>
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-bordered text-center mb-0">
                            <thead className="bg-secondary text-dark">
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tổng</th>
                                <th>Xóa</th>
                            </tr>
                            </thead>
                            {cart && cart.map(item => (
                            <tbody className="align-middle">
                            <tr>
                            
                                <td className="align-middle"><img src={item.product.image} alt=""
                                            style={{width: 120, height:80}}/> {item.product.name}</td>
                                <td className="align-middle">{item.price}</td>
                                <td className="align-middle">
                                    <div className="input-group quantity mx-auto" style={{width: 135, flexWrap:"nowrap", alignItems:"center"}}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-secondary btn-minus"
                                            onClick={() => handleReduce(item.product,item.price)}

                                            >
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <div>
                                        <input
                                            style={{backgroundColor:"white", height:40, width:40, textAlign:"center"}}
                                            type="text"
                                            // className="form-control form-control-sm  text-center"
                                            value={item.quantity === 0 ? handleDelete(item.id) : item.quantity}
                                        />
                                        </div>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-secondary btn-plus"
                                                        onClick={() => handleIncrease(item.product,item.price)}
                                                >
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                    </div>
                                </td>
                                <td className="align-middle">{item.totalPrice}</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(item.id)}
                                    ><i className="fa fa-times"></i></button>
                                </td>
                            </tr>
                            
                            {/* <input type="hidden"
                                className="form-control form-control-sm bg-secondary text-center"
                                value={total += item.totalPrice} /> */}

                            </tbody>

                                ))}
                        </table>
                    </div>
                    <div className="col-lg-4">

                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Tóm tắt giỏ hàng</h4>
                            </div>

                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">Tổng sản phẩm</h5>
                                    {/* <h5 className="font-weight-bold">{total}</h5> */}
                                </div>
                                <button className="btn btn-block btn-success my-3 py-3" onClick={toPayment}>Tiến hành thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CartDetail;