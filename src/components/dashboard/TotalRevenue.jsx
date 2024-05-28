import React, { useEffect } from 'react';
import HeadTitle from './HeadTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRevenue } from '../../redux/slices/apiSlice';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const formatYAxisLabel = (value) => `${value}K`;
const formatTooltipValue = (value) => `${value} Sales`;

const TotalRevenue = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.revenueData);
  useEffect(() => {
    dispatch(fetchRevenue());
  }, [dispatch]);

  // console.log(state);

  return (
    <div className="block-wrap mt-[14px]">
      <div className="block-head">
        <HeadTitle title="Total Revenue" />
      </div>

      <div className="bar-chart w-full h-[250px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={state}
            margin={{
              top: 5,
              right: 5,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              stroke="#333"
              horizontal={true}
              vertical={false}
              strokeDasharray="3 0"
            />

            <XAxis
              dataKey="day"
              tickSize={0}
              axisLine={false}
              tick={({ payload = {}, x = 0, y = 0, dy = 0 }) => (
                <text
                  x={x}
                  y={y + 25}
                  dy={dy}
                  textAnchor="middle"
                  fill="#7b91b0"
                  fontSize={14}
                >
                  {payload.value}
                </text>
              )}
            />

            <YAxis
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              tickSize={0}
              axisLine={false}
              tick={{
                fill: '#7b91b0',
                fontSize: 14,
              }}
            />

            <Tooltip
              cursor={{ fill: 'transparent' }}
              formatter={formatTooltipValue}
            />

            <Legend
              iconType="circle"
              iconSize={10}
              style={{
                paddingTop: '10px',
              }}
              className="bg-white"
            />

            <Bar
              dataKey="online"
              fill="#0095ff"
              activeBar={false}
              isAnimationActive={false}
              radius={[4, 4, 4, 4]}
              barSize={18}
            />

            <Bar
              dataKey="offline"
              fill="#00e096"
              activeBar={false}
              isAnimationActive={false}
              radius={[4, 4, 4, 4]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalRevenue;
