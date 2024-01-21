'use client'
import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";


const According = ({title, id,  }) => {

  return (
    <>
       <Accordion variant="splitted">
      <AccordionItem title={title}>
        {title}
      </AccordionItem>
      <AccordionItem title={title}>
       
      </AccordionItem>
  
    </Accordion>
    </>
  )
}

export default According