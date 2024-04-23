'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5d65d951a40c7beb90339d7b1198c172",
"splash/img/light-2x.png": "dd3b97f70e84f3f578b2c40dc337c54b",
"splash/img/dark-4x.png": "c7c33117eec2d988cf2da4ccfa8bba53",
"splash/img/light-3x.png": "5d9461fed9dae86fc6dc814a1e466736",
"splash/img/dark-3x.png": "5d9461fed9dae86fc6dc814a1e466736",
"splash/img/light-4x.png": "c7c33117eec2d988cf2da4ccfa8bba53",
"splash/img/dark-2x.png": "dd3b97f70e84f3f578b2c40dc337c54b",
"splash/img/dark-1x.png": "dd7060c735ec1c8f3f418b015c5611b0",
"splash/img/light-1x.png": "dd7060c735ec1c8f3f418b015c5611b0",
"index.html": "7e0cbae406e49d915cd1e1234b1d6cd5",
"/": "7e0cbae406e49d915cd1e1234b1d6cd5",
"main.dart.js": "bcbf7f5ad39a83035249e538aca1a4fa",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3949f9c5b4505ea81c6f404c21132756",
"assets/AssetManifest.json": "2c6eef67813f70ed14c9a38821cd6438",
"assets/NOTICES": "720bdac71d35dee9526ac91623d61987",
"assets/FontManifest.json": "11eef5cd08e8fc4ca4ac2af0fca5cd62",
"assets/AssetManifest.bin.json": "161c1c0620ac4fa85d9454aba291145b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "a02d4f4e55a38a9bbdde331e0daf657a",
"assets/fonts/MaterialIcons-Regular.otf": "55971ec653f0afd39e6d33bfff716a93",
"assets/assets/blog_send.png": "8f067b263488303ac3d061d90f2749e7",
"assets/assets/card.png": "92ff2f73efbf1e7dc2e8bb7f1b386e37",
"assets/assets/no_messages.png": "7d662d1191cb50bd64a3889fa946c938",
"assets/assets/check.png": "da051f762d50503ea80b36bfafeaa5e8",
"assets/assets/onboarding1.png": "87f414c921d6825d904d9ced3b3539f7",
"assets/assets/onboarding3.png": "274f984c98e66dccdd015e4ba42af295",
"assets/assets/helen.png": "35a3e5d862e9f2d843384be51ff15148",
"assets/assets/mute_call.png": "bc6e6113ea83c4e9a335984f3009aa0b",
"assets/assets/caller.png": "0c09440238d6aba8be85ac8d1bab4581",
"assets/assets/end_call.png": "3120a0b78d529d0cb6efce309c30a090",
"assets/assets/account.svg": "c085ed7cf4bcf3ca826584057f688dc3",
"assets/assets/onboarding2.png": "a632cf7373f15a9b152a9257f5547d54",
"assets/assets/no_pic.png": "d0569f354c5c8de028100c1275903a7c",
"assets/assets/home.svg": "11e155e14e28ed2688070a2d634cf1c1",
"assets/assets/details.png": "0c0ce9473be23686d650a53a04a91768",
"assets/assets/accept_call.png": "6bba084b284172c6095bc3b1d2a11dee",
"assets/assets/home_pic.png": "35a3e5d862e9f2d843384be51ff15148",
"assets/assets/messaging.png": "c4bab4b2ffd4599d21fb968c4d9cddab",
"assets/assets/cart.png": "36f039f36799538be5ddac44425ae91b",
"assets/assets/home_product.png": "374236a032d6694940a1283e2bc3d770",
"assets/assets/settings.png": "bc8bea421b7e56474bfccbbf47387b69",
"assets/assets/product.jpg": "e47e6a5db8c056091985a8461dee1058",
"assets/assets/no_reviews.png": "e588f80c49403dcde7e81b32b029301d",
"assets/assets/delivery.png": "f005ee67bb0a9136d844607fe301ad55",
"assets/assets/eze.png": "5e1622f285b18055d3aec2ab69bd7dbc",
"assets/assets/home_notification.png": "e653d853c634c2fdb528b5ddfb589dfd",
"assets/assets/blog_view.png": "f8238a312b58a522f8334a1582043b07",
"assets/assets/change.png": "6e661c9fc51495cfea5e203db968f0da",
"assets/assets/store.svg": "02940706e5af824c22b0ecafd73afeaf",
"assets/assets/review_pic.png": "7f0af5c70b04acaa289b23806a850e5d",
"assets/assets/slider3.png": "57a00122c3212118a881329b4f7a27db",
"assets/assets/upcoming.png": "21d2fdb4e240fa51c6294fc62f128e63",
"assets/assets/log_out.png": "ba7de00436800ae9f1fa0f986e22f63b",
"assets/assets/secure.png": "3484bb24488e503a875664c5e4be1f01",
"assets/assets/doctor.png": "6cf1ac6a285cd50111fcf286af455fe2",
"assets/assets/slider2.png": "3fe24729cdbda96f7f3c618eeed56c73",
"assets/assets/forum_views.png": "38e3af75c71565a971d0560ff757c937",
"assets/assets/no_forum_pic.png": "766966787cc624ec0903da9ce0e81746",
"assets/assets/arrow.png": "2e4d49423b17764880755b3da899d090",
"assets/assets/request_approved.png": "43364f4a1bf8bca696f030ad0d03464e",
"assets/assets/no_cart.png": "3dc6bdd53edddedabb3ffb4e755d733f",
"assets/assets/forum.svg": "4e45a2d4a55b7ae8c3c279e1b111b24d",
"assets/assets/forum_pic.png": "50039c6f8511bbcf7ba66143c74a2cb5",
"assets/assets/saved.png": "92c54eb4e6c04f0e8add6e2bf0f11ac0",
"assets/assets/no_rating.png": "3a8cfbec1e423328ba1af833b285cce2",
"assets/assets/about_us.png": "fafaa733c49e0b77396d96b7080ded33",
"assets/assets/carousel2.png": "e317f9b091fa49a28dfb61f42c52533b",
"assets/assets/book_message.png": "bee44fcc230dd7091dabe42c8e6d3a7b",
"assets/assets/history.png": "8b0aa2cf250a069da4918109b59524e1",
"assets/assets/no_notification.png": "d0f0dd115882721bf0a9f9bee222da5b",
"assets/assets/crosscircle.png": "df72b8ec68108835449782b64fb13b33",
"assets/assets/splash.png": "46445127b478f7cb4ac7463c9bf0693a",
"assets/assets/carousel1.png": "4fd258d58e557be204f138c2c781876a",
"assets/assets/swap_camera.png": "4b2756424adeefac557bbe6d2dc470a0",
"assets/assets/accept_video.png": "5f524b0683734d0cbce67992f3e1e719",
"assets/assets/help.png": "218ff7ea7a5ead00eb640cf0144b6415",
"assets/assets/account_tapped.svg": "7a189da2ef45835bd8b435dbde079165",
"assets/assets/forum_clock.png": "20be017c01f4f74f0bdb549588e42216",
"assets/assets/carousel0.png": "acba5f26382c18a5d4e791c99e2f4bb6",
"assets/assets/no_saved.png": "274f668a0da8947f4442ca7ea5fe86b5",
"assets/assets/logo.png": "6254575c4c076dc6021dcad6097337f3",
"assets/assets/upload.png": "cb3f0d9d0615baed5c53a8d02200580a",
"assets/assets/notifications.png": "23781bb5bb5a2de73aebd96a7b64350b",
"assets/assets/splash_screen.png": "1562e20c87a4ac14bc389cf81f5695d3",
"assets/assets/calendar.png": "4d14c41a79871593683f7893884c07d0",
"assets/assets/store_tapeped.svg": "3631dce7db7b32d7939e6b884fe86f0f",
"assets/assets/video.png": "7c6a8eda8bf3a4d11d9d6b5ce1d9b4b0",
"assets/assets/home_doctor.png": "5505b975f8ba2e900e5175c73637affb",
"assets/assets/no_upcoming.png": "5c502372833c404f42123714f6075f5e",
"assets/assets/no_appointments.png": "5c502372833c404f42123714f6075f5e",
"assets/assets/blog_story.png": "3f1ca7e2eecd16dc3e90c237ed2e53bf",
"assets/assets/clock.png": "8c6a77552a65af0e2d66c8e7a4b017d7",
"assets/assets/delete.png": "eba9375165f9a3e8dcaf1cfa7e666155",
"assets/assets/exit.png": "5fa0a38801b21bd79b8653bd0de8e6f6",
"assets/assets/notification_appointment.png": "94f445db3ff81881cbc28457474f98d2",
"assets/assets/book_call.png": "2283c955dc71793b1860b5797cbcde8d",
"assets/assets/fitness.png": "3bdc632346205f0740ed1c92209b38cf",
"assets/assets/edit.png": "6e661c9fc51495cfea5e203db968f0da",
"assets/assets/font/Jost-Bold.ttf": "b7264d92bf53323431379fa41e88351c",
"assets/assets/font/Jost-Black.ttf": "a0fa30eaedf7669b11308fc1b8e191ab",
"assets/assets/font/Jost-Medium.ttf": "7e1fece31d93f217570805dbb0dbc786",
"assets/assets/font/Jost-Regular.ttf": "3ccf189874e82464a4233d9dccd41c97",
"assets/assets/font/Jost-ExtraBold.ttf": "1e76776be83c5c73ad0ed25eb31e21e9",
"assets/assets/font/Jost-Light.ttf": "a9acd0cea659e0b283a84fc489f81e8b",
"assets/assets/font/Jost-SemiBold.ttf": "9f5eb520cce314ccd9c9ccf1a2a9ad48",
"assets/assets/appointments.png": "8d25ac191de257f2cd41be95216e2806",
"assets/assets/nutrition.png": "8763d3dc94052c7306a0ca476f9fcfe0",
"assets/assets/book_video.png": "1f1f94ab6b906a293bbd6ae9c754ece9",
"assets/assets/about.png": "5e4c0b5aadab365e5e7f4fc03bee7cc9",
"assets/assets/line.png": "8dd4aaf8ed58a6567380fa89317b099f",
"assets/assets/blog.svg": "7506b0d5c70d387194afc1216f5178a5",
"assets/assets/forum_message.png": "b4d58b7a2bb6d7f2afdc99027516556e",
"assets/assets/no_order.png": "3814f9f44adc0fe2ce67da716cade9ba",
"assets/assets/blog_post.png": "41287cb6cab5d80820b19ee80c246391",
"assets/assets/blog_comment.png": "c1c9d6dc2932d1021eefecf6de042c7e",
"assets/assets/details_delivery.png": "1804f0513fa34380004767f36a6c15b9",
"assets/assets/chat_dot.png": "8a622446036c3dbd37d93b8ec0db3434",
"assets/assets/speaker.png": "540709cb7d82b2e67bdd9064759a5c34",
"assets/assets/request_failed.png": "3e845000e0bfb01943825e8578ed670f",
"assets/assets/camera.png": "6e05394fd67a3db4796815a54415daa2",
"assets/assets/blog_share.png": "abb3601926c02b8392c83a1f1ff7e3fe",
"assets/assets/naira.svg": "300fd7e0951127a469a26ac8b5f0018f",
"assets/assets/forum_back.png": "e216708d52e360e49a3a7855a9678622",
"assets/assets/send.png": "e918abfcd0adec8b9f2f2e53e55d65c7",
"assets/assets/med_colored_logo.png": "9255935df7cdd66af44c1d54efcc2476",
"assets/assets/back.png": "319b6b36842db95e60ac60a8fd102446",
"assets/assets/uncheck.png": "e13cdff0d55fb0ff850056ba0ba0312a",
"assets/assets/pres_line.png": "db9c1e7a548d48ce3422e1b2431d3501",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
