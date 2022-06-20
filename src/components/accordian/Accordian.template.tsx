import { defineTemplate } from "../defineTemplate";
import { AccordianProps } from "./Accordian";
import { css } from "goober";

interface AccordianTemplateProps extends AccordianProps {
  openIndex?: null | number;
  onClick?: (e: JSX.TargetedMouseEvent<HTMLDetailsElement>, index: number) => void;
}

export const AccordianTemplate = defineTemplate(
  "accordian",
  ({ onClick, openIndex, items }: AccordianTemplateProps) => {
    return (
      <>
        {items.map(({ title, blurb }, i) => (
          <details key={i} open={openIndex === i} onClick={(e) => onClick?.(e, i)}>
            <summary
              className={css`
                &:hover {
                  cursor: pointer;
                }
              `}
            >
              {title}
            </summary>
            <div>{blurb}</div>
          </details>
        ))}
      </>
    );
  }
);
