import React from "react";

export default class TR_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <h1>Cash Advance Payment / Travel Request Form</h1>
        <small>
          Please complete and submit the TR form at least 7 days prior travel
          date
        </small>
        <section>
          <h3>Purpose and Details of Travel</h3>
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
              <label for="location">Trip Type</label>
              <select id="location">
                  <option value="inbound">Inbound</option>
                  <option value="outbound">Outbound</option>
              </select>
          </p>
          <p>
              <label for="destination">Destination</label>
              <input type="text" id="destination"></input>
          </p>
          <p>
              <label for="deperatureDate">Deperature Date</label>
              <input id="deperatureDate" type="date"></input>
          </p>
          <p>
              <label for="returnedDate">Returned Date</label>
              <input id="returnedDate" type="date"></input>
          </p>
          <p>
              <label for="travelMode">Mode of travel</label>
              <select id="traveledMode">
                  <option value="byAir">By Air</option>
                  <option value="byAir">By Road</option>
                  <option value="byAir">By Rail</option>
                  <option value="byAir">By Ship</option>
              </select>
          </p>
          <p>
              <label for="General Purpose">General Purpose</label>
              <textarea id="generalPurpose" cols="33" rows="3"></textarea>
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
                <textarea rows="3" cols="33" id="detail"></textarea>
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
