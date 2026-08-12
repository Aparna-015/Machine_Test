import { useState,useEffect} from "react";

const Initial_transactions = [
  {
    id: 1,
    title: "Cash",
    amount: 500,
    status: "pending",
  },
  {
    id: 2,
    title: "NN",
    amount: 500,
    status: "completed",
  },
  {
    id: 3,
    title: "OO",
    amount: 500,
    status: "pending",
  },
  {
    id: 4,
    title: "Cash",
    amount: 500,
    status: "completed",
  },
  {
    id: 5,
    title: "Cash",
    amount: 500,
    status: "completed",
  },
  {
    id: 6,
    title: "Cash",
    amount: 500,
    status: "completed",
  },
];

const Transaction = () => {
  const [state, setState] = useState(Initial_transactions);
  console.log(state, "state=");
  const [data, setData] = useState("completed");
  console.log(data, "data----");

  const displayedTransactions = state.filter((tx) => {
    if (data === "pending") return tx.status === "pending";
    if (data === "completed") return tx.status === "completed";
    return true; // 'all'
  });
  console.log(displayedTransactions, "tra");

  
 

  useEffect(()=>{
 function orderfood(callback) {
    setTimeout(() => {
      callback("pizza");
    }, 2000);
  }
  orderfood((FD)=>{
    console.log("it is "+FD);
  });
  },[])
  return (
    <div>
      <h1>ghhh</h1>
      show transactions
      <button onClick={() => setData("pending")}>pending</button>
      <button onClick={() => setData("completed")}>completed</button>
      <div>
        {displayedTransactions.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <h1>{item.title}</h1>
            <p>Amount: {item.amount}</p>
            <p>Status: {item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
