import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getCart, historyCart} from "../../sevives/cartService.js";
import { CleaningServices } from "@mui/icons-material";

const Historys = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const history = useSelector(state => {
        return state.cart.historyCart;
    });

    useEffect(() => {
        dispatch(historyCart());
    }, [])

    let totalMoney = 0;

    return(
    <>

        <table>
            <tr>
                <th>Name</th>
                {/*<th>Image</th>*/}
                <th>Price</th>
                <th>Quantity</th>
                <th>totalPrice</th>
                <th>Date</th>
                <th>so tien da tieu cho E shoper: </th>
            </tr>

            {history && history.map(item => (
                
            <tr>
                <td>{item.product.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice}</td>
                <td>{item.order.date}</td>
                <input type="hidden" value={totalMoney += item.totalPrice}/>
            </tr>
            ))}
            
            <td>{totalMoney}</td>
        </table>
    </>
    )
}

export default Historys;