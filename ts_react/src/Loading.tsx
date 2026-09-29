import React from "react";
import loader from "./assets/loader.svg";

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <img src={loader} alt="Loading..." className="w-16 h-16" />
    </div>
  );
}

export default Loading;
