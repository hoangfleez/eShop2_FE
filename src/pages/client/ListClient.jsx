import React, {useEffect} from 'react';
import { getProduct} from "../../sevives/productService.js";
import {addCart} from "../../sevives/cartService.js";
import {useDispatch, useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListClient.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ClassSharp } from '@mui/icons-material';

const ListClient = () => {
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch();

    let user = useSelector(({user}) => {
        return user.currentUser;
    })


    const products = useSelector(({products}) => {
        return products.list;
    });

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

    useEffect(() => {
        dispatch(getProduct());
    }, [])

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


            <hr style={{color:"red"}} className='hr' />

            <div style={{display:"flex", padding: 20,flexWrap:"wrap"}}>
            {products && products.map(item => (
                
                    <div className="grid__column-2-4" key={item.id} >
                            <a className="home-product-item" style={{textDecoration:"none"}}>
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
                            </a>
                            </div>
                    
            ))}
            </div>
        </>
    );
};

export default ListClient;