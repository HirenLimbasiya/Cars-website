
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Learn from './components/Learn';
import Shop from './components/Shop';

const App = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [model, setModel] = useState("all");

  const fetchCars = async () => {

    const resp = await fetch("./data/cars.json");
    const data = await resp.json();

    if (model !== "all") {
      // eslint-disable-next-line array-callback-return
      const ans = data.filter((car, index) => {
        if (car.bodyType === model) {
          return car
        }
      })
      setData(ans)
    } else {
      setData(data)
    }


  }

  function handleFilter(data) {
    setModel(data);
  }

  useEffect(() => {
    fetchCars();
    navigate("/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model])

  return (
    <div className="App">
      <Header handleFilter={handleFilter} model={model} />

      <Routes>
        <Route path='/' element={<Content data={data} />} />
        <Route path='/learn/:id' element={<Learn />} />
        <Route path='/shop/:id' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
