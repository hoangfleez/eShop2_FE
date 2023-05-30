import React from "react";
import ModalLogin from "./Modal";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { logout } from "../sevives/useService";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => {
    console.log(user);
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
  }


  return (
    <div>
      <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <a className="btn border">
              <i className="fas fa-heart text-primary"></i>
              <span className="badge">0</span>
            </a>
            <a className="btn border">
              <i className="fas fa-shopping-cart text-primary"></i>
              <span className="badge">0</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: "65px", marginTop: "-1px", padding: " 0 30px" }}
            >
              <h6 className="m-0">Categories</h6>
              <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: "1" }}
            >
              <div
                className="navbar-nav w-100 overflow-hidden"
                style={{ height: "410px" }}
              >
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown">
                    Dresses{" "}
                    <i className="fa fa-angle-down float-right mt-1"></i>
                  </a>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <a className="dropdown-item">Men's Dresses</a>
                    <a className="dropdown-item">Women's Dresses</a>
                    <a className="dropdown-item">Baby's Dresses</a>
                  </div>
                </div>
                <a className="nav-item nav-link">Shirts</a>
                <a className="nav-item nav-link">Jeans</a>
                <a className="nav-item nav-link">Swimwear</a>
                <a className="nav-item nav-link">Sleepwear</a>
                <a className="nav-item nav-link">Sportswear</a>
                <a className="nav-item nav-link">Jumpsuits</a>
                <a className="nav-item nav-link">Blazers</a>
                <a className="nav-item nav-link">Jackets</a>
                <a className="nav-item nav-link">Shoes</a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
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
                  <a className="nav-item nav-link">Home</a>
                  <a className="nav-item nav-link active">Shop</a>
                  <a className="nav-item nav-link">Shop Detail</a>
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <a className="dropdown-item">Shopping Cart</a>
                      <a className="dropdown-item">Checkout</a>
                    </div>
                  </div>
                  <a className="nav-item nav-link">Contact</a>
                </div>
                {user ? (
                  <div className="navbar-nav ml-auto py-0">
                    <div>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        sx={{padding:"4px"}}
                      >
                        <AccountCircle  sx={{ width: 45, height: 45 }} />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
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
                        sx={{top: "50px", left: "20px"}}
                      >
                        <MenuItem onClick={handleClose}>{user.username}</MenuItem>
                        <MenuItem onClick={clearCookies} >Log Out</MenuItem>
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
