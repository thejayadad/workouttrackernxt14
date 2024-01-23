'use client'
// 'use client'
import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const According = ({ title, id, }) => {
  return (
    <>
      <Accordion variant="splitted" className="mb-4">
        <AccordionItem key={id} title={title} />


      </Accordion>
    </>
  );
};

export default According;
