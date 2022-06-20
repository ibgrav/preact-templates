export const components: Record<string, () => Promise<{ default: (props: any) => JSX.Element }>> = {
  accordian: () => import("../components/accordian/Accordian"),
  button: () => import("../components/button/Button"),
};
