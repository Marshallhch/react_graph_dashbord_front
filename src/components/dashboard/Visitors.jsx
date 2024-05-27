import React, { useEffect } from 'react';
import HeadTitle from './HeadTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVisitors } from '../../redux/slices/apiSlice';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import PropsTypes from 'prop-types';

const formatLegendValue = (value) => {
  return value.replace('_', ' ');
};

const formatTooltipValue = (value, name) => {
  return `${value.replace('_', ' ')} : ${name}`;
};

const CustomTooltipContent = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="custom-recharts-tooltip">
      <p className="recharts-tooltip-label">
        {payload[0].payload?.month.charAt(0).toUpperCase() +
          payload[0].payload?.month.slice(1)}
      </p>
      <ul className="recharts-tooltip-item-list">
        {payload.map((payloadItem, index) => {
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

CustomTooltipContent.propTypes = {
  payload: PropsTypes.any,
};

const Visitors = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.visitorsData);
  useEffect(() => {
    dispatch(fetchVisitors());
  }, [dispatch]);

  // console.log(state);

  return (
    <div className="block-wrap">
      <HeadTitle title="Visitors Insights" />
      <div className="line-chart w-full h-[230px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={state}
            margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              stroke="#333"
              horizontal={true}
              vertical={false}
              strokeDasharray="3 0"
            />
            <XAxis
              tickSize={0}
              axisLine={false}
              padding={{ left: 20 }}
              dataKey="month"
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 20}
                  dy={dy}
                  textAnchor="middle"
                  fill="#777"
                  fontSize={14}
                >
                  {payload.value.charAt(0).toUpperCase() +
                    payload.value.slice(1)}
                </text>
              )}
            />

            <YAxis
              tickSize={0}
              axisLine={false}
              ticks={[0, 100, 200, 300, 400]}
              tick={{
                fill: '#777',
                fontSize: 14,
              }}
            />

            <Tooltip content={<CustomTooltipContent />} />
            <Legend iconType="square" formatter={formatLegendValue} />

            <Line
              dot={false}
              strokeWidth={3}
              type="basis"
              dataKey="loyal_customer"
              stroke="#a700ff"
            />

            <Line
              dot={false}
              strokeWidth={3}
              type="basis"
              dataKey="new_customer"
              stroke="#f64e60"
            />

            <Line
              dot={false}
              strokeWidth={3}
              type="basis"
              dataKey="unique_customer"
              stroke="#3cd856"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Visitors;
