const { foods } = window.foodQuestData;

const badges = [
  {
    id: "first-bite",
    name: "First Bite",
    mark: "01",
    description: "Complete your first food quest.",
    isUnlocked: () => completedFoodIds.size >= 1
  },
  {
    id: "tokyo-taster",
    name: "Tokyo Taster",
    mark: "TY",
    description: "Complete all Tokyo quests.",
    isUnlocked: () => isRegionComplete("Tokyo")
  },
  {
    id: "kansai-street",
    name: "Kansai Street Hunter",
    mark: "KS",
    description: "Complete both Osaka street food quests.",
    isUnlocked: () => hasCompleted("takoyaki") && hasCompleted("okonomiyaki")
  },
  {
    id: "noodle-chaser",
    name: "Noodle Chaser",
    mark: "ND",
    description: "Complete every noodle quest.",
    isUnlocked: () => isTypeComplete("Noodles")
  },
  {
    id: "seafood-scout",
    name: "Seafood Scout",
    mark: "SF",
    description: "Complete every seafood quest.",
    isUnlocked: () => isTypeComplete("Seafood")
  },
  {
    id: "food-master",
    name: "Food Quest Master",
    mark: "FM",
    description: "Complete the whole encyclopedia.",
    isUnlocked: () => completedFoodIds.size === foods.length
  }
];

