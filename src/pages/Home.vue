<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="px-12 pt-12 pb-32 max-w-7xl mx-auto flex flex-col items-center">
    <div class="jagged-card glass-panel p-12 w-full max-w-3xl mb-16 relative overflow-hidden group">
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-colors"></div>
      
      <div class="relative z-10">
        <div class="inline-block px-4 py-1 bg-indigo-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 hexagon">
          Personal v1.0
        </div>
        
        <h1 class="text-6xl md:text-7xl font-bold leading-none tracking-tighter mb-8 italic">
          ALEX STERLING<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-pink-400">
            Digital Architect.
          </span>
        </h1>
        
        <p class="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-medium">
          Transforming abstract concepts into precise digital experiences through code, geometry, and light. 
          Specializing in high-performance frontend interfaces.
        </p>

        <div class="flex flex-wrap gap-6">
          <RouterLink to="/portfolio" class="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-widest uppercase text-xs hexagon transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(79,70,229,0.3)]">
            View Projects
          </RouterLink>
          <RouterLink to="/blog" class="px-8 py-4 glass-panel hover:border-indigo-400/30 text-white font-bold tracking-widest uppercase text-xs hexagon transition-all hover:scale-105 active:scale-95">
            Read Blog
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Hexagonal Gallery section -->
    <div class="w-full flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
      <div v-for="i in 3" :key="i" class="group relative">
        <!-- Scale effect -->
        <div class="w-56 h-64 hexagon bg-indigo-600 absolute top-0 left-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 scale-110"></div>
        
        <div class="w-56 h-64 hexagon glass-panel flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400/50 transition-all p-8 text-center">
          <div class="w-12 h-12 bg-indigo-500 triangle mb-6 shadow-[0_0_20px_rgba(99,102,241,0.4)]"></div>
          <span class="text-xs font-bold tracking-[0.3em] uppercase mb-1">Focus {{ i }}</span>
          <span class="text-[10px] opacity-40 uppercase tracking-widest">Digital Systems</span>
        </div>
      </div>
    </div>

    <!-- Status footer element -->
    <div class="mt-32 w-full flex justify-between items-end border-t border-white/5 pt-12">
      <div class="text-[10px] opacity-30 font-mono space-y-1 uppercase tracking-widest">
        <p>// LOC: DIGITAL SPACE</p>
        <p>// STATUS: ACTIVE_BUILD</p>
      </div>
      <div class="flex flex-col items-end">
        <div class="w-32 h-[1px] bg-gradient-to-r from-transparent to-white/20 mb-3"></div>
        <div class="text-[10px] tracking-[0.3em] opacity-40 uppercase font-bold">© 2024 STERLING SYSTEMS</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles if needed */
</style>
