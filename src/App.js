import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { depositBalance } from "./store/store";

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
  console.log(state);

  return (
    <div>
      <h1>User Name - {state.account.name}</h1>
      <h1>Address - Mumbai/Kochi</h1>
      <h1>Mobile - 12122121</h1>
      <h1>Balance - {state.account.balance}</h1>
    </div>
  );
}

function AddBalance() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  console.log(state);

  return (
    <div>
      <h1>Account Balance</h1>
      <h1>Balance - {state.account.balance}</h1>
      <input
        type="button"
        value="Add/Deposit balance"
        onClick={() => dispatch(depositBalance())}
      />
    </div>
  );
}

export default App;
