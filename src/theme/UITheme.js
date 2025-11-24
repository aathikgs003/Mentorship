// Change theme number here: 1, 2, 3, 4, 5, 6, or 7
export const ACTIVE_THEME = 7;

/* THEME INDEX
1 = Glassmorphism Premium UI
2 = Modern Corporate UI
3 = Neo-Brutalism UI
4 = Minimal Elegant UI
5 = Professional UI
6 = Vibrant Gradient UI
7 = Neon Cyberpunk Animated UI
*/

export const themes = {
  1: {
    name: "Glassmorphism",
    card:
      "backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:scale-[1.02]",
    button:
      "bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all",
    input:
      "bg-white/20 backdrop-blur-lg border border-white/40 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:ring-2 focus:ring-blue-300 outline-none",
    navbar:
      "bg-white/10 backdrop-blur-lg h-screen w-64 p-6 flex flex-col text-white/90",
    pageBg: "bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen p-6 text-slate-900",
    mutedText: "text-white/80",
  },

  2: {
    name: "Corporate",
    card: "bg-white border border-gray-200 rounded-lg shadow-sm p-6",
    button:
      "bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium shadow-sm",
    input:
      "border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300 outline-none",
    navbar:
      "bg-slate-800 h-screen w-64 p-6 flex flex-col text-gray-200",
    pageBg: "bg-gray-100 min-h-screen p-6 text-slate-900",
    mutedText: "text-gray-600",
  },

  3: {
    name: "NeoBrutalism",
    card: "bg-white border-4 border-black shadow-[6px_6px_0_#000] p-6 rounded-xl",
    button:
      "bg-yellow-400 border-2 border-black shadow-[4px_4px_0_#000] px-6 py-3 rounded-lg hover:translate-x-1 hover:translate-y-1 transition",
    input:
      "border-2 border-black rounded-md px-3 py-2 focus:ring-0 outline-none shadow-[3px_3px_0_#000]",
    navbar:
      "bg-lime-300 h-screen w-64 p-6 flex flex-col border-r-4 border-black",
    pageBg: "bg-white min-h-screen p-6 text-slate-900",
    mutedText: "text-black",
  },

  4: {
    name: "Minimal",
    card: "bg-white rounded-3xl shadow-sm p-8 border border-slate-100",
    button:
      "bg-blue-200 hover:bg-blue-300 text-slate-800 px-6 py-2 rounded-xl shadow-sm transition",
    input:
      "border border-gray-200 rounded-2xl px-4 py-2 focus:ring-2 focus:ring-blue-200 outline-none",
    navbar:
      "bg-white h-screen w-64 p-6 flex flex-col border-r border-slate-200",
    pageBg: "bg-slate-50 min-h-screen p-6 text-slate-900",
    mutedText: "text-slate-500",
  },

  5: {
    name: "Professional",
    card:
      "bg-white border border-slate-200/80 rounded-xl shadow-sm p-6 transition-shadow duration-300 hover:shadow-md",
    button:
      "bg-primary-500 text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50",
    input:
      "bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-shadow duration-300",
    navbar:
      "bg-white h-screen w-64 p-6 flex flex-col border-r border-slate-200/80",
    pageBg: "bg-primary-50 min-h-screen p-6 text-slate-900",
    mutedText: "text-slate-500",
  },

  6: {
    name: "Vibrant Gradient",
    card:
      "bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/40",
    button:
      "bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300",
    input:
      "bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl px-4 py-2 text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-pink-400 outline-none transition-shadow duration-300",
    pageBg:
      "bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 min-h-screen p-6",
    navbar:
      "bg-white/10 backdrop-blur-sm h-screen w-64 p-6 flex flex-col text-slate-800 border-r border-white/20",
    mutedText: "text-slate-600",
  },

  7: {
    name: "Neon Cyberpunk",
    card:
      "bg-gradient-to-br from-purple-100 to-pink-100 backdrop-blur-md rounded-2xl shadow-2xl shadow-purple-500/20 p-6 border-2 border-purple-300 hover:border-pink-400 hover:shadow-pink-500/30 hover:-translate-y-1 transition-all duration-500",
    button:
      "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-purple-400/40 hover:shadow-cyan-400/50 hover:scale-110 hover:rotate-1 transition-all duration-300 relative overflow-hidden",
    input:
      "bg-white/90 backdrop-blur-sm border-2 border-purple-300 rounded-xl px-4 py-2 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition-all duration-300 focus:scale-105 shadow-inner shadow-purple-200",
    pageBg:
      "bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 min-h-screen p-6",
    navbar:
      "bg-gradient-to-b from-purple-100/95 to-pink-100/95 backdrop-blur-lg h-screen w-64 p-6 flex flex-col text-slate-800 border-r-2 border-purple-200 shadow-2xl shadow-purple-300/20",
    mutedText: "text-slate-600",
  },
};

export default { ACTIVE_THEME, themes };