import React from "react";

export const Card = () => {
  return (
    <div>
      
      <div>

        <div
          className="card mt-3 shadow position-relative me-3 "
          style={{ width: "18rem", maxHeight: "380px", float:"right",justifyContent:"space-between",translateX:"0.5s"  }}
        >
          <img src="https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-alacart-2023-05-31095826.png" style={{backgroundColor:"#1c1816"}} className="card-img-top" alt="..." />
          <div className="card-body" style={{backgroundColor:"#EA002A", color:"white"}}>
            <h5 className="card-title">Mighty Burger</h5>
            <p className="card-text">With Fries</p>
            <div className="container w-100">
              <select className="m-2  h-100  rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100  rounded " >
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
