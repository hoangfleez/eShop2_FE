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
        console.log(product)
        setDataProductEdit(product);
        setShowEditModal(true);

    }

    return (
        <>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" style={{height: "700px", objectFit: "container"}}>
                        <div className="carousel-item active">
                            <img
                                src="https://sites.google.com/site/thoitrangnamnulongan/_/rsrc/1524193765627/home/free-vector-fashion-shopping-01-vector_000527_fashion_shopping_01_vector.jpg"
                                className="d-block w-100 " alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.fashioncrab.com/wp-content/uploads/2016/01/Banner4.jpg"
                                 className="d-block w-100 h-10" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://xanhlo.com/media/wysiwyg/tintuc/mua-quan-ao-sale-off.jpg"
                                 className="d-block w-100 h-10" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators"
                            data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators"
                            data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>


            <>
                <Button variant="primary" className="my-3" onClick={handleShow}>
                    <i className="fa-solid fa-plus"></i> Add
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddProduct handleAddNew={handleAddNew}/>
                    </Modal.Body>

                </Modal>
            </>


            {products && products.map(item => (
            <div className="home-product" key={item.id}>
                <div className="grid__row">
                    <div className="grid__column-2-4">
                        <a className="home-product-item" href="#">
                            <div className="home-product-item__img" style={{backgroundImage: `url(${item.image})`}}></div>
                            <h4 className="home-product-item__name">{item.name}</h4>

                            <div className="home-product-item__price">
                                <span className="home-product-item__price-old">{item.price}$</span>
                                <span style={{marginLeft:"100px"}} className="home-product-item__price-current">SL: {item.quantity}</span>
                            </div>


                            <div className="home-product-item__action">
                                            <span className="home-product-item__like">
                                                <i className="home-product-item__like-icon-empty fa-solid fa-heart"></i>
                                                <i className="home-product-item__like-icon-fill fa-regular fa-heart"></i>
                                            </span>
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
                        </a>
                        <button onClick={()=>dispatch(deleteProduct(item.id))}><i className="fa-solid fa-trash-can"></i></button>
                        <button
                        onClick={() => handleEditProduct(item)}
                        style={{marginLeft: 20}}
                        >
                        <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        
                    </div>
                </div>
            </div>

            ))}
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