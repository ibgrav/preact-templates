import { css } from "goober";
import { ComponentChildren } from "preact";
import { defineTemplate } from "../defineTemplate";

export interface TitleProps {
  children: ComponentChildren;
}

export const TitleTemplate = defineTemplate("title", ({ children }: TitleProps) => {
  return (
    <h1
      className={css`
        text-decoration: underline;
      `}
    >
      {children}
    </h1>
  );
});
