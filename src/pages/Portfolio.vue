<script setup lang="ts">
const careerHistory = [
  {
    title: "Eniris",
    role: "Software Engineer (Internship)",
    duration: "Ongoing",
    desc: "Developing within the realm of Operational Technology (OT), utilizing Python and Cython to build high-performance systems and integration layers.",
    tags: ["Python", "Cython", "OT", "Software Engineering"],
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Howest Brugge",
    role: "Bachelor of Science",
    duration: "2023 — Present",
    desc: "Extensive study in Computer Science and Security. Focused on high-level defensive and offensive system architecture.",
    tags: ["Applied CS", "Networking", "Security"],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Okay, Colruyt",
    role: "Cashier",
    duration: "2023",
    desc: "Customer service and transaction management in a fast-paced retail environment.",
    tags: ["Customer Service", "Gent", "Belgium"],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Towson University",
    role: "IT Internship",
    duration: "2021 — 2022",
    desc: "Hands-on maintenance of university servers and repair/salvage of computer hardware systems.",
    tags: ["Server Maintenance", "Hardware Repair", "Maryland", "USA"],
    color: "from-orange-500 to-amber-600"
  },
  {
    title: "Towson High School",
    role: "U.S. High School Diploma",
    duration: "2017 — 2022",
    desc: "Secondary education in Towson, Maryland. Focus on generic programmes and foundational computer literacy.",
    tags: ["General Studies", "USA", "Maryland"],
    color: "from-blue-500 to-indigo-600"
  }
]

const competencies = [
  { module: "Python/Cython", icon: "hexagon" },
  { module: "Linux Server Mgmt", icon: "asym-1" },
  { module: "Windows Server Mgmt", icon: "triangle" },
  { module: "REST APIs", icon: "hexagon" },
  { module: "System Automation", icon: "asym-2" },
  { module: "Problem Solving", icon: "asym-3" }
]

const languages = [
  { name: "English", level: "Native", icon: "hexagon" },
  { name: "Dutch", level: "B1", icon: "triangle" }
]
</script>

<template>
  <div class="px-8 py-20 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-20 flex items-center justify-between">
      <div>
        <h2 class="text-4xl font-bold mb-2 tracking-tighter uppercase italic">Professional Record</h2>
        <div class="w-24 h-[2px] bg-indigo-500 hexagon"></div>
      </div>
      <div class="text-[10px] opacity-40 font-mono hidden md:block text-right">
        ID: VANDERDONCKT_V.01<br/>
        CLEARANCE: LEVEL_4
      </div>
    </div>

    <!-- Timeline Experience -->
    <div class="relative max-w-4xl mx-auto mb-32">
      <!-- Vertical Timeline Line -->
      <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 hidden md:block"></div>
      
      <div class="space-y-24">
        <div v-for="(entry, idx) in careerHistory" :key="idx" class="relative group">
          <!-- Timeline Node -->
          <div class="absolute left-8 md:left-1/2 -translate-x-1/2 top-12 w-4 h-4 bg-indigo-500 hexagon z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)] hidden md:block"></div>
          
          <div :class="['flex flex-col md:flex-row items-center gap-8 md:gap-24', idx % 2 === 0 ? 'md:flex-row-reverse' : '']">
            <!-- Content Block -->
            <div class="w-full md:w-1/2">
              <div class="relative glass-panel jagged-card p-10 hover:border-indigo-400/50 transition-all duration-500 group-hover:-translate-y-2">
                <div :class="['absolute -inset-2 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-10 transition-all duration-700 jagged-card', entry.color]"></div>
                
                <div class="relative z-10">
                  <span class="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-400 mb-2 block">{{ entry.duration }}</span>
                  <h3 class="text-3xl font-black tracking-tight italic mb-1">{{ entry.title }}</h3>
                  <p class="text-indigo-200/60 font-bold text-sm uppercase tracking-widest mb-6">{{ entry.role }}</p>
                  
                  <p class="text-slate-400 text-lg mb-8 leading-relaxed">{{ entry.desc }}</p>
                  
                  <div class="flex flex-wrap gap-3">
                    <span v-for="tag in entry.tags" :key="tag" class="px-3 py-1 bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest hexagon opacity-60">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Date/Empty Spacer for alternating layout -->
            <div class="hidden md:flex w-1/2 justify-center items-center">
              <div class="text-2xl font-black uppercase italic tracking-tighter opacity-10 group-hover:opacity-30 transition-opacity">
                {{ entry.duration }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Academic Competencies -->
    <div class="mb-32">
      <div class="mb-12 text-center">
        <h3 class="text-2xl font-bold tracking-widest uppercase mb-4 italic">Operational Proficiency</h3>
        <div class="w-16 h-[1px] bg-indigo-500/50 mx-auto"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div v-for="comp in competencies" :key="comp.module" class="glass-panel hexagon p-8 flex flex-col items-center justify-center text-center group hover:border-indigo-400 transition-all duration-500 cursor-default">
          <div :class="['w-12 h-12 bg-indigo-500/20 mb-4 flex items-center justify-center transition-transform group-hover:scale-110 shadow-inner', comp.icon]">
            <div :class="['w-4 h-4 bg-indigo-400', comp.icon]"></div>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-slate-300 leading-tight">{{ comp.module }}</span>
        </div>
      </div>
    </div>

    <!-- Linguistic Mastery -->
    <div class="mb-32">
      <div class="mb-12 text-center">
        <h3 class="text-2xl font-bold tracking-widest uppercase mb-4 italic">Linguistic Assets</h3>
        <div class="w-16 h-[1px] bg-pink-500/50 mx-auto"></div>
      </div>

      <div class="flex flex-wrap justify-center gap-8">
        <div v-for="lang in languages" :key="lang.name" class="glass-panel jagged-card px-12 py-6 flex items-center space-x-6 group hover:border-pink-400 transition-all">
          <div :class="['w-8 h-8 bg-pink-500/20 flex items-center justify-center', lang.icon]">
            <div :class="['w-2 h-2 bg-pink-400', lang.icon]"></div>
          </div>
          <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-pink-400">{{ lang.level }}</span>
            <h4 class="text-xl font-black italic">{{ lang.name }}</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Technical Toolkit -->
    <div class="mt-40 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 opacity-40">
      <div class="text-[10px] space-y-2 font-mono">
        <p>// LANGUAGES: JAVA | JAVASCRIPT | PYTHON | SQL | PHP | C#</p>
        <p>// INTEGRATIONS: CYTHON | REST_APIs</p>
        <p>// SYSTEMS: LINUX | WINDOWS_SERVER</p>
      </div>
      <div></div>
    </div>

    <!-- Triangle grid background decoration -->
    <div class="absolute left-0 top-1/2 -z-10 opacity-5 pointer-events-none rotate-180">
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