const translations = {
  en: {
    ui: {
      "nav.map": "Map",
      "nav.quests": "Quests",
      "nav.badges": "Badges",
      "nav.saved": "Saved",
      "nav.collection": "Collection",
      "hero.eyebrow": "Gourmet RPG for travelers",
      "hero.title": "Explore Japan, one dish at a time.",
      "hero.copy": "Complete regional food quests, earn XP, and fill your Japanese food encyclopedia while traveling.",
      "hero.cta": "Start Quest",
      "dashboard.completed": "Completed",
      "dashboard.rank": "Rank",
      "dashboard.want": "Want to Try",
      "dashboard.save": "Save",
      "map.eyebrow": "Quest Map",
      "map.title": "Choose a region",
      "quests.eyebrow": "Food Quests",
      "quests.title": "Complete dishes",
      "filters.search": "Search",
      "filters.type": "Type",
      "badges.eyebrow": "Achievements",
      "badges.title": "Quest badges",
      "saved.eyebrow": "Travel Plan",
      "saved.title": "Saved for later",
      "collection.eyebrow": "Food Encyclopedia",
      "collection.title": "Your collection",
      "actions.reset": "Reset Quest",
      "actions.close": "Close",
      "rank.curiousTraveler": "Curious Traveler",
      "rank.foodAdventurer": "Food Adventurer",
      "rank.streetFoodHunter": "Street Food Hunter",
      "rank.regionalGourmet": "Regional Gourmet"
    },
    labels: {
      all: "All",
      allTypes: "All types",
      searchPlaceholder: "Try ramen, Tokyo, seafood...",
      showing: "Showing",
      questSingular: "quest",
      questPlural: "quests",
      noQuests: "No quests found. Try another region, type, or keyword.",
      unknownDish: "Unknown Dish",
      unlockHint: "Complete the quest to unlock it.",
      wantToTry: "Want to Try",
      savedToTry: "Saved to Try",
      completeQuest: "Complete Quest",
      completed: "Completed",
      viewDetail: "View Detail",
      detail: "Detail",
      difficulty: "Difficulty",
      reward: "Reward",
      orderPhrase: "Order phrase",
      allergyNote: "Allergy note",
      travelTip: "Travel tip",
      quest: "Quest",
      noSaved: "No saved dishes yet. Add Want to Try from a quest card.",
      dishesCompleted: "dishes completed"
    },
    regions: {
      Tokyo: "Tokyo",
      Osaka: "Osaka",
      Kyoto: "Kyoto",
      Fukuoka: "Fukuoka",
      Hokkaido: "Hokkaido",
      Nagoya: "Nagoya",
      Okinawa: "Okinawa",
      Hiroshima: "Hiroshima",
      Sendai: "Sendai"
    },
    types: {
      Noodles: "Noodles",
      Seafood: "Seafood",
      "Street food": "Street food",
      Dessert: "Dessert",
      Vegetarian: "Vegetarian"
    },
    difficulty: {
      Easy: "Easy",
      Normal: "Normal",
      Hard: "Hard"
    }
  },
  ja: {
    ui: {
      "nav.map": "マップ",
      "nav.quests": "クエスト",
      "nav.badges": "バッジ",
      "nav.saved": "保存リスト",
      "nav.collection": "図鑑",
      "hero.eyebrow": "旅行者向けグルメRPG",
      "hero.title": "Explore Japan, one dish at a time.",
      "hero.copy": "ご当地グルメのクエストを達成してXPを獲得し、日本食図鑑を埋めていく旅行アプリです。",
      "hero.cta": "Start Quest",
      "dashboard.completed": "達成数",
      "dashboard.rank": "ランク",
      "dashboard.want": "食べたい！",
      "dashboard.save": "保存",
      "map.eyebrow": "クエストマップ",
      "map.title": "Choose a region",
      "quests.eyebrow": "フードクエスト",
      "quests.title": "Complete dishes",
      "filters.search": "検索",
      "filters.type": "ジャンル",
      "badges.eyebrow": "実績",
      "badges.title": "Quest badges",
      "saved.eyebrow": "旅行プラン",
      "saved.title": "Saved for later",
      "collection.eyebrow": "日本食図鑑",
      "collection.title": "Your collection",
      "actions.reset": "リセット",
      "actions.close": "閉じる",
      "rank.curiousTraveler": "好奇心ある旅人",
      "rank.foodAdventurer": "フード冒険者",
      "rank.streetFoodHunter": "屋台ハンター",
      "rank.regionalGourmet": "ご当地グルメ通"
    },
    labels: {
      all: "すべて",
      allTypes: "すべてのジャンル",
      searchPlaceholder: "ラーメン、東京、海鮮など...",
      showing: "表示中",
      questSingular: "件",
      questPlural: "件",
      noQuests: "クエストが見つかりません。地域、ジャンル、キーワードを変えてみてください。",
      unknownDish: "未発見の料理",
      unlockHint: "クエストを達成すると解放されます。",
      wantToTry: "食べたい",
      savedToTry: "保存済み",
      completeQuest: "達成する",
      completed: "達成済み",
      viewDetail: "詳細を見る",
      detail: "詳細",
      difficulty: "難易度",
      reward: "報酬",
      orderPhrase: "注文フレーズ",
      allergyNote: "アレルギー注意",
      travelTip: "旅行Tips",
      quest: "クエスト",
      noSaved: "保存した料理はまだありません。料理カードから「食べたい！」を押してください。",
      dishesCompleted: "品達成"
    },
    regions: {
      Tokyo: "東京",
      Osaka: "大阪",
      Kyoto: "京都",
      Fukuoka: "福岡",
      Hokkaido: "北海道",
      Nagoya: "名古屋",
      Okinawa: "沖縄",
      Hiroshima: "広島",
      Sendai: "仙台"
    },
    types: {
      Noodles: "麺類",
      Seafood: "海鮮",
      "Street food": "屋台グルメ",
      Dessert: "スイーツ",
      Vegetarian: "ベジタリアン"
    },
    difficulty: {
      Easy: "かんたん",
      Normal: "ふつう",
      Hard: "挑戦"
    },
    foods: {
      ramen: {
        name: "ラーメン",
        description: "地域ごとに個性がある、濃厚な麺料理クエスト。",
        allergy: "小麦、醤油、卵を含む場合があります",
        tip: "多くのラーメン店では入口付近に食券機があります。"
      },
      sushi: {
        name: "寿司",
        description: "新鮮な魚と酢飯を味わう、日本定番のクエスト。",
        allergy: "魚、甲殻類、醤油",
        tip: "カウンター寿司では、1貫や2貫ずつ注文すると楽しみやすいです。"
      },
      takoyaki: {
        name: "たこ焼き",
        description: "外は香ばしく中はとろっとした、大阪らしい一品。",
        allergy: "小麦、卵、たこ",
        tip: "中がとても熱いことが多いので、少し待ってから食べましょう。"
      },
      okonomiyaki: {
        name: "お好み焼き",
        description: "ソースと具材を楽しむ、鉄板グルメクエスト。",
        allergy: "小麦、卵、海鮮を含む場合があります",
        tip: "店員さんが焼いてくれる店と、自分で焼く店があります。"
      },
      matcha: {
        name: "抹茶スイーツ",
        description: "抹茶の香りを楽しむ、京都らしいデザートクエスト。",
        allergy: "乳、小麦を含む場合があります",
        tip: "京都のカフェでは季節限定の抹茶パフェや和菓子セットが人気です。"
      },
      yudofu: {
        name: "湯豆腐",
        description: "寺院文化を感じる、やさしい豆腐料理クエスト。",
        allergy: "大豆",
        tip: "やさしい料理ですが、タレに魚介だしが含まれる場合があります。"
      },
      "hakata-ramen": {
        name: "博多ラーメン",
        description: "福岡の屋台文化から広がった、とんこつラーメンクエスト。",
        allergy: "小麦、豚肉、醤油",
        tip: "博多では替え玉で麺を追加できます。"
      },
      "seafood-bowl": {
        name: "海鮮丼",
        description: "北海道の新鮮な海の幸をのせた丼クエスト。",
        allergy: "魚、甲殻類、魚卵",
        tip: "北海道では朝市で食べる海鮮丼もおすすめです。"
      },
      "miso-katsu": {
        name: "味噌カツ",
        description: "赤味噌ソースをかけた名古屋名物のカツクエスト。",
        allergy: "小麦、豚肉、大豆",
        tip: "名古屋の赤味噌ソースは濃厚で甘みがあり、普通のとんかつソースとは違います。"
      },
      hitsumabushi: {
        name: "ひつまぶし",
        description: "名古屋らしい食べ方を楽しむ、うなぎご飯クエスト。",
        allergy: "魚、醤油、小麦を含む場合があります",
        tip: "そのまま、薬味あり、だし茶漬けの3段階で楽しめます。"
      },
      "okinawa-soba": {
        name: "沖縄そば",
        description: "豚肉とだしの味わいがある、沖縄の麺料理クエスト。",
        allergy: "小麦、豚肉、醤油",
        tip: "名前はそばですが、そば粉ではなく小麦の麺を使うことが多いです。"
      },
      "goya-champuru": {
        name: "ゴーヤチャンプルー",
        description: "ゴーヤ、豆腐、卵を炒めた沖縄の家庭料理クエスト。",
        allergy: "卵、大豆、豚肉を含む場合があります",
        tip: "ゴーヤは苦みがあるので、少し冒険したい旅行者におすすめです。"
      },
      "hiroshima-okonomiyaki": {
        name: "広島お好み焼き",
        description: "キャベツ、ソース、麺を重ねて楽しむ広島クエスト。",
        allergy: "小麦、卵、海鮮を含む場合があります",
        tip: "広島風は生地に混ぜるのではなく、具材を重ねて焼くのが特徴です。"
      },
      gyutan: {
        name: "牛タン",
        description: "香ばしく焼いた牛タンを味わう仙台クエスト。",
        allergy: "牛肉、醤油を含む場合があります",
        tip: "仙台の牛タンは定食で、ご飯やスープと一緒に出ることが多いです。"
      }
    },
    badges: {
      "first-bite": { name: "はじめの一口", description: "最初のフードクエストを達成する" },
      "tokyo-taster": { name: "東京テイスター", description: "東京のクエストをすべて達成する" },
      "kansai-street": { name: "関西ストリートハンター", description: "大阪の屋台グルメを両方達成する" },
      "noodle-chaser": { name: "麺チェイサー", description: "麺類クエストをすべて達成する" },
      "seafood-scout": { name: "海鮮スカウト", description: "海鮮クエストをすべて達成する" },
      "food-master": { name: "フードクエストマスター", description: "図鑑をすべてコンプリートする" }
    }
  }
};

