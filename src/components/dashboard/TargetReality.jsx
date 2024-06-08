import React, { useEffect } from 'react';
import HeadTitle from './HeadTitle';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTargetReality } from '../../redux/slices/apiSlice';
import { TARGET_REALITY_LISTS } from '../arrayLists/menuLists';

const formatTooltipValue = (value) => {
  return `${value} Sales`;
};

const TargetReality = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.targetRealityData);

  useEffect(() => {
    dispatch(fetchTargetReality());
  }, [dispatch]);

  // console.log(state);

  return (
    <div className="block-wrap mt-[14px] ml-[14px]">
      <HeadTitle title="Target vs Reality" />
      <div className="bar-chart target-reality w-full h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={state}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <Bar
              dataKey="reality"
              fill="#4ab58e"
              radius={[4, 4, 4, 4]}
              barSize={16}
            />

            <Bar
              dataKey="target"
              fill="#ffcf00"
              radius={[4, 4, 4, 4]}
              barSize={16}
            />

            <Tooltip
              cursor={{ fill: 'transparent' }}
              formatter={formatTooltipValue}
            />

            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={({ payload, x, y, dy }) => (
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
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="block-foot">
        <div className="legend-info mt-4">
          {TARGET_REALITY_LISTS.map((item, index) => (
            <div
              className="legend-info-item mt-4 flex items-center justify-between"
              key={index}
            >
              <div className="info-item-l flex items-center gap-x-2.5">
                <div
                  className={`info-item-icon ${
                    index === 0 ? 'bg-[#e2fff3]' : 'bg-[#fff4de]'
                  } w-10 h-10 rounded-sm flex items-center justify-center`}
                >
                  <img src={item.icon} className="w-6" alt="" />
                </div>
                <div className="info-item-text">
                  <h4 className="info-item-title font-xs text-[#151D48] dark:text-gray-300">
                    {item.title}
                  </h4>
                  <p className="info-item-subtitle font-[10px] text-[#a5aea3] dark:text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div className="info-item-r">
                <p
                  className={`info-item-val font-semibold ${
                    index === 0
                      ? 'text-[#00E096] dark:text-gray-300'
                      : 'text-[#FFA412] dark:text-gray-300'
                  }`}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetReality;
