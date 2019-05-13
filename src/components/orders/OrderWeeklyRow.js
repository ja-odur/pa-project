import React, { PropTypes } from 'react';
import {Link} from "react-router";

function formatDate(date) {

  let stringDate = date.split("T")[0];

  return stringDate;
}

const OrderWeeklyRow = ({order}) => {
  return (
    <tr className="tsr">
      <td>{formatDate(order.date)}</td>
      <td>{order.client}</td>
      <td>{order.product}</td>

      <td>{order.cost}</td>
      <td>{order.paid}</td>
      <td>{order.pending}</td>
      <td>{order.profit}</td>
      <td>{order.quantity}</td>
      <td><Link to={'/order/' + order.id}><span className="">view</span></Link></td>
    </tr>
  )
};

OrderWeeklyRow.propTypes = {
  order: PropTypes.object.isRequired
};

export default OrderWeeklyRow

