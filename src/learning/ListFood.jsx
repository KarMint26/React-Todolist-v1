import React from "react";

export default function ListFood() {
  const [listFood, setListFood] = React.useState([
    {
      id: Math.ceil(Math.random()),
      name: "Gado-Gado",
      price: "10000",
    },
    {
      id: Math.ceil(Math.random()),
      name: "Nasi Goreng",
      price: "12000",
    },
    {
      id: Math.ceil(Math.random()),
      name: "Mie Nyemek",
      price: "8500",
    },
  ]);
  const [foodName, setFoodName] = React.useState("");
  const [foodPrice, setFoodPrice] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setListFood([
      ...listFood,
      {
        id: Math.ceil(Math.random()),
        name: foodName,
        price: foodPrice,
      },
    ]);
    setFoodName("");
    setFoodPrice("");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container shadow-lg w-[900px] h-fit p-5 px-10 bg-white flex flex-col">
        <div
          className="title text-3xl text-teal-500 text-center mb-16"
          style={{ textShadow: ".5px .5px .5px rgba(0, 0, 0, 0.5)" }}
        >
          List Makanan
        </div>
        <div className="res-wrapper flex flex-col gap-7">
          {listFood.map((res) => {
            return (
              <>
                <div
                  key={res.id}
                  className="flex justify-between items-center border-t border-teal-600 py-3"
                >
                  <p className="text-xl">{res.name}</p>
                  <p className="tex-xl">Rp. {res.price}</p>
                </div>
              </>
            );
          })}
          <div className="wrapper-form flex justify-center items-center mt-8">
            <form
              className="flex flex-col justify-center items-start"
              onSubmit={handleSubmit}
            >
              <label htmlFor="name">Nama Makanan</label>
              <input
                className="outline-1 outline-slate-500 mb-3 border-slate-400 border-2 rounded-lg px-4 py-1"
                type="text"
                value={foodName}
                onChange={({ target }) => setFoodName(target.value)}
                id="name"
                autoComplete="off"
              />
              <label htmlFor="price">Harga</label>
              <input
                className="outline-1 outline-slate-500 border-slate-400 border-2 rounded-lg px-4 py-1"
                type="number"
                value={foodPrice}
                onChange={({ target }) => setFoodPrice(target.value)}
                id="price"
                autoComplete="off"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-500 rounded-lg shadow-lg text-white hover:bg-teal-600 mt-5 self-end"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
