const allPublications = [
  {
    "title": "Think Proprioceptively: Embodied Visual Reasoning for VLA Manipulation",
    "authors": ["Fangyuan Wang", "Peng Zhou", "Jiaming Qi", "Shipeng Lyu", "David Navarro-Alarcon", "Guodong Guo"],
    "venue": "arXiv preprint, 2026",
    "thumbnail": "images/thumbs/think-proprio.png",
    "selected": 1,
    "award": "",
    "links": { "pdf": "https://arxiv.org/abs/2602.06575", "project": "https://nicehiro.github.io/ThinkProprio/" }
  },
  {
    "title": "Instruction-Augmented Long-Horizon Planning: Embedding Grounding Mechanisms in Embodied Mobile Manipulation",
    "authors": ["Fangyuan Wang", "Shipeng Lyu", "Peng Zhou", "Anqing Duan", "Guodong Guo", "David Navarro-Alarcon"],
    "venue": "Proceedings of the AAAI Conference on Artificial Intelligence, 2025",
    "thumbnail": "images/thumbs/ialp.png",
    "selected": 1,
    "award": "Oral",
    "links": { "pdf": "https://doi.org/10.1609/aaai.v39i14.33610", "code": "https://github.com/nicehiro/IALP-Code", "project": "https://nicehiro.github.io/IALP/" }
  },
  {
    "title": "Explicit-Implicit Subgoal Planning for Long-Horizon Tasks With Sparse Rewards",
    "authors": ["Fangyuan Wang", "Anqing Duan", "Peng Zhou", "Shengzeng Huo", "Guodong Guo", "Chenguang Yang", "David Navarro-Alarcon"],
    "venue": "IEEE Transactions on Automation Science and Engineering, 2025",
    "thumbnail": "images/thumbs/eisp.png",
    "selected": 1,
    "award": "",
    "links": { "pdf": "https://doi.org/10.1109/TASE.2025.3574162", "project": "https://sites.google.com/view/vaesi/" }
  },
  {
    "title": "HuBE: Cross-Embodiment Human-like Behavior Execution for Humanoid Robots",
    "authors": ["Shipeng Lyu*", "Fangyuan Wang*", "Weiwei Lin", "Luhao Zhu", "David Navarro-Alarcon", "Guodong Guo"],
    "venue": "Robot Learning Journal, 2025",
    "thumbnail": "images/thumbs/hube.png",
    "selected": 1,
    "award": "",
    "links": { "pdf": "https://arxiv.org/abs/2508.19002" }
  },
  {
    "title": "Understanding via Exploration: Discovery of Interpretable Features With Deep Reinforcement Learning",
    "authors": ["Jiawen Wei", "Zhifeng Qiu", "Fangyuan Wang", "Wenwei Lin", "Ning Gui", "Weihua Gui"],
    "venue": "IEEE Transactions on Neural Networks and Learning Systems, 2022",
    "thumbnail": "images/thumbs/tnnls.png",
    "selected": 0,
    "award": "",
    "links": { "pdf": "https://doi.org/10.1109/TNNLS.2022.3184956" }
  },
  {
    "title": "Credibility Assessment Based Byzantine-Resilient Decentralized Learning",
    "authors": ["Jian Hou", "Fangyuan Wang\u2020", "Chunling Wei", "Hongyun Huang", "Yong Hu", "Ning Gui"],
    "venue": "IEEE Transactions on Dependable and Secure Computing, 2022",
    "thumbnail": "images/thumbs/credibility.png",
    "selected": 0,
    "award": "",
    "links": { "pdf": "https://doi.org/10.1109/tdsc.2022.3183337", "code": "https://github.com/nicehiro/GAA-Consensus" }
  },
  {
    "title": "An Embedded Feature Selection Framework for Control",
    "authors": ["Jiawen Wei*", "Fangyuan Wang*", "Wanxin Zeng", "Wenwei Lin", "Ning Gui"],
    "venue": "Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining, 2022",
    "thumbnail": "images/thumbs/kdd.png",
    "selected": 0,
    "award": "",
    "links": { "pdf": "https://doi.org/10.1145/3534678.3539290", "code": "https://github.com/G-AILab/DAFSFluid" }
  },
  {
    "title": "Reinforcement Learning Based Multi-Agent Resilient Control: From Deep Neural Networks to an Adaptive Law",
    "authors": ["Jian Hou", "Fangyuan Wang\u2020", "Lili Wang", "Zhiyong Chen"],
    "venue": "Proceedings of the AAAI Conference on Artificial Intelligence, 2021",
    "thumbnail": "images/thumbs/aaai21.png",
    "selected": 0,
    "award": "",
    "links": { "pdf": "https://doi.org/10.1609/aaai.v35i9.16945", "code": "https://github.com/nicehiro/byzantine-resilient" }
  }
];

let showingSelected = true;

document.addEventListener('DOMContentLoaded', function() {
  renderPublications(true);

  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.1}s`;
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

  const thumbnail = document.createElement('div');
  thumbnail.className = 'pub-thumbnail';
  thumbnail.onclick = () => openModal(pub.thumbnail);
  const img = document.createElement('img');
  img.src = pub.thumbnail;
  img.alt = `${pub.title} thumbnail`;
  thumbnail.appendChild(img);

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

  item.appendChild(thumbnail);
  item.appendChild(content);
  return item;
}

function openModal(src) {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('show'), 10);
  document.getElementById('modalImage').src = src;
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
}

window.onclick = function(e) {
  if (e.target === document.getElementById('imageModal')) closeModal();
};
