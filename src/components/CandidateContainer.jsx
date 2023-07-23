import React from "react";
import CandidateCard from "./CandidateCard";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const CandidateContainer = ({ listOfCandidate, setListOfCandidate }) => {
  const onDragEnd = (result) => {
    // Check if the item was dropped outside the droppable area
    if (!result.destination) return;

    const { source, destination } = result;
    // Reorder the items based on the drag and drop result
    const updatedItems = Array.from(listOfCandidate);
    const [reorderedItem] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, reorderedItem);

    setListOfCandidate(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(droppableProvided, droppableSnapshot) => (
          <div
            className="w-[100%] flex flex-col gap-5 bg-gray-100  h-[80%] p-10 flex-wrap"
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
            {listOfCandidate.map((item, index) => {
              return (
                <Draggable key={item.id} index={index} draggableId={item.name}>
                  {(draggableProvided) => (
                    <CandidateCard
                      item={item}
                      key={index}
                      draggableProvided={draggableProvided}
                    />
                  )}
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default CandidateContainer;
