import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Action/Action";



function Menu() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/meal");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  },
  []);


  const dispatch = useDispatch();

 const send = (item) => {
 // console.log(item);
  dispatch(addToCart(item)); // Fix: use `dispatch`, not `item.dispatch`
};


  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100">
              <img
                src={item.image}
                className="img-thumbnail"
                style={{ height: "200px", objectFit: "cover" }}
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item.category}
                </h6>
                <p className="card-text">{item.instructions}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-sm btn-primary col-lg-12"
                  onClick={() => send (item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
