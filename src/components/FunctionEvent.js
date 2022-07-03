function FunctionEvent() {
  //   function handleClick() {
  //     console.log("button clicked");
  //   }
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <div>
      Functional Component
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default FunctionEvent;
