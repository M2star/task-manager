"use client"
import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';

const initialTasks = {
  todo: {
    title: 'To Do',
    items: [
      { id: '1', content: 'Task 1' },
      { id: '2', content: 'Task 2' }
    ]
  },
  inProgress: {
    title: 'In Progress',
    items: [
      { id: '3', content: 'Task 3' }
    ]
  },
  done: {
    title: 'Done',
    items: [
      { id: '4', content: 'Task 4' }
    ]
  }
};

const SortableItem = ({ id, content }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white border border-gray-200 rounded-lg p-4 mb-2 shadow-sm"
    >
      {content}
    </div>
  );
};

const Column = ({ columnId, column }) => (
  <div className="bg-gray-100 rounded-lg w-1/3 p-4">
    <h2 className="font-bold mb-4">{column.title}</h2>
    <SortableContext items={column.items} strategy={verticalListSortingStrategy}>
      {column.items.map((item) => (
        <SortableItem key={item.id} id={item.id} content={item.content} />
      ))}
    </SortableContext>
  </div>
);

const Dashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const onDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setTasks((prev) => {
        const sourceColumnId = Object.keys(prev).find((columnId) =>
          prev[columnId].items.some((item) => item.id === active.id)
        );
        const destinationColumnId = Object.keys(prev).find((columnId) =>
          prev[columnId].items.some((item) => item.id === over.id)
        );

        if (sourceColumnId === destinationColumnId) {
          const column = prev[sourceColumnId];
          const oldIndex = column.items.findIndex((item) => item.id === active.id);
          const newIndex = column.items.findIndex((item) => item.id === over.id);
          const newItems = arrayMove(column.items, oldIndex, newIndex);
          return {
            ...prev,
            [sourceColumnId]: {
              ...column,
              items: newItems
            }
          };
        } else {
          const sourceColumn = prev[sourceColumnId];
          const destinationColumn = prev[destinationColumnId];
          const sourceItems = [...sourceColumn.items];
          const destinationItems = [...destinationColumn.items];
          const [movedItem] = sourceItems.splice(sourceItems.findIndex((item) => item.id === active.id), 1);
          destinationItems.splice(destinationItems.findIndex((item) => item.id === over.id), 0, movedItem);

          return {
            ...prev,
            [sourceColumnId]: {
              ...sourceColumn,
              items: sourceItems
            },
            [destinationColumnId]: {
              ...destinationColumn,
              items: destinationItems
            }
          };
        }
      });
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <div className="flex space-x-4 p-4">
        {Object.entries(tasks).map(([columnId, column]) => (
          <Column key={columnId} columnId={columnId} column={column} />
        ))}
      </div>
    </DndContext>
  );
};

export default Dashboard;
