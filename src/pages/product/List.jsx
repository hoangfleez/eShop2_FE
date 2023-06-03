import React, {useEffect, useState} from 'react';
import {deleteProduct, getProduct,editProduct} from "../../sevives/productService.js";
import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalEdit from "./ModalEdit.jsx";
import './List.css'
import AddProduct from "./AddProduct.jsx";
import ListUsers from "../user/ListUsers.jsx";
import {Link} from "react-router-dom";
import { orderBy } from 'lodash';



const List = () => {
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
    const [isShowModalListUsers, setIsShowModalListUsers] = useState(false)
    const dispatch = useDispatch();

    const [showEditModal, setShowEditModal] = useState(false);
    const [dataProductEdit, setDataProductEdit] = useState({});
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const [sortBy, setSortBy] = useState('asc');
    const [sortField, setSortField] = useState('price');
    const [sortedProducts, setSortedProducts] = useState([]);


    const handleSort = (sortBy,sortField ) =>{
        setSortBy(sortBy);
        setSortField(sortField);

        // let cloneListProduct = [...products];
        //  cloneListProduct = orderBy(cloneListProduct, [sortField], [sortBy]);
        // console.log(cloneListProduct)
    }



    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalListUsers(false);
        setShowEditModal(false)
    }

    const products = useSelector((state) => {
        const productList = state.products.list;
        if (!productList) return [];
        const { totalCount, totalPages, products } = state.products.list;
        useEffect(() => {
            if (totalCount && totalPages) {
                setTotalProducts(totalCount);
                setTotalPage(totalPages);
            }
        }, [totalCount, totalPages]);
        return products;
    });


    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);


    const handlePageClick = (event) => {
        dispatch(getProduct(+event.selected + 1));
    };


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

            <button
            className="btn-btn-success"
            onClick={() => setIsShowModalAddNew(true)}
            >
                Add new Product
            </button>


            <button
                className="btn-btn-success"
                onClick={() => setIsShowModalListUsers(true)}
            >
                List Users
            </button>

            <button
            onClick={() => handleSort("desc", "price")}
            >
                <i className="fa-solid fa-arrow-up"></i>
            </button>
            <button
                onClick={() =>  handleSort("asc", "price")}
            >
                <i className="fa-sharp fa-solid fa-arrow-down">

                </i></button>

            <div style={{display:"flex", flexWrap:"wrap"}}>
            {products && products.map(item => (
                <div className="grid__column-2-4" key={item.id}>
                        <Link className="home-product-item" href="#">
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

                        <div style={{display:"flex", justifyContent:"space-around", padding:10}}>
                        <button style={{border:"none", backgroundColor:"transparent"}} onClick={()=>dispatch(deleteProduct(item.id))}><i style={{fontSize:30, color:"red"}} className="fa-solid fa-trash-can"></i></button>
                        <button
                        onClick={() => handleEditProduct(item)}
                        style={{border:"none", backgroundColor:"transparent"}}
                        >
                        <i style={{fontSize:30}} className="fa-solid fa-pen-to-square"></i>
                        </button>
                            </div>
                        </Link>
                        
                        
                    </div>

            ))}
            </div>
            <AddProduct
                show ={isShowModalAddNew}
                handleClose={handleClose}

            />
            
            <ModalEdit
            show = {showEditModal}
            dataProductEdit={dataProductEdit}
            handleClose={handleClose}
            handleUpdateProduct={handleUpdateProduct}
            />

            <ListUsers
            show = {isShowModalListUsers}
            handleClose={handleClose}
            />

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                // onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel="< previous"

                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    );
};

export default List;