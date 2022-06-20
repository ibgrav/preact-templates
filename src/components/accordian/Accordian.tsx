import { useState } from "preact/hooks";
import { AccordianTemplate } from "./Accordian.template";

export interface AccordianProps {
  items: Array<{ title: string; blurb: string }>;
}

export default function Accordian({ items }: AccordianProps) {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  return (
    <AccordianTemplate
      items={items}
      openIndex={openIndex}
      onClick={(e, i) => {
        e.preventDefault();
        if (i === openIndex) setOpenIndex(null);
        else setOpenIndex(i);
      }}
    />
  );
}
