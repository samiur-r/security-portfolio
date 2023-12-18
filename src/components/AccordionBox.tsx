import React from "react";

import Accordion, { AccordionItemProps } from "./Accordion";

type AccordionBoxProps = {
  topText: string;
  borderRight?: boolean;
  borderBottom?: boolean;
  accordionItems: AccordionItemProps[];
};

const AccordionBox: React.FC<AccordionBoxProps> = ({
  topText,
  accordionItems,
}) => {
  return (
    <div
      className="px-6 py-12 border border-light-gray"
    >
      <div className="mb-10">{topText}</div>
      <Accordion accordionItems={accordionItems} />
    </div>
  );
};

export default AccordionBox;
