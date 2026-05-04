export interface BlogPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  images: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "hack-the-future-2025",
    date: "2025-02-15",
    title: "Deep Dive into Linux Waters – Hack The Future 2025",
    excerpt: "Competing in the Linux and DevOps challenge hosted by Piros and QUBR. Automated deployments with Ansible, managed containers with Podman, and handled TLS 1.3.",
    content: "I had the chance to compete in the Deep Dive into Linux Waters challenge at Hack The Future 2025, hosted by Piros and QUBR. The event was highly practical and pushed my Linux and DevOps skills to the limit. We worked directly on real servers, automated deployments with Ansible, managed containers using Podman, configured TLS 1.3, and handled SELinux and firewalld. It was a true test of teamwork, problem-solving, and technical depth, and one of the most enriching hands-on challenges I’ve taken part in. A huge thanks to the teams at Piros and QUBR for organizing such an inspiring and knowledge-packed experience.",
    tags: ["Linux", "DevOps", "Hackathon"],
    images: ["/blog-images/hack-the-future-2025.jpg"]
  },
  {
    id: "dotnet-10-preview",
    date: "2024-11-18",
    title: ".NET 10: The Future of Streamlined Code",
    excerpt: "Exploring early looks at .NET 10 improvements including faster build times, enhanced APIs and new operators for more streamlined code.",
    content: "I attended the Technology & Meet session for an early look at what’s coming in .NET 10. We learned about some key improvements with .NET 10 including faster build times, enhanced APIs and new operators for more streamlined code. Alongside these enhancements, we explored an exciting range of new features. The real-time demonstrations were especially compelling, offering clear, practical insight into the impact these updates will have. A special thank-you to Kevin De Rudder for leading the session and generously sharing his expertise.",
    tags: [".NET", "Software Architecture"],
    images: ["/blog-images/dotnet-10-preview.jpg"]
  },
  {
    id: "ipv6-standard",
    date: "2024-11-10",
    title: "IPv6: The Future Standard of Networking",
    excerpt: "Exploring the transition from IPv4 to IPv6 and why moving beyond legacy standards is becoming essential for IT and cybersecurity.",
    content: "The central focus of the Tech & Meet session was the emergence of IPv6. The material covered everything from fundamental IPv6 concepts to real-world adoption by organizations—while also addressing the hurdles and limitations that come with the transition. A significant part of the discussion compared IPv4 and IPv6, highlighting why moving beyond IPv4 is becoming increasingly essential. It’s clear that IPv6 is on track to become the networking standard, which means anyone pursuing IT or cybersecurity should be well-versed in how it works and how to implement it effectively. Many thanks to Nico Declerck for delivering such an insightful presentation!",
    tags: ["Networking", "IPv6", "Cybersecurity"],
    images: ["/blog-images/ipv6-standard.jpg"]
  },
  {
    id: "threat-intelligence-ccb",
    date: "2024-10-07",
    title: "Threat Intelligence – From Threats to Tactics",
    excerpt: "Collaboration with Centre for Cybersecurity Belgium (CCB) on turning raw threat data into concrete defensive actions.",
    content: "I had the opportunity to attend Howest’s Tech & Meet session in Bruges, focused on Threat Intelligence – From Threats to Tactics, hosted in collaboration with the Centre for Cybersecurity Belgium (CCB). The session brought together students and professionals to explore how cyber teams turn raw threat data into concrete defensive actions. Sandro Manzo and Niels Desloover from CCB/CyTRIS delivered an excellent presentation, offering a behind-the-scenes look at how CTI is applied in real environments—from identifying emerging risks to responding efficiently during incidents. What stood out most was how seamlessly they connected theory with real-world operational examples. Their insights into CCB’s rapid processes highlighted the critical importance of timely collaboration and knowledge sharing in building national cyber resilience.",
    tags: ["ThreatIntel", "CCB", "Security"],
    images: ["/blog-images/threat-intelligence-ccb.jpg"]
  },
  {
    id: "nato-cyber-defense",
    date: "2024-09-20",
    title: "The Evolution of NATO's Cyber Defense",
    excerpt: "A look into how global security now depends as much on digital stability as on physical defense.",
    content: "I attended a Tech & Meet session led by Martin De Pauw, who delivered a compelling look into the evolution of NATO's cyber defense capabilities. The talk traced an impressive journey — from cybersecurity's early days as a niche technical field to its recognition in 2016 as a fully operational domain within NATO, standing equal to land, sea, and air. Key milestones included the world's first digital weapon in 2010, the growing complexity of zero-day vulnerabilities and advanced persistent threats, and the creation of NICC in 2024 to strengthen civil-military collaboration.\n\nSeveral themes stood out:\n- The importance of long-term planning, disaster recovery, and resilience.\n- Implementing zero trust principles and aligning risk management.\n- The need for digital literacy at every organizational level.\n- Understanding how critical national infrastructure is mapped by adversaries.\n\nPerhaps most striking was the discussion on AI weaponization, including real incidents where systems like Claude AI were exploited in cyber attacks — a sobering reminder that we're only at the beginning of AI's role in cyber warfare. The core message was clear: effective cyber defense only works when civilian infrastructure and military strategy operate in sync.",
    tags: ["NATO", "Defense", "AI Warfare"],
    images: ["/blog-images/nato-cyber-defense.jpg"]
  },
  {
    id: "belgium-cyber-defense",
    date: "2024-09-10",
    title: "Belgium's National Cyber Defense Ecosystem",
    excerpt: "Insights into how cybersecurity governance is structured at the national level featuring CCB and Belgian Defence.",
    content: "I attended an excellent cybersecurity meetup at Howest that shed light on Belgium's national cyber defense ecosystem. The sessions provided valuable insights into how cybersecurity governance is structured at the national level, featuring perspectives from the Centre for Cybersecurity Belgium (CCB), CyTRIS, and Belgian Defence. We explored everything from threat intelligence frameworks and incident response data to the strategic layering of cyber operations across physical, logical, and social domains. What resonated most with me was the practical angle: seeing how cross-sector collaboration actually functions between government entities, defense organizations, and private industry—and understanding why proactive threat detection paired with robust information sharing has become non-negotiable in today's landscape.",
    tags: ["Security", "Governance", "Belgium"],
    images: ["/blog-images/belgium-cyber-defense.jpg"]
  }
];