const completedStorageKey = "foodQuestJapanCompleted";
const wantStorageKey = "foodQuestJapanWant";
const languageStorageKey = "foodQuestJapanLanguage";
const savedCompletedFoodIds = readSavedIds(completedStorageKey);
const savedWantFoodIds = readSavedIds(wantStorageKey);
const completedFoodIds = new Set(savedCompletedFoodIds);
const wantFoodIds = new Set(savedWantFoodIds);
completedFoodIds.forEach((foodId) => wantFoodIds.delete(foodId));
let currentRegion = "all";
let currentType = "all";
let searchText = "";
let currentLanguage = localStorage.getItem(languageStorageKey) || "en";
if (!translations[currentLanguage]) {
  currentLanguage = "en";
}

const questGrid = document.querySelector("#questGrid");
const collectionGrid = document.querySelector("#collectionGrid");
const badgeGrid = document.querySelector("#badgeGrid");
const savedList = document.querySelector("#savedList");
const questSearch = document.querySelector("#questSearch");
const typeFilter = document.querySelector("#typeFilter");
const resultCount = document.querySelector("#resultCount");
const xpValue = document.querySelector("#xpValue");
const completedValue = document.querySelector("#completedValue");
const rankValue = document.querySelector("#rankValue");
const wantValue = document.querySelector("#wantValue");
const heroProgress = document.querySelector("#heroProgress");
const heroProgressBar = document.querySelector("#heroProgressBar");
const resetButton = document.querySelector("#resetButton");
const foodModal = document.querySelector("#foodModal");
const modalContent = document.querySelector("#modalContent");
const languageButtons = document.querySelectorAll(".language-button");

