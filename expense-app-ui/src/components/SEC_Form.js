import React from "react";

export default class SEC_FORM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <h1>Reimbursement Form</h1>
        <small>Please complete and submit the SEC form within 30days after expense incurred.</small>
        
          
    

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
            <label for="note">Note</label>
            <textarea type="text" id="note" cols="33" rows="3"></textarea>
          </p>
        </section>
        <section>
          <h3>Please provide the details of Reimbursement</h3>
          <fieldset>
            <legend>Details</legend>
            <ul>
              <li>
                <label for="incurredDate">Date Incurred</label>
                <input type="date" id="incurredDate"></input>
              </li>
              <li>
                <label for="amount">Amount</label>
                <input type="text" id="detailedAmt"></input>
              </li>
              <li>
                <label for="detail">Details of expense</label>
                <textarea id="detail" cols="33" rows="3"></textarea>
              </li>
              <li>
                <label for="receipt">Upload a receipt</label>
                <input
                  type="file"
                  id="receipt"
                  accept="image/png,image/jpeg"
                ></input>
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
