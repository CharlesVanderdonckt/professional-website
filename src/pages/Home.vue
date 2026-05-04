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
          CHARLES VANDERDONCKT<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-pink-400">
            Systems Engineer.
          </span>
        </h1>
        
        <p class="text-xl text-slate-400 max-w-xl mb-4 leading-relaxed font-medium">
          Specializing in Applied Computer Science and Operational Technology. 
          Currently architecting high-performance systems with Python and Cython.
        </p>
      </div>
    </div>

    <!-- Hexagonal Navigation section -->
    <div class="w-full flex flex-wrap justify-center gap-12 md:gap-24 mt-4">
      <RouterLink to="/portfolio" class="group relative">
        <!-- Scale effect -->
        <div class="w-64 h-72 hexagon bg-indigo-600 absolute top-0 left-0 opacity-0 group-hover:opacity-20 transition-all duration-300 scale-110"></div>
        
        <div class="w-64 h-72 hexagon glass-panel flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400/50 transition-all p-10 text-center shadow-xl">
          <div class="w-14 h-14 bg-indigo-500 triangle mb-6 shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-transform group-hover:scale-110"></div>
          <span class="text-sm font-bold tracking-[0.4em] uppercase mb-2">View Portfolio</span>
          <span class="text-[10px] opacity-40 uppercase tracking-[0.2em] font-mono">// OPEN_ARCHIVE</span>
        </div>
      </RouterLink>

      <RouterLink to="/blog" class="group relative">
        <!-- Scale effect -->
        <div class="w-64 h-72 hexagon bg-pink-600 absolute top-0 left-0 opacity-0 group-hover:opacity-20 transition-all duration-300 scale-110"></div>
        
        <div class="w-64 h-72 hexagon glass-panel flex flex-col items-center justify-center cursor-pointer hover:border-pink-400/50 transition-all p-10 text-center shadow-xl">
          <div class="w-14 h-14 border-2 border-pink-500 hexagon mb-6 transition-transform group-hover:rotate-12"></div>
          <span class="text-sm font-bold tracking-[0.4em] uppercase mb-2">Read Blog</span>
          <span class="text-[10px] opacity-40 uppercase tracking-[0.2em] font-mono">// VIEW_LOGS</span>
        </div>
      </RouterLink>
    </div>

    <!-- Status footer element -->
    <div class="mt-32 w-full flex justify-between items-end border-t border-white/5 pt-12">
      <div class="text-[10px] opacity-30 font-mono space-y-1 uppercase tracking-widest">
        <p>// LOC: DIGITAL SPACE</p>
        <p>// STATUS: ACTIVE_BUILD</p>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles if needed */
</style>
