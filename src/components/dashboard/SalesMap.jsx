import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalesMap } from '../../redux/slices/apiSlice';
import { COLOR_MAP } from '../arrayLists/menuLists';
import HeadTitle from './HeadTitle';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import geoJson from '../../constants/world-50m.v1.json';

const getFillColor = (fillCode) => COLOR_MAP[fillCode] || '#ececec';

const SalesMap = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apis.salesMapData);

  useEffect(() => {
    dispatch(fetchSalesMap());
  }, [dispatch]);

  const findByCountryId = (countryId) => {
    const matchedCountry = state?.find(
      (country) => country.country_id === countryId
    );
    return matchedCountry ? getFillColor(matchedCountry.fill_color) : '#ececec';
  };

  return (
    <div className="block-wrap my-[14px] ml-[14px]">
      <HeadTitle title="Sales Mapping by Country" />
      <div className="map-chart">
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{
            rotate: [0, 0, 0],
            scale: 200,
          }}
        >
          <Geographies geography={geoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                if (geo.code !== '010') {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={findByCountryId(geo.id)}
                    />
                  );
                } else {
                  return null;
                }
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default SalesMap;