function readSavedIds(key) {
  try {
    const savedIds = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(savedIds) ? savedIds : [];
  } catch {
    return [];
  }
}

function saveProgress() {
  localStorage.setItem(completedStorageKey, JSON.stringify([...completedFoodIds]));
  localStorage.setItem(wantStorageKey, JSON.stringify([...wantFoodIds]));
}

function t(key) {
  return translations[currentLanguage].ui[key] || translations.en.ui[key] || key;
}

function label(key) {
  return translations[currentLanguage].labels[key] || translations.en.labels[key] || key;
}

function localizeFood(food, field) {
  return translations[currentLanguage].foods?.[food.id]?.[field] || food[field];
}

function localizeBadge(badge, field) {
  return translations[currentLanguage].badges?.[badge.id]?.[field] || badge[field];
}

function localizeRegion(region) {
  return translations[currentLanguage].regions[region] || region;
}

function localizeType(type) {
  return translations[currentLanguage].types[type] || type;
}

function localizeDifficulty(difficulty) {
  return translations[currentLanguage].difficulty[difficulty] || difficulty;
}

function updateStaticText() {
  document.documentElement.lang = currentLanguage === "ja" ? "ja" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  questSearch.placeholder = label("searchPlaceholder");

  document.querySelectorAll(".region-button, .map-pin").forEach((button) => {
    button.textContent = button.dataset.region === "all" ? label("all") : localizeRegion(button.dataset.region);
  });

  typeFilter.innerHTML = `
    <option value="all">${label("allTypes")}</option>
    <option value="Noodles">${localizeType("Noodles")}</option>
    <option value="Seafood">${localizeType("Seafood")}</option>
    <option value="Street food">${localizeType("Street food")}</option>
    <option value="Dessert">${localizeType("Dessert")}</option>
    <option value="Vegetarian">${localizeType("Vegetarian")}</option>
  `;
  typeFilter.value = currentType;

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.language === currentLanguage);
  });
}

function getTotalXp() {
  return foods
    .filter((food) => completedFoodIds.has(food.id))
    .reduce((total, food) => total + food.xp, 0);
}

function hasCompleted(foodId) {
  return completedFoodIds.has(foodId);
}

function isRegionComplete(region) {
  const regionFoods = foods.filter((food) => food.region === region);
  return regionFoods.every((food) => completedFoodIds.has(food.id));
}

function isTypeComplete(type) {
  const typeFoods = foods.filter((food) => food.type === type);
  return typeFoods.every((food) => completedFoodIds.has(food.id));
}

function getUnlockedBadgeCount() {
  return badges.filter((badge) => badge.isUnlocked()).length;
}

function getRankKey(xp) {
  if (xp >= 250) return "rank.regionalGourmet";
  if (xp >= 120) return "rank.streetFoodHunter";
  if (xp >= 40) return "rank.foodAdventurer";
  return "rank.curiousTraveler";
}

function updateStatus() {
  const completedCount = completedFoodIds.size;
  const totalXp = getTotalXp();
  const progressPercent = (completedCount / foods.length) * 100;

  xpValue.textContent = totalXp;
  completedValue.textContent = `${completedCount} / ${foods.length}`;
  rankValue.textContent = t(getRankKey(totalXp));
  heroProgress.textContent = `${completedCount} / ${foods.length} ${label("dishesCompleted")}`;
  heroProgressBar.style.width = `${progressPercent}%`;
  wantValue.textContent = wantFoodIds.size;
}

