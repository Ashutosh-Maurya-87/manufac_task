import logo from "./logo.svg";
import WineData from "./Data/WineData.json";
import { useEffect, useMemo, useState } from "react";
function App() {
  console.log("wine data", WineData);
  const alco = [];
  const [alcoData, setAlcoData] = useState([]);
  useMemo(() => {
    WineData?.forEach((item, index) => {
      alco.push(item?.Flavanoids);
      return setAlcoData((alcoData) => [...alcoData, item?.Flavanoids]);
    });
    console.log("->", alco);
  }, []);
  console.log("alco", alco, alcoData);

  const FindMean = (arr) => {
    let sum = 0;
    const initialValue = 0;
    const sumWithInitial = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    console.log(sumWithInitial);
    // const mean = sum;
    console.log("sum", sum);
    return sum;
  };
  const mean = FindMean(alcoData);
  console.log(mean);

  return (
    <div className="App">
      {/* {WineData?.map((item, index) => {
        alco.push(item?.Alcohol);
        return <h4>{item?.Alcohol}</h4>;
      })} */}
      <h2>test</h2>
    </div>
  );
}

export default App;
