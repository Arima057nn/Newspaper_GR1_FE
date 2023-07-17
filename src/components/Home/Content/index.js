import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import CategoryPart from "../../CategoryPart";
import logo from './logo.png';
const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <CategoryPart />
      <CategoryPart />
      <CategoryPart />
      <CategoryPart />
      <div className={cx("news-img")}>
        <img src={logo} alt="logo" />

      </div>
      <CategoryPart />
      <CategoryPart />
      <CategoryPart />
    </div>
  );
}

export default Content;

