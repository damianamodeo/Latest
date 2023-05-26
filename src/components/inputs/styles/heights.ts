
const heights: { [index: string]: string } = {
  auto: "h-auto",
  full: "h-full",
  xs: "text-[0.75rem] p-2",
  sm: "text-[1rem] p-3",
  md: "text-[1.3rem] p-3",
  lg: "text-[1.7rem] p-4",
  xl: "text-[2.2rem] p-4",
};
export type HeightsType = keyof typeof heights

export default heights