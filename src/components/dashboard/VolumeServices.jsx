import React, { useEffect } from 'react';
import HeadTitle from './HeadTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolumeServices } from '../../redux/slices/apiSlice';
import { Bar, BarChart, Legend, ResponsiveContainer } from 'recharts';

function VolumeServices() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.volumeServicesData);
  useEffect(() => {
    dispatch(fetchVolumeServices());
  }, [dispatch]);

  // console.log(state);

  const formatLegendValue = (name, legendObj) => {
    // console.log(name, legendObj);
    const initialVal = 0;
    const totalVal = state?.reduce((accumulator, dataItem) => {
      if (Object.keys(dataItem).includes(legendObj.dataKey)) {
        return accumulator + dataItem[legendObj.dataKey];
      } else {
        return accumulator;
      }
    }, initialVal);

    return (
      <span className="custom-legend-item-text-group flex items-center gap-x-[5px]">
        <span className="custom-legend-item-text">{name}</span>
        <span className="custom-legend-item-text text-xs text-[#151D48] dark:text-gray-300 font-medium">
          {totalVal}
        </span>
      </span>
    );
  };

  return (
    <div className="block-wrap ml-[14px] mt-[14px]">
      <HeadTitle title="Volume vs Services Level" />
      <div className="stacked-bar-chart w-full h-[250px] mb-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={state}
            margin={{
              top: 5,
              right: 5,
              left: 5,
            }}
          >
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#0095ff"
              radius={[0, 0, 4, 4]}
              barSize={16}
            />
            <Bar
              dataKey="services"
              stackId="a"
              fill="#00e096"
              radius={[4, 4, 0, 0]}
              barSize={16}
            />

            <Legend
              iconType="circle"
              iconSize={10}
              formatter={formatLegendValue}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default VolumeServices;
