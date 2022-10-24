import React, { useContext } from "react";
import addAccount from "./account.png";
import linkAccount from "./link_account.png";
import exchange from "./exchange.jpeg";
import { TransactionContext } from "../context/TransactionContex";
import "./learnMorePage.css";
const LearnMorePage = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);
  // console.log(transactions);
  /*transactions.forEach((transaction, i) => {
   // console.log(transaction, i);
  });*/
  return (
    <div className='learn-more' id='learn-more'>
      <div className='learn-more info'>
        <h1>Get started in a few minutes</h1>
        <a>Simple and easy way to start your journey in cryptocurrency </a>
      </div>
      <div class='gallery'>
        <a target='_blank' href='img_forest.jpg'>
          <img src={addAccount} width='170' height='170'></img>
        </a>
        <div class='desc'>
          <h3>Create an account</h3>
          <p>Your account personal identity are guaranteed safe.</p>
        </div>
      </div>
      <div class='gallery'>
        <a>
          <img src={linkAccount} width='200' height='200'></img>
        </a>
        <div class='desc'>
          <h3>Link your bank account</h3>
          <p>Your account personal identity are guaranteed safe.</p>
        </div>
      </div>
      <div class='gallery gallery-3'>
        <a>
          <img src={exchange} width='170' height='170'></img>
        </a>
        <div class='desc'>
          <h3>Start buying & selling</h3>
          <p>
            Buy and sell cryptocurrency privately and securely using
            peer-to-peer network.
          </p>
        </div>
      </div>
      <div className='transactions'>
        {currentAccount && (
          <h2 className='transaction-title'>Latest Transactions</h2>
        )}
        <table className='transactions' cellSpacing={0} cellPadding={0}>
          <thead>
            <tr>
              <th>To</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((transaction, i) => {
                return (
                  <tr key={i}>
                    <td>{transaction.addressTo}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.timestamp}</td>
                    <td>{transaction.message}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LearnMorePage;
