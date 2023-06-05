import {useDispatch, useSelector} from "react-redux";
import React from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const DetailHistory = (props) => {
    console.log(props)
    
    const detailHistory = useSelector(state => {
        return state.cart.cart.map(item => item.product);
    });
    const handleClose = () =>{
        props.close("none")
    }
    let totalMoney = 0;

    return (
        <div style={{ width:"100%", height:"100%", padding:"20px", display:props.style}}>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>   
            <h3>Chi tiết hóa đơn</h3>
            <IconButton onClick={handleClose}>
                <Close/>
            </IconButton>
        </div>
            <div className="box-bill" style={{width:"70%", marginLeft:"10px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="invoice-title">
                            <h1>Hóa đơn mua hàng</h1>
                        </div>
                        <hr />
                    </div>
                </div>

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
                                                <strong>Hình ảnh</strong>
                                            </td>
                                            <td className="text-center">
                                                <strong>Giá</strong>
                                            </td>
                                            <td className="text-center">
                                                <strong>Số lượng</strong>
                                            </td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {detailHistory && detailHistory.map(item =>(
                                            <tr key={item.id}>
                                            <td>
                                                <strong>{item.name}</strong>
                                            </td>
                                            <td className="text-center">
                                                <strong><img style={{width:100, height:100}} src={item.image}/></strong>
                                            </td>
                                            <td className="text-center">
                                                <strong>{item.price}</strong>
                                            </td>
                                            <td className="text-center">
                                                <strong>{item.quantity}</strong>
                                            </td>
                                            <input type="hidden" value={totalMoney += item.price * item.quantity}/>
                                        </tr>
                                        ))}
                                        <tr>
                                            <td className="thick-line"></td>
                                            <td className="thick-line"></td>
                                            <td className="thick-line text-center">
                                                <strong>Tổng</strong>
                                            </td>
                                            <td className="thick-line text-right">{totalMoney}</td>
                                        </tr>
                                        <tr>
                                            <td className="no-line"></td>
                                            <td className="no-line"></td>
                                            <td className="no-line text-center">
                                                <strong>Số tiền thanh toán</strong>
                                            </td>
                                            <td className="no-line text-right">${(totalMoney * 1.1).toFixed(2)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <small style={{color:"red"}}>*Số tiền thanh toán đã cộng thêm 10% tiền thuế.</small>
                                    <br />
                                    <small style={{color:"red"}}>*Đóng thuế là trách nhiệm và nghĩa vụ của mỗi công dân!</small>
                                    {/* <div style={{padding:"50px", display:"flex", justifyContent:"center", alignItems:"center", color:"green"}}>
                                    <i class="fa-solid fa-check fa-2xl"></i>
                                        <h2>Đã thu</h2>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DetailHistory;