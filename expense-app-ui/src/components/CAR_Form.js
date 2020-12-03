import React from "react";

export default class CAR_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <h1>Cash Advanced Request Form</h1>
        <section>
          <p>
            <label for="totalAmount">Total Amount</label>
            <input type="text" id="totalAmount"></input>
          </p>
          <p>
            <label for="paymentMethod">Payment Method</label>
            <select id="paymentMethod">
              <option value="cash">Cash</option>
              <option value="ayarBanking">AyarBanking</option>
            </select>
          </p>
          <p>
            <label for="generalPurpose">General Purpose</label>
            <textarea
              type="text"
              id="generalPurpose"
              cols="33"
              rows="3"
            ></textarea>
          </p>
          <p>
            <label for="note">Note</label>
            <textarea type="text" id="note" cols="33" rows="3"></textarea>
          </p>
        </section>
        <section>
          <h3>Please provide the details of expenses</h3>
          <fieldset>
              <legend>Detail</legend>
              <ul>
            <li>
              <label for="amount">Amount</label>
              <input type="text" id="detailedAmt"></input>
            </li>
            <li>
              <label for="detail">Details of expense</label>
              <textarea rows="3" cols="33"  id="detail"></textarea>
            </li>
            <li>
                <button>Add</button>
            </li>
          </ul>
          </fieldset>
         
          <p>
              <button>Confirm Request</button>
          </p>
        </section>
      </form>
    );
  }
}
