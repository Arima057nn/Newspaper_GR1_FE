import classNames from "classnames/bind";
import styles from "./CategoryPart.module.scss";

const cx = classNames.bind(styles);

function CategoryPart() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-item")}>Bóng đá</div>
        <div className={cx("header-item2")}>Thể thao</div>
      </div>
      <p className={cx("tittle")}>
        Ronaldo tuyên bố giải Ả Rập tốt hơn MLS của Messi, đá chính ngày Al
        Nassr thua 0-5
      </p>
      <div className={cx("news")}>
        <img src="https://cdn.24h.com.vn/upload/3-2023/images/2023-07-18/120x90/vadvvxss-1689641372-917-width740height555.jpg" />
        <p className={cx("content")}>
          Ronaldo có những chia sẻ đáng chú ý sau khi cùng Al Nassr thi đấu giao
          hữu với Celta Vigo.
        </p>
      </div>
      <div className={cx("news1")}>
        <div className={cx("item")}>
          <a>MU sẽ ra sao nếu không kịp mua tiền đạo: Ten Hag phải..</a>
        </div>
        <div className={cx("item")}>
          <a>MU sẽ ra sao nếu không kịp mua tiền đạo: Ten Hag phải..</a>
        </div>
        <div className={cx("item")}>
          <a>MU sẽ ra sao nếu không kịp mua tiền đạo: Ten Hag phải..</a>
        </div>
      </div>

      <div className={cx("news2")}>
        <div className={cx("item2")}>
          <a>MU sẽ ra sao nếu không kịp mua tiền đạo: Ten Hag phải..</a>
        </div>
        <div className={cx("item2")}>
          <a>MU sẽ ra sao nếu không kịp mua tiền đạo: Ten Hag phải..</a>
        </div>
      </div>
    </div>
  );
}

export default CategoryPart;
