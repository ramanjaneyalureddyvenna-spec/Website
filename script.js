// Optionally, you can add effects for menu button, navigation, or WhatsApp button.
document.querySelector('.menu-btn').addEventListener('click', function() {
  alert('Menu clicked! (Add navigation overlay here)');
});

// Put this in your script.js

const techData = [
  {
    name: "Flutter",
    icon: "🟦", // use Google's flutter logo SVG if you want for accuracy
    desc: "Google's comprehensive UI toolkit for building natively compiled cross-platform applications.",
    tags: ["cross-platform", "mobile", "frontend"],
    link: "https://flutter.dev/"
  },
  {
    name: "React Native",
    icon: "⚛️",
    desc: "A popular framework for building native mobile apps using React.",
    tags: ["cross-platform", "mobile", "frontend"],
    link: "https://reactnative.dev/"
  },
  {
    name: "React.js",
    icon: "⚛️",
    desc: "A powerful library for building interactive and scalable UIs.",
    tags: ["frontend", "web", "fullstack"],
    link: "https://reactjs.org/"
  },
  {
    name: "Next.js",
    icon: "⏩",
    desc: "A React framework for hybrid static & server rendering.",
    tags: ["frontend", "web", "fullstack"],
    link: "https://nextjs.org/"
  },
  {
    name: "Vue.js",
    icon: "🟩",
    desc: "A versatile framework for building user interfaces.",
    tags: ["frontend", "web", "fullstack"],
    link: "https://vuejs.org/"
  },
  {
    name: "Angular",
    icon: "🅰️",
    desc: "A robust platform for building web applications.",
    tags: ["frontend", "web", "fullstack"],
    link: "https://angular.io/"
  },
  {
    name: "Tailwind CSS",
    icon: "🌬️",
    desc: "A modern utility-first CSS framework for rapid UI development.",
    tags: ["styling", "frontend"],
    link: "https://tailwindcss.com/"
  },
  {
    name: "Node.js",
    icon: "🟩",
    desc: "A JavaScript runtime for building scalable backend applications.",
    tags: ["backend", "fullstack"],
    link: "https://nodejs.org/"
  },
  {
    name: "PHP",
    icon: "🐘",
    desc: "A widely-used scripting language for backend web development.",
    tags: ["backend", "fullstack"],
    link: "https://www.php.net/"
  },
  {
    name: "Django",
    icon: "🧩",
    desc: "A high-level Python web framework for rapid development.",
    tags: ["backend", "fullstack"],
    link: "https://www.djangoproject.com/"
  },
];

const filterMap = {
  all: techData.map(t => t.name),
  cross: ["Flutter", "React Native"],
  mobile: ["Flutter", "React Native"],
  frontend: ["Flutter", "React Native", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
  fullstack: techData.map(t => t.name),
  web: ["React.js", "Next.js", "Vue.js", "Angular"],
  backend: ["Node.js", "PHP", "Django"],
  styling: ["Tailwind CSS"],
};

function renderCards(filter) {
  const cardList = document.getElementById('techCardList');
  cardList.innerHTML = '';
  const showList = filterMap[filter];
  techData
    .filter(tech => showList.includes(tech.name))
    .forEach(tech => {
      const tags = tech.tags.map(t => `<span class="card-tag">${t}</span>`).join('');
      cardList.innerHTML += `
        <div class="tech-card">
          <div class="card-header">
            <span class="card-icon">${tech.icon}</span>
            <span class="card-title">${tech.name}</span>
          </div>
          <div class="card-desc">${tech.desc}</div>
          <div class="card-tags">${tags}</div>
          <a href="${tech.link}" target="_blank" class="card-link">Explore &rarr;</a>
        </div>
      `;
    });
}

// Setup filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const selected = btn.getAttribute('data-filter');
    renderCards(selected);
  });
});

// Initial render
renderCards('all');
