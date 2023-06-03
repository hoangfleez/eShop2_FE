import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, searchCategoryProduct } from "../../sevives/productService";

const CategorizeAndSort = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => {
    return state.category.category;
  });

  const handleCategory = (id) => {
    dispatch(searchCategoryProduct(id));
  };

  const handleAllProducts = () => {
    dispatch(getProduct());
  };

  return (
    <div >
      <div style={{ paddingTop: "30px", width: "100%" }}>
        <div
          style={{
            display: "flex",
            columnGap: "10px",
            alignItems: "center",
            borderBottom: "1px solid rgb(245,245,24)",
            padding: "10px",
            width: "100%",
          }}
        >
          <i class="fa-solid fa-bars"></i>
          <span>Tất cả danh mục</span>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <div
            style={{ padding: 5, cursor: "pointer" }}
            onClick={() => {
              handleAllProducts();
            }}
          >
            <span>Tât cả sản phẩm </span>
          </div>

          {category &&
            category.map((item) => (
              <div
                key={item.id}
                style={{ padding: 5, cursor: "pointer" }}
                onClick={() => handleCategory(item.id)}
              >
                <span>{item.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategorizeAndSort;
