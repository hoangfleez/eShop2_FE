import React, {useEffect, useState} from 'react';
import {deleteProduct, getProduct,editProduct} from "../../sevives/productService.js";
import {useDispatch, useSelector} from "react-redux";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalEdit from "./ModalEdit.jsx";
import './List.css'
import AddProduct from "./AddProduct.jsx";


const List = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () =>{
        setShow(false);
        setShowEditModal(false);
    }
    const handleShow = () => setShow(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const [dataProductEdit, setDataProductEdit] = useState({})




    const products = useSelector(({products}) => {
        return products.list;
    });


    const handleAddNew = (product) =>{

         setShow(false);
        products.unshift(product)
    }

    const handleUpdateProduct = (product) => {
        const clonedProducts = [...products];
        const index = clonedProducts.findIndex((item) => item.id === product.id);
        if (index >= 0) {
            clonedProducts[index] = product;
            dispatch(getProduct(clonedProducts));
        }
    };


    useEffect(() => {
        dispatch(getProduct());
    }, [])


    const handleEditProduct = (product) => {
        setDataProductEdit(product);
        setShowEditModal(true);

    }

    return (
        <>
        <Button variant="primary" className="my-3" onClick={handleShow}>
            <i className="fa-solid fa-plus"></i> Thêm sản phẩm
        </Button>


            <>
                

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddProduct handleAddNew={handleAddNew}/>
                    </Modal.Body>

                </Modal>
            </>

            <div style={{display:"flex", flexWrap:"wrap"}}>
            {products && products.map(item => (
                <div className="grid__column-2-4" key={item.id}>
                        <a className="home-product-item" style={{textDecoration:"none"}}>
                            <div className="home-product-item__img" style={{backgroundImage: `url(${item.image})`}}></div>
                            <h4 className="home-product-item__name">{item.name}</h4>

                            <div className="home-product-item__price" style={{justifyContent:"space-between"}}>
                                <span className="home-product-item__price-old">${item.price}</span>
                                <span style={{marginLeft:"100px"}} className="home-product-item__price-current">Số lượng {item.quantity}</span>
                            </div>


                            <div className="home-product-item__action">
                                <div className="home-product-item__rating">
                                    <i className="home-product-item__star--gold fa-solid fa-star"></i>
                                    <i className="home-product-item__star--gold fa-solid fa-star"></i>
                                    <i className="home-product-item__star--gold fa-solid fa-star"></i>
                                    <i className="home-product-item__star--gold fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="home-product-item_origin">
                                <span className="home-product-item__brand">{item.category.name}</span>
                                <span className="home-product-item_origin-name">Nhật bản</span>
                            </div>
                            <div className="home-product-item__favourite">
                                <i className="fa-solid fa-check"></i>
                                <span>Yêu thích</span>

                            </div>
                            <div className="home-product-item_sale-off">
                                <span className="home-product-item_sale-off-percent">10%</span>
                                <span className="home-product-item_sale-off-label"> Giảm</span>
                            </div>

                        <div style={{display:"flex", justifyContent:"space-around", padding:10}}>
                        <button style={{border:"none", backgroundColor:"transparent"}} onClick={()=>dispatch(deleteProduct(item.id))}><i style={{fontSize:30, color:"red"}} className="fa-solid fa-trash-can"></i></button>
                        <button
                        onClick={() => handleEditProduct(item)}
                        style={{border:"none", backgroundColor:"transparent"}}
                        >
                        <i style={{fontSize:30}} className="fa-solid fa-pen-to-square"></i>
                        </button>
                            </div>
                        </a>
                        
                        
                    </div>

            ))}
            </div>
            
            <ModalEdit
            show = {showEditModal}
            dataProductEdit={dataProductEdit}
            handleClose={handleClose}
            handleUpdateProduct={handleUpdateProduct}
            />
        </>
    );
};

export default List;