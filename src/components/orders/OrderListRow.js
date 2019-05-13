import React, {PropTypes} from 'react';
import {Link} from 'react-router';

function formatDate(date) {

  let stringDate = date.split("T")[0];

  return stringDate;
}

const OrderListRow = ({order}) => {
  return (
    <tr className="row-table">
      <td>{formatDate(order.date)}</td>
      <td>{order.client}</td>
      <td>{order.product}</td>
      <td>{order.importer}</td>
      <td>{order.importerCost}</td>
      <td>{order.cost}</td>
      <td>{order.paid}</td>
      <td>{order.pending}</td>
      <td>{order.profit}</td>
      <td>{order.quantity}</td>
      <td><Link to={'/order/' + order.id}><span>edit</span></Link></td>
    </tr>
  );
};
OrderListRow.propTypes = {
  order: PropTypes.object.isRequired
};

export default OrderListRow;
