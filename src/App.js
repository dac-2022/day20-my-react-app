import { useState } from "react";

function App() {
  return (
    <div>
      <UserAccount />
      <hr />
      <AddBalance />
      <hr />
    </div>
  );
}

function UserAccount() {
  let [user] = useState("Rahul");
  let [balance] = useState(0);
  return (
    <div>
      <h1>User Name - {user}</h1>
      <h1>Address - Mumbai/Kochi</h1>
      <h1>Mobile - 12122121</h1>
      <h1>Balance - {balance}</h1>
    </div>
  );
}

function AddBalance() {
  let [balance, setBalance] = useState(0);

  const increment = () => {
    const newcounter = balance + 1;
    setBalance(newcounter);
  };

  return (
    <div>
      <h1>Account Balance</h1>
      <h1>Balance - {balance}</h1>
      <input type="button" value="Add/Deposit balance" onClick={increment} />
    </div>
  );
}

export default App;
