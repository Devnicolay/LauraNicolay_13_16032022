import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {string} title title of account
 * @param {number} amount amount of account
 * @param {string} amountDescription amount description of account
 * @returns
 */
const Account = ({ title, amount, amountDescription }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

Account.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  amountDescription: PropTypes.string,
};

export default Account;
