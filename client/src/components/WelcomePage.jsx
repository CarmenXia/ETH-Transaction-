import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContex";
import logo from "./exchange-logo.png";
import eth from "./eth.png";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step='0.0001'
    value={value}
    onChange={(e) => handleChange(e, name)}
  />
);

const WelcomePage = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    if (amount < 0) alert("Please check the ETH amount again.");

    sendTransaction();
  };

  const hadleLogout = (e) => {
    e.preventDefault();
    currentAccount = null;
  };

  return (
    <>
      <nav className='navbar'>
        <div className='container-fluid id=navbar-container'>
          <a className='navbar-brand' h1 id='navbar-brand'>
            ETH Exchange{" "}
          </a>
          {currentAccount && (
            <a className='login'>
              Welcome back, {currentAccount.slice(0, 4)}...
              {currentAccount.slice(currentAccount.length - 4)}
            </a>
          )}

          <img src={logo} alt='logo' className='logo' />
        </div>
      </nav>

      <div className='flexbox-container'>
        <div className='flexbox-item flexbox-item-1'>
          <div className='introduction'>
            <h1 className='introduction-title'>
              Unlock The Future <br />
              Start Your Crypto Journey
            </h1>
            <h3 className='introduction- titletext'>
              Exchange ETH in minutes.
            </h3>
            <p className='introduction-text'>
              ETH is a decentralized digital currency, without a central bank or
              single administrator, that can be sent from user to user on the
              peer-to-peer.
            </p>
          </div>
          <div>
            {!currentAccount && (
              <button
                className='button-wallet'
                type='button'
                onClick={connectWallet}
              >
                Connect wallet
              </button>
            )}
            {!currentAccount && (
              <a href='#learn-more'>
                <button className='button-more' type='button'>
                  Learn more
                </button>
              </a>
            )}
          </div>
        </div>
        <div className='flexbox-item flexbox-item2'>
          <img src={eth} alt='eth' className='img' />
          <br />
          <form className='form-container'>
            <Input
              placeholder='Address To'
              name='addressTo'
              type='text'
              handleChange={handleChange}
            />
            <Input
              placeholder='Amount(ETH)'
              name='amount'
              type='number'
              handleChange={handleChange}
            />
            <Input
              placeholder='Keyword'
              name='keyword'
              type='text'
              handleChange={handleChange}
            />
            <Input
              placeholder='Enter Message'
              name='message'
              type='text'
              handleChange={handleChange}
            />

            {isLoading ? (
              <div className='loader'>
                <div className='dot1' />
                <div className='dot2' />
              </div>
            ) : (
              <button
                className='button-send'
                type='button'
                onClick={handleSubmit}
              >
                Send now
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
