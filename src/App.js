import { useState, useEffect } from "react";
import api from "./api";
import TemperatureCard from "./TemperatureCard";

function App() {
  const [state, setState] = useState();

  useEffect(() => {
    async function getData() {
      const result = (await api.get("WeatherForecast")).data;
      setState(result);
    }
    getData();
  }, [setState]);

  return (
    <div className="flex container bg-black flex-col">
      <div className="mt-2 mb-2 ml-2 text-white text-3xl">Cloud App</div>
      <div className="flex flex-col justify-center items-center bg-slate-600">
        {state?.map((data, index) => (
          <TemperatureCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default App;
