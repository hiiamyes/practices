// const links = document.querySelectorAll(".results a")
// Array.prototype.forEach.call(links, function(link){
//   console.log(link)
// })

import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import osmWaysToGeoJSON from "../osm-ways-to-geojson";
import Style from "./style";

const App = () => {
  useEffect(() => {
    console.log("init");
    const dls = document.querySelectorAll(".results dl");
    Array.prototype.forEach.call(dls, function(dl) {
      const link = dl.querySelector("dt a");
      const name = link.text;
      let [_, date, size] = dl.querySelectorAll("dd span");
      size = size.textContent;
      const [amount, unit] = size.split(" ");
      if (unit === "MB" && +amount > 5000) {
        window.open(
          `https://www.s1s1s1.com/works/detail/ssni${
            /ssni-(\d\d\d)/i.exec(name)[1]
          }`
        );
        window.open(link.href);
        console.log(name, link.href, date.textContent, size);
      }
    });
  });
  return <div></div>;
};

const waysDiv = document.createElement("div");
document.body.append(waysDiv);
render(<App />, waysDiv);
