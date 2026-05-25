<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'
import { blogPosts } from '../constants/blogPosts'

const route = useRoute()
const post = computed(() => blogPosts.find(p => p.id === route.params.id))
</script>

<template>
  <div v-if="post" class="px-8 py-20 max-w-4xl mx-auto">
    <RouterLink to="/blog" class="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.4em] uppercase text-white/50 hover:text-indigo-400 transition-colors mb-12 group">
      <div class="w-3 h-3 bg-indigo-500/50 group-hover:bg-indigo-500 triangle rotate-270 transition-all group-hover:-translate-x-1"></div>
      <span>Back to Notes</span>
    </RouterLink>

    <header class="mb-12">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight italic">{{ post.title }}</h1>
    </header>

    <!-- Main Image -->
    <div v-if="post.images && post.images.length" class="jagged-card glass-panel mb-12 overflow-hidden border border-white/10 aspect-[21/9]">
      <img :src="post.images[0]" :alt="post.title" class="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
    </div>

    <div class="glass-panel jagged-card p-12 md:p-20 mb-12">
      <div class="text-xl text-slate-300 leading-relaxed whitespace-pre-wrap font-medium indent-12" :class="{ 'mb-8': post.links && post.links.length }">
        {{ post.content }}
      </div>

      <!-- Dynamic References/Links -->
      <div v-if="post.links && post.links.length" class="mt-12 pt-8 border-t border-white/10">
        <h4 class="text-xs font-bold tracking-[0.3em] uppercase text-indigo-400 mb-4">// References & Media</h4>
        <div class="flex flex-wrap gap-4">
          <a v-for="link in post.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" class="glass-panel px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase rounded-none border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/10 text-slate-300 hover:text-white transition-all flex items-center space-x-2">
            <span>{{ link.label }}</span>
            <svg class="w-4.5 h-4.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Gallery -->
    <div v-if="post.images && post.images.length > 1" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div v-for="(img, idx) in post.images.slice(1)" :key="idx" class="jagged-card glass-panel aspect-video overflow-hidden border border-white/10">
        <img :src="img" alt="Gallery image" class="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
      </div>
    </div>

    <footer class="flex flex-wrap gap-4 pt-12 border-t border-white/5">
      <span v-for="tag in post.tags" :key="tag" class="px-4 py-1 bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest hexagon">
        {{ tag }}
      </span>
    </footer>
  </div>
  
  <div v-else class="px-8 py-40 text-center">
    <h2 class="text-2xl font-bold mb-4 uppercase tracking-widest italic text-indigo-400">Post Not Found</h2>
    <RouterLink to="/blog" class="text-sm font-bold underline underline-offset-8 decoration-white/20 hover:decoration-indigo-400 transition-all">
      Return to Blog
    </RouterLink>
  </div>
</template>

<style scoped>
.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.rotate-270 {
  transform: rotate(270deg);
}
</style>