function createQuestCard(food) {
  const isCompleted = completedFoodIds.has(food.id);
  const isWanted = wantFoodIds.has(food.id);

  return `
    <article class="quest-card">
      <div class="food-image food-${food.visual}" aria-hidden="true">
        <span>${food.mark}</span>
      </div>
      <div class="card-body">
        <h3>${localizeFood(food, "name")}</h3>
        <p class="meta">${localizeRegion(food.region)} / ${localizeType(food.type)}</p>
        <p class="meta">${localizeFood(food, "description")}</p>
        <div class="tag-row">
          <span class="xp-pill">+${food.xp} XP</span>
          <span class="difficulty-pill">${localizeDifficulty(food.difficulty)}</span>
        </div>
        <p class="travel-note">${localizeFood(food, "allergy")}</p>
        <button class="detail-button" data-detail-id="${food.id}" type="button">${label("viewDetail")}</button>
        ${isCompleted ? "" : `
          <button class="want-button ${isWanted ? "wanted" : ""}" data-want-id="${food.id}" type="button">
            ${isWanted ? label("savedToTry") : label("wantToTry")}
          </button>
        `}
        <button class="quest-button ${isCompleted ? "completed" : ""}" data-food-id="${food.id}">
          ${isCompleted ? label("completed") : label("completeQuest")}
        </button>
      </div>
    </article>
  `;
}

