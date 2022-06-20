import { ButtonTemplate } from "../components/button/Button.template";

export const Page = () => {
  return (
    <>
      <main>
        <h1>Hello world!</h1>
        <ButtonTemplate count={10} />
      </main>
      <ButtonTemplate count={5} />
    </>
  );
};
