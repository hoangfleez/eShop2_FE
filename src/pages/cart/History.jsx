import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getCart, historyCart} from "../../sevives/cartService.js";

const Historys = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const history = useSelector(state => {
         return state.cart.historyCart;
    });


    useEffect(() => {
        dispatch(historyCart());
    }, [])

    return(
        <div>day la trang lich su mua hang</div>
    )
}

export default Historys;