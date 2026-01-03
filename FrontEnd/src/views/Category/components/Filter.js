import React from "react";
import { useSelector } from "react-redux";

function Filter({categoryId}) {
  
  const categories = useSelector(state => state.gShare.categories)

  return (
    <div className="sidebar_section">
      <div className="sidebar_title">
        <h5>Phân loại đồng hồ</h5>
      </div>
      <ul className="sidebar_categories">
        {categories && categories.map((ct, index) => {
          return (
            <li className={ct.categoryId == categoryId ? "active" : ""} key={ct.categoryId}> 
              <a href={`/trang-chu/danh-muc/${ct.categoryId}`}>
                <span>
                  <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                </span>
                {ct.categoryName}
              </a>
            </li>
          );
        })}
        <li>
          <a href="/">Trang chủ</a>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
