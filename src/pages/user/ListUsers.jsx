
import {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../sevives/useService.js";

const ListUsers = (props) =>{
    const dispatch = useDispatch();
    const {show, handleClose} = props;
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const users = useSelector(state => {
        console.log(state.user, 111 )

    });


    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <div className="body-add-new">
                            <lable className="form-label">Name</lable>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="body-add-new">
                            <lable className="form-label">Price</lable>
                            <input
                                type="text"
                                className="form-control"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ListUsers