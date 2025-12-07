import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../backendUrl";

const Products = () => {
  const [products, setProducts] = useState([]);

  // get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 style={{ textAlign: "center" }}>All Products List</h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  margin: "0.5rem"
                }}
              >
                <div style={{ width: "18rem", border: "1px solid #ccc", borderRadius: "5px", margin: "1rem", padding: "1rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <img
                    src={`${BASE_URL}/api/v1/product/product-photo/${p._id}`}
                    style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
                    alt={p.name}
                  />
                  <div style={{ padding: "1rem" }}>
                    <h5 style={{ fontSize: "1.25rem", margin: "0 0 0.5rem 0" }}>{p.name}</h5>
                    <p style={{ fontSize: "0.875rem", margin: "0" }}>{p.description.substring(0, Math.min(50, p.description.length))}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default Products;
