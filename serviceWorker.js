const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/icon.png",
  "achievements.js",
  "building.js",
  "constants.js",
  "core.js",
  "game.js",
  "Gruntfile.js",
  "interstellar.js",
  "LICENCE",
  "loadScreenPic.png",
  "loadScreenPicKong.png",
  "notification.js",
  "oembed.json",
  "package.json",
  "resource.js",
  "resources.js",
  "rocket.js",
  "rocketParts.js",
  "saving.js",
  "science.js",
  "settings.js",
  "solarSystem.js",
  "solCenter.js",
  "SpaceCompanyFavicon.png",
  "star.js",
  "stargaze.js",
  "statistics.js",
  "style.css",
  "tech.js",
  "updates.js",
  "utils.js",
  "variable.js",
  "whiteLogo",
  "wonder.js",
  "data/achievementsData.js",
  "data/buildingData.js",
  "data/interstellarData.js",
  "data/resourceData.js",
  "data/splashTextData.js",
  "data/starData.js",
  "data/stargazeData.js",
  "data/techData.js",
  "lib/bootstrap.min.js",
  "lib/bootstrap.min",
  "lib/handlebars.min.js",
  "lib/jquery.min.js",
  "lib/lz-string.min.js",
  "lib/pnotify.custom.min.js",
  "lib/pnotify.custom.min",
  "fonts/aspace_demo.otf",
  "fonts/glyphicons-halflings-regular",
  "fonts/glyphicons-halflings-regular.ttf",
  "fonts/glyphicons-halflings-regular.woff",
  "fonts/glyphicons-halflings-regular.eot",
  "fonts/glyphicons-halflings-regular.woff2",
  "Icons/achievementStar.png",
  "Icons/asteroidBeltIcon.png",
  "Icons/charcoalIcon.png",
  "Icons/EnergyIcon.png",
  "Icons/gemIcon.png",
  "Icons/goldIcon.png",
  "Icons/heliumIcon.png",
  "Icons/hydrogenIcon.png",
  "Icons/iceIcon.png",
  "Icons/jupiterIcon.png",
  "Icons/kuiperBeltIcon.png",
  "Icons/lavaIcon.png",
  "Icons/lunariteIcon.png",
  "Icons/marsIcon.png",
  "Icons/mercuryIcon.png",
  "Icons/metalIcon.png",
  "Icons/meteoriteIcon.png",
  "Icons/methaneIcon.png",
  "Icons/moonIcon.png",
  "Icons/neptuneIcon.png",
  "Icons/oilIcon.png",
  "Icons/plasmaIcon.png",
  "Icons/plutoIcon.png",
  "Icons/rocketFuelIcon.png",
  "Icons/rocketIcon.png",
  "Icons/saturnIcon.png",
  "Icons/scienceIcon.png","Icons/","Icons/","Icons/","Icons/","Icons/","Icons/","Icons/","Icons/","Icons/","Icons/","Icons/",
];

// インストール時にキャッシュする
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエストをキャッシュから返す
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 古いキャッシュを削除する
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
