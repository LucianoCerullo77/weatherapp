import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(URL).then((res) => {
      setWeather(res.data);
      console.log(res.data);
    });
    setCity("");
    setLoading(false);
  };

  console.log(city);

  return (
    <div>
      <Head>
        <title>Weather App - NextJs</title>
        <meta name="description" content="Wheather App maded in NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[1]" />
      <Image
        src="https://images.unsplash.com/photo-1596627008830-41d373a44a96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        layout="fill"
        className="object-cover"
      />

      <div className="relative flex justify-between items-center max-w-[600px] w-full m-auto pt-4 text-white z-10">
        <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl">
          <div>
            <input
            onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Search City"
              className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white/70"
            />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
