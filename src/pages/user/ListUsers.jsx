
import {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {showUser} from "../../sevives/adminService.js";



const ListUsers = (props) =>{
    const dispatch = useDispatch();
    const {show, handleClose} = props;
    const user = useSelector(state => {
        return state.admin.listUser
    });


    useEffect(() =>{
        dispatch(showUser())
    },[])
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Danh sách người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {user.map((item) => (
                        <div key={item.id} className="mb-3">
                            <p> <span style={{fontWeight:600}}>Tên tài khoản:</span> &emsp; {item.username}</p>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ListUsers