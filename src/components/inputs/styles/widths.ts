const widths: { [index: string]: string } = {
  auto: "w-auto",
  full: "w-full",
  xxs: "w-16",
  xs: "w-24",
  sm: "w-32",
  md: "w-48",
  lg: "w-64",
  xl: "w-96",
};
export type WidthsType = keyof typeof widths;
export default widths;
