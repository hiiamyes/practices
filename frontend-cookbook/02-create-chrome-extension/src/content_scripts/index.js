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
    if (location.search !== "") {
      const type = /f=(\w+)&?/.exec(location.search)[1];
      const dls = document.querySelectorAll(".results dl");
      Array.prototype.forEach.call(dls, function(dl) {
        const link = dl.querySelector("dt a");
        const name = link.text;
        let [_, date, size] = dl.querySelectorAll("dd span");
        size = size.textContent;
        const [amount, unit] = size.split(" ");
        if (unit === "MB" && +amount > 5000) {
          if (type === "ssni") {
            const number = /ssni-(\d\d\d)/i.exec(name)[1];
            window.open(
              `https://www.s1s1s1.com/works/detail/ssni${number}`
            );
            window.open(link.href);
          }
          if (type === "abp") {
            const number = /abp-(\d\d\d)/i.exec(name)[1];
            window.open(
              `https://www.prestige-av.com/goods/goods_list.php?q=abp-${number}&m=search&p=1&s=date`
            );
            window.open(link.href);
          }
          console.log(name, link.href, date.textContent, size);
        }
      });
    }
  });
  return <div></div>;
};

const waysDiv = document.createElement("div");
document.body.append(waysDiv);
render(<App />, waysDiv);
