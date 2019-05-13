import React, {PropTypes} from 'react';
import OrderWeeklyTable from './OrderWeeklyTable';


const OrderWeeklyList = ({weeklyOrders}) => {

  return (
    <div>
      {Object.keys(weeklyOrders).map((key, index) =>
        <OrderWeeklyTable
          week={key}
          orders={weeklyOrders[key]}
        />
      )}


    </div>

  );
};

OrderWeeklyList.propTypes = {
  weeklyOrders: PropTypes.object.isRequired
};

export default OrderWeeklyList;
