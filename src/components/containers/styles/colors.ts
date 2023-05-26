const colors: { [index: string]: { text: string; background: string } } = {
  slate: {
    text: `text-slate-500 dark:text-slate-200`,
    background: "bg-slate-500 dark:bg-slate-200",
  },
  gray: {
    text: `text-gray-500 dark:text-gray-200`,
    background: "bg-gray-500 dark:bg-gray-200",
  },
  zinc: {
    text: `text-zinc-500 dark:text-zinc-200`,
    background: "bg-zinc-500 dark:bg-zinc-200",
  },
  neutral: {
    text: `text-neutral-500 dark:text-neutral-200`,
    background: "bg-neutral-500 dark:bg-neutral-200",
  },
  stone: {
    text: `text-stone-500 dark:text-stone-200`,
    background: "bg-stone-500 dark:bg-stone-200",
  },
  red: {
    text: `text-red-500 dark:text-red-200`,
    background: "bg-red-500 dark:bg-red-200",
  },
  orange: {
    text: `text-orange-500 dark:text-orange-200`,
    background: "bg-orange-500 dark:bg-orange-200",
  },
  amber: {
    text: `text-amber-500 dark:text-amber-200`,
    background: "bg-amber-500 dark:bg-amber-200",
  },
  yellow: {
    text: `text-yellow-500 dark:text-yellow-200`,
    background: "bg-yellow-500 dark:bg-yellow-200",
  },
  lime: {
    text: `text-lime-500 dark:text-lime-200`,
    background: "bg-lime-500 dark:bg-lime-200",
  },
  green: {
    text: `text-green-500 dark:text-green-200`,
    background: "bg-green-500 dark:bg-green-200",
  },
  emerald: {
    text: `text-emerald-500 dark:text-emerald-200`,
    background: "bg-emerald-500 dark:bg-emerald-200",
  },
  teal: {
    text: `text-teal-500 dark:text-teal-200`,
    background: "bg-teal-500 dark:bg-teal-200",
  },
  cyan: {
    text: `text-cyan-500 dark:text-cyan-200`,
    background: "bg-cyan-500 dark:bg-cyan-200",
  },
  sky: {
    text: `text-sky-500 dark:text-sky-200`,
    background: "bg-sky-500 dark:bg-sky-200",
  },
  blue: {
    text: `text-blue-500 dark:text-blue-400`,
    background: "bg-blue-500 dark:bg-blue-400",
  },
  darkblue: {
    text: `text-darkblue-500 dark:text-darkblue-200`,
    background: "bg-darkblue-500 dark:bg-darkblue-200",
  },
  indigo: {
    text: `text-indigo-500 dark:text-indigo-200`,
    background: "bg-indigo-500 dark:bg-indigo-200",
  },
  violet: {
    text: `text-violet-500 dark:text-violet-200`,
    background: "bg-violet-500 dark:bg-violet-200",
  },
  purple: {
    text: `text-purple-500 dark:text-purple-200`,
    background: "bg-purple-500 dark:bg-purple-200",
  },
  fuchsia: {
    text: `text-fuchsia-500 dark:text-fuchsia-200`,
    background: "bg-fuchsia-500 dark:bg-fuchsia-200",
  },
  pink: {
    text: `text-pink-500 dark:text-pink-200`,
    background: "bg-pink-500 dark:bg-pink-200",
  },
  rose: {
    text: `text-rose-500 dark:text-rose-200`,
    background: "bg-rose-500 dark:bg-rose-200",
  },
};

export type ColorsType = keyof typeof colors;
export default colors;
