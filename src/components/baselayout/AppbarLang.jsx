import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { REST_COUNTRIES_API_URL } from '../../constants/apiUrl';
import { Icons } from '../../assets/icons';

const AppbarLang = () => {
  const DEFAULT_COUNTRY = 'United States';
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDroplistEnabled, setDroplistEnabled] = useState(false);

  // console.log(isDroplistEnabled);
  const countryLangRef = useRef(null);

  const handleDroplistEnable = () => setDroplistEnabled(!isDroplistEnabled);

  const countrySelectedHandler = (country, flag, language) => {
    setSelectedCountry({ country, flag, language });
    setDroplistEnabled(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        countryLangRef.current &&
        !countryLangRef.current.contains(event.target)
      ) {
        setDroplistEnabled(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.addEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(REST_COUNTRIES_API_URL);
        // console.log(response);
        const sortedCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name)
        );
        setCountries(sortedCountries);

        const defaultCountry = sortedCountries.find(
          (country) => country.name.common === DEFAULT_COUNTRY
        );
        // console.log(defaultCountry);

        if (defaultCountry) {
          let langKey = Object.keys(defaultCountry?.languages)[0];
          setSelectedCountry({
            country: defaultCountry.name.common,
            flag: defaultCountry.flags.png,
            language: langKey,
          });
        }
      } catch (error) {
        console.error('Error Fetching Country Data: ', error);
      }
    };
    fetchCountryData();
  }, []);

  return (
    <div className="appbar-dropdown lang-dropdown relative w-30 h-10 mx-7">
      <div
        className="drop-selected flex items-center w-full h-full gap-x-3 px-1 py-3 cursor-pointer"
        onClick={handleDroplistEnable}
      >
        <div className="drop-selected-img w-6 min-w-6 h-6 overflow-hidden rounded-full">
          <img
            src={selectedCountry?.flag}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="drop-selected-text flex items-center gap-x-2">
          <span>{selectedCountry?.language}</span>
          <img
            src={Icons.ChevronDownDark}
            alt=""
            className="drop-icon dark:invert-[1] dark:brightness-[100%]"
          />
        </div>
      </div>
      <div
        className={`drop-list absolute top-full w-full left-0 py-2 px-0 dark:bg-gray-950 dark:shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] bg-white shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] text-gray-950 rounded-sm transition ease-in-out delay-300 z-10 ${
          isDroplistEnabled ? '' : 'hidden'
        }`}
      >
        <div className="drop-list-wrapper scrollbar max-h-52 overflow-y-scroll py-[6px] px-3">
          {/* {console.log(countries)} */}
          {countries?.length > 0 ? (
            countries?.map((country) => {
              if (country?.languages && Object.keys(country?.languages)) {
                const langKey = Object.keys(country?.languages)[0];

                return (
                  <div
                    className="drop-item flex items-center gap-x-3 cursor-pointer transition delay-300 ease-in-out dark:text-white hover:dark:bg-gray-700 hover:bg-slate-100 py-1 px-0"
                    key={country.name.common}
                    onClick={() => {
                      countrySelectedHandler(
                        country?.name?.common,
                        country?.flags?.png,
                        langKey
                      );
                    }}
                  >
                    <span className="drop-item-img w-4 min-w-4 h-4 overflow-hidden rounded-full">
                      <img
                        src={country.flags.png}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span className="drop-item-text text-sm uppercase font-medium">
                      {langKey}
                    </span>
                  </div>
                );
              } else {
                return null;
              }
            })
          ) : (
            <p>No Data Listed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppbarLang;
