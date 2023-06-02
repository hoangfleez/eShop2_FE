import "./Footer..css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="app">
                <footer className="footer">
                    <div className="grid">
                        <div className="grid__column-2-4">
                            <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">Trung tâm trợ giúp</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">Shoppe Mall</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">Hướng dẫn mua hàng</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="grid__column-2-4">
                            <h3 className="footer__heading">Giới thiệu</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">Giới thiệu</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">Tuyển dụng</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">Điều khoản</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="grid__column-2-4">
                            <h3 className="footer__heading">Danh mục</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">Mỹ phẩm</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">Nước Hoa</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">Thời trang</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">Đồ dùng học tập</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="grid__column-2-4">
                            <h3 className="footer__heading">Theo dõi</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">
                                        <i className="footer-item__icon fa-brands fa-facebook"></i>
                                        Facebook
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">
                                        <i className="footer-item__icon fa-brands fa-instagram"></i>
                                        Instagram
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="" className="footer-item__link">
                                        <i className="footer-item__icon fa-brands fa-linkedin"></i>
                                        Linkedin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid__column-2-4">
                        <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                        <div className="footer__download">
                            <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png"
                                alt="" className="footer__download-qr" />
                            <div className="footer__download-apps">
                                <Link to="" className="footer__download-app-link">
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png"
                                        alt="" className="footer__download-apps-img"/>
                                </Link>
                                <Link to="" className="footer__download-app-link">
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png"
                                        alt="" className="footer__download-apps-img"/>
                                </Link>
                                <Link to="" className="footer__download-app-link">
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0"
                                        alt="" className="footer__download-apps-img"/>
                                </Link>
                            </div>

                        </div>

                    </div>




                </footer>

            </div>



        </>
    )
}

export default Footer;