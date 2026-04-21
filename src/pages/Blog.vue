<script setup lang="ts">
const posts = [
  {
    date: "2024-04-20",
    title: "Why Hexagons are the Bestagons",
    excerpt: "Exploring the mathematical perfection of the six-sided polygon in UI design.",
    tags: ["Geometry", "Design"]
  },
  {
    date: "2024-03-15",
    title: "The Death of Border Radius",
    excerpt: "Why sharp edges are making a comeback in the tech minimalist movement.",
    tags: ["Philosophy", "Trends"]
  },
  {
    date: "2024-02-10",
    title: "Triangulating User Experience",
    excerpt: "How to use directional shapes to guide user attention without being intrusive.",
    tags: ["UX", "Psychology"]
  }
]
</script>

<template>
  <div class="px-8 py-20 max-w-4xl mx-auto">
    <div class="mb-20 text-center relative">
      <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-indigo-500/5 blur-3xl hexagon pointer-events-none"></div>
      <h2 class="text-5xl font-bold mb-6 tracking-tighter uppercase italic">The Sharp Edge</h2>
      <p class="text-slate-400 max-w-lg mx-auto font-medium">Reflections on code, design, and non-rectangular thinking.</p>
    </div>

    <div class="space-y-16 lg:space-y-24">
      <article v-for="post in posts" :key="post.title" class="group relative jagged-card glass-panel p-8 md:p-12 transition-all duration-300 hover:border-indigo-400">
        <!-- Floating accent -->
        <div class="absolute top-4 right-4 w-12 h-12 bg-indigo-500/10 hexagon blur-md group-hover:bg-indigo-500/20 transition-colors"></div>
        
        <div class="mb-6 flex items-center space-x-4">
          <time class="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.3em] font-bold">{{ post.date }}</time>
          <div class="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/30 to-transparent"></div>
        </div>
        
        <h3 class="text-3xl md:text-4xl font-bold mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-400 transition-all duration-500">
          {{ post.title }}
        </h3>
        
        <p class="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
          {{ post.excerpt }}
        </p>
        
        <div class="flex flex-wrap items-center gap-4">
          <span v-for="tag in post.tags" :key="tag" class="px-4 py-1 bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest hexagon">
            {{ tag }}
          </span>
          <RouterLink to="/blog" class="ml-auto flex items-center space-x-2 text-[10px] font-bold tracking-[0.4em] uppercase text-white group/link">
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
