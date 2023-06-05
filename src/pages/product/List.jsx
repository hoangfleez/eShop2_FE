import React, {useEffect, useState} from "react";
import {
    deleteProduct,
    getProduct,
    editProduct,
} from "../../sevives/productService.js";
import {orderBy} from "lodash";
import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalEdit from "./ModalEdit.jsx";
import "./List.css";
import AddProduct from "./AddProduct.jsx";
import ListUsers from "../user/ListUsers.jsx";
import {Link, useNavigate} from "react-router-dom";
import CategorizeAndSort from "../categorizeAndSort/CategorizeAndSort.jsx";
import {CSVLink, CSVDownload} from "react-csv";
import Papa from "papaparse"
import Excel from "./Excel.jsx";
import {Button} from "@mui/material";


const List = () => {
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const [isShowModalListUsers, setIsShowModalListUsers] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [showEditModal, setShowEditModal] = useState(false);
    const [dataProductEdit, setDataProductEdit] = useState({});
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const [sortBy, setSortBy] = useState("asc");
    const [sortField, setSortField] = useState("price");
    const [sortedProducts, setSortedProducts] = useState([]);



    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy);
        setSortField(sortField);
    }

    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalListUsers(false);
        setShowEditModal(false);
    };

    const products = useSelector((state) => {
        const productList = state.products.list;
        if (!productList) return [];
        const {totalCount, totalPages, products} = state.products.list;
        useEffect(() => {
            if (totalCount && totalPages) {
                setTotalProducts(totalCount);
                setTotalPage(totalPages);
            }
        }, [totalCount, totalPages]);
        return products;
    });


    useEffect(() => {
        if (Array.isArray(products) && products.length > 0) {
            let clonedProducts = [...products];
            clonedProducts = orderBy(clonedProducts, [sortField], [sortBy]);
            setSortedProducts(clonedProducts);
        }
    }, [products, sortField, sortBy]);

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
    }, []);

    const handleEditProduct = (product) => {
        setDataProductEdit(product);
        setShowEditModal(true);
    };
    const handleExcel = () =>{
        navigate("excel")
    }

    return (
        <>

            <div>

                <Button
                    className="btn-btn-success"
                    onClick={() => setIsShowModalAddNew(true)}
                >
                    Add new Product
                </Button>

                <Button
                    className="btn-btn-success"
                    onClick={() => setIsShowModalListUsers(true)}
                >
                    List Users
                </Button>
                <Button onClick={handleExcel}>
                    Excel
                </Button>

            </div>

            <div style={{display: "flex", padding: "0 20px", columnGap: "20px"}}>
                <div style={{width: "20%"}}>
                    <CategorizeAndSort/>
                    <div style={{display: "flex", flexDirection: "column", borderTop: "1px solid black"}}>
                        <div style={{display: "flex", columnGap: 10, alignItems: "center", paddingTop: 10}}>
                            <i className="fa-solid fa-filter"></i>
                            <span>Sắp xếp theo giá</span>
                        </div>
                        <div style={{
                            padding: 10,
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                             onClick={() => handleSort("desc", "price")}
                        >
                            <span>Giá tăng dần</span>
                            <i className="fa-solid fa-arrow-up"></i>
                        </div>
                        <div style={{
                            padding: 10,
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                             onClick={() => handleSort("asc", "price")}
                        ><span>Giá dảm dần</span>
                            <i className="fa-sharp fa-solid fa-arrow-down">
                            </i>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: "100%",
                        padding: 20,
                    }}
                >
                    {sortedProducts && sortedProducts.map(item => (
                        <div className="grid__column-2-4" key={item.id}>
                            <Link className="home-product-item" href="#">
                                <div
                                    className="home-product-item__img"
                                    style={{backgroundImage: `url(${item.image})`}}
                                ></div>
                                <h4 className="home-product-item__name">{item.name}</h4>

                                <div className="home-product-item__price">
                    <span className="home-product-item__price-old">
                      {item.price}$
                    </span>
                                    <span
                                        style={{marginLeft: "100px"}}
                                        className="home-product-item__price-current"
                                    >
                      SL: {item.quantity}
                    </span>
                                </div>

                                <div className="home-product-item__action">
                                </div>
                                <div className="home-product-item_origin">
                    <span className="home-product-item__brand">
                      {item.category.name}
                    </span>

                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        padding: 10,
                                    }}
                                >
                                    <button
                                        style={{border: "none", backgroundColor: "transparent"}}
                                        onClick={() => dispatch(deleteProduct(item.id))}
                                    >
                                        <i
                                            style={{fontSize: 30, color: "red"}}
                                            className="fa-solid fa-trash-can"
                                        ></i>
                                    </button>
                                    <button
                                        onClick={() => handleEditProduct(item)}
                                        style={{border: "none", backgroundColor: "transparent"}}
                                    >
                                        <i
                                            style={{fontSize: 30}}
                                            className="fa-solid fa-pen-to-square"
                                        ></i>
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <AddProduct show={isShowModalAddNew} handleClose={handleClose}/>

            <ModalEdit
                show={showEditModal}
                dataProductEdit={dataProductEdit}
                handleClose={handleClose}
                handleUpdateProduct={handleUpdateProduct}
            />

            <ListUsers show={isShowModalListUsers} handleClose={handleClose}/>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
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
