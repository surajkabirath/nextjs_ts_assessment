'use client'

import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from './accordionWrapper'

interface IconProps {
  id: number;
  open: number;
}

const Icon: React.FC<IconProps> = ({ id, open }) => {
  return (
    <svg
      xmlns="(link unavailable)"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
};

const Accordions = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className='px-4 mx-auto lg:max-w-7xl md:items-center md:flex-col md:px-8 bg-slate-900' >
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} onClick={() => handleOpen(1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <AccordionHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          we are not always in the position that we want to be at. we are constantly
          growing. we are constantly making mistakes. we are constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />} onClick={() => handleOpen(2)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <AccordionHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          we are not always in the position that we want to be at. we are constantly
          growing. we are constantly making mistakes. we are constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />} onClick={() => handleOpen(3)}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <AccordionHeader  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          we are not always in the position that we want to be at. we are constantly
          growing. we are constantly making mistakes. we are constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default Accordions;