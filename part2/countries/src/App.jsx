import { useState, useEffect } from "react";
import cn from "./utils/cn";
import countriesService from "./services/countriesService";
import CountryItem from "./components/CountryItem";
import CountriesList from "./components/CountriesList";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    console.log("ran effect");
    countriesService
      .getAllCountries()
      .then((receivedCountries) => setCountries(receivedCountries));
  }, []);

  const filteredCountries = countries?.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchValue) ||
      country.name.official.toLowerCase().includes(searchValue),
  );

  const renderCountries = (filteredCountries) => {
    console.log(filteredCountries);
    if (searchValue.length === 0) return;

    if (filteredCountries.length > 20) {
      return <p>Too many matches, continue typing…</p>;
    }

    if (filteredCountries.length > 1) {
      return (
        <CountriesList
          countries={filteredCountries}
          onMouseDown={(country) => setSelectedCountry(country)}
        />
      );
    }

    if (filteredCountries.length === 1) {
      return <CountryItem country={filteredCountries[0]} />;
    }
  };

  const shouldShowList = isInputFocused || !selectedCountry;

  return (
    <main className={cn("flex flex-col gap-6 p-6")}>
      <div className={cn("sticky top-6 flex w-full flex-col")}>
        <input
          type="text"
          placeholder="search countries"
          className={cn(
            "h-12 bg-black/5 px-2 text-2xl ring-1 ring-black/20 outline-0 backdrop-blur-lg",
            "focus-visible:bg-black/10 focus-visible:ring-black/50",
            "dark:bg-white/8 dark:ring-white/20 dark:focus-visible:bg-white/15 dark:focus-visible:ring-white/50",
          )}
          value={searchValue}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          onChange={(e) => {
            setSearchValue(e.target.value.toLowerCase());
            setSelectedCountry(null);
          }}
        />
      </div>
      <div>{shouldShowList && renderCountries(filteredCountries)}</div>
      {!shouldShowList && selectedCountry && (
        <CountryItem country={selectedCountry} />
      )}
    </main>
  );
};

export default App;
