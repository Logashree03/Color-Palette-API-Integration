import { useState, useEffect } from 'react';
import './App.css';
import picOne from "./assets/03.png";
function App() {
  const [apidata, setApidata] = useState({});
  const [paletteNames, setPaletteNames] = useState([]); // all palette names
  const [currentIndex, setCurrentIndex] = useState(0); // track current active

  useEffect(() => {
    fetch("https://dummyjson.com/c/b9c6-f204-4c06-bec7")
      .then(res => res.json())
      .then(data => {
        setApidata(data);
        setPaletteNames(Object.keys(data));
      })
      .catch(err => console.error(err));
  }, []);
  console.log(apidata)
  const prevColor = () => {
    setCurrentIndex(prev => (prev === 0 ? paletteNames.length - 0 : prev - 1));
  };

  const nextColor = () => {
    setCurrentIndex(prev => (prev === paletteNames.length - 1 ? 0 : prev + 1));


  };

  return (
    <div className='container'>
      <div className="navbar">
        <h1>LOGO</h1>
        <div>
          <ul className="header">
            <li>HOME</li>
            <li>COLORS</li>
            <li>TEMPLATE</li>
          </ul>
        </div>
      </div>
      <div className='box_container'>
        <div className="banner">
          <div className="left">
            <h1 className="title"> C<span className='logo'> <img src={picOne} width={155} height={155} /></span>LOR PALATTE </h1>
            <div className="subtitle">Color Palette is a collection of colors used together in design.</div>
            {/* <div className='bot'>
              <button className="btn" onClick={prevColor}>⬅ Previous</button>
              <button className="btn" onClick={nextColor}>Next ➡</button>
            </div> */}
            <div>
                 <div id="darkBox" className='darkbox'>
              {paletteNames.length > 0 && (
                <div className="box">
                  {apidata[
                    paletteNames[
                    (currentIndex - 1 + paletteNames.length) % paletteNames.length
                    ]
                  ]?.map((clr, i) => (
                    <div key={i} className="circle" style={{ backgroundColor: clr.hex }}></div>
                  ))}
                </div>
              )}
            </div>
            </div>
           
            {/* <div id="darkBox" className='darkbox'>
              {paletteNames
                .slice(currentIndex + 1)
                .concat(paletteNames.slice(0, currentIndex + 1))
                .map((name, idx) => (
                  idx !== paletteNames.length - 1 && (
                    <div key={name} className="box">
                      {apidata[name]?.map((clr, i) => (
                        <div key={i} className="circle" style={{ backgroundColor: clr.hex }}>
                        </div>
                      ))}
                    </div>
                  )
                ))}
            </div> */}
            <div className='bot'>
              <button className="btn" onClick={prevColor}>⬅ Previous</button>
              <button className="btn" onClick={nextColor}>Next ➡</button>
            </div>
          </div>

          <div className="right">
            {apidata[paletteNames[currentIndex]]?.map((test, i) => (
              <div key={1} className="card-content" style={{ backgroundColor: test.hex }}>
                <h2>{test.name}</h2>
                <h2 className='index'>{test.id}</h2>
                {/* <img src={picOne} alt="Character" className="character" /> */}

              </div>))}
          </div>
        </div>

        <div className="Color_pale">
          {/* <div className="palette"> */}
          <div id="activeColor" className="palette">
            {apidata[paletteNames[currentIndex]]?.map((test, i) => (
              <div key={i} className="right_circle" style={{ backgroundColor: test.hex }}>
                <span>{test.hex}</span>
                <h1 className='White_content'></h1>
              </div>
            ))}
          </div>


        </div>

      </div>
    </div>
  );
}

export default App;
