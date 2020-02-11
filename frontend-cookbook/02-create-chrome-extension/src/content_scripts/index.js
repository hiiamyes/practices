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
          console.log(name, link.href, date.textContent, size);
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
            if (type === "svdvd" && /svdvd-(\d\d\d)/i.test(name)) {
              const [_, number] = /svdvd-(\d\d\d)/i.exec(name);
              if (number) {
                window.open(
                  `https://ec.sod.co.jp/prime/videos/?id=SVDVD-${number}`
                );
                window.open(link.href);
              }
            }
            if (type === "star" && /star-(\d\d\d)/i.test(name)) {
              const [_, number] = /star-(\d\d\d)/i.exec(name);
              if (number) {
                window.open(
                  `https://ec.sod.co.jp/prime/videos/?id=STAR-${number}`
                );
                window.open(link.href);
              }
            }
            if (type === "sdmu" && /sdmu-(\d\d\d)/i.test(name)) {
              const [_, number] = /sdmu-(\d\d\d)/i.exec(name);
              if (number) {
                window.open(
                  `https://ec.sod.co.jp/prime/videos/?id=SDMU-${number}`
                );
                window.open(link.href);
              }
            }
            if (type === "kmhr" && /kmhr-(\d\d\d)/i.test(name)) {
              const [_, number] = /kmhr-(\d\d\d)/i.exec(name);
              if (number) {
                window.open(
                  `https://ec.sod.co.jp/prime/videos/?id=KMHR-${number}`
                );
                window.open(link.href);
              }
            }
            if (type === "mide" && /mide-(\d\d\d)/i.test(name)) {
              const [_, number] = /mide-(\d\d\d)/i.exec(name);
              if (number) {
                window.open(
                  `https://www.moodyz.com/works/detail/mide${number}/`
                );
                window.open(link.href);
              }
            }
          }
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
