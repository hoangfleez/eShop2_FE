import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {CleaningServices} from "@mui/icons-material";
import {billCart} from "../../sevives/billService.js";
import {detailHistoryCart} from "../../sevives/cartService.js";
import DetailHistory from "./DetailHistory.jsx";

const Historys = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(({user}) => {
        return user.currentUser.idUser;
    });

    const history = useSelector(state => {
        return state.bill.bill;
    });

    const handleDetail = (id) => {
        dispatch(detailHistoryCart(id))
    };


    useEffect(() => {
        if (currentUser) {
            dispatch(billCart(currentUser));
        }
    }, [currentUser]);



    let totalMoney = 0;

    return (
        <>

            <table>
                <tr>
                    <th>Trạng thái</th>
                    <th>Tổng tiền</th>
                    <th>Ngày thanh toán</th>
                    <th>so tien da tieu cho E shoper:</th>
                </tr>

                {history && history.map(item => (

                    <tr key={item.id}>
                        <td>{item.status}</td>
                        <td>{item.totalMoney}</td>
                        <td>{item.date}</td>
                        <input type="hidden" value={totalMoney += item.totalMoney}/>
                        <button onClick={() => handleDetail(item.id)}>chi tiet don hang</button>
                    </tr>
                ))}

                {/*{detailHistory && detailHistory.map(item => (*/}
                {/*    <tr key={item.id}>*/}
                {/*        <td>{item.name}</td>*/}
                {/*        <td>{item.price}</td>*/}
                {/*        <td>{item.quantity}</td>*/}
                {/*        <td>{item.image}</td>*/}
                {/*    </tr>*/}
                {/*))}*/}
                <DetailHistory/>




                <td>{totalMoney}</td>
            </table>
        </>
    )
}

export default Historys;