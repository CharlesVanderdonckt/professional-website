<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-[#0c0a1a] text-white font-sans overflow-x-hidden selection:bg-indigo-500/30">
    <!-- Theme Background Decorations -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-100px] left-[-50px] w-96 h-96 triangle bg-indigo-600 opacity-20 blur-3xl"></div>
      <div class="absolute bottom-[-50px] right-[-50px] w-80 h-80 hexagon bg-pink-600 opacity-20 blur-3xl"></div>
      <div class="absolute top-1/4 right-1/4 w-64 h-64 triangle bg-cyan-500 opacity-10 blur-2xl rotate-45"></div>
      
      <!-- Subtle Grid -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </div>

    <nav class="relative z-50 flex items-center justify-between px-12 py-8 max-w-7xl mx-auto">
      <RouterLink to="/" class="group flex items-center space-x-3">
        <div class="w-8 h-8 bg-indigo-500 hexagon group-hover:rotate-12 transition-transform duration-500"></div>
        <span class="text-2xl font-black tracking-tighter text-white uppercase italic">Hexa<span class="text-indigo-400">Port</span></span>
      </RouterLink>
      
      <div class="flex items-center space-x-8 text-sm font-medium tracking-widest uppercase opacity-60">
        <RouterLink to="/portfolio" class="hover:opacity-100 transition-opacity">
          Portfolio
        </RouterLink>
        <RouterLink to="/blog" class="hover:opacity-100 transition-opacity">
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

    <footer class="relative z-10 py-12 px-8 text-center border-t border-white/5 mt-20">
      <p class="text-gray-500 text-sm">© 2024 HexaPort. No squares were harmed in the making of this site.</p>
    </footer>
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
.glass-panel {
  background: rgba(255, 255, 255, 0.03);
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
  background: #0c0a1a;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
