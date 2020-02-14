import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { useEffect } from "react";
import { getOr } from "lodash/fp";
import { render } from "react-dom";

const App = () => {
  useEffect(() => {
    try {
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
            if (type === "ssni" && /ssni-(\d\d\d)/i.test(name)) {
              const [_, number] = /ssni-(\d\d\d)/i.exec(name);
              if (number) {
                window.open(
                  `https://www.s1s1s1.com/works/detail/ssni${number}`
                );
                window.open(link.href);
              }
            }
            if (type === "abp" && /abp-(\d\d\d)/i.test(name)) {
              const [_, number] = /abp-(\d\d\d)/i.exec(name);
              if (number) {
                window.open(
                  `https://www.prestige-av.com/goods/goods_list.php?q=abp-${number}&m=search&p=1&s=date`
                );
                window.open(link.href);
              }
            }
            if (type === "stars" && /stars-(\d\d\d)/i.test(name)) {
              const [_, number] = /stars-(\d\d\d)/i.exec(name);
              if (number) {
                window.open(
                  `https://ec.sod.co.jp/prime/videos/?id=STARS-${number}`
                );
                window.open(link.href);
              }
            }
          }
          console.log(name, link.href, date.textContent, size);
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
  return <div></div>;
};

const waysDiv = document.createElement("div");
document.body.append(waysDiv);
render(<App />, waysDiv);
