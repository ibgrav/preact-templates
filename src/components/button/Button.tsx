import { useState } from "preact/hooks";
import ButtonProps, { ButtonTemplate } from "./Button.template";

export default function Button(props: ButtonProps) {
  const [count, setCount] = useState(props.count || 0);

  return <ButtonTemplate count={count} onClick={() => setCount((c) => c + 1)} />;
}
