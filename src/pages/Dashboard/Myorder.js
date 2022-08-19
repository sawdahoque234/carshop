import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "../../style/Footer.css";

const Myorder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://stark-waters-33532.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handledelete = (order) => {
    const url = `https://stark-waters-33532.herokuapp.com/orders/${order}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Are You Sure Deleted This Product???");
          const remaining = orders.filter((order) => order._id !== order);
          setOrders(remaining);
          window.location.reload();
        }
      });
  };
  return (
    <div class="overflow-x-auto text-black">
      {orders.length ? (
        <table class="table table-zebra text-xl w-full ">
          <thead>
            <tr className="py-4">
              <th>No.</th>
              <th className="text-lg ">Property Name</th>
              <th className="text-lg ">Price</th>
              <th className="text-lg ">Order Status</th>
              <th className="text-lg ">Action</th>
            </tr>
          </thead>
          {orders.map((order, index) => (
            <>
              <tbody>
                <tr>
                  <th>{index + 1}.</th>
                  <td>{order?.title}</td>
                  <td>{order?.price}</td>

                  <td>{order.status}</td>
                  <td>
                    <button
                      onClick={() => handledelete(order._id)}
                      className="inline-flex text-white bg-red-500 border-0 p-2  focus:outline-none hover:bg-indigo-600 rounded text-sm"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      ) : (
        <h1 className="  text-2xl flex justify-center mx-auto text-red-600  overflow-y-hidden mt-10">
          No Data found!!
        </h1>
      )}
    </div>
  );
};

export default Myorder;
