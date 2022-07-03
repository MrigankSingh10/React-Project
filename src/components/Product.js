export default function Product() {
  const products = ["Laptop", "Mobile", "Modem", "Computer", "Phone "];
  const productList = products.map((product, index) => (
    <h3 key={index}>{product} </h3>
  ));
  return <div>{productList}</div>;
}
