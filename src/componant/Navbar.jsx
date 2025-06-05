import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/Action/Action";
import DeleteIcon from "@mui/icons-material/Delete";
// adjust path as needed

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navbar() {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const menuItems = useSelector((state) => state.menureducer.menu);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand */}
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3"></i>Restoran
          </h1>
        </Link>

       

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booktable">
                BookTable
              </Link>
            </li>

            {/* Desktop Cart Icon */}
            <li className="nav-item">
              <IconButton
                aria-label="cart"
                onClick={handleClick}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <StyledBadge
                  badgeContent={menuItems?.length}
                  color="secondary"
                  showZero
                >
                  <ShoppingCartIcon style={{ color: "#fff" }} />
                </StyledBadge>
              </IconButton>

              {/* Cart Dropdown Menu */}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <div style={{ minWidth: "300px", padding: 10 }}>
                  <button
                    onClick={handleClose}
                    className="btn-close float-end"
                    aria-label="Close"
                  ></button>

                  {menuItems.length ? (
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th>Photo</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {menuItems.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <NavLink to={`/cart/${item.id}`}>
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  width="50"
                                  height="50"
                                  style={{
                                    objectFit: "cover",
                                    borderRadius: "5px",
                                  }}
                                />
                              </NavLink>
                            </td>
                            <td>{item.name}</td>
                            <td>₹{item.price}</td>
                            <td>
                              <DeleteIcon
                                color="error"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleRemove(item.id)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-center mt-3">Your cart is empty</p>
                  )}
                </div>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
