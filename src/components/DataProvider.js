import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "białko",
      price: 45,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 2,
      name: "gainer",
      price: 33,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 3,
      name: "spalacz",
      price: 21,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Activator_i35133_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 4,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Gain_Fast_i487_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 5,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 6,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Magnum_8000_i40612_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 7,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Up_i38760_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 8,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 9,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Activator_i35133_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 10,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",

      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 11,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 12,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Activator_i35133_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 13,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 14,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 15,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 16,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Activator_i35133_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 17,
      name: "gainer",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 18,
      name: "kreatyna",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 19,
      name: "forskolina",
      price: 88,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Whey_Pro_Gainer_1_i275_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
    {
      id: 20,
      name: "gainer",
      price: 33,
      img:
        "https://serve-cdn-assets.sfd.workers.dev/produkt_img/Mass_Acceleration_i33363_d250x250.jpg",
      taste: ["czekolada", "jabłko", "arbuz", "wanilia"],
      description:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      count: 1,
    },
  ]);

  const [cart, setCart] = useState([]);


  const addCart = (id) =>{
      const check = cart.every(item =>{
          return item.id !== id
      })
      if(check){
          const data = products.filter(product =>{
              return product.id === id
          })
          setCart([...cart, ...data])
      }
      else alert("Produkt jest juz w koszyku, przejdz do koszyka aby zmienic ilosc")
  }



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
