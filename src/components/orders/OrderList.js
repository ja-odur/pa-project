import React, {PropTypes} from 'react';
import OrderListRow from './OrderListRow';

const OrderList = ({orders, redirectFunc, deleteCourse}) => {
  return (
    <table className="table mx-auto w-75">
      <thead>
        <tr className="row-table">
          <th>Date</th>
          <th>Client</th>
          <th>Product</th>
          <th>Importer</th>
          <th>Importer's Cost</th>
          <th>Cost</th>
          <th>Paid</th>
          <th>Pending</th>
          <th>Profit</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {orders.map(order =>
        <OrderListRow key={order.id} order={order}/>
      )}
      <tr><td colSpan="2">
        <span
          className="btn btn-primary btn-block"
          onClick={redirectFunc}
        >Add Order</span>

      </td></tr>

      </tbody>
    </table>
 );
};

OrderList.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrderList;
