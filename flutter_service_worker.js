'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "19ce1f3b3a27b3290505e12878ada081",
".git/config": "59e66cc9ef5c7939d93f80e5e15d9bab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cacde8304a6c28bbdcc6c19ef0481423",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f7a4be764176a6c497d28eaba9de260",
".git/logs/refs/heads/master": "5f7a4be764176a6c497d28eaba9de260",
".git/logs/refs/remotes/music_store_public/master": "169a89096d5b39d5319616cf83e4c10f",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "38f537f22910e38d4f0e9d3f6893bff7",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "bd6f798fe3e3942c14dc558521f59ca4",
".git/objects/09/226e1d5a38f51be31e2973fa133fb28818a331": "7beb77928d5f57644cf97c3a3ea55dfd",
".git/objects/0c/334a99defb6ef1decdb4ce40064ede22ea913c": "090bd1834634beb0df864e2ff1c9bac9",
".git/objects/0e/7f71ad287e04a4e44e2ae431f1d185145c4c1e": "0afae7d7b2f19a3fc956d479939fab25",
".git/objects/0f/5fd428f13937adee7c237fba3a85a1a78c297f": "424d98dfac65591a90317daf96572fbd",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "970c7b604262ccb20ec82f39104e9cfb",
".git/objects/1f/10be5a9710de2b8e46371238fbdb0b7403088c": "c3132d2c25dc7248811d5194fe4b33bb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/37/87dcd755923fed58502ada1f768d5c59400bc0": "4de11752283f0c7c3bb8ecae0cfcd545",
".git/objects/38/cb163d402cdf22e3e517bdd2990ac27fe79b32": "40cdca58b8278e50be12c98b897defec",
".git/objects/39/9a4546c2ff0d6800e9c883c89dff076212a286": "fc398224ee4a988428dc8a644c1b9e22",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/49/0b908aea7abc9d7af7a0ef71de9b176f78fa89": "87f378529f3967d608887a8b174b00ff",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "9fb736ffb37b61e228f0403ed08e43ba",
".git/objects/4e/9ccb85d3ff3d0af24afd43d569bdd09d711260": "a974953225873df326cebcd9ec1bc452",
".git/objects/51/85c05eebf510133de8108f3f7b30b34116d2ad": "6b5800b8f3daa0877ca24da001c9472f",
".git/objects/58/d53b350f87897d34643ad746484a856c59cf16": "74f8ec1330bc80b7ac53c402fda02454",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "426ccef613faa4fdaa7fe1ebbfb0334a",
".git/objects/5b/7cdc8a48460e597fe9e8d6ccbb34a983f35d2c": "96d55d59d9ddc269bf2ba33a25caa9b9",
".git/objects/65/e822a56a9e1c3bc59adf7a9a2e66e1fead86a4": "b80a952f6e0ffe9659e74b470d8af1e5",
".git/objects/69/60991dc07637e4fdd2dcb1913a605eb91ba569": "d5c0fd463ab665b6a0301ad2293977e6",
".git/objects/69/d7fb14ee88b57a1a9c9902c903741e4c2bbe49": "c954a09c87b992fb4ce6694a43299b5e",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "d591a779859e5269a502d81064617f75",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "26aff0b4be772e8bf4e3aa148cef22bc",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "2a7e1a5ee4e80fd645045d866db32950",
".git/objects/72/b6249d4d958302fa1f07d306c25215d60318b1": "94f55c2b2e52a93e8b47dcb70a257340",
".git/objects/80/d488a9e9451b90ccf8c7d92104a9a126d6c14b": "f434d434afb23c94197b977506f0a882",
".git/objects/83/e02750b99e0b4fb8035f05c16816df5b591507": "c6a9620509ae6fb8cf938f3ba97e05e0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/86/85a4151b79a461674cd0dbb05d991340161b37": "7add721917608e0daf4526f61dee4c73",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/70fd590a3ba662403244823432929145e01f14": "19ac67540d05a9896add6b1fec138bf6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/93/732fb97bebc1b56af4dc1e1efa681a46853ece": "0638e4f65372c21f3a222195bd7ec431",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "501d5ab5716c2ed4f4e1e47221629c14",
".git/objects/9c/98a92e9ad0a9d8689f12d551fb73da938d76ee": "eadaa8011e03eafe274a3ccd71fc93c4",
".git/objects/9e/24c8ac8ffdcc6a3f33725ec699b26da7d2e9c6": "2f5f8f70a82a1f3b0db2445953ad45e1",
".git/objects/a8/59b0052cb2a988dfba855e39cfdb5f02b085e7": "6ad83a09928e406826413f0f8bc166ca",
".git/objects/ab/b1646f2c1d774de622b4cb7b42e7dbde0e2ede": "f63ba028cd08daa32311cfcc7f57c624",
".git/objects/ac/9c49d01f74211c401a78f8b3ffa5e81403e688": "f334709821c2359cf29a3297eada724b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "0b78a2619a6aaf413ef84aef7ca14492",
".git/objects/b0/ff856da02355d28d34ba8397c8269937812d28": "3c26fe48332ac40849dbe3f4234d8832",
".git/objects/b3/f5ca42adf0e725177c2321464e25f2c1de137b": "a14bb896f61570862e04d3d89f2d86a2",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "3d929b619b43ce0cdaec16ed67513540",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "f2069cc735619c31824182a9254d47e5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/df/ef59a68dac0cb151e3614707c023d40b375515": "166894ee31cc2453b5d03bb0647fb178",
".git/objects/e5/da2f6351564ed78596bfe7e13d182d8f354f0a": "b24ded525aec3c3604ca675340768139",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d13d543bd63eb7dc360abee9ae50c375",
".git/objects/eb/50b010a171e0f56325669ebd4dc1e2c3e6bebf": "3c213c3b4fb45e812deb231a92a11221",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/ff/d6a71450b4ea8a2fbcda1ae2102ad62cba18d0": "6325939bd2cbf9c8804dc3a7e463839f",
".git/refs/heads/master": "6c74819a15d4d47773eaa70b9cd8b385",
".git/refs/remotes/music_store_public/master": "6c74819a15d4d47773eaa70b9cd8b385",
"assets/asset/acoustic_drum.jpg": "a0bcff6bb745d843372e8ecedb86cf06",
"assets/asset/add_to_cart.gif": "fb9a2563090af7cb3da1f31a15e580e9",
"assets/asset/background1.gif": "532be3516fd2002ee816e13f54b02374",
"assets/asset/background2.gif": "41a119a88776977569348b62fbb7fdb5",
"assets/asset/checkmark.gif": "779b9dc3928c2dbc304bcf6702bef6df",
"assets/asset/electric_guitar.jpg": "9a346e093fb74ef7f3f37650c322fc22",
"assets/asset/guitar_amp.jpg": "b4592b678a1105813aa54dde1dda5a1d",
"assets/asset/product.png": "70fcbf5a5587406842d36f6117c325d8",
"assets/asset/product2.png": "5380bd2f92e1cef0198622faca3610d5",
"assets/asset/product3.png": "848200c74b10779b9293cef30125046a",
"assets/asset/product4.png": "033614f2f77ccae7b39d97bbe8ee59b7",
"assets/asset/product5.png": "6053c58c8f30c85948c47a7ca365e7e5",
"assets/asset/product6.png": "1364081e916175b87693a06a649bafab",
"assets/asset/product7.png": "3d23c05a4a76628cc019dc98ce3bff30",
"assets/asset/product8.png": "67a88e859f2201fc59642ec3314d9e0b",
"assets/asset/product9.png": "bc61ca6a5c4d879ecf8e534154de986f",
"assets/asset/profile.jpg": "e7b1852f3ce19ec923b18c3e26bfb07c",
"assets/asset/style.jpg": "589714641c2f72a9ebf15bb0a7f1b616",
"assets/AssetManifest.bin": "fff88cbb22309c37617a11610729a39c",
"assets/AssetManifest.bin.json": "c9e4c014c5c9f84feca3ad2fd97fe8c1",
"assets/AssetManifest.json": "dcaa83b39828f56c3b339fa266a989de",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dbe903e590a64415995d90cfef4ae4f8",
"assets/NOTICES": "203cc58ce26b548c2480ee327f845b6f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0b2d9fcdd1cc760f2d2f9611a24ef447",
"/": "0b2d9fcdd1cc760f2d2f9611a24ef447",
"main.dart.js": "026d39a6922e73ad8d145e0b22809123",
"manifest.json": "ba1496e45a1c43b4265c961329714ccc",
"version.json": "d63196e6ed766585ad00b81afe889354"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
