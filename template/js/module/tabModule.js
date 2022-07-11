export default function tabModule() {
    //big tab
    let tab = document.querySelectorAll(".tab-js");
    let tabrun = document.querySelector('.runtab');

    if (tab) {
        tab.forEach((t) => {
            let tBtn = t.querySelectorAll(".tabBtn-js");
            let tPanel = t.querySelectorAll(".tabPanel-js");

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add("active");
                tPanel[0].classList.add("open");

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener("click", showPanel);
                    tabrun.style.width = tBtn[i].clientWidth + 'px';
                    const tabwidth = tabrun.getBoundingClientRect()
                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove("active");
                            tPanel[a].classList.remove("open");
                        }
                        tBtn[i].classList.add("active");
                        tPanel[i].classList.add("open");
                        tabrun.style.left = tBtn[i].offsetLeft + 'px'
                    }
                }
            }
        });
    }

    //small tab

    let tabs = document.querySelectorAll(".requires-js");

    if (tabs) {
        tabs.forEach((t) => {
            let tBtns = t.querySelectorAll(".requires-btn-js");
            let tPanels = t.querySelectorAll(".info-panel-js");

            // for tab
            if (tBtns.length !== 0 && tPanels.length === tBtns.length) {
                tBtns[0].classList.add("active");
                tPanels[0].classList.add("open");

                for (let i = 0; i < tBtns.length; i++) {
                    tBtns[i].addEventListener("click", showPanel);
                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtns.length; a++) {
                            tBtns[a].classList.remove("active");
                            tPanels[a].classList.remove("open");
                        }
                        tBtns[i].classList.add("active");
                        tPanels[i].classList.add("open");
                    }
                }
            }
        });
    }
    //horizontal tab

    let tabh = document.querySelectorAll(".route-js");

    if (tabh) {
        tabh.forEach((t) => {
            let tBtns = t.querySelectorAll(".route-btn-js");
            let tPanels = t.querySelectorAll(".route-panel-js");

            // for tab
            if (tBtns.length !== 0 && tPanels.length === tBtns.length) {
                tBtns[0].classList.add("active");
                tPanels[0].classList.add("open");

                for (let i = 0; i < tBtns.length; i++) {
                    tBtns[i].addEventListener("click", showPanel);
                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtns.length; a++) {
                            tBtns[a].classList.remove("active");
                            tPanels[a].classList.remove("open");
                        }
                        tBtns[i].classList.add("active");
                        tPanels[i].classList.add("open");
                    }
                }
            }
        });
    }

}