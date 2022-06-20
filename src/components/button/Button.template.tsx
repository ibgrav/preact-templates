import { css } from "goober";
import { defineTemplate } from "../defineTemplate";

export default interface ButtonProps {
  count?: number;
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonTemplate = defineTemplate<HTMLButtonElement, ButtonProps>(
  "button",
  ({ count = 0, ref, onClick }) => {
    return (
      <button
        className={css`
          border: none;
          background: peachpuff;
          border: 1px solid peachpuff;
          border-radius: 4px;
          color: green;
          padding: 0.5em 1em;

          &:hover {
            cursor: pointer;
            border: 1px solid black;
          }
        `}
        ref={ref}
        onClick={onClick}
      >
        count{" "}
        <span
          className={css`
            color: blue;
          `}
        >
          {count}
        </span>
      </button>
    );
  }
);
