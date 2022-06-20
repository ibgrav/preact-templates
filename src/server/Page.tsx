import { AccordianTemplate } from "../components/accordian/Accordian.template";
import { ButtonTemplate } from "../components/button/Button.template";
import { TitleTemplate } from "../components/title/Title.template";

export const Page = () => {
  return (
    <>
      <main>
        <TitleTemplate>Hello World!</TitleTemplate>
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
