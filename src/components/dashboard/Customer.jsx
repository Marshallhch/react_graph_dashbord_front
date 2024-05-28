import React, { useEffect } from 'react';
import HeadTitle from './HeadTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../../redux/slices/apiSlice';
import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { PropTypes } from 'prop-types';

const CustomTooltipContent = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="custom-recharts-tooltip">
      <p className="recharts-tooltip-label">{payload[0].payload?.month}</p>

      <ul className="recharts-tooltip-item-list">
        {payload?.map((payloadItem, index) => {
          return (
            <li key={index}>
              {formatTooltipValue(payloadItem.name, payloadItem.value)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const formatTooltipValue = (value, name) => {
  return `${value.replace('_', ' ')} : ${name}`;
};

CustomTooltipContent.propTypes = {
  payload: PropTypes.any,
};

const Customer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.customersData);
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  // console.log(state);

  const formatLegendValue = (value, name) => {
    // console.log(value, name);

    const initialVal = 0;
    const totalVal = state?.reduce((accumulator, currentValue) => {
      if (Object.keys(currentValue).includes(name.dataKey)) {
        return accumulator + currentValue[name.dataKey];
      } else {
        return accumulator;
      }
    }, initialVal);

    return (
      <span className="custom-legend-item-text-group">
        <span className="custom-legend-item-text">
          {value.replace('_', ' ')}
        </span>
        <span className="custom-legend-item-text">{' ' + totalVal}</span>
      </span>
    );
  };

  return (
    <div className="block-wrap customer-chart mt-[14px] ml-[14px]">
      <div className="block-head">
        <HeadTitle title="Customer Satisfaction" />
      </div>
      <div className="area-chart w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={state}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0095ff" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#0095ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#07e098" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#07e098" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="last_month"
              stroke="#0095ff"
              fillOpacity={1}
              fill="url(#colorUv)"
              strokeWidth={2}
              dot={{
                stroke: '#0095ff',
                fill: '#0095ff',
              }}
            />

            <Area
              type="monotone"
              dataKey="this_month"
              stroke="#07e098"
              fillOpacity={1}
              fill="url(#colorPv)"
              strokeWidth={2}
              dot={{
                stroke: '#07e098',
                fill: '#07e098',
              }}
            />

            <Legend formatter={formatLegendValue} />
            <Tooltip content={<CustomTooltipContent />} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Customer;
