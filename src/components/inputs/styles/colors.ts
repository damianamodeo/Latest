const colors: { [index: string]: string } = {
  slate: `bg-slate-500 hover:bg-slate-400 dark:bg-slate-400 dark:hover:bg-slate-400 `,
  gray: `bg-gray-500 hover:bg-gray-400 dark:bg-gray-300 dark:hover:bg-gray-400 `,
  zinc: `bg-zinc-500 hover:bg-zinc-400 dark:bg-zinc-300 dark:hover:bg-zinc-400 `,
  neutral: `bg-neutral-500 hover:bg-neutral-400 dark:bg-neutral-300 dark:hover:bg-neutral-400 `,
  stone: `bg-stone-500 hover:bg-stone-400 dark:bg-stone-300 dark:hover:bg-stone-400 `,
  red: `bg-red-500 hover:bg-red-400 dark:bg-red-300 dark:hover:bg-red-400 `,
  orange: `bg-orange-500 hover:bg-orange-400 dark:bg-orange-300 dark:hover:bg-orange-400 `,
  amber: `bg-amber-500 hover:bg-amber-400 dark:bg-amber-300 dark:hover:bg-amber-400 `,
  yellow: `bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 `,
  lime: `bg-lime-500 hover:bg-lime-400 dark:bg-lime-300 dark:hover:bg-lime-400 `,
  green: `bg-green-500 hover:bg-green-400 dark:bg-green-300 dark:hover:bg-green-400 `,
  emerald: `bg-emerald-500 hover:bg-emerald-400 dark:bg-emerald-300 dark:hover:bg-emerald-400 `,
  teal: `bg-teal-500 hover:bg-teal-400 dark:bg-teal-300 dark:hover:bg-teal-400 `,
  cyan: `bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-300 dark:hover:bg-cyan-400 `,
  sky: `bg-sky-500 hover:bg-sky-400 dark:bg-sky-300 dark:hover:bg-sky-400 `,
  blue: `bg-blue-500 hover:bg-blue-400 dark:bg-blue-300 dark:hover:bg-blue-400 `,
  darkblue: `bg-blue-700 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 `,
  indigo: `bg-indigo-500 hover:bg-indigo-400 dark:bg-indigo-300 dark:hover:bg-indigo-400 `,
  violet: `bg-violet-500 hover:bg-violet-400 dark:bg-violet-300 dark:hover:bg-violet-400 `,
  purple: `bg-purple-500 hover:bg-purple-400 dark:bg-purple-300 dark:hover:bg-purple-400 `,
  fuchsia: `bg-fuchsia-500 hover:bg-fuchsia-400 dark:bg-fuchsia-300 dark:hover:bg-fuchsia-400 `,
  pink: `bg-pink-500 hover:bg-pink-400 dark:bg-pink-300 dark:hover:bg-pink-400 `,
  rose: `bg-rose-500 hover:bg-rose-400 dark:bg-rose-300 dark:hover:bg-rose-400 `,
};

export type ColorsType = keyof typeof colors;
export default colors;
