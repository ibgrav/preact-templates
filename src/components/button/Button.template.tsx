import { defineTemplate } from "../defineTemplate";
import styles from "./button.module.scss";

export default interface ButtonProps {
  count?: number;
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonTemplate = defineTemplate<HTMLButtonElement, ButtonProps>(
  "button",
  ({ count = 0, ref, onClick }) => {
    return (
      <button className={styles.button} ref={ref} onClick={onClick}>
        count <span>{count}</span>
      </button>
    );
  }
);
