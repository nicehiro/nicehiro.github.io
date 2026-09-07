const allPublications = [
  {
    "title": "Think Proprioceptively: State-Grounded Visual Token Selection for VLA Policies",
    "authors": ["Fangyuan Wang", "Peng Zhou", "Jiaming Qi", "Shipeng Lyu", "Chengyang He", "David Navarro-Alarcon", "Guodong Guo"],
    "venue": "Conference on Robot Learning (CoRL), 2026 · Accepted",
    "thumbnail": "images/thumbs/think-proprio.png?v=20260907-teaser",
    "selected": 1,
    "award": "",
    "links": {"pdf": "https://arxiv.org/abs/2602.06575", "project": "https://nicehiro.github.io/ThinkProprio/"}
  },
  {
    "title": "World Models for Robotic Manipulation: A Survey",
    "authors": ["Fangyuan Wang", "Ziyuan Wang", "Guorui Pei", "Mengshi Zhang", "Canxi Liang", "Jun Hu", "Zhongxuan Li", "Jinsong Wu", "Ning Han", "Zeqing Zhang", "Jiaming Qi", "Hongmin Wu", "Shiyao Zhang", "Pai Zheng", "Jia Pan", "David Navarro-Alarcon", "Sichao Liu", "Peng Zhou"],
    "venue": "SmartBot, e70053, 2026",
    "thumbnail": "images/thumbs/world-model-survey.png",
    "selected": 1,
    "award": "",
    "links": {"pdf": "https://doi.org/10.1002/smb2.70053"}
  },
  {
    "title": "PRIMAL3: Pathfinding via Reinforcement and Imitation Multi-Agent Learning – Leveraging LaCAM3",
    "authors": ["Chengyang He", "Tanishq Duhan", "Gadiel Sznaier Camps", "Fangyuan Wang", "Yuhong Cao", "Jiankai Sun", "Ge Sun", "Mac Schwager", "Guillaume Sartoretti"],
    "venue": "arXiv preprint, 2026",
    "thumbnail": "images/thumbs/primal3.png",
    "selected": 0,
    "award": "",
    "links": {"pdf": "https://arxiv.org/abs/2608.04905"}
  },
  {
    "title": "Enhancing End-user Engagement in Human–Robot Interaction by Performing LLM-driven Expressive Behaviors",
    "authors": ["Shipeng Lyu", "Fangyuan Wang", "Weiwei Lin", "Guodong Guo", "David Navarro-Alarcon"],
    "venue": "ACM Transactions on Human-Robot Interaction, 15(4), 2026",
    "thumbnail": "images/thumbs/expressive-behaviors.png",
    "selected": 0,
    "award": "",
    "links": {"pdf": "https://doi.org/10.1145/3813107"}
  },
  {
    "title": "Cross-Embodiment Human-like Behavior Execution for Humanoid Robots",
    "authors": ["Shipeng Lyu", "Fangyuan Wang", "Weiwei Lin", "Luhao Zhu", "David Navarro-Alarcon", "Guodong Guo"],
    "venue": "Robot Learning, 3(2), 2026",
    "thumbnail": "images/thumbs/hube.png",
    "selected": 0,
    "award": "",
    "links": {"pdf": "https://doi.org/10.55092/rl20260015"}
  },
  {
    "title": "Instruction-Augmented Long-Horizon Planning: Embedding Grounding Mechanisms in Embodied Mobile Manipulation",
    "authors": ["Fangyuan Wang", "Shipeng Lyu", "Peng Zhou", "Anqing Duan", "Guodong Guo", "David Navarro-Alarcon"],
    "venue": "Proceedings of the AAAI Conference on Artificial Intelligence, 2025",
    "thumbnail": "images/thumbs/ialp.png",
    "selected": 1,
    "award": "Oral",
    "links": {"pdf": "https://doi.org/10.1609/aaai.v39i14.33610", "code": "https://github.com/nicehiro/IALP-Code", "project": "https://nicehiro.github.io/IALP/"}
  },
  {
    "title": "Explicit-Implicit Subgoal Planning for Long-Horizon Tasks With Sparse Rewards",
    "authors": ["Fangyuan Wang", "Anqing Duan", "Peng Zhou", "Shengzeng Huo", "Guodong Guo", "Chenguang Yang", "David Navarro-Alarcon"],
    "venue": "IEEE Transactions on Automation Science and Engineering, 2025",
    "thumbnail": "images/thumbs/eisp.png",
    "selected": 1,
    "award": "",
    "links": {"pdf": "https://doi.org/10.1109/TASE.2025.3574162", "project": "https://sites.google.com/view/vaesi/"}
  },
  {
    "title": "Understanding via Exploration: Discovery of Interpretable Features With Deep Reinforcement Learning",
    "authors": ["Jiawen Wei", "Zhifeng Qiu", "Fangyuan Wang", "Wenwei Lin", "Ning Gui", "Weihua Gui"],
    "venue": "IEEE Transactions on Neural Networks and Learning Systems, 2022",
    "thumbnail": "images/thumbs/tnnls.png",
    "selected": 0,
    "award": "",
    "links": {"pdf": "https://doi.org/10.1109/TNNLS.2022.3184956"}
  },
  {
    "title": "Credibility Assessment Based Byzantine-Resilient Decentralized Learning",
    "authors": ["Jian Hou", "Fangyuan Wang†", "Chunling Wei", "Hongyun Huang", "Yong Hu", "Ning Gui"],
    "venue": "IEEE Transactions on Dependable and Secure Computing, 2022",
    "thumbnail": "images/thumbs/credibility.png",
    "selected": 0,
    "award": "",
    "links": {"pdf": "https://doi.org/10.1109/tdsc.2022.3183337", "code": "https://github.com/nicehiro/GAA-Consensus"}
  },
  {
    "title": "An Embedded Feature Selection Framework for Control",
    "authors": ["Jiawen Wei*", "Fangyuan Wang*", "Wanxin Zeng", "Wenwei Lin", "Ning Gui"],
    "venue": "Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining, 2022",
    "thumbnail": "images/thumbs/kdd.png",
    "selected": 0,
    "award": "",
    "links": {"pdf": "https://doi.org/10.1145/3534678.3539290", "code": "https://github.com/G-AILab/DAFSFluid"}
  },
  {
    "title": "Reinforcement Learning Based Multi-Agent Resilient Control: From Deep Neural Networks to an Adaptive Law",
    "authors": ["Jian Hou", "Fangyuan Wang†", "Lili Wang", "Zhiyong Chen"],
    "venue": "Proceedings of the AAAI Conference on Artificial Intelligence, 2021",
    "thumbnail": "images/thumbs/aaai21.png",
    "selected": 0,
    "award": "",
    "links": {"pdf": "https://doi.org/10.1609/aaai.v35i9.16945", "code": "https://github.com/nicehiro/byzantine-resilient"}
  }
];

