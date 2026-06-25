// MA Cuisine Chatbot
const menuItems = [
  { id: 1, name: "Beignets Sucrés", price: 5, emoji: "🥟", desc: "10 pièces" },
  { id: 2, name: "Beignets Salés", price: 6, emoji: "🥟", desc: "8 pièces" },
  { id: 3, name: "Beignets aux Vermicelles", price: 7, emoji: "🥟", desc: "6 pièces" },
  { id: 4, name: "Jus d'Hibiscus", price: 5, emoji: "🍹", desc: "50cl" },
  { id: 5, name: "Jus de Gingembre", price: 5, emoji: "🍹", desc: "50cl" },
  { id: 6, name: "Box Événement", price: 40, emoji: "📦", desc: "Assortiment + jus" }
];

let cart = [];
let showCartView = false;

const welcomeMessage = `Bienvenue chez M.A Cuisine ! 👋

Je suis Emma, votre assistante. Comment puis-je vous aider ?

📋 Pour voir notre carte, tapez "menu"
🛒 Pour commander, tapez "commander"
📅 Pour les événements, tapez "événements"
📍 Notre adresse, tapez "contact"
🚴 Livraison Uber Eats / Deliveroo`;

function initChatbot() {
  const existingFab = document.getElementById('chatbotFab');
  if (existingFab) return;
  
  // Add chatbot HTML
  const chatbotHTML = `
    <div class="chatbot-fab" id="chatbotFab" onclick="toggleChatbot()">
      <span class="chat-icon">💬</span>
      <span class="close-icon">✕</span>
    </div>
    <div class="chatbot-window" id="chatbotWindow">
      <button class="chatbot-cart-toggle" id="cartToggle" onclick="toggleCartView()">
        🛒 Panier <span id="cartCount">0</span>
      </button>
      <div class="chatbot-header">
        <div class="chatbot-avatar">👩🏾‍🍳</div>
        <div class="chatbot-info">
          <h3>Emma - M.A Cuisine</h3>
          <span><span class="online-dot"></span> En ligne</span>
        </div>
        <button class="chatbot-close" onclick="toggleChatbot()">✕</button>
      </div>
      <div class="chatbot-messages" id="chatMessages"></div>
      <div class="chatbot-cart" id="chatCart" style="display: none;">
        <div id="cartItems"></div>
        <div class="cart-total">
          <span>Total</span>
          <span class="cart-total-price" id="cartTotal">0€</span>
        </div>
        <div class="cart-actions">
          <button class="cart-btn secondary" onclick="toggleCartView()">← Retour</button>
          <button class="cart-btn primary" onclick="confirmOrder()">Commander ✓</button>
        </div>
      </div>
      <div class="chatbot-input" id="chatInputArea">
        <input type="text" id="chatInput" placeholder="Tapez votre message..." onkeypress="handleChatKeypress(event)" />
        <button class="send-btn" id="sendBtn" onclick="sendMessage()">➤</button>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  updateCartDisplay();
}

function toggleChatbot() {
  const fab = document.getElementById('chatbotFab');
  const window = document.getElementById('chatbotWindow');
  fab.classList.toggle('open');
  window.classList.toggle('open');
  
  if (window.classList.contains('open') && document.getElementById('chatMessages').children.length === 0) {
    addMessage(welcomeMessage, 'bot');
  }
}

function toggleCartView() {
  showCartView = !showCartView;
  const cartDiv = document.getElementById('chatCart');
  const inputArea = document.getElementById('chatInputArea');
  const messagesDiv = document.getElementById('chatMessages');
  
  if (showCartView) {
    cartDiv.style.display = 'block';
    inputArea.style.display = 'none';
    messagesDiv.style.display = 'none';
    updateCartDisplay();
  } else {
    cartDiv.style.display = 'none';
    inputArea.style.display = 'flex';
    messagesDiv.style.display = 'flex';
  }
}

function addMessage(text, sender) {
  const messagesDiv = document.getElementById('chatMessages');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message ' + sender;
  
  const now = new Date();
  const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
  
  msgDiv.innerHTML = text + '<div class="message-time">' + time + '</div>';
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function addQuickButtons(buttons) {
  const messagesDiv = document.getElementById('chatMessages');
  const lastMsg = messagesDiv.lastElementChild;
  
  const quickDiv = document.createElement('div');
  quickDiv.className = 'quick-actions';
  
  buttons.forEach(btn => {
    const btnEl = document.createElement('button');
    btnEl.className = 'quick-btn';
    btnEl.textContent = btn.text;
    btnEl.onclick = () => {
      document.getElementById('chatInput').value = btn.action;
      sendMessage();
    };
    quickDiv.appendChild(btnEl);
  });
  
  lastMsg.appendChild(quickDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function handleChatKeypress(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  
  addMessage(text, 'user');
  input.value = '';
  
  setTimeout(() => {
    processMessage(text.toLowerCase());
  }, 400);
}

function processMessage(msg) {
  if (msg.includes('menu') || msg.includes('carte') || msg.includes('voir')) {
    const menuText = menuItems.map(item => 
      item.emoji + ' ' + item.name + ' — ' + item.price + '€ (' + item.desc + ')'
    ).join('\n');
    addMessage('📋 Notre carte:\n\n' + menuText + '\n\nTapez "commander" pour ajouter au panier !', 'bot');
    addQuickButtons([
      { text: '🛒 Commander', action: 'commander' },
      { text: '📍 Contact', action: 'contact' },
      { text: '🚴 Livraison', action: 'livraison' }
    ]);
  }
  else if (msg.includes('commander') || msg.includes('commande')) {
    showCartView = true;
    toggleCartView();
    addMessage('🛒 Mode commande activé !\n\nAjoutez des articles à votre panier.', 'bot');
    updateCartDisplay();
  }
  else if (msg.includes('panier')) {
    if (cart.length === 0) {
      addMessage('Votre panier est vide. Tapez "commander" pour voir nos produits !', 'bot');
    } else {
      showCartView = true;
      toggleCartView();
      updateCartDisplay();
    }
  }
  else if (msg.includes('livraison') || msg.includes('livre')) {
    addMessage('🚴 **Livraison disponible :**\n\n• Uber Eats\n• Deliveroo\n• Commande directe (dès 40€)\n\nCommande minimum : 40€\nZone de livraison : Paris et banlieue', 'bot');
    addQuickButtons([
      { text: '🛒 Commander', action: 'commander' },
      { text: '📋 Voir carte', action: 'menu' }
    ]);
  }
  else if (msg.includes('contact')) {
    addMessage('📍 **M.A Cuisine**\n\n📧 contact@macuisine.fr\n📱 Commandes : via l\'app\n\n📅 Marchés & Salons : voir section Événements', 'bot');
    addQuickButtons([
      { text: '📅 Événements', action: 'événements' },
      { text: '📋 Carte', action: 'menu' }
    ]);
  }
  else if (msg.includes('événement') || msg.includes('événements')) {
    addMessage('📅 **Prochains événements :**\n\n• 29 Mars — Marché de Vincennes\n• 5 Avril — Salon Africain Paris\n• 12 Avril — Marché des Lilas\n\nPour un événement privé, contactez-nous !', 'bot');
    addQuickButtons([
      { text: '📧 Contacter', action: 'contact' },
      { text: '📋 Carte', action: 'menu' }
    ]);
  }
  else if (msg.includes('gluten') || msg.includes('sans gluten') || msg.includes('allerg')) {
    addMessage('🌿 **Options sans gluten :**\n\nOui ! Nous proposons des beignets sans gluten.\n\nPrécisez-le lors de votre commande.', 'bot');
    addQuickButtons([
      { text: '🛒 Commander', action: 'commander' }
    ]);
  }
  else if (msg.includes('prix') || msg.includes('tarif') || msg.includes('combien')) {
    addMessage('💰 **Tarifs :**\n\n• Beignets sucrés : 5€\n• Beignets salés : 6€\n• Beignets vermicelles : 7€\n• Jus exotiques : 5€\n• Box événement : 40€+\n\n📦 Livraison dès 40€ de commande', 'bot');
    addQuickButtons([
      { text: '🛒 Commander', action: 'commander' }
    ]);
  }
  else if (msg.includes('emma') || msg.includes('histoire')) {
    addMessage('👩🏾‍🍳 **Emma & M.A Cuisine**\n\nDiplômée d\'un CAP Cuisine, Emma partage sa passion pour la gastronomie africaine. Ses beignets sont préparés avec amour, comme ceux de grand-mère !\n\n💚 Artisanal · Fait maison · Passion', 'bot');
    addQuickButtons([
      { text: '📋 Voir carte', action: 'menu' },
      { text: '📅 Événements', action: 'événements' }
    ]);
  }
  else if (msg.includes('merci') || msg.includes('thanks')) {
    addMessage('Avec plaisir ! 😊\n\nN\'hésitez pas si vous avez d\'autres questions. Bonne journée !', 'bot');
  }
  else {
    addMessage('Je ne suis pas sûre de comprendre. 🤔\n\nTapez "menu" pour voir nos produits ou "commander" pour passer une commande.', 'bot');
    addQuickButtons([
      { text: '📋 Menu', action: 'menu' },
      { text: '🛒 Commander', action: 'commander' },
      { text: '📍 Contact', action: 'contact' }
    ]);
  }
}

function updateCartDisplay() {
  const cartItemsDiv = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const cartToggle = document.getElementById('cartToggle');
  
  if (!cartItemsDiv || !cartCount) return;
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  cartCount.textContent = totalItems;
  cartTotal.textContent = totalPrice + '€';
  
  if (totalItems > 0) {
    cartToggle.classList.add('visible');
  } else {
    cartToggle.classList.remove('visible');
  }
  
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<div class="cart-empty">Votre panier est vide</div>';
  } else {
    cartItemsDiv.innerHTML = cart.map(item => 
      '<div class="cart-item">' +
        '<span class="cart-item-name">' + item.emoji + ' ' + item.name + '</span>' +
        '<span class="cart-item-qty">x' + item.quantity + '</span>' +
        '<span class="cart-item-price">' + (item.price * item.quantity) + '€</span>' +
        '<span class="cart-item-remove" onclick="removeFromCart(' + item.id + ')">✕</span>' +
      '</div>'
    ).join('');
  }
}

function addToCart(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;
  
  const existing = cart.find(i => i.id === itemId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  
  updateCartDisplay();
  addMessage('✓ ' + item.emoji + ' ' + item.name + ' ajouté au panier !', 'bot');
}

function removeFromCart(itemId) {
  const existing = cart.find(i => i.id === itemId);
  if (existing) {
    if (existing.quantity > 1) {
      existing.quantity--;
    } else {
      cart = cart.filter(i => i.id !== itemId);
    }
  }
  updateCartDisplay();
}

function confirmOrder() {
  if (cart.length === 0) {
    addMessage('Votre panier est vide. Tapez "commander" pour ajouter des articles !', 'bot');
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemsList = cart.map(item => item.emoji + ' ' + item.name + ' x' + item.quantity + ' — ' + (item.price * item.quantity) + '€').join('\n');
  
  addMessage('✅ **Commande confirmée !**\n\n' + itemsList + '\n\n💰 **Total : ' + total + '€**\n\nMerci ! Un membre de notre équipe vous contactera pour confirmer.', 'bot');
  
  cart = [];
  updateCartDisplay();
  toggleCartView();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatbot);
} else {
  initChatbot();
}
