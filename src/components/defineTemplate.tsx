import { FunctionalComponent, JSX } from "preact";
import { forwardRef } from "preact/compat";
import { components } from "../client/components";

interface DefaultTemplateProps {
  className?: string;
  style?: JSX.CSSProperties;
  hydrate?: boolean;
}

type TemplateProps<P> = DefaultTemplateProps & P;

export type TemplateFC<P> = FunctionalComponent<TemplateProps<P>>;

export function defineTemplate<E extends Element, P = void>(name: string, Template: TemplateFC<P>) {
  return forwardRef<E, TemplateProps<P>>((props: TemplateProps<P>) => {
    if (components[name] && (props.hydrate || typeof window === "undefined")) {
      return (
        <span data-component={name} data-props={JSON.stringify({ ...props, root: undefined })}>
          <Template {...props} />
        </span>
      );
    }

    return <Template {...props} />;
  });
}