function openFoodModal(food) {
  const isCompleted = completedFoodIds.has(food.id);
  const isWanted = wantFoodIds.has(food.id);

  modalContent.innerHTML = `
    <div class="modal-visual food-image food-${food.visual}" aria-hidden="true">
      <span>${food.mark}</span>
    </div>
    <div class="modal-body">
      <p class="eyebrow">${localizeRegion(food.region)} ${label("quest")}</p>
      <h2 id="modalTitle">${localizeFood(food, "name")}</h2>
      <p class="modal-description">${localizeFood(food, "description")}</p>
      <div class="info-grid">
        <article>
          <span>${label("difficulty")}</span>
          <strong>${localizeDifficulty(food.difficulty)}</strong>
        </article>
        <article>
          <span>${label("reward")}</span>
          <strong>${food.xp} XP</strong>
        </article>
      </div>
      <dl class="detail-list">
        <div>
          <dt>${label("orderPhrase")}</dt>
          <dd>${food.phrase}</dd>
        </div>
        <div>
          <dt>${label("allergyNote")}</dt>
          <dd>${localizeFood(food, "allergy")}</dd>
        </div>
        <div>
          <dt>${label("travelTip")}</dt>
          <dd>${localizeFood(food, "tip")}</dd>
        </div>
      </dl>
      ${isCompleted ? "" : `
        <button class="want-button ${isWanted ? "wanted" : ""}" data-want-id="${food.id}" type="button">
          ${isWanted ? label("savedToTry") : label("wantToTry")}
        </button>
      `}
      <button class="quest-button ${isCompleted ? "completed" : ""}" data-food-id="${food.id}" type="button">
        ${isCompleted ? label("completed") : label("completeQuest")}
      </button>
    </div>
  `;

  foodModal.classList.add("open");
  foodModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeFoodModal() {
  foodModal.classList.remove("open");
  foodModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function createCollectionCard(food) {
  const isCompleted = completedFoodIds.has(food.id);
  const isWanted = wantFoodIds.has(food.id);

  return `
    <article class="collection-card ${isCompleted ? "" : "locked"}">
      <div class="food-image food-${food.visual}" aria-hidden="true">
        <span>${isCompleted ? food.mark : "?"}</span>
      </div>
      <div class="card-body">
        <h3>${isCompleted ? localizeFood(food, "name") : label("unknownDish")}</h3>
        <p class="meta">${isCompleted ? `${localizeRegion(food.region)} / ${localizeType(food.type)}` : label("unlockHint")}</p>
        ${isWanted && !isCompleted ? `<span class="saved-note">${label("wantToTry")}</span>` : ""}
      </div>
    </article>
  `;
}

function createBadgeCard(badge) {
  const isUnlocked = badge.isUnlocked();

  return `
    <article class="badge-card ${isUnlocked ? "unlocked" : "locked"}">
      <div class="badge-mark" aria-hidden="true">${isUnlocked ? badge.mark : "??"}</div>
      <div>
        <h3>${localizeBadge(badge, "name")}</h3>
        <p>${localizeBadge(badge, "description")}</p>
      </div>
    </article>
  `;
}

function createSavedItem(food) {
  return `
    <article class="saved-item">
      <div>
        <h3>${localizeFood(food, "name")}</h3>
        <p>${localizeRegion(food.region)} / ${localizeType(food.type)}</p>
      </div>
      <button class="detail-button compact" data-detail-id="${food.id}" type="button">${label("detail")}</button>
    </article>
  `;
}

function renderQuests() {
  const visibleFoods = foods.filter((food) => {
    const matchesRegion = currentRegion === "all" || food.region === currentRegion;
    const matchesType = currentType === "all" || food.type === currentType;
    const searchableText = `
      ${food.name}
      ${localizeFood(food, "name")}
      ${food.region}
      ${localizeRegion(food.region)}
      ${food.type}
      ${localizeType(food.type)}
      ${food.description}
      ${localizeFood(food, "description")}
    `.toLowerCase();
    const matchesSearch = searchableText.includes(searchText);

    return matchesRegion && matchesType && matchesSearch;
  });

  resultCount.textContent = `${label("showing")} ${visibleFoods.length} ${visibleFoods.length === 1 ? label("questSingular") : label("questPlural")}`;
  questGrid.innerHTML = visibleFoods.length
    ? visibleFoods.map(createQuestCard).join("")
    : `<p class="empty-state">${label("noQuests")}</p>`;
}

function renderCollection() {
  collectionGrid.innerHTML = foods.map(createCollectionCard).join("");
}

function renderBadges() {
  const unlockedCount = getUnlockedBadgeCount();
  badgeGrid.innerHTML = badges.map(createBadgeCard).join("");
  badgeGrid.setAttribute("aria-label", `${unlockedCount} of ${badges.length} badges unlocked`);
}

function renderSavedList() {
  const wantedFoods = foods.filter((food) => wantFoodIds.has(food.id));

  savedList.innerHTML = wantedFoods.length
    ? wantedFoods.map(createSavedItem).join("")
    : `<p class="empty-state">${label("noSaved")}</p>`;
}

function renderApp() {
  updateStaticText();
  renderQuests();
  renderBadges();
  renderSavedList();
  renderCollection();
  updateStatus();
}

document.addEventListener("click", (event) => {
  const questButton = event.target.closest(".quest-button");
  const wantButton = event.target.closest(".want-button");
  const detailButton = event.target.closest(".detail-button");
  const regionButton = event.target.closest("[data-region]");
  const languageButton = event.target.closest(".language-button");
  const closeModalButton = event.target.closest("[data-close-modal]");

  if (languageButton) {
    currentLanguage = languageButton.dataset.language;
    localStorage.setItem(languageStorageKey, currentLanguage);
    renderApp();
    return;
  }

  if (wantButton) {
    event.preventDefault();
    const wantedFoodId = wantButton.dataset.wantId;

    if (wantFoodIds.has(wantedFoodId)) {
      wantFoodIds.delete(wantedFoodId);
    } else {
      wantFoodIds.add(wantedFoodId);
    }

    saveProgress();
    renderApp();

    if (foodModal.classList.contains("open")) {
      const food = foods.find((item) => item.id === wantedFoodId);
      if (food) {
        openFoodModal(food);
      }
    }
    return;
  }

  if (questButton) {
    const completedFoodId = questButton.dataset.foodId;
    completedFoodIds.add(completedFoodId);
    wantFoodIds.delete(completedFoodId);
    saveProgress();
    renderApp();

    if (foodModal.classList.contains("open")) {
      const food = foods.find((item) => item.id === completedFoodId);
      openFoodModal(food);
    }
  }

  if (detailButton) {
    const food = foods.find((item) => item.id === detailButton.dataset.detailId);
    if (food) {
      openFoodModal(food);
    }
  }

  if (
    regionButton
    && !regionButton.classList.contains("quest-button")
    && !regionButton.classList.contains("want-button")
    && !regionButton.classList.contains("detail-button")
  ) {
    currentRegion = regionButton.dataset.region;
    document.querySelectorAll(".region-button").forEach((button) => {
      button.classList.toggle("active", button.dataset.region === currentRegion);
    });
    renderQuests();
  }

  if (closeModalButton) {
    closeFoodModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeFoodModal();
  }
});

questSearch.addEventListener("input", (event) => {
  searchText = event.target.value.trim().toLowerCase();
  renderQuests();
});

typeFilter.addEventListener("change", (event) => {
  currentType = event.target.value;
  renderQuests();
});

resetButton.addEventListener("click", () => {
  completedFoodIds.clear();
  wantFoodIds.clear();
  saveProgress();
  renderApp();
});

renderApp();
