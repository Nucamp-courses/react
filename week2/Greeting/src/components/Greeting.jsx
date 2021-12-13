import React from "react";

const Greeting = ({ name }) => {
   return (
      <p>Hi there, {name || "we haven't been introduced yet."}</p>
   );
}
 export default Greeting;