import React from "react";
import Header from "../../common/Header";

import "./css/base.css";
import "./css/grid.css";

const IndexDetail = () => {
  const bannerStyle = {
    backgroundColor: "#ebebeb",
    height: "auto",
    width: "100%",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
  };

  const iconStyle = {
    fontSize: "20px",
    marginRight: "20px",
  };

  const primaryColorStyle = {
    color: "var(--primary-color)",
  };

  const buttonStyle = {
    backgroundColor: "var(--primary-color)",
    minWidth: "100px",
    color: "var(--white-color)",
  };

  const linkStyle = {
    fontWeight: 500,
    fontSize: "15px",
  };

  return (
    <div>
      <Header />
      <div>
        <div>
          <div className="grid wide">
            <div className="row sm-gutters">
              <img
                src={require("./img/banner.jpg")}
                style={{ width: "100%" }}
                alt=""
              />

              <div style={bannerStyle}>
                <div style={headerStyle}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "65px",
                    }}
                  >
                    <i style={iconStyle} className="fa-solid fa-house"></i>
                    <div style={{ fontSize: "18px", fontWeight: 500 }}>
                      Tin tức trong ngày
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "75%",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      Chính trị - Xã hội
                    </div>
                    <div style={{ marginRight: "10px" }}>
                      Đời sống - Dân sinh
                    </div>
                    <div style={{ marginRight: "10px" }}>
                      Giao thông - Đô thị
                    </div>
                    <div style={{ marginRight: "10px" }}>Nóng trên mạng</div>
                    <div style={{ marginRight: "10px" }}>Dự báo thời tiết</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "var(--white-color)",
                        padding: "5px",
                        width: "auto",
                        backgroundColor: "var(--primary-color)",
                        borderRadius: "10px",
                      }}
                    >
                      <div style={{ marginRight: "10px" }}>Lịch vạn niên</div>
                      <i className="fa-solid fa-calendar"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "30px", width: "70%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        paddingRight: "10px",
                        borderRight: "1px solid #90c95a",
                      }}
                    >
                      Trang chủ
                    </div>
                    <div
                      style={{
                        marginLeft: "10px",
                        color: "var(--primary-color)",
                      }}
                    >
                      Tin tức trong ngày
                    </div>
                  </div>
                  <div>
                    <div>Thứ Bảy, ngày 08/07/2023 16:57 PM (GMT+7)</div>
                  </div>
                </div>

                <h1 style={{ fontSize: "24px", display: "flex" }}>
                  Vụ cháy 3 người tử vong ở Hà Nội: Bố ngã quỵ, bật khóc gọi tên
                  con
                </h1>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ paddingRight: "10px" }}>Sự kiện:</div>
                    <div style={primaryColorStyle}>Tin nóng</div>
                  </div>
                  <div>
                    <button style={buttonStyle} className="btn btn-primary">
                      Chia sẻ
                    </button>
                  </div>
                </div>

                <h3>
                  Ông Hiệp ngã quỵ, gào khóc gọi tên con gái. "Con ơi, con ở đâu
                  về với bố", ông gào lên trong vô vọng.
                </h3>

                <img
                  style={{ width: "100%" }}
                  src={require("./img/anh-body-1.jpeg")}
                  alt=""
                />
                <div
                  style={{
                    fontStyle: "italic",
                    textAlign: "center",
                    fontSize: "15px",
                    lineHeight: "24px",
                  }}
                >
                  Ngôi nhà xảy ra vụ cháy
                </div>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Liên quan đến vụ cháy nhà khiến 3 người tử vong ở ngõ Thổ Quan
                  (quận Đống Đa, Hà Nội), trưa 8/7, nhiều người thân của các nạn
                  nhân đã có mặt tại nhà Tang lễ Bệnh viện Đống Đa để lo thủ tục
                  tang lễ cho 3 nạn nhân.
                </p>

                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Vừa bước xuống xe về nhà tang lễ, ông Dương Văn Hiệp (quê Hưng
                  Yên, bố nạn nhân 19 tuổi D.T.N.) ngã quỵ ngay trước cổng, gào
                  khóc gọi tên con gái "con ơi, con ở đâu về với bố".
                </p>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Gạt nước mắt, ông Hiệp nghẹn ngào nói, 8h sáng nay (8/7) ông
                  đang làm việc thì nhận tin con gái gặp nạn trong vụ cháy tại
                  ngõ Thổ Quan. Ông vội vàng bắt xe từ Lạng Sơn về Hà Nội luôn.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  “Con gái tôi mới học xong cấp 3, đang được nghỉ hè nên xuống
                  nhà cô, chú ở Hà Nội chơi. Tôi chỉ nghĩ con bị tai nạn bình
                  thường, không ngờ con lại ra đi mãi mãi như thế này”, ông Hiệp
                  đau đớn nói.
                </p>

                <img
                  style={{ width: "100%" }}
                  src={require("./img/anh-body-2.jpeg")}
                  alt=""
                />
                <div
                  style={{
                    fontStyle: "italic",
                    textAlign: "center",
                    fontSize: "15px",
                    lineHeight: "24px",
                  }}
                >
                  Ông Hiệp (áo trắng) gào khóc, gọi tên con
                </div>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Ông Dương Văn Hoàng (58 tuổi, ở Hưng Yên, ông họ nạn nhân
                  D.T.N.) cho biết, sự việc xảy ra là điều vô cùng đáng tiếc,
                  không ai mong muốn nên gia đình thống nhất phương án không mổ
                  khám nghiệm tử thi.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Theo ông Hoàng, chiều nay hoặc sớm mai, gia đình sẽ đưa tro
                  cốt D.T.N. về Hưng Yên để làm tang lễ, chôn cất.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Còn anh Nguyễn Văn Kế (38 tuổi, bố 2 cháu N.Q.M. và N.P.U.) từ
                  miền Trung về đến nhà Tang lễ Bệnh viện Đống Đa để lo hậu sự
                  cho các con.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Anh Kế cho hay, vợ chồng anh bắt đầu chuyến đi lễ các địa
                  phương dọc miền Trung được 3 ngày. Sáng nay, vợ chồng anh bất
                  ngờ nhận tin nhà xảy ra hoả hoạn, 2 con và cháu gái bị mắc kẹt
                  bên trong.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  “Trước chuyến đi, vợ chồng tôi yên tâm vì có cháu gái trông
                  giúp 2 con. Ai ngờ đâu vụ hoả hoạn đã cướp đi 2 con và cháu
                  gái của gia đình”, anh Kế khóc nấc nói.
                </p>

                <img
                  style={{ width: "100%" }}
                  src={require("./img/anh-body-3.jpeg")}
                  alt=""
                />
                <div
                  style={{
                    fontStyle: "italic",
                    textAlign: "center",
                    fontSize: "15px",
                    lineHeight: "24px",
                  }}
                >
                  Cảnh sát phá cửa để tiếp cận hiện trường
                </div>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Trước đó, vào khoảng 5h22 cùng ngày, cảnh sát nhận tin báo
                  cháy tại số nhà 12, ngõ Thổ Quan, phường Thổ Quan (quận Đống
                  Đa, Hà Nội). 8 xe chữa cháy và nhiều cảnh sát đã xuống hiện
                  trường để dập lửa.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Khu vực xảy ra vụ cháy là nhà ở kết hợp kinh doanh dich vụ
                  (làm móng chân, móng tay), nhà hình ống, cao 6 tầng, 1 tum,
                  diện tích khoảng 60m2 (chiều rộng khoảng 2,5m, chiều dài
                  khoảng 24m), kết cấu bê tông cốt thép.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Nhà dân có mặt trước tiếp giáp với ngõ Thổ Quan chiều rộng
                  khoảng 4m, mặt sau tiếp giáp với đường dân sinh chiều rộng
                  khoảng 1m, hai mặt còn lại tiếp giáp nhà dân.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "24px" }}>
                  Đến khoảng 7h37, đám cháy cơ bản được khống chế. Vụ cháy khiến
                  3 người mắc kẹt trong nhà tử vong gồm: cháu N.Q.M (13 tuổi)
                  cháu N.P.U (11 tuổi) và D.T.D (19 tuổi). Toàn bộ đồ dùng sinh
                  hoạt trong gia đình bị thiêu rụi.
                </p>
                <span>
                  Nguồn:
                  https://www.nguoiduatin.vn/vu-chay-3-nguoi-tu-vong-o-ha-noi-bo-nga-quy-bat-khoc-goi-ten-con-a616...
                </span>

                <div style={{ marginBottom: "50px", marginTop: "30px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button style={buttonStyle} className="btn btn-primary">
                        Chia sẻ
                      </button>
                      <button
                        style={{
                          border: "1px solid var(--primary-color)",
                          minWidth: "100px",
                          color: "var(--primary-color)",
                        }}
                        className="btn btn-primary"
                      >
                        Gửi góp ý
                      </button>
                    </div>
                    <div>
                      <span style={{ fontWeight: 500, fontSize: "15px" }}>
                        Theo Quỳnh An
                      </span>
                      (nguoiduatin.vn)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexDetail;
