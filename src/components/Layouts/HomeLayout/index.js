import Footer from "../../common/Footer";
import Header from "../../common/Header";

import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";

const cx = classNames.bind(styles);
function HomeLayout({ content }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>
        <div className={cx("partLeft")}>{content}</div>
        <div className={cx("partRight")}></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default HomeLayout;
