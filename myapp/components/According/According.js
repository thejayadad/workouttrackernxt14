'use client'
// 'use client'
import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import Exercise from './Exercise';

const According = ({ title, id, exercises }) => {
    const exercise = exercises
    console.log("Exercise " + exercises)
  return (
    <>
      <Accordion variant="splitted" className="mb-4">
        <AccordionItem key={id} title={title}>
          {exercises.length > 0 ? (
            exercises.map((exercise) => (
              <Exercise name={exercise.name} key={exercise.id} />
            ))
          ) : (
            <div>
              <p>No exercises for this workout.</p>
            </div>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default According;
