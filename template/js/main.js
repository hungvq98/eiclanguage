import moduleSwiper from "./module/moduleSwiper.js";
import textareaModule from "./module/textareaModule.js";
import collapseModule from "./module/collapseModule.js";
import menumobileModule from "./module/menumobileModule.js";
import sidebarMenuModule from "./module/sidebarMenuModule.js";
import PopupModule from "./module/PopupModule.js";
import tabModule from "./module/tabModule.js";
import timerModule from "./module/timerModule.js";
// import toTopModule from "./module/toTopModule.js"

window.addEventListener("DOMContentLoaded", () => {
    moduleSwiper();
    textareaModule();
    collapseModule();
    menumobileModule();
    sidebarMenuModule();
    PopupModule();
    tabModule();
    timerModule();
    // toTopModule();
});