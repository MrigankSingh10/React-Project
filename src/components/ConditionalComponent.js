import { useState } from "react";

export default function CondionalCompont() {
  const [display, setDisplay] = useState(false);
  //   let output;

  return display ? (
    <div>
      <h3>THis is a condtional Component</h3>
    </div>
  ) : (
    <div>
      <h3>Nothing to see here</h3>
    </div>
  );
  //   if (display) {
  //     output = <h3>THis is a condtional Component</h3>;
  //   } else {
  //     output = <h3>Nothing to see here</h3>;
  //   }
  //   return <div>{output}</div>;
}
