import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('intro')}>
        <div className={cx('intro-container')}>
          <div>
            <a href="https://www.hust.edu.vn/">TRƯỜNG ĐẠI HỌC BÁCH KHOA HÀ NỘI</a>
          </div>
        </div>
      </div>
      <div className={cx('bottom_footer')}>
        <div>
          <b>Đồ án 1</b>
          <b>Giáo viên phụ trách: Thầy Trần Vĩnh Đức</b>
          <b>Sinh viên: Phạm Tiến Dũng 20194525 - Nguyễn Minh Đức 20194513 - Nguyễn Tiến Đạt 20194503 - Phạm Minh Chiến 20194491 - Ngô Thành Đạt 20194499</b>
        </div>
      </div>
    </div>
  );
}

export default Footer;
