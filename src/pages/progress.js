import React from "react";

const Progress = () => {
  return (
    <div className="Progress">
      <h5 className="mb-5">TIMELINE DỰ ÁN</h5>
      <div className="accordion accordion-flush" id="progress">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
            >
              #1 Tuần 1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">Thành lập nhóm</li>
                <li className="list-group-item">
                  Xác định điều lệ và phạm vi đồ án.
                </li>
                <li className="list-group-item">
                  Mỗi thành viên tự nghiên cứu, tìm hiểu đề xuất một ý tưởng về
                  đồ án.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse2"
            >
              #2 Tuần 2
            </button>
          </h2>
          <div
            id="flush-collapse2"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">Thống nhất đề tài đồ án.</li>
                <li className="list-group-item">
                  Xác định công nghệ, ngôn ngữ để xây dựng đồ án.
                </li>
                <li className="list-group-item">Tạo Drive nhóm.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse3"
            >
              #3 Tuần 3
            </button>
          </h2>
          <div
            id="flush-collapse3"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  Tiến hành công tác học tập bổ sung kiến thức về ngôn ngữ,
                  framework được sử dụng trong đồ án (Tuần 1).
                </li>
                <li className="list-group-item">
                  Tiến hành thiết kế sơ đồ UseCase Tổng quát và các sơ đồ
                  Activity, Sequence có liên quan thể hiện rõ quy trình mua-bán
                  hàng.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse4"
            >
              #4 Tuần 4
            </button>
          </h2>
          <div
            id="flush-collapse4"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  Tiến hành công tác học tập bổ sung kiến thức về ngôn ngữ,
                  framework được sử dụng trong đồ án (Tuần 2).
                </li>
                <li className="list-group-item">
                  Thiết kế cơ sở dữ liệu trong phạm vi đồ án.
                </li>
                <li className="list-group-item">
                  Phân chia công việc thiết kế giao diện toàn bộ trang Web trên
                  Figma.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse5"
            >
              #5 Tuần 5
            </button>
          </h2>
          <div
            id="flush-collapse5"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  Tổng kết, đánh giá kết quả thiết kế giao diện trên Figma.
                </li>
                <li className="list-group-item">
                  Khởi động dự án, tạo Repository trên Github, tạo các nhánh cho
                  từng thành viên.
                </li>
                <li className="list-group-item">
                  Phân chia công việc xây dựng đồ án theo từng mảng lập trình.
                  Linh, Hoàng Việt và Phúc đảm nhận phần Frontend. Quốc Việt và
                  Đỉnh đảm nhận phần Backend.
                </li>
                <li className="list-group-item">
                  Khởi tạo File báo cáo cuối kỳ.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse6"
            >
              #6 Tuần 6
            </button>
          </h2>
          <div
            id="flush-collapse6"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  Đội Frontend tiến hành tổng kết, đánh giá tiến độ công viêc,
                  các màn hình đã thực hiện được.
                </li>
                <li className="list-group-item">
                  Đội Backend tiến hành kiểm thử tính nhất quán, các ràng buộc
                  trong cơ sở dữ liệu.
                </li>
                <li className="list-group-item">
                  Chuẩn bị cho công tác báo cáo tiến độ giữa kỳ.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse7"
            >
              #7 Tuần 7
            </button>
          </h2>
          <div
            id="flush-collapse7"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  Hoàn thành toàn bộ giao diện người dùng.
                </li>
                <li className="list-group-item">
                  Hoàn thành chức năng Đăng nhập - Đăng ký.
                </li>
                <li className="list-group-item">
                  Đội Bachend tiến hành viết API có các màn hình đã hoàn thành.
                  Soạn tài liệu hướng dẫn sử dụng API.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse8"
            >
              #8 Tuần 8
            </button>
          </h2>
          <div
            id="flush-collapse8"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  Tiến hành tổng kết, báo cáo các chức năng đã hoàn thành (Trang
                  chủ, Danh mục Sản Phẩm, Tìm kiếm Sản Phẩm, Chi tiết Sản Phẩm,
                  Quản lý Trang thông tin cá nhân).
                </li>
                <li className="list-group-item">
                  Tiến hành kiểm thử các chức năng đã hoàn thành.
                </li>
                <li className="list-group-item">
                  Khởi tạo source cho phần Admin.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse9"
            >
              #9 Tuần 9
            </button>
          </h2>

          <div
            id="flush-collapse9"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  Hoàn thành toàn bộ chức năng phần Người dùng.
                </li>
                <li className="list-group-item">
                  Tiến hành kiểm thử các chức năng đã hoàn thành. Chú trọng vào
                  quy trình mua-đặt hàng của người dùng.
                </li>
                <li className="list-group-item">
                  Hoàn thành toàn bộ giao diện Trang Admin.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse10"
            >
              #10 Tuần 10
            </button>
          </h2>

          <div
            id="flush-collapse10"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  Hoàn thành toàn bộ chức năng phần Admin.
                </li>
                <li className="list-group-item">
                  Tiến hành kiểm thử các chức năng đã hoàn thành. Chú trọng vào
                  quy trình quản lý - xác nhận đơn hàng của Admin.
                </li>
                <li className="list-group-item">
                  Tiến hành phân chia công việc viết báo cáo cuối kì.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed Progress_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse11"
            >
              #11 Tuần 11
            </button>
          </h2>

          <div
            id="flush-collapse11"
            className="accordion-collapse collapse"
            data-bs-parent="#progess"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "#f4f4f4",
              }}
            >
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  Hoàn thành việc xây dựng đồ án.
                </li>
                <li className="list-group-item">
                  Tiến hành kiểm thử lại tất cả chức năng của hệ thống.
                </li>
                <li className="list-group-item">
                  Hoàn thành việc viết báo cáo cuối kì.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
