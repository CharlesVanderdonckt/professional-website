<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-[#3a3b3c] text-white font-sans overflow-x-hidden selection:bg-indigo-500/30">
    <!-- Theme Background Decorations -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <!-- Shape Clusters -->
      <div class="absolute top-[10%] left-[5%] w-64 h-64 asym-1 bg-indigo-500/10 blur-xl animate-float"></div>
      <div class="absolute top-[15%] left-[8%] w-48 h-48 asym-2 bg-pink-500/10 blur-lg rotate-12"></div>
      
      <div class="absolute bottom-[20%] right-[10%] w-80 h-80 asym-3 bg-blue-500/10 blur-2xl animate-float-slow"></div>
      <div class="absolute bottom-[25%] right-[5%] w-56 h-56 asym-1 bg-cyan-500/10 blur-xl -rotate-45"></div>

      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 asym-2 bg-purple-500/20 blur-[100px]"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 asym-3 bg-indigo-600/20 blur-[100px]"></div>
      </div>
      
      <!-- Subtle Grid -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]"></div>
    </div>

    <nav class="relative z-50 flex items-center justify-start px-12 py-10 max-w-7xl mx-auto">
      <div class="flex items-center space-x-12 text-xs font-bold tracking-[0.4em] uppercase opacity-60">
        <RouterLink to="/" class="hover:text-indigo-400 hover:opacity-100 transition-all">
          Home
        </RouterLink>
        <RouterLink to="/portfolio" class="hover:text-indigo-400 hover:opacity-100 transition-all">
          Portfolio
        </RouterLink>
        <RouterLink to="/blog" class="hover:text-indigo-400 hover:opacity-100 transition-all">
          Blog
        </RouterLink>
      </div>
    </nav>

    <main class="relative z-10">
      <RouterView v-slot="{ Component }">
        <transition 
          name="fade-slide" 
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style>
.hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.jagged-card {
  clip-path: polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%);
}
.asym-1 {
  clip-path: polygon(10% 25%, 90% 5%, 100% 70%, 75% 100%, 15% 90%);
}
.asym-2 {
  clip-path: polygon(50% 0%, 100% 40%, 80% 100%, 20% 90%, 0% 30%);
}
.asym-3 {
  clip-path: polygon(30% 0%, 100% 20%, 90% 80%, 40% 100%, 0% 60%);
}
.glass-panel {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.accent-glow {
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(15px) rotate(-10deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

/* Route transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.05);
}

/* Glassy scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #3a3b3c;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
