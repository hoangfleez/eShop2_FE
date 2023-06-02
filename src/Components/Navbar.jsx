import React from "react";
import ModalLogin from "./Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { logout } from "../sevives/useService";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import FooComponent from "../Components/Marquee"

const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(({ user }) => {
    return user.currentUser;
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clearCookies = () => {
    localStorage.clear();
    dispatch(logout());
    navigate("/")
  };

  return (
    <div>
      <div className="container-fluid" >
        <div className="row align-items-center py-3 px-xl-5" style={{backgroundColor:"pink"}}>
          <div className="col-lg-3 d-none d-lg-block" >
            <a className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold" >
                <span className=" font-weight-bold border px-3 mr-1" style={{color:"black"}}>
                  E
                </span>
                <Link style={{ textDecoration: "none" ,color:"black"}} to="/">
                  Shopper
                </Link>
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm sản phẩm ..."
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-pink">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  Shopper
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <h5  ><FooComponent/></h5>
                </div>
                {user && user.role === "admin" ? (
                  <div className="navbar-nav ml-auto py-0">
                    <div>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        sx={{ padding: "4px" }}
                      >
                        <AccountCircle sx={{ width: 45, height: 45 }} />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        // anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        sx={{ top: "130px", left: "-35px" }}
                      >
                        <MenuItem>Chào, {user.username}</MenuItem>
                        <MenuItem>
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/admin"
                          >
                            Quản lý của hàng
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link className="nav-item nav-link" to={"/history"}>
                            Lịch sử mua
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={clearCookies}>Thoát!</MenuItem>
                      </Menu>
                    </div>
                  </div>
                ) : user && user.role !== "admin" ? (
                  <div className="navbar-nav ml-auto py-0">
                    <div>
                      <Link Link to="/cart-detail" style={{color:"black"}}>
                        <ShoppingCart sx={{ width: 30, height: 30 }} />
                      </Link>

                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        sx={{ padding: "4px", marginLeft: "4px" }}
                      >
                        <AccountCircle sx={{ width: 45, height: 45 }} />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        // anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        sx={{ top: "130px", left: "-35px" }}
                      >
                        <MenuItem>Chào, {user.username}</MenuItem>
                        <MenuItem>
                          <Link className="nav-item nav-link" to={"/history"}>
                            Lịch sử mua
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={clearCookies}>Thoát!</MenuItem>
                      </Menu>
                    </div>
                  </div>
                ) : (
                  <div className="navbar-nav ml-auto py-0">
                    <a className="nav-item nav-link">
                      <ModalLogin />
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
