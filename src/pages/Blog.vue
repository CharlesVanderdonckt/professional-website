<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { blogPosts as posts } from '../constants/blogPosts'
</script>

<template>
  <div class="px-8 py-20 max-w-4xl mx-auto">
    <div class="mb-20 text-center relative">
      <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-indigo-500/5 blur-3xl hexagon pointer-events-none"></div>
      <h2 class="text-5xl font-bold mb-6 tracking-tighter uppercase italic">Technical Field Notes</h2>
      <p class="text-slate-400 max-w-lg mx-auto font-medium">A collection of technical reports, security insights, and system explorations from the frontlines of Linux and Cybersecurity.</p>
    </div>

    <div class="space-y-16 lg:space-y-24">
      <article v-for="post in posts" :key="post.id" class="group relative jagged-card glass-panel p-8 md:p-12 transition-all duration-300 hover:border-indigo-400">
        <!-- Floating accent -->
        <div class="absolute top-4 right-4 w-12 h-12 bg-indigo-500/10 hexagon blur-md group-hover:bg-indigo-500/20 transition-colors"></div>
        
        <div class="mb-6 flex items-center space-x-4">
          <div class="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent"></div>
        </div>
        
        <h3 class="text-3xl md:text-4xl font-bold mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-400 transition-all duration-500">
          {{ post.title }}
        </h3>
        
        <p class="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
          {{ post.excerpt }}
        </p>

        <!-- Image Gallery -->
        <div v-if="post.images && post.images.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div v-for="(img, idx) in post.images" :key="idx" class="relative group/img aspect-video overflow-hidden jagged-card glass-panel border border-white/10">
            <img :src="img" alt="Post visual" class="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
            <div class="absolute inset-0 bg-indigo-500/10 pointer-events-none group-hover/img:bg-transparent transition-colors"></div>
          </div>
        </div>
        
        <div class="flex flex-wrap items-center gap-4">
          <span v-for="tag in post.tags" :key="tag" class="px-4 py-1 bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest hexagon">
            {{ tag }}
          </span>
          <RouterLink :to="'/blog/' + post.id" class="ml-auto flex items-center space-x-2 text-[10px] font-bold tracking-[0.4em] uppercase text-white group/link cursor-pointer hover:text-indigo-400 transition-colors">
            <span class="opacity-50 group-hover/link:opacity-100 transition-opacity">Read Log</span>
            <div class="w-3 h-3 bg-indigo-500 triangle rotate-90 transition-transform group-hover/link:translate-x-1"></div>
          </RouterLink>
        </div>
      </article>
    </div>

    <!-- Triangle motif -->
    <div class="mt-32 flex justify-center space-x-4">
      <div v-for="i in 3" :key="i" class="w-6 h-6 bg-indigo-500/20 triangle" :style="{ opacity: 1 - (i*0.2) }"></div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles inherit from App.vue globally */
</style>
