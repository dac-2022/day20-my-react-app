import { useState } from "react";
import { useSelector } from "react-redux";

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
  let state = useSelector((state) => state);
  let [user] = useState("Rahul");

  return (
    <div>
      <h1>User Name - {user}</h1>
      <h1>Address - Mumbai/Kochi</h1>
      <h1>Mobile - 12122121</h1>
      <h1>Balance - {state.account.balance}</h1>
    </div>
  );
}

function AddBalance() {
  let state = useSelector((state) => state);

  return (
    <div>
      <h1>Account Balance</h1>
      <h1>Balance - {state.account.balance}</h1>
      <input type="button" value="Add/Deposit balance" />
    </div>
  );
}

export default App;
