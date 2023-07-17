import React from 'react';
import classNames from 'classnames/bind';
import styles from './CategoryPart.module.scss';
import anh from './anh.jpg';

const cx = classNames.bind(styles);

function CategoryPart() {
  const titleStyle = {
    fontSize: '14px'
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('news-title-big')}>
        <div className={cx('news-title-big-name-1')}>
          <a href="https://www.24h.com.vn/tin-tuc-trong-ngay-c46.html">
            <p>Tin tức trong ngày</p>
          </a>
        </div>
        <div className={cx('news-title-big-name')}>
          <a href="https://www.24h.com.vn/nong-tren-mang-c983.html">Nóng trên mạng</a>
        </div>
        <div className={cx('news-title-big-name')}>
          <a href="https://www.24h.com.vn/nhip-song-24h-c46e5000.html">Nhịp sống 24h</a>
        </div>
      </div>
      <div className={cx('news-title')}>
        <a
          href="https://www.24h.com.vn/tin-tuc-trong-ngay/khu-du-lich-noi-tieng-tam-coc-bich-dong-bat-ngo-dong-cua-c46a1482337.html"
          title="Khu du lịch nổi tiếng Tam Cốc - Bích Động bất ngờ đóng cứa"
          style={titleStyle}
        >
          Khu du lịch nổi tiếng Tam Cốc - Bích Động bất ngờ "đóng cứa"
        </a>
      </div>
      <div className={cx('news-art')}>
        <div className={cx('news-img')}>
          <a
            href="https://www.24h.com.vn/tin-tuc-trong-ngay/khu-du-lich-noi-tieng-tam-coc-bich-dong-bat-ngo-dong-cua-c46a1482337.html"
            title="Khu du lịch nổi tiếng Tam Cốc - Bích Động bất ngờ đóng cứa"
          >
            <img src={anh} alt="logo" />
          </a>
        </div>
        <div className={cx('news-description')}>
          Do khu du lịch dừng đón khách đột ngột, nhiều du khách, tour du lịch "không kịp trở tay".
        </div>
      </div>

      <div className={cx('news-related-content')}>
        <ul>
          <li>
            <a href="https://www.24h.com.vn/tin-tuc-trong-ngay/song-han-bung-no-anh-sang-am-thanh-trong-dai-tiec-dem-chung-ket-phao-hoa-c46a1482357.html">
              <p className={cx('news-related-content-name')} title="Sông hàn bùng nổ ánh sáng, âm thanh trong đại tiệc đêm chung kết pháo hoa">
                Sông hàn bùng nổ ánh sáng, âm thanh trong đại tiệc đêm chung kết pháo hoa
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.24h.com.vn/media-24h/clip-o-to-tai-tong-bay-xe-may-dung-dot-ngot-tai-xe-thoat-dai-nan-kho-tin-c762a1482339.html">
              <p className={cx('news-related-content-name')} title="Clip: Ô tô tải tông bay xe máy dừng đột ngột, tài xế thoát đại nạn khó tin">
                Clip: Ô tô tải tông bay xe máy dừng đột ngột, tài xế thoát đại nạn khó tin
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.24h.com.vn/tin-tuc-trong-ngay/tin-tuc-24h-qua-tiet-lo-bat-ngo-ve-suat-com-binh-dan-gia-160-nghin-dong-o-cong-bv-bach-mai-c46a1482340.html">
              <p className={cx('news-related-content-name')} title="Tin tức 24h qua: Tiết lộ bất ngờ về “suất cơm bình dân giá 160 nghìn đồng” ở cổng BV Bạch Mai">
                Tin tức 24h qua: Tiết lộ bất ngờ về “suất cơm bình dân giá
                160 nghìn đồng” ở cổng BV Bạch Mai
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.24h.com.vn/tin-tuc-trong-ngay/vu-chay-3-nguoi-tu-vong-o-ha-noi-bo-nga-quy-bat-khoc-goi-ten-con-c46a1482311.html">
              <p className={cx('news-related-content-name-1')} title="Vụ cháy 3 người tử vong ở Hà Nội: Bố ngã quỵ, bật khóc gọi tên con">
                Vụ cháy 3 người tử vong ở Hà Nội: Bố ngã quỵ, bật khóc
                gọi tên con
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.24h.com.vn/tin-tuc-quoc-te/nga-phan-ung-gat-sau-khi-my-quyet-dinh-gui-bom-dan-chum-cho-ukraine-c415a1482227.html">
              <p className={cx('news-related-content-name-1')} title="Nga phản ứng “gắt” sau khi Mỹ quyết định gửi bom, đạn chùm cho Ukraine">
                Nga phản ứng “gắt” sau khi Mỹ quyết định gửi bom, đạn
                chùm cho Ukraine
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryPart;