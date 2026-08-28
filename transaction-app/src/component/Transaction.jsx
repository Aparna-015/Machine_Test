// import { useState,useEffect} from "react";

// const Initial_transactions = [
//   {
//     id: 1,
//     title: "Cash",
//     amount: 500,
//     status: "pending",
//   },
//   {
//     id: 2,
//     title: "NN",
//     amount: 500,
//     status: "completed",
//   },
//   {
//     id: 3,
//     title: "OO",
//     amount: 500,
//     status: "pending",
//   },
//   {
//     id: 4,
//     title: "Cash",
//     amount: 500,
//     status: "completed",
//   },
//   {
//     id: 5,
//     title: "Cash",
//     amount: 500,
//     status: "completed",
//   },
//   {
//     id: 6,
//     title: "Cash",
//     amount: 500,
//     status: "completed",
//   },
// ];

// const Transaction = () => {
//   const [state, setState] = useState(Initial_transactions);
//   console.log(state, "state=");
//   const [data, setData] = useState("completed");
//   console.log(data, "data----");

//   const displayedTransactions = state.filter((tx) => {
//     if (data === "pending") return tx.status === "pending";
//     if (data === "completed") return tx.status === "completed";
//     return true; // 'all'
//   });
//   console.log(displayedTransactions, "tra");

  
 

//   useEffect(()=>{
//  function orderfood(callback) {
//     setTimeout(() => {
//       callback("food is ready");
//     }, 2000);
//   }
//   orderfood((FD)=>{
//     console.log("it is "+FD);
//   });
//   },[])
//     useEffect(()=>{
//  function orderfood(callback) {
//     setTimeout(() => {
//       callback("food is ready");
//     }, 2000);
//   }
//   orderfood((FD)=>{
//     console.log("it is "+FD);
//   });
//   },[])
//   return (
//     <div>
//       <h1>ghhh</h1>
//       show transactions
//       <button onClick={() => setData("pending")}>pending</button>
//       <button onClick={() => setData("completed")}>completed</button>
//       <div>
//         {displayedTransactions.map((item) => (
//           <div key={item.id}>
//             <h3>{item.title}</h3>
//             <h1>{item.title}</h1>
//             <p>Amount: {item.amount}</p>
//             <p>Status: {item.status}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Transaction;


import React, { useState, useEffect } from "react";

function UserProfile() {
  // 1. Setup states for the 3 Promise lifecycle states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Define the async API fetch function
  const fetchUserData = async () => {
    try {
      setLoading(true); // Reset state to Pending
      setError(null);

      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch user data!");
      }

      // FULFILLED: Parse data and update state
      const data = await response.json();
      console.log(data,"----====-");
      
      setUser(data);

    } catch (err) {
      // REJECTED: Catch error and sve to state
      setError(err.message);

    } finally {
      // Runs regardless of success or failure to stop loading indicator
      setLoading(false);
    }
  };

  // const fetchdata=()=>{

  //   const response=fetch("https://jsonplaceholder.typicode.com/users");
  //   console.log(response,"response====");
    

  // }
  




  // 4. Render UI based on Promise State
   if (loading) return <h2>Loading user profile...... (Promise Pending)</h2>;
   if (error) return <h2 style={{ color: "red" }}>❌ Error: {error} (Promise Rejected)</h2>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
       <h2>✅ User Details (Promise Fulfilled)</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.address.city}</p>
       
      Button to re-trigger the Promise
      <button onClick={fetchUserData}>Reload User</button>
    </div>
  );
}

export default UserProfile;