import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "białko",
      cost: "45zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 2,
      name: "gainer",
      cost: "33zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 3,
      name: "spalacz",
      cost: "21zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
    {
      id: 4,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 5,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 6,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 7,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 8,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 9,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 10,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",

      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 11,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 12,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 13,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 14,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 15,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 16,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 17,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 18,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 19,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
    {
      id: 20,
      name: "gainer",
      cost: "88zł",
      img:
        "https://sklep.kfd.pl/7135-glowna_default/optimum-lean-whey-465g-.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:"lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
    },
  ]);

  return (
    <DataContext.Provider value={[products, setProducts]}>
      {props.children}
    </DataContext.Provider>
  );
};
