import './Bill.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react"; 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {getCart, paymentCart} from "../../sevives/cartService.js";

const Bill = () => {
    const MySwal = withReactContent(Swal)

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
        
        MySwal.fire({
            icon: 'success',
            title: 'Đã thanh toán.',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch(paymentCart())
        setTimeout(()=>{navigate("/")}, 1500)
    }

    let total = 0;


    return(
        <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-evenly"}}>
        <div className="box-bill">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="invoice-title">
                            <h1>Hóa đơn mua hàng</h1>
                        </div>
                        <hr />
                    </div>
                </div>
                <h5>Tên khách hàng: {user.username}</h5>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <strong>Nội dung mua hàng</strong>
                                </h4>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-condensed">
                                        <thead>
                                        <tr>
                                            <td>
                                                <strong>Sản phẩm</strong>
                                            </td>
                                            <td className="text-center">
                                                <strong>Giá</strong>
                                            </td>
                                            <td className="text-center">
                                                <strong>Số lượng</strong>
                                            </td>
                                            <td className="text-right">
                                                <strong>Thành tiền</strong>
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
                                                <strong>Tổng</strong>
                                            </td>
                                            <td className="thick-line text-right">${total}</td>
                                        </tr>
                                        <tr>
                                            <td className="no-line"></td>
                                            <td className="no-line"></td>
                                            <td className="no-line text-center">
                                                <strong>Thuế</strong>
                                            </td>
                                            <td className="no-line text-right">10%</td>
                                        </tr>
                                        <tr>
                                            <td className="no-line"></td>
                                            <td className="no-line"></td>
                                            <td className="no-line text-center">
                                                <strong>Số tiền thanh toán</strong>
                                            </td>
                                            <td className="no-line text-right">${(total * 1.1).toFixed(2)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <small style={{color:"red"}}>*Đóng thuế là trách nhiệm và nghĩa vụ của mỗi công dân!</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{justifyContent:"center", display:"flex",height:"50px"}}>
                <button type="button" className="btn btn-primary btn-lg" onClick={() =>{handleBill()}}>Thanh toán</button>
            </div>
        </div>
    );
};


export default Bill;