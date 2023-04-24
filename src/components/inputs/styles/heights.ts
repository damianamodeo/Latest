
const heights: { [index: string]: string } = {
  auto: "h-auto",
  full: "h-full",
  xs: "h-[1.5rem]",
  sm: "h-[2rem]",
  md: "h-[2.5rem]",
  lg: "h-[3rem]",
  xl: "h-[3.5rem]",
  "2xl": "h-[4rem]",
};
export type HeightsType = keyof typeof heights

export default heights