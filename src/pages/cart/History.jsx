import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CleaningServices } from "@mui/icons-material";
import { billCart } from "../../sevives/billService.js";
import { detailHistoryCart } from "../../sevives/cartService.js";
import DetailHistory from "./DetailHistory.jsx";
import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { TableControl } from "react-bootstrap-table-control";

const Historys = () => {
const dispatch = useDispatch();
const [style, setStyle] = useState("none")
const handleStyle = () =>{
    setStyle("block")
}

const currentUser = useSelector(({ user }) => {
    return user.currentUser.idUser;
});

const history = useSelector((state) => {
    return state.bill.bill;
});
        
const handleDetail = (id) => {
    dispatch(detailHistoryCart(id)).then(() => {handleStyle()})
    
};

useEffect(() => {
    if (currentUser) {
    dispatch(billCart(currentUser));
    }
}, [currentUser]);

let totalMoney = 0;

return (
    <div style={{width:"100%", padding:30, display:"flex", columnGap:30}}>
    <div style={{width:"50%"}}>
        <h1>Lịch sử mua hàng</h1>

    <TableControl
        header={[
            { key: "id", name: "#" },
            { key: "total", name: "Số tiền" },
            { key: "date", name: "Ngày tháng" },
            { key: "status", name: "Trạng thái" },
            { key: "button", name: "Chi tiết" }
        ]}
        itens={history && history.map(item =>({
            id: item.id,
            total: item.totalMoney,
            date: item.date,
            status:item.status,
            button:<Button onClick={() => handleDetail(item.id)}>Xem</Button>
        }))}
    />
    </div>
    <div style={{width:"50%"}}>
        <DetailHistory style={style} close={setStyle}/>
    </div>
    </div>
);
};

export default Historys;
