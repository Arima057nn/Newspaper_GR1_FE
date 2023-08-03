import { useParams } from "react-router";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { articleApi } from "../../services/article-api";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Search() {
  const [articleLevel1, setArticleLevel1] = useState([]);
  const [articleLevel2, setArticleLevel2] = useState([]);
  const params = useParams();
  // console.log("param:", params);
  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    let res = await articleApi.getArticleBySubCategory(params.subcategoryId);

    setArticleLevel1(res?.filter((item) => item.level === 1));
    setArticleLevel2(res?.filter((item) => item.level === 2));
  };
  return (
    <div className={cx("wrapper")}>
      <p className={cx("tittle")}>Món ngon mỗi ngày</p>

      <Link
        to={`/detail/${articleLevel1[0]?._id}`}
        style={{ textDecoration: "none" }}
      >
        <p className={cx("content")}>{articleLevel1[0]?.header}</p>
      </Link>
      <p className={cx("news")}>
        <img src={articleLevel1[0]?.image} width="820" height="500" />
      </p>

      {articleLevel1.slice(1).map((item, index) => (
        <>
          <Link to={`/detail/${item._id}`} style={{ textDecoration: "none" }}>
            <p className={cx("tittle1")}>{item.header}</p>
          </Link>
          <div className={cx("news1")}>
            <img src={item.image} width="200" height="150" />
            <p className={cx("content1")}>{item.content1}</p>
          </div>
        </>
      ))}

      {articleLevel2.map((item, index) => (
        <>
          <Link to={`/detail/${item._id}`} style={{ textDecoration: "none" }}>
            <p className={cx("tittle1")}>{item.header}</p>
          </Link>
          <div className={cx("news1")}>
            <img src={item.image} width="200" height="150" />
            <p className={cx("content1")}>{item.content1}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Search;
