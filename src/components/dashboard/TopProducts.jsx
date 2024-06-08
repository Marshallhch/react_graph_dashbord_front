import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopProducts } from '../../redux/slices/apiSlice';
import HeadTitle from './HeadTitle';

const TopProducts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.topProductsData);

  useEffect(() => {
    dispatch(fetchTopProducts());
  }, [dispatch]);

  // console.log(state);

  return (
    <div className="block-wrap has-scroll my-[14px] overflow-y-scroll">
      <HeadTitle title="Top Products" />
      <div className="tbl-products scr-bar">
        <table className="w-full border-collapse min-w-[500px]">
          <thead>
            <tr>
              <th className="py-3 px-4 text-sm border-b text-gray-950 dark:text-gray-300 font-normal text-left border-[#f0f9ff]">
                #
              </th>
              <th className="py-3 px-4 text-sm border-b text-gray-950 dark:text-gray-300 font-normal text-left border-[#f0f9ff]">
                Name
              </th>
              <th className="py-3 px-4 text-sm border-b text-gray-950 dark:text-gray-300 font-normal text-left border-[#f0f9ff]">
                Popularity
              </th>
              <th className="py-3 px-4 text-sm border-b text-gray-950 dark:text-gray-300 font-normal text-left border-[#f0f9ff]">
                Sales
              </th>
            </tr>
          </thead>
          <tbody>
            {state?.map((progressItem, index) => {
              return (
                <tr key={progressItem.id}>
                  <td className="py-3 px-4 text-sm">{index + 1}</td>
                  <td className="py-3 px-4 text-sm">{progressItem.name}</td>
                  <td className="py-3 px-4 text-sm">
                    <div className="tbl-progress-bar bg-[#C3D3E2] min-w-[180px] h-[5px] rounded-full overflow-hidden relative">
                      <div
                        className="bar-fill bg-[#0095FF] absolute left-0 top-0 rounded-full h-full"
                        style={{
                          width: `${progressItem.papularitypercent}%`,
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div className="tbl-badge bg-[#F0F9FF] text-[#0095FF] border border-[#0095FF] rounded-md min-w-[45px] h-6 inline-flex items-center justify-center">
                      {progressItem.salespercent}%
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
