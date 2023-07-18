import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import CategoryPart from "../../CategoryPart";
import CategoryPart2 from "../../CategoryPart2";
const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top")}>
        <CategoryPart />
        <CategoryPart />
        <CategoryPart />
        <CategoryPart />
        <CategoryPart />
        <CategoryPart />
      </div>
      <div className={cx("bottom")}>
        <CategoryPart2 />
        <CategoryPart2 />
        <CategoryPart2 />
        <CategoryPart2 />
        <CategoryPart2 />
        <CategoryPart2 />
      </div>
    </div>
  );
}

export default Content;
