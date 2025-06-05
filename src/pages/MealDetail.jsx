import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function MealDetail() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const menuItems = useSelector((state) => state.menureducer.menu);

  useEffect(() => {
    const compareData = menuItems.filter(
      (item) => item.id === id || item.id === parseInt(id)
    );
    setData(compareData);
  }, [id, menuItems]);

  // ✅ Remove item handler
  const handleRemove = (removeId) => {
    const updatedData = data.filter((item) => item.id !== removeId);
    setData(updatedData);
  };

  return (
    <div className="container mt-2">
      <div style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Meal Detail Page</h2>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {data.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                alignItems: "flex-start",
              }}
            >
              {data.map((ele) => (
                <React.Fragment key={ele.id}>
                  <div style={{ flex: "0 0 220px" }}>
                    <img
                      src={ele.image}
                      alt={ele.name}
                      style={{
                        width: "220px",
                        height: "220px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "20px", verticalAlign: "top" }}>
                            <p><strong>Name</strong>: {ele.name}</p>
                            <p><strong>Price</strong>: ₹ {ele.price}</p>
                            <p><strong>Category</strong>: {ele.category}</p>
                          </td>
                          <td style={{ verticalAlign: "top" }}>
                            <p><strong>Rating</strong>: {ele.rating}</p>
                            <p>
                              <strong>Order Review</strong>: {ele.orderReview}
                            </p>
                            <p>
                              <strong>Remove</strong>:{" "}
                              <span
                                style={{ color: "red", cursor: "pointer" }}
                                onClick={() => handleRemove(ele.id)}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: "center" }}>No meal data found.</p>
          )}

          {/* ✅ Go to Menu button */}
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              onClick={() => navigate("/menu")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Go to Menu Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealDetail;
