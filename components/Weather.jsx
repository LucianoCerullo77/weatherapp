import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[88vh] m-auto p-4 text-gray-300 z-10">
      {/* Top side */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* Bottom side */}
      <div className="bg-black/50 relative p-10 rounded-md">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="text-xl">Feels Like</p>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
          </div>
          <div>
            <p className="text-xl">Max Temp</p>
            <p className="font-bold text-2xl">{data.main.temp_max}</p>
          </div>
          <div>
            <p className="text-xl">Humidity</p>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
          </div>
        </div>
      </div>
      <div className="bg-black/50 relative p-6 rounded-md">
        <div className="flex justify-between text-center">
          <div>
            <p className="text-2xl">Wind</p>
            <p className="font-bold text-xl">
              {data.wind.speed.toFixed(0)} MPH{" "}
            </p>
          </div>
          <div>
            <p className="text-2xl">Coord</p>
            <p className="font-bold text-xl">
              {data.coord.lon},{data.coord.lat}
            </p>
          </div>
          <div>
            <p className="text-2xl">Description</p>
            <p className="font-bold text-xl">{data.weather[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
