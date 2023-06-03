import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {editProduct, getProduct} from "../../sevives/productService.js";
import {getCategory} from "../../sevives/categoryService.js";

const ModalEdit = (props) => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const { show, handleClose, dataProductEdit, handleUpdateProduct } = props;
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState([]);

    const handleEditProduct = async () => {
        const editedProduct = {
            id: dataProductEdit.id,
            name: name,
            price: price,
            quantity: quantity,
            category: category
        };
        let res = await dispatch(editProduct(editedProduct));
        if (res) {
            handleUpdateProduct({
                id: dataProductEdit.id,
                name: name,
                price: price,
                quantity: quantity,
                category: category
            });
            handleClose();
            navigate("/admin");
            dispatch(getProduct())

        } else {
            alert("Có lỗi xảy ra khi chỉnh sửa sản phẩm!");
        }
    };



    const categorys = useSelector(state =>{
        return state.category.category
    });



    useEffect( ()=>{
        dispatch(getCategory())
    },[]);

    useEffect(() => {
        if (show) {
            setName(dataProductEdit.name);
            setPrice(dataProductEdit.price);
            setQuantity(dataProductEdit.quantity);
            setCategory(dataProductEdit.category);

        }
    }, [dataProductEdit]);


    useEffect(() => {
        const fetchCategories = async () => {
            try{
                const response = await categorys;
                setCategory(response.data)
            }catch (error){
                console.log("Error fetching categories:", error)
            }
        };
        fetchCategories();
    }, [])

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit new Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input
                            type="text"
                            className="form-control"
                            value={quantity}
                            onChange={(event) => setQuantity(event.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select
                            className="form-select"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        >

                            {categorys.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}

                        </select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEditProduct}>
                        Luu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalEdit;