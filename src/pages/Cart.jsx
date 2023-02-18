const cart = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    image: "https://picsum.photos/200/300",
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <main>
      <h1>Cart</h1>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Cart;
