import React, {PropTypes} from 'react';
import OrderWeeklyRow from "./OrderWeeklyRow";

function formatWeek(week) {
  week = week.split(" ");

  return `${week[1]} ${week[2]} to ${week[9]} ${week[10]} ${week[3]}`
}

let list = [0, 0];

function updateProfitPending(order, list) {
  list[0] += order.profit;
  list[1] += order.pending;

  return order;
}

function pickClass(value, reverse=false) {
  let ifCondition = value > 0;
  if (reverse){
     ifCondition = value <= 0;
  }

  if (ifCondition) {
    return "red"
  }

  return ""
}

const OrderWeeklyTable = ({week, orders}) => {

  let list = [0, 0];

  return (
    <div className="weekly-order-card ">
      <div className="weekly-title">{formatWeek(week)}</div>
      <div className="card-group">
        <div className="weekly-orders">

          <table className="table">
            <thead>

            <tr>
              <th>Date</th>
              <th>Client</th>
              <th>Product</th>
              <th>Cost</th>
              <th>Paid</th>
              <th>Pending</th>
              <th>Profit</th>
              <th>Quantity</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
              { orders.map(order =>
                <OrderWeeklyRow order={updateProfitPending(order, list)}/>)}
            </tbody>
          </table>
        </div>
        <div className="weekly-summary">
          <p>Summary</p>

          <div>Profits
            <span className={pickClass(list[0], true)}>UGX {list[0]} &#9679;</span>
          </div>

          <div>Pending
            <span className={pickClass(list[1])}>UGX {list[1]} &#9679;</span>
          </div>

        </div>
      </div>

    </div>
  )
};

OrderWeeklyTable.propTypes = {
  week: PropTypes.string.isRequired,
  orders: PropTypes.array.isRequired
};

export default OrderWeeklyTable;
