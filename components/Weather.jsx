import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
    {/* Top side */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
        <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
          <p>Clouds : {data.clouds.all}%</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>
    {/* Bottom side */}
    <div>
        <p>Weather in {data.name}</p>
        <p>Coord: {data.coord.lon},{data.coord.lat}</p>
        <div>
            <div>
                <p>Feels Like</p>
                <p>{data.main.feels_like.toFixed(0)}&#176;</p>
            </div>
            <div>
                <p>Humidity</p>
                <p>{data.main.humidity}%</p>
            </div>
            <div>
                <p>Wind</p>
                <p>{data.wind.speed.toFixed(0)} MPH </p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Weather;
