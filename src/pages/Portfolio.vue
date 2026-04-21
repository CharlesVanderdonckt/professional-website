<script setup lang="ts">
const projects = [
  {
    title: "Prism Engine",
    category: "Graphics SDK",
    desc: "A custom rendering pipeline for non-euclidean geometry.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "HexaChat",
    category: "Communication",
    desc: "Decentralized messaging protocol using hexagonal pathfinding.",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Fractal Dash",
    category: "Dashboard",
    desc: "Real-time analytics with recursive data visualization.",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Sharp UI",
    category: "Design System",
    desc: "A UI framework strictly forbidden from using border-radius.",
    color: "from-green-500 to-teal-600"
  }
]
</script>

<template>
  <div class="px-8 py-20 max-w-7xl mx-auto">
    <div class="mb-16 flex items-center justify-between">
      <div>
        <h2 class="text-4xl font-bold mb-2 tracking-tighter uppercase italic">Selected Systems</h2>
        <div class="w-20 h-[2px] bg-indigo-500 hexagon"></div>
      </div>
      <div class="text-[10px] opacity-40 font-mono hidden md:block">
        BUILD_VER: 3.0.4<br/>
        STABLE_BRANCH: PROD
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-16">
      <div v-for="project in projects" :key="project.title" class="group relative w-64 md:w-80 h-72 md:h-96">
        <!-- Background Glow -->
        <div :class="['absolute -inset-4 bg-gradient-to-br blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700 scale-110 hexagon', project.color]"></div>
        
        <div class="relative w-full h-full glass-panel hexagon p-8 flex flex-col justify-center items-center text-center transition-all duration-500 hover:border-indigo-400 group-hover:-translate-y-4">
          <div :class="['w-12 h-1 bg-gradient-to-r mb-8 hexagon shadow-lg', project.color]"></div>
          
          <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400 mb-2 block opacity-70">{{ project.category }}</span>
          <h3 class="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{{ project.title }}</h3>
          <p class="text-gray-400 text-xs md:text-sm mb-8 leading-relaxed max-w-[200px]">{{ project.desc }}</p>
          
          <button class="flex items-center space-x-2 text-white font-bold group/btn text-[10px] tracking-widest uppercase">
            <span class="border-b-[1px] border-white/30 group-hover/btn:border-indigo-400 transition-colors">Initialize</span>
            <div class="w-3 h-3 bg-white/50 group-hover/btn:bg-indigo-400 clip-tri rotate-90 transition-all group-hover/btn:translate-x-1"></div>
          </button>
        </div>
      </div>
    </div>

    <!-- Triangle grid background decoration -->
    <div class="absolute right-0 top-1/2 -z-10 opacity-5 pointer-events-none">
      <svg width="400" height="400" viewBox="0 0 100 100">
        <path d="M0 0 L100 0 L50 86 Z" fill="none" stroke="indigo" stroke-width="0.1" />
        <path d="M50 86 L150 86 L100 0 Z" fill="none" stroke="indigo" stroke-width="0.1" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.clip-tri {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
