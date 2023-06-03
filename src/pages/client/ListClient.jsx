import React, {useEffect, useState} from 'react';
import { getProduct} from "../../sevives/productService.js";
import {addCart} from "../../sevives/cartService.js";
import {useDispatch, useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListClient.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ClassSharp } from '@mui/icons-material';
import {Link} from "react-router-dom";
import SimpleSlider from '../slick/Slick.jsx';
import CenterMode from '../slick/ProductSlick.jsx';
import { getCategory } from '../../sevives/categoryService.js';
import {searchCategoryProduct, searchProduct} from "../../sevives/productService.js";
import ModalLogin from '../../Components/Modal.jsx';
import ReactPaginate from "react-paginate";

const ListClient = () => {

    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch();

    let user = useSelector(({user}) => {
        return user.currentUser;
    })


    const products = useSelector((state) => {
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

    const addToCartProduct = (id,quantity,price) =>{
        let data = {
            productId: id,
            quantity: quantity,
            price: price
        }
        if (user){
            dispatch(addCart(data))
            MySwal.fire({
                icon: 'success',
                title: 'Thêm vào giỏ hàng thành công ^^',
                timer: 1500,
            })
        }else{
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hãy đăng nhập để mua hàng!',
            })
        }
        

    }
    const category = useSelector(state => {
        return state.category.category
    });

    console.log(category,1114141)

    const handleCategory = (id) =>{
        dispatch(searchCategoryProduct(id))
    }

    const handleAllProducts =()=>{
        dispatch(getProduct());
    }

    useEffect(() => {
        dispatch(getCategory())
    }, []);



    return (
        <>
            
            <SimpleSlider/>
            <hr style={{color:"red"}} className='hr' />
            <CenterMode/>
            <hr style={{color:"red"}} className='hr' />

            <div style={{display:"flex",padding:"0 20px", columnGap:"20px"}}>
                <div style={{paddingTop:"30px", width:"10%"}}>
                    <div style={{display:"flex",columnGap:"10px", alignItems:"center", borderBottom:"1px solid rgb(245,245,24)", padding:"10px",width:"100%"}}>
                        <i class="fa-solid fa-bars"></i>
                        <span>Tất cả danh mục</span>
                    </div>
                    <div style={{marginLeft:"40px"}}>
                    <div style={{padding:5, cursor:"pointer"}} onClick={()=>{handleAllProducts()}}>
                        <span>Tât cả sản phẩm </span>
                    </div>
                    
                    {category && category.map(item => (
                        <div key={item.id} style={{padding:5,cursor:"pointer"}} onClick={() => handleCategory(item.id)} >
                            <span >{item.name}</span>
                            
                        </div>
            ))}
                    </div>
                </div>
                <div style={{display:"flex", padding: 20,flexWrap:"wrap", width:"100%"}}>
                {products && products.map(item => (
                
                    <div className="grid__column-2-4" key={item.id} >
                            <Link className="home-product-item" style={{textDecoration:"none"}}>
                                <div className="home-product-item__img" style={{backgroundImage: `url(${item.image})`,objectFit:"cover"}}></div>
                                <h4 className="home-product-item__name">{item.name}</h4>

                                <div className="home-product-item__price" style={{display:"flex", justifyContent:"space-between"}}>
                                    <span className="home-product-item__price-old">${item.price}</span>
                                    <span  className="home-product-item__price-current">Số lượng:{item.quantity}</span>
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
                                    {/* <span className="home-product-item_origin-name">Nhật bản</span> */}
                                </div>
                                <div className="home-product-item__favourite">
                                    <i className="fa-solid fa-check"></i>
                                    <span>Yêu thích</span>

                                </div>
                                <div className="home-product-item_sale-off">
                                    <span className="home-product-item_sale-off-percent">10%</span>
                                    <span className="home-product-item_sale-off-label"> Giảm</span>
                                </div>
                                <div style={{display:"flex",justifyContent:"space-between", padding:"20px"}}>
                                    <div>
                                        <button className='btn-cart' onClick={()=>(addToCartProduct(item.id,item.quantity, item.price))}><i className="fa-solid fa-cart-shopping" style={{fontSize:25}}></i></button>
                                    </div>
                                    <div>
                                    <span className="home-product-item__like">
                                                <i className="home-product-item__like-icon-empty fa-solid fa-heart"></i>
                                                <i className="home-product-item__like-icon-fill fa-regular fa-heart"></i>
                                </span>
                                    </div>
                                
                                </div>
                            </Link>
                            </div>
                    
            ))}
                </div>
            </div>

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

export default ListClient;