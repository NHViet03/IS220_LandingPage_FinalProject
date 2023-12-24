import React from "react";
import Zues from "../images/zues.jpg";
import Athena from "../images/athena.jpg";
import Apolo from "../images/apolo.jpg";
import Ares from "../images/ares.jpg";
import Poseidon from "../images/poseidon.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about_banner">
        <h2>Về Dreamers</h2>
      </div>

      <div className="about_story">
        <h5>Câu chuyện của chúng tôi</h5>
        <p>
          Ngày đầu tiên tại lớp học IS220.012, nơi những ước mơ nảy nầm. Năm cô
          cậu sinh viên mới bắt đầu hành trình của chính mình và trong cuộc
          phiêu lưu đó, họ tình cờ tìm thấy nhau. Và đó là khởi nguồn của cái
          tên Dreamers sau này.
        </p>
        <p>
          Năm con người, năm cái tâm hồn xa lạ, từng người đều có trong mình
          khát khao riêng biệt. Không mang trong mình từng cá nhân xuất sắc
          nhất, Dreamers được tạo nên từ tập thể có tính gắn kết nhất. Tình bạn
          bền vững trong Dreamers không chỉ là cầu nối, mà là nguồn động viên
          bất tận. Trong thời điểm gian khó, khi áp lực leo thang và những dự án
          cuối kỳ dồn dập, họ nắm chặt lấy tay nhau cùng vượt qua thử thách phía
          trước.{" "}
        </p>
        <q>Đồng thanh tương ứng, đồng khí tương cầu</q>
      </div>
      <div className="about_members">
        <h5>Thành viên của chúng tôi</h5>
        <div className="row justify-content-center about_member">
          <div className="col-md-4 col-sm-6">
            <img src={Zues} alt="" />
            <h6 className="mb-0">Lê Vũ Quốc Việt - 20522150</h6>
            <p>Trưởng nhóm</p>
          </div>
          <div className="col-md-4 col-sm-6">
            <img src={Athena} alt="" />
            <h6 className="mb-0">Trần Ngọc Linh - 20521538</h6>
            <p>Thành viên</p>
          </div>
          <div className="col-md-4 col-sm-6">
            <img src={Apolo} alt="" />
            <h6 className="mb-0">Hồ Quang Đỉnh - 21520190</h6>
            <p>Thành viên</p>
          </div>
          <div className="col-md-4 col-sm-6">
            <img src={Ares} alt="" />
            <h6 className="mb-0">Nguyễn Hoàng Phúc - 21520400</h6>
            <p>Thành viên</p>
          </div>
          <div className="col-md-4 col-sm-6">
            <img src={Poseidon} alt="" />
            <h6 className="mb-0">Nguyễn Hoàng Việt - 21522791</h6>
            <p>Thành viên</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
