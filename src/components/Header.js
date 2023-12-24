import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo_large.png";

const Header = () => {
  return (
    <div className="d-flex align-items-center header">
      <Link to="/">
        <img src={Logo} alt="DreamTech" />
      </Link>
      <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 header_action">
        <li>
          <Link to="/">Giới thiệu</Link>
        </li>
        <li>
          <Link to="/about">Về chúng tôi</Link>
        </li>
        <li>
          <Link to="/assign">Phân công</Link>
        </li>
        <li class="nav-item dropdown">
          <button class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            Tài liệu
          </button>
          <ul class="dropdown-menu">
            <li>
              <Link class="dropdown-item" to="">
                Biên bản cuộc họp
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/progress">
                Tiến độ dự án
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Header;
