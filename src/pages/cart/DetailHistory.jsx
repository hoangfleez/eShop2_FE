import {useDispatch, useSelector} from "react-redux";
import React from "react";

const DetailHistory = () => {

    const detailHistory = useSelector(state => {
        return state.cart.cart.map(item => item.product);
    });

    let totalMoney = 0;

    return (
        <>

            <table>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lương</th>
                    <th>ảnh</th>
                </tr>


                {detailHistory && detailHistory.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <input type="hidden" value={totalMoney += item.price * item.quantity}/>
                        <td><img style={{width:100, height:100}} src={item.image}/></td>
                    </tr>
                ))}
                <td> tổng thiêt hại: {totalMoney}</td>

            </table>
        </>
    )
}

export default DetailHistory;