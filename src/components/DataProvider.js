import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "białko",
      cost: "45zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 2,
      name: "gainer",
      cost: "33zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 3,
      name: "spalacz",
      cost: "21zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Activator_i35133_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 4,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Gain_Fast_i487_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 5,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 6,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Magnum_8000_i40612_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 7,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Up_i38760_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 8,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 9,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Activator_i35133_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 10,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",

      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 11,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 12,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Activator_i35133_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 13,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 14,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 15,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 16,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Activator_i35133_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 17,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 18,
      name: "kreatyna",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 19,
      name: "forskolina",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: 20,
      name: "gainer",
      cost: "88zł",
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => item.id !== id);
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("produkt został dodany");
    }
  };

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
