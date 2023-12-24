import React from "react";
import Accordion from "../components/Accordion";

const Assignments = [
  {
    member: "Lê Vũ Quốc Việt",
    assignment: [
      "Thiết kế cơ sở dữ liệu",
      "Thiết kế giao diện và xử lý chức năng phần Giỏ hàng - Thanh toán",
      "Viết API phía Admin",
    ],
    review:
      "Trưởng nhóm của Dreamers, đã thực sự chứng minh mình là một nhà lãnh đạo xuất sắc. Quốc Việt không chỉ là người hướng dẫn mà còn là người truyền cảm hứng. Sự linh hoạt của Quốc Việt trong việc lắng nghe ý kiến của mọi người đã làm cho Dreamers trở thành một không gian nơi mọi người tự tin chia sẻ và phát triển ý tưởng của mình.",
  },
  {
    member: "Trần Ngọc Linh",
    assignment: [
      "Thiết kế giao diện và xử lý chức năng phần Quản lý Tài khoản cá nhân",
      "Viết báo cáo",
    ],
    review:
      "Ngọc Linh - Ngôi sao sáng giữa màn trời đêm. Là người luôn luôn hoàn thành nhiệm vụ được giao đúng hạn. Ngọc Linh đã làm cho nhóm trở nên phong phú hơn bằng cách mang theo góc nhìn khác và tư duy giải quyết vấn đề của mình. Sự hiện diện của Ngọc Linh là tất yếu cho việc hoàn thành dự án của chúng tôi.",
  },
  {
    member: "Hồ Quang Đỉnh",
    assignment: [
      "Thiết kế giao diện Trang cá nhân Admin",
      "Viết API phía Admin",
      "Viết báo cáo",
    ],
    review:
      "Quang Đỉnh nổi bật với tính cách trầm tính và dáng vẻ học thức, tạo nên một khía cạnh sâu sắc và đặc biệt của nhóm. Thái độ làm việc nghiêm túc, cẩn thận và tỉ mỉ, là hình ảnh của một người nhân viên mẫu mực trong tương lai. Không ngần ngại chìm đắm trong việc nghiên cứu và giải quyết vấn đề phức tạp, mang lại thành quả cho nhóm trong sự im lặng.",
  },
  { 
    member: "Nguyễn Hoàng Phúc",
    assignment: [
      "Thiết kế giao diện và xử lý chức năng Trang chủ - Danh mục sản phẩm - Tìm kiếm",
      "Xử lý chức năng phần Chi tiết sản phẩm",
      "Viết báo cáo",
    ],
    review:
      "Hoàng Phúc, với tính cách hoạt ngôn và sự tích cực trong việc đưa ra ý kiến, là một thành viên không thể thiếu trong một tập thể. Hoàng Phúc thường xuyên là người mở lời và đưa ra ý kiến sáng tạo mang tính thực tế cao. Hoàng Phúc cũng là người quyết đoán trong công việc và nói không với sự chậm trễ trong việc hoàn thành trách nhiệm được giao.",
  },
  {
    member: "Nguyễn Hoàng Việt",
    assignment: [
      "Thiết kế giao diện phần Chi tiết sản phẩm",
      "Thiết kế giao diện và xử lý chức năng Trang Admin",
      "Thiết kế giao diện Trang Giới thiệu Đồ án",
    ],
    review:
      "Sự đam mê của Hoàng Việt trong công việc là nguồn động viên không ngừng cho cả nhóm. Với Hoàng Viêt, không chỉ là công việc mà còn là sự đồng hành và chia sẻ giữa các thành viên trong nhóm. Dreamers không chỉ là một nhóm làm chung đồ án mà còn là một gia đình, và Hoàng Việt là người đã mang lại cảm giác đó.",
  },
];

const Assign = () => {
  return (
    <div className="assign">
      <h5 className="mb-5">PHÂN CÔNG CÔNG VIỆC</h5>
      {Assignments.map((item, index) => (
        <div className="mb-4">
          <h5 className="mb-3">
            {index + 1}. {item.member}
          </h5>
          {item.assignment.map((assign) => (
            <p>- {assign}</p>
          ))}
          <Accordion title={"Đánh giá"} content={item.review} id={index} />
        </div>
      ))}
    </div>
  );
};

export default Assign;
