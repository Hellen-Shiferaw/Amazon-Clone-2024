
import React, { useContext, useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Orders.module.css";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore"; // Import Firestore methods

function Orders() {
  const [{ user }] = useContext(DataContext); // 'dispatch' is not used, so removed it.
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const userOrdersRef = collection(db, "users", user.uid, "orders"); // Reference to user's orders collection
      const ordersQuery = query(userOrdersRef, orderBy("created", "desc")); // Query to order orders by 'created' field

      // Real-time listener
      const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // Clean up listener on unmount
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]); // Dependency on user

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet.</div>
          )}
          {/* Ordered items */}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard flex={true} product={order} key={order.id} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
