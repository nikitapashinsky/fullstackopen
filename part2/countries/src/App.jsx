import { useState } from "react";
import cn from "./utils/cn";
import countriesService from "./services/countriesService";
import { useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [searchValue, setSearchValue] = useState("");

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
  console.log(filteredCountries);

  const renderCountries = (filteredCountries) => {
    if (searchValue.length === 0) return;

    if (filteredCountries.length > 20) {
      return <p>Too many matches, continue typing…</p>;
    }

    if (filteredCountries.length > 1) {
      return (
        <ul>
          {filteredCountries.map((country) => (
            <li className="flex items-center gap-4 py-1" key={country.cca2}>
              <div className="flex size-10 shrink-0 items-center justify-center">
                <img
                  src={country.flags.svg}
                  alt={country.name.common}
                  className="w-full bg-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">{country.name.common}</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {country.name.official}
                </span>
              </div>
            </li>
          ))}
        </ul>
      );
    }

    if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      return (
        <div className={cn("flex flex-col gap-6")}>
          <div className="flex min-h-10 items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center">
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="w-full bg-contain"
              />
            </div>
            <h1 className="text-4xl leading-10 font-bold tracking-tight">
              {country.name.common}
            </h1>
          </div>
          <div
            className={cn(
              "grid grid-cols-[6rem_1fr] items-start gap-x-6 gap-y-1.5",
            )}
          >
            <div className={cn("")}>Capital</div>
            <div className={cn("font-medium")}>{country.capital[0]}</div>

            <div className={cn("")}>Area</div>
            <div className={cn("font-medium")}>
              {country.area} km<sup>2</sup>
            </div>

            <div className={cn("")}>Languages</div>
            <div className={cn("")}>
              <ul>
                {Object.entries(country.languages).map(([key, value]) => (
                  <li key={key} className={cn("font-medium")}>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  };

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
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        />
      </div>
      <div>{renderCountries(filteredCountries)}</div>
    </main>
  );
};

export default App;
