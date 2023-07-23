import React, { forwardRef, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
const CandidateCard = forwardRef(({ item, draggableProvided }, ref) => {
  return (
    <div
      className="flex flex-col p-3 w-[300px] bg-white rounded-lg gap-2  "
      ref={draggableProvided.innerRef}
      {...draggableProvided.draggableProps}
      {...draggableProvided.dragHandleProps}
    >
      <div className=" flex flex-col border-l-4 border-l-teal-600 gap-2">
        <div className="text-teal-600 pl-3">{item.name}</div>
        <div className="text-black pl-3">{item.organization}</div>
      </div>
      <div className="flex justify-between ">
        <div className="flex ">
          <AiOutlineStar size={25} color="gray" />
          <AiOutlineStar size={25} color="gray" />
          <AiOutlineStar size={25} color="gray" />
          <AiOutlineStar size={25} color="gray" />
          <AiOutlineStar size={25} color="gray" />
        </div>
        <div className="text-sm text-gray-400">id:{item.id}</div>
      </div>
    </div>
  );
});

export default CandidateCard;
