import { createGlobalStyles } from "goober/global";
import { AccordianTemplate } from "../components/accordian/Accordian.template";
import { ButtonTemplate } from "../components/button/Button.template";
import { TitleTemplate } from "../components/title/Title.template";
import { Event } from "./Event";

interface PageProps {
  event: Event;
}

export const Page = ({ event }: PageProps) => {
  const GlobalStyles = createGlobalStyles`
    html,
    body {
      background: #f9ecfccc;
      margin: 0;
    }

    * {
      box-sizing: border-box;
    }
  `;

  return (
    <>
      <GlobalStyles />
      <main>
        <TitleTemplate>Hello World! originalUrl = {event.originalUrl}</TitleTemplate>
        <ButtonTemplate hydrate count={10} />
        <AccordianTemplate
          items={[
            { title: "Item 1", blurb: "Blurb 1" },
            { title: "Item 2", blurb: "Blurb 2" },
            { title: "Item 3", blurb: "Blurb 3" },
          ]}
        />
      </main>
    </>
  );
};
