  // <div className="box">
          //   {apidata.BerryMix?.map((test, i) => (
          //     <div
          //       key={i}
          //       className="circle"
          //       style={{ backgroundColor: test.hex }}
          //     ></div>
          //   ))}
          // </div>
          // <div className="box">
          //   {apidata.BrightHues?.map((test, i) => (
          //     <div
          //       key={i}
          //       className="circle"
          //       style={{ backgroundColor: test.hex }}
          //     ></div>
          //   ))}
          // </div>
          // <div className="box">
          //   {apidata.ElectricVibes?.map((test, i) => (
          //     <div
          //       key={i}
          //       className="circle"
          //       style={{ backgroundColor: test.hex }}
          //     ></div>
          //   ))}
          // </div>
          // <div className="box">
          //   {apidata.FloralBouquet?.map((test, i) => (
          //     <div
          //       key={i}
          //       className="circle"
          //       style={{ backgroundColor: test.hex }}
          //     ></div>
          //   ))}
          // </div>
          // <div className="box">
          //   {apidata.ForestHues?.map((test, i) => (
          //     <div
          //       key={i}
          //       className="circle"
          //       style={{ backgroundColor: test.hex }}
          //     ></div>
          //   ))}
          // </div>
          // <div className="box">
          //   {apidata.GemstonePalette?.map((test, i) => (
          //     <div
          //       key={i}
          //       className="circle"
          //       style={{ backgroundColor: test.hex }}
          //     ></div>
          //   ))}
          // </div>
          // <div className="box">
          //   {apidata.JewelTones?.map((test, i) => (
          //     <div
          //       key={i}
          //       className="circle"
          //       style={{ backgroundColor: test.hex }}
          //     ></div>
          //   ))}
          // </div>
          // <div className="box">
          //   {apidata.LemonadeMix?.map((test, i) => (
          //     <div
          //       key={i}
          //       className="circle"
          //       style={{ backgroundColor: test.hex }}
          //     ></div>
          //   ))}
          // </div>
          // <div className="box">
          //   {apidata.MintGarden?.map((test, i) => (
          //     <div
          //       key={i}
          //       className="circle"
          //       style={{ backgroundColor: test.hex }}
          //     ></div>
          //   ))}
          // </div>


            const prevColor = () => {
    if (colors.length === 0) return;

    // last element remove → add to front
    const newColors = [...colors];
    const last = newColors.pop();
    newColors.unshift(last);
    setColors(newColors);
  };
  const nextColor = () => {
    if (colors.length === 0) return;

    // first element remove → add to last
    const newColors = [...colors];
    const first = newColors.shift();
    newColors.push(first);
    setColors(newColors);
  };
