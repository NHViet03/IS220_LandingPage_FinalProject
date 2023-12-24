import React from "react";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center py-4   footer ">
      <small className="mb-0">
        © 2023 DreamTech. Tất cả bản quyền đã được đăng ký.
      </small>
      <div className="footer_icons">
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-github" />
        <i className="fa-brands fa-linkedin" />
        <i className="fa-brands fa-square-instagram" />
      </div>
    </div>
  );
};

export default Footer;
