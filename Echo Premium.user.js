// ==UserScript==
// @name         Echo Premium
// @namespace    https://dj13423.repl.co
// @version      0.5
// @description  Echo Premium
// @author       DJ
// @match        https://snths.echo-ntn.org/*
// @icon         https://api.agilixbuzz.com/dlap.ashx?cmd=getresource&entityid=//snths&path=public/shadow/app/buzz/echo-icon42x42.png
// @grant        GM_addStyle
// @updateURL
// @downloadURL
// ==/UserScript==


// await (await fetch("https://api.agilixbuzz.com/cmd/getresource?_token=<TOKEN>&entityid=164915925&path=Assets%2FBuzzTheme.json", {
//   "headers": {
//     "accept": "application/json",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "application/json",
//     "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Microsoft Edge\";v=\"110\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "cross-site"
//   },
//   "referrer": "https://snths.echo-ntn.org/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// })).json()


(function() {
    'use strict';

    console.log('Loading injector...')


    function $(selector) {return document.querySelectorAll(selector)}

    function checkImage(url) {
        var image = new Image();
        image.onload = function() {
            if (this.width > 0) {
                console.log("image exists");
            }
        }
        image.onerror = function() {
            console.log("image doesn't exist");
        }
        image.src = url;
    }

    function addElementAfterElement(elementToAdd, afterElement) {
        afterElement.after(elementToAdd)
    }


    GM_addStyle(`
    /* Circles that show on loading screen */
    body > app-root > svg > circle {
        visibility: hidden;
    }

    /* Splash screen that shows on load */
    body > app-root > svg {
        background-image: url(https://lh5.googleusercontent.com/KMpNXdVXEdLO5TRJ-XfYH2FdcHeda-QbqloLDe5kqLYcD1OxV9hTnoraDhwNM3_SCbs=w2400);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: calc(302px * 2);
        height: calc(49px * 2);
        top: calc(50% - 49px) !important;
        left: calc(50% - 302px) !important;
    }

    /* Background */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-to-do,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-stream,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-item-modal > lib-activity-player > mat-drawer-container > mat-drawer-content,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-item-modal > lib-activity-player > mat-drawer-container > mat-drawer-content > div.activity-html.Homework.ng-star-inserted,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content {
        background-image: url(${localStorage.getItem('background-image')}) !important;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    /* Student/Teacher buttons after login */
    .mat-raised-button {
        border-radius: 30px !important;
    }

    /* Top navbar header */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content {
        background-image: linear-gradient(180deg, var(--primary-900), 4%, var(--card-layout-background), 18%, var(--card-layout-background)) !important;
    }

    /* Todo-list page card */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-to-do > mat-card {
        border-radius: 30px;
    }

    /* Activity stream page card */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-stream > lib-activity-stream > mat-card {
        border-radius: 30px;
    }

    /* Top navbar header */
    .app-dark-theme .mat-toolbar.mat-primary:not(body > app-root > app-before-login > app-login > mat-toolbar),
    .app-dark-theme .app-top-tabs .mat-tab-header {
        background-color: transparent !important;
    }

    /* Side nav menu transparency layer */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav {
        background-color: transparent !important;
    }

    /* Side mav menu */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav {
        background-image: linear-gradient(90deg, var(--primary-900), 90%, #0000) !important;
        border-radius: 10px !important;
        margin: 10px !important;
    }

    /* Individual side nav menu buttons */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a {
        border-radius: 10px !important;
        margin: 3px !important;
        background-position: 100% 0%;
        background-size: 200% 100%;
        background-image: linear-gradient(90deg, #419A, 20%, #FFF1, 50%, #FFF1) !important;
        transition: background-position 0.25s !important;
    }
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a:hover {
        background-color: unset !important;
        background-position: 0% 0% !important;
    }
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a:focus {
        background-color: unset !important;
    }

    mat-card {
        border-radius: 30px !important;
    }

    /* Card with the date that shows over all the class cards on the home course page */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > mat-card {
        border-radius: 30px;
        background-color: #333c;
        border-style: solid;
        border-color: #0006;
    }

    /* Class card images */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card > div > div.mat-card-image.course-card-image.rounded.ng-star-inserted {
        border-radius: 20px 20px 0 0 !important;
    }

    /* Class card color bands */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card > div > div.color-band.rounded {
        display: none !important;
    }

    /* Class page main card */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card {
        border-radius: 30px;
        border-color: black;
        animation: class-page-main-card 6s infinite linear !important;
    }
    @keyframes class-page-main-card {
        0% { box-shadow: 0px 0px 50px 10px #4195 }
        50% { box-shadow: 0px 0px 50px 10px #419E }
        100% { box-shadow: 0px 0px 50px 10px #4195 }
    }

    /* Color band at the top of the class page main card */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > div:nth-child(1) > div.color-band.rounded {
        margin-right: 40px;
        margin-left: 40px;
        margin-top: 10px;
        border-radius: 10px;
        width: auto;
    }

    /* Individual activities */
    div > div > div:nth-child(2) > lib-activity-tree > div > mat-tree > mat-tree-node {
        background-color: #FFF1 !important;
        border-radius: 10px !important;
        margin-bottom: 5px !important;
    }

    /* Activity thumbnails */
    div > div > div:nth-child(2) > lib-activity-tree > div > mat-tree > mat-tree-node > a > lib-activity-thumbnail {
        background-color: transparent !important;
    }

    /* Class cards */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card {
        border-radius: 30px !important;
        background-color: #333C !important;
        transition: background-color 0.5s;
    }
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card:hover {
        background-color: #222C !important;
    }

    /* Class card thumbnails */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card > div > div.mat-card-image.course-card-image.rounded.ng-star-inserted {
        border-radius: 30px 30px 0px 0px !important;
        margin-left: -26px !important;
        margin-top: -17px !important;
    }

    /* Grade that shows on the class cards */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card > div > div.detail-ct.ng-star-inserted > div.score-ct {
        opacity: 1;
    }

    /* Class thumbnail image that shows at the top of the page after you click on a class card */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > div:nth-child(1) > div.top-header > div.course-thumbnail {
        border-radius: 15px !important;
        box-shadow: 0px 0px 20px 5px #AFE9
    }

    /* Mat divider (dividers/<br>'s) */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > mat-divider,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > div.agendas.ng-star-inserted > mat-divider {
        background-image: linear-gradient(90deg, #0000, grey, #0000);
        height: 1px;
        border-style: none;
    }

    /* Ink bar that shows under activity and to-do list */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > mat-tab-group > mat-tab-header > div > div > mat-ink-bar {
        background-image: linear-gradient(90deg, #424242, var(--primary-default), #424242);
        height: 2px;
    }

    /* Effect that brightens/darkens the page when you open the sidebar */
    .app-dark-theme .mat-drawer-backdrop.mat-drawer-shown {
        background-color: #0009;
    }

    /* Premium settings page main div */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > div {
        width: 100%;
        margin: 100px;
        padding: 30px;
        border-style: solid;
        border-color: black;
        border-radius: 30px;
        animation: premium-settings-main-div 6s infinite linear !important;
    }
    @keyframes premium-settings-main-div {
        0% { box-shadow: 0px 0px 50px 10px #4195 }
        7% { box-shadow: 0px 0px 50px 10px #811E }
        15% { box-shadow: 0px 0px 50px 10px #4195 }
        23% { box-shadow: 0px 0px 50px 10px #441E }
        30% { box-shadow: 0px 0px 50px 10px #4195 }
        39% { box-shadow: 0px 0px 50px 10px #181E }
        47% { box-shadow: 0px 0px 50px 10px #4195 }
        55% { box-shadow: 0px 0px 50px 10px #144E }
        64% { box-shadow: 0px 0px 50px 10px #4195 }
        73% { box-shadow: 0px 0px 50px 10px #118E }
        82% { box-shadow: 0px 0px 50px 10px #4195 }
        93% { box-shadow: 0px 0px 50px 10px #414E }
        100% { box-shadow: 0px 0px 50px 10px #119E }
    }
`);


    function tryAddEchoPremiumCreditWatermark() {
        if ($('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > p').length == 0) {
            const echoPremiumCreditWatermarkElement = document.createElement('p')
            if (!echoPremiumCreditWatermarkElement) return
            echoPremiumCreditWatermarkElement.innerHTML = 'Echo premium by <a href="https://dj13423.repl.co">DJ (DJ13423)</a>'
            echoPremiumCreditWatermarkElement.style.color = 'white'
            const dividerElement = document.querySelectorAll('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > mat-divider')[0]
            if (!dividerElement) return
            addElementAfterElement(echoPremiumCreditWatermarkElement, dividerElement)
            addElementAfterElement(dividerElement.cloneNode(true), echoPremiumCreditWatermarkElement)
        }
    }
    setInterval(() => tryAddEchoPremiumCreditWatermark(), 3000)

    function tryAddEchoPremiumButton() {
        if ($('.echo-premium-settings-sidebar-navmenu-button').length == 0) {
            const buttonToClone = $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a:nth-child(2)')[0]
            if (!buttonToClone) return
            const clonedButtonElement = buttonToClone.cloneNode(true)
            if (!clonedButtonElement) return
            clonedButtonElement?.classList.add('echo-premium-settings-sidebar-navmenu-button')
            clonedButtonElement.href = '/student/premium-settings'
            const buttonToPutUnder = $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a:nth-child(6)')[0]
            if (!buttonToPutUnder) return
            buttonToPutUnder.after(clonedButtonElement)
            const iconElement = $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a.mat-list-item.mat-focus-indicator.mat-tooltip-trigger.top-main-entry.ng-star-inserted.echo-premium-settings-sidebar-navmenu-button > span > mat-icon')[0]
            if (!iconElement) return
            iconElement.innerHTML = 'settings'
            const buttonDescription = $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a.mat-list-item.mat-focus-indicator.mat-tooltip-trigger.top-main-entry.ng-star-inserted.echo-premium-settings-sidebar-navmenu-button > span > span.description')[0]
            if (!buttonDescription) return
            buttonDescription.innerHTML = 'Premium Settings'
        }
    }
    setInterval(() => tryAddEchoPremiumButton(), 3000)

    setInterval(() => {
        const sideMenuLogoImg = $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div.side-menu-logo-ct > img')[0]
        if (sideMenuLogoImg)
            sideMenuLogoImg.src = 'https://lh5.googleusercontent.com/KMpNXdVXEdLO5TRJ-XfYH2FdcHeda-QbqloLDe5kqLYcD1OxV9hTnoraDhwNM3_SCbs=w2400'
    }, 3000)

    setInterval(() => {
        $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card').forEach(element => {
            element.style.setProperty("border-style", "solid", "important")
            element.style.setProperty("border-color", element.children.item(0).children.item(1).style['background-color'], "important")
        })

        $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card > div > div.detail-ct.ng-star-inserted > div > lib-score > span > span.letter.ng-star-inserted').forEach(element => {
            switch (element.innerText.replace(/ /g, '', )) {
                case 'A':
                    element.innerText += ' 😎'
                    break
                case 'B':
                    element.innerText += ' 😃'
                    break
                case 'C':
                    element.innerText += ' 😐'
                    break
                case 'D':
                    element.innerText += ' 😟'
                    break
                case 'F':
                    element.innerText += ' 💀'
                    break
            }
        })
    }, 500)


    ////////////// Premium Settings //////////////////
    setTimeout(() => {
        if (window.location.pathname == '/student/premium-settings') {
            $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > mat-toolbar')[0].style.setProperty("visibility", "hidden", "important")
            const body = $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div')[0]
            const backgroundImage = localStorage.getItem('background-image')
            body.innerHTML = `<div><h2>Background image URL:</h2><input type="text" id="background-image-input" name="fname" value="${backgroundImage?backgroundImage:''}" style="height: 30px; width: 50%;"> <button type="button" onclick="localStorage.setItem('background-image', document.querySelector('#background-image-input').value)">Save</button><br><hr><button type="button" onclick="window.location.href='/student/home/courses'">Done</button></div>`
        }
    }, 2000)


    console.log('Injector loaded!')
})();