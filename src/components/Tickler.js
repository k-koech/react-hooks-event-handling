import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  return (
    <>
     <button onClick={tickle}>Tickle me!</button>
     <button onClick={()=>{console.log("click from an inline function")}}>Tickle me!</button>
    </>
   
  );
}

export default Tickler;