let showingSelected = true;

document.addEventListener('DOMContentLoaded', function() {
  renderPublications(true);

  const themeButton = document.getElementById('theme-toggle');
  function updateThemeButton() {
    const dark = document.documentElement.dataset.theme === 'dark';
    themeButton.textContent = dark ? '☀ Light mode' : '☾ Dark mode';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  updateThemeButton();
  themeButton.addEventListener('click', () => {
    themePreference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = themePreference;
    try { localStorage.setItem('site-theme', themePreference); } catch {}
    updateThemeButton();
  });
  systemTheme.addEventListener('change', event => {
    if (!themePreference) {
      document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
      updateThemeButton();
    }
  });

  const toggleButton = document.getElementById('toggle-publications');
  if (toggleButton) {
    toggleButton.addEventListener('click', togglePublications);
  }
});

function togglePublications() {
  showingSelected = !showingSelected;
  renderPublications(showingSelected);

  document.getElementById('toggle-publications').textContent = showingSelected ? 'Show All' : 'Show Selected';
  document.getElementById('toggle-header').textContent = showingSelected ? 'Selected Publications' : 'All Publications';
}

function renderPublications(selectedOnly) {
  const container = document.getElementById('publications-container');
  container.innerHTML = '';

  const pubs = selectedOnly ?
    allPublications.filter(pub => pub.selected === 1) :
    allPublications;

  pubs.forEach(pub => container.appendChild(createPublicationElement(pub)));
}

function createPublicationElement(pub) {
  const item = document.createElement('div');
  item.className = 'publication-item';

  if (pub.thumbnail) {
    const thumbnail = document.createElement('button');
    thumbnail.type = 'button';
    thumbnail.setAttribute('aria-label', `View figure: ${pub.title}`);
    thumbnail.className = 'pub-thumbnail';
    thumbnail.onclick = () => openModal(pub.thumbnail, pub.title);
    const img = document.createElement('img');
    img.src = pub.thumbnail;
    img.alt = `${pub.title} thumbnail`;
    thumbnail.appendChild(img);
    const hint = document.createElement('span');
    hint.className = 'figure-hint';
    hint.textContent = 'View figure ↗';
    thumbnail.appendChild(hint);
    item.appendChild(thumbnail);
  } else {
    item.classList.add('publication-text-only');
  }

  const content = document.createElement('div');
  content.className = 'pub-content';

  const title = document.createElement('div');
  title.className = 'pub-title';
  title.textContent = pub.title;
  content.appendChild(title);

  const authors = document.createElement('div');
  authors.className = 'pub-authors';
  authors.innerHTML = pub.authors.map(a =>
    a.includes('Fangyuan Wang') ? `<span class="highlight-name">${a}</span>` : a
  ).join(', ');
  content.appendChild(authors);

  const venueContainer = document.createElement('div');
  venueContainer.className = 'pub-venue-container';
  const venue = document.createElement('div');
  venue.className = 'pub-venue';
  venue.textContent = pub.venue;
  venueContainer.appendChild(venue);
  if (pub.award) {
    const award = document.createElement('div');
    award.className = 'pub-award';
    award.textContent = pub.award;
    venueContainer.appendChild(award);
  }
  content.appendChild(venueContainer);

  if (pub.links) {
    const links = document.createElement('div');
    links.className = 'pub-links';
    if (pub.links.pdf) { const a = document.createElement('a'); a.href = pub.links.pdf; a.textContent = '[PDF]'; links.appendChild(a); }
    if (pub.links.code) { const a = document.createElement('a'); a.href = pub.links.code; a.textContent = '[Code]'; links.appendChild(a); }
    if (pub.links.project) { const a = document.createElement('a'); a.href = pub.links.project; a.textContent = '[Project Page]'; links.appendChild(a); }
    content.appendChild(links);
  }

  item.appendChild(content);
  return item;
}

function openModal(src, title) {
  const modal = document.getElementById('imageModal');
  const image = document.getElementById('modalImage');
  image.src = src;
  image.alt = `Figure from ${title}`;
  document.getElementById('figure-caption').textContent = title;
  document.getElementById('figure-original').href = src;
  modal.showModal();
}

function closeModal() {
  document.getElementById('imageModal').close();
}

document.getElementById('imageModal').addEventListener('click', function(event) {
  if (event.target === this) closeModal();
});
