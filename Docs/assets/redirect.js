// redirect.js

const redirects = {
    "/nanotech": "https://www.roblox.com/games/11569994474/nanotech-project-NPRF",
    "/nprf": "https://www.roblox.com/games/11569994474/nanotech-project-NPRF",
    "/roblox": "https://www.roblox.com/users/544088422/profile",
    "/youtube": "https://youtube.com/@DaintyDust",
    "/twitter": "https://twitter.com/NickV535",
    "/x": "https://twitter.com/NickV535",
    "/github": "https://github.com/DaintyDust",
    "/group": "https://www.roblox.com/groups/8193767/Nick-Studios#!/about",
};

const path = window.location.pathname;

if (path !== "/" && redirects[path]) {
    window.location.href = redirects[path];
} else if (path !== "/" && !redirects[path]) {
    window.location.href = '/Docs/error.html';
}

//const redirects = {
//    "/nanotech": "https://www.roblox.com/games/11569994474/nanotech-project-NPRF",
//    "/nprf": "https://www.roblox.com/games/11569994474/nanotech-project-NPRF",
//    "/roblox": "https://www.roblox.com/users/544088422/profile",
//    "/youtube": "https://youtube.com/@DaintyDust",
//    "/twitter": "https://twitter.com/NickV535",
//    "/x": "https://twitter.com/NickV535",
//    "/github": "https://github.com/DaintyDust",
//    "/group": "https://www.roblox.com/groups/8193767/Nick-Studios#!/about",
//};

//const path = window.location.pathname;
//if (redirects[path]) {
//    window.location.href = redirects[path];
//} else {
//    window.location.href = '/Docs/error.html';
//}
