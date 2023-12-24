import React, { useState, useRef, useEffect } from "react";
import homeImg from "../images/home_page.png";
import categoryImg from "../images/category.png";
import productImg from "../images/product.png";
import cartImg from "../images/cart.png";
import accountImg from "../images/account.png";
import dashboardImg from "../images/dashboard.png";
import productsImg from "../images/products.png";
import orderImg from "../images/order.png";
import customerImg from "../images/customer.png";

const Home = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "-300px",
      }
    );
    observer.observe(ref.current);
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll(".row").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll(".row").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <div className="home">
      <div className="home_landing">
        <div className="home_landing_img">
          <div className="home_landing_content">
            <h5 className="mb-0">Website Thương mại điện tử</h5>
            <h5>Nhóm thực hiện: Dreamers</h5>
            <p>Giáo viên hướng dẫn: ThS. Tạ Việt Phương </p>
            <a href="/" target="_blank">
              Repository
              <i className="fa-brands fa-square-github ms-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="home_intro">
        <p className="mb-4">
          DreamTech - Nơi mọi ý tưởng đều có thể trở thành hiện thực.
        </p>
        <p>
          Hãy cùng chúng tôi bắt đầu hành trình kỳ diệu này, nơi mà niềm tin vào
          sức mạnh của đội ngũ và đam mê sáng tạo của Dreamers Team sẽ giúp bạn
          trải nghiệm công nghệ ở một tầm cao mới.
        </p>
        <button className="btn">Xem thêm</button>
      </div>
      <div className="home_tech">
        <h5>Công nghệ sử dụng trong đồ án</h5>
        <div className="home_tech-content">
          <div className="d-flex align-items-center mb-3 ">
            <p className="me-2">- Môi trường lập trình: Visual Studio Code</p>
            <img
              src="https://logowik.com/content/uploads/images/visual-studio-code7642.jpg"
              alt="vscode"
            />
            <p className="me-2">, Visual Studio</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/512px-Visual_Studio_Icon_2019.svg.png"
              alt="vs"
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <p className="me-2">- Công cụ thiết kế giao diện: Figma</p>
            <img
              src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format"
              alt="vscode"
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <p className="me-2">- Công cụ quản lý dự án: Jira</p>
            <img
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
              alt="vscode"
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <p className="me-2">- Công cụ thiết kế hệ thống: StarUML</p>
            <img
              src="https://anturis.com/wp-content/uploads/2022/09/StarUML-Logo-1.png"
              alt="vscode"
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <p className="me-2">- Công cụ quản lý mã nguồn : Github</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="vscode"
            />
          </div>
          <div>
            <p className="text-center mb-3 fw-medium">Ngôn ngữ lập trình</p>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <p className="text-center mb-3">Front-End</p>
                <div className="d-flex align-items-center mb-3">
                  <p className="me-2">- Framework: React</p>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                    alt="vscode"
                  />
                </div>
                <div className="d-flex align-items-center mb-3">
                  <p className="me-2">- Styling: Bootstrap</p>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
                    alt="vscode"
                  />
                  <p className="me-2">, TailwindCSS</p>
                  <img
                    src="https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.11.36/1703195830472/Microsoft.VisualStudio.Services.Icons.Default"
                    alt="vscode"
                  />
                </div>
                <div className="d-flex align-items-center mb-3">
                  <p className="me-2">- Library: Redux</p>
                  <img
                    src="https://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text-thumbnail.png"
                    alt="vscode"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <p className="text-center mb-3">Back-End</p>
                <div className="d-flex align-items-center mb-3">
                  <p className="me-2">- Framework: ASP.NET Core MVC </p>
                  <img
                    src="https://play-lh.googleusercontent.com/6AB25hhGfx2C74wz4v_XYaUSdXualWh-hPmZypzUi9a4y2K4wqZaxPzd_c_7lrLatTGj"
                    alt="vscode"
                  />
                </div>
                <div className="d-flex align-items-center mb-3">
                  <p className="me-2">- Database: SQL Server</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png"
                    alt="vscode"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className="home_features">
        <h5 className="mb-5">TÍNH NĂNG CHÍNH</h5>
        <h5 className="mb-3">Người dùng</h5>
        <div className="row">
          <div className="col-md-4 col-sm-12 home_features-item">
            <h5>Giao diện nổi bật</h5>
            <p>
              Giao diện bắt mắt với tông màu đỏ chủ đạo, đi kèm với nhiều sản
              phẩm đa dạng. Thu hút khách hàng ngay từ ánh nhìn đầu tiên.
            </p>
          </div>
          <div className="col-md-8 col-sm-12 home_features-img">
            <img src={homeImg} alt="" />
          </div>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-md-4 col-sm-6 home_features-item">
            <h5>Danh mục sản phẩm đa dạng</h5>
            <p>
              Phân loại sản phẩm theo nhiều danh mục: Laptop, PC, Chuột,...Với
              nhiều bộ lọc theo thương hiệu, mức giá đi kèm mức sắp xếp.
            </p>
          </div>
          <div className="col-md-8 col-sm-6 home_features-img">
            <img src={categoryImg} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 home_features-item">
            <h5>Chi tiết sản phẩm</h5>
            <p>
              Chi tiết sản phẩm với nhiều thông tin, hình ảnh kèm theo. Hình ảnh
              được hiển thị bắt bắt, giá cả được hiển thị mang tính thẩm mỹ cao.
              Thông số kỹ thuật của từng sản phẩm đầy đủ, rõ ràng.
            </p>
          </div>
          <div className="col-md-8 col-sm-12 home_features-img">
            <img
              src={productImg}
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-md-4 col-sm-6 home_features-item">
            <h5>Quy trình đặt hàng chuẩn doanh nghiệp</h5>
            <p>
              Quy trình đặt hàng được thực hiện qua 4 bước: Thêm sản phẩm vào
              giỏ hàng, Điền thông tin đặt hàng, Thanh toán, Hoàn tất đơn hàng.
            </p>
          </div>
          <div className="col-md-8 col-sm-6 home_features-img">
            <img
              src={cartImg}
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 home_features-item">
            <h5>Quản lý tài khoản cá nhân</h5>
            <p>
              Khách hàng có thể dễ dàng thay đổi thông tin cá nhân. Thay đổi địa
              chỉ giao hàng. Xem lịch sử đơn hàng, cũng như theo dõi trạng thái
              từng đơn hàng.
            </p>
          </div>
          <div className="col-md-8 col-sm-12 home_features-img">
            <img src={accountImg} alt="" />
          </div>
        </div>
        <h5 className="mb-3">Quản lý</h5>
        <div className="row">
          <div className="col-md-4 col-sm-12 home_features-item">
            <h5>Bảng điều khiển chuyên nghiệp</h5>
            <p>
              Quản lý dễ dàng nắm bắt được tổng doanh thu, số lượng đơn hàng,...
              theo từng mốc thời gian. Hỗ trợ biểu đồ thống kê theo từng tháng
              trong năm.
            </p>
          </div>
          <div className="col-md-8 col-sm-12 home_features-img">
            <img src={dashboardImg} alt="" />
          </div>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-md-4 col-sm-6 home_features-item">
            <h5>Quản lý danh sách sản phẩm</h5>
            <p>
              Quản lý có thể quản lý toàn bộ danh sách sản phẩm được bán ra với
              nhiều bộ lọc và mức sắp xếp. Ngoài ra có thể thêm, xóa, thay đổi
              thông tin sản phẩm bất kỳ.
            </p>
          </div>
          <div className="col-md-8 col-sm-6 home_features-img">
            <img
              src={productsImg}
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 home_features-item">
            <h5>Kiểm soát trạng thái đơn hàng</h5>
            <p>
              Quản lý có toàn quyền thay đổi trạng thái đơn hàng từ xác nhận đơn
              hàng, giao hàng,... Đồng thời có thể xem được thông tin chi tiết
              của từng đơn hàng. Ngoài ra có thể thay đổi địa chỉ giao hàng.
            </p>
          </div>
          <div className="col-md-8 col-sm-12 home_features-img">
            <img src={orderImg} alt="" />
          </div>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-md-4 col-sm-6 home_features-item">
            <h5>Theo dõi thông tin khách hàng</h5>
            <p>
              Quản lý dễ dàng theo dõi toàn bộ thông tin của khách mua hàng.
              Tổng hợp thông tin về danh thu, đơn hàng,.... Ngoài ra quản lý có
              thể liên hệ trực tiếp với khách hàng thông qua email được cung
              cấp.
            </p>
          </div>
          <div className="col-md-8 col-sm-6 home_features-img">
            <img
              src={customerImg}
              alt=""
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
