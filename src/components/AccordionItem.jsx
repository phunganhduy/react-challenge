import React, { useState } from "react";

function AccordionItem({ title, content }) {
  const [active, setActive] = useState(false);
  return (
    <div className="p-2 item flex flex-col">
      <button className="title py-2 left-0" onClick={() => setActive(!active)}>
        <span className="left-0">{title}</span>
      </button>
      <div
        className={` px-2 content grid overflow-hidden transition-all duration-300 ease-in-out w-full ${
          active ? "" : "toggled"
        }`}
      >
        <p className="overflow-hidden w-full">{content}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
