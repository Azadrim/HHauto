// ==UserScript==
// @name         HaremHeroes Automatic++
// @namespace    https://github.com/Roukys/HHauto
// @version      5.4-beta.19
// @description  Open the menu in HaremHeroes(topright) to toggle AutoControlls. Supports AutoSalary, AutoContest, AutoMission, AutoQuest, AutoTrollBattle, AutoArenaBattle and AutoPachinko(Free), AutoLeagues, AutoChampions and AutoStatUpgrades. Messages are printed in local console.
// @author       JD and Dorten(a bit), roukys, cossname
// @match        http*://nutaku.haremheroes.com/*
// @match        http*://*.hentaiheroes.com/*
// @match        http*://*.gayharem.com/*
// @grant        GM_addStyle
// @license      MIT
// @updateURL   https://github.com/Roukys/HHauto/raw/main/HHAuto.user.js
// @downloadURL https://github.com/Roukys/HHauto/raw/main/HHAuto.user.js
// ==/UserScript==

//CSS Region
GM_addStyle('/* The switch - the box around the slider */ .switch { position: relative; display: inline-block; width: 40px; height: 24px; } /* Hide default HTML checkbox */ .switch input {display:none;} /* The slider */ .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; -webkit-transition: .4s; transition: .4s; } .slider.round:before { position: absolute; content: ""; height: 16px; width: 16px; left: 4px; bottom: 4px; background-color: white; -webkit-transition: .4s; transition: .4s; } input:checked + .slider { background-color: #2196F3; } input:focus + .slider { box-shadow: 0 0 1px #2196F3; } input:checked + .slider:before { -webkit-transform: translateX(16px); -ms-transform: translateX(16px); transform: translateX(16px); } /* Rounded sliders */ .slider.round { border-radius: 24px; } .slider.round:before { border-radius: 50%; }');
GM_addStyle('.myButton {box-shadow: 0px 0px 0px 2px #9fb4f2; background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%); background-color:#7892c2; border-radius:10px; border:1px solid #4e6096; display:inline-block; cursor:pointer; color:#ffffff; font-family:Arial; font-size:8px; padding:3px 10px; text-decoration:none; text-shadow:0px 1px 0px #283966;}.myButton:hover { background:linear-gradient(to bottom, #476e9e 5%, #7892c2 100%); background-color:#476e9e; } .myButton:active { position:relative; top:1px;}');
GM_addStyle('.HHEventPriority {position: absolute;z-index: 500;background-color: black;}');
GM_addStyle('.HHPopIDs {background-color: black;z-index: 500;position: absolute;margin-top: 25px}');
//END CSS Region

// var d="@require      https://cdn.jsdelivr.net/js-cookie/2.2.0/js.cookie.js"

function Storage()
{
    return localStorage.HHAuto_Setting_settPerTab==="true"?sessionStorage:localStorage;
}

function getCallerFunction()
{
    return getCallerFunction.caller.name
}

function logHHAuto(text)
{
    var prefix = new Date().toISOString()+":"+getCallerFunction()+":";
    var currentLoggingText;
    var nbLines;
    var maxLines = 500;
    if (sessionStorage.HHAuto_Temp_Logging)
    {
        currentLoggingText = sessionStorage.HHAuto_Temp_Logging;
        nbLines = (currentLoggingText.match(/\n/g) || []).length;
        if( nbLines >maxLines)
        {
            //console.log("Counting log lines : "+nbLines);
            currentLoggingText = currentLoggingText.substring(currentLoggingText.split("\n", nbLines-maxLines).join("\n").length+1);
            nbLines = (currentLoggingText.match(/\n/g) || []).length;
        }
        sessionStorage.HHAuto_Temp_Logging=currentLoggingText+prefix+text+"\n";
    }
    else
    {
        sessionStorage.HHAuto_Temp_Logging=prefix+text+"\n";
    }
}

function getHero()
{
    if(unsafeWindow.Hero === undefined)
    {
        setTimeout(autoLoop, Number(Storage().HHAuto_Temp_autoLoopTimeMili))
        //console.log(window.wrappedJSObject)
    }
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",unsafeWindow.Hero);
    //logHHAuto(JSON.stringify(unsafeWindow.Hero));
    return unsafeWindow.Hero;
}

function getSetHeroInfos(infoSearched,newValue)
{
    var returnValue = -1;

    switch (infoSearched)
    {
        case 'carac1' :
            if ( getHero().infos.carac1 !== undefined )
            {
                returnValue = getHero().infos.carac1;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'carac2' :
            if ( getHero().infos.carac2 !== undefined )
            {
                returnValue = getHero().infos.carac2;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'carac3' :
            if ( getHero().infos.carac3 !== undefined )
            {
                returnValue = getHero().infos.carac3;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'caracs.damage' :
            if ( getHero().infos.caracs.damage !== undefined )
            {
                returnValue = getHero().infos.caracs.damage;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'caracs.def_carac1' :
            if ( getHero().infos.caracs.def_carac1 !== undefined )
            {
                returnValue = getHero().infos.caracs.def_carac1;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'caracs.def_carac2' :
            if ( getHero().infos.caracs.def_carac2 !== undefined )
            {
                returnValue = getHero().infos.caracs.def_carac2;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'caracs.def_carac3' :
            if ( getHero().infos.caracs.def_carac3 !== undefined )
            {
                returnValue = getHero().infos.caracs.def_carac3;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'caracs.ego' :
            if ( getHero().infos.caracs.ego !== undefined )
            {
                returnValue = getHero().infos.caracs.ego;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'class' :
            if ( getHero().infos.class !== undefined )
            {
                returnValue = getHero().infos.class;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'challenge.amount' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.challenge.amount;
                if ( newValue !== undefined )
                {
                    Hero.energies.challenge.amount = newValue;
                }
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'fight.amount' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.fight.amount;
                if ( newValue !== undefined )
                {
                    Hero.energies.fight.amount = newValue;
                }
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'kiss.amount' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.kiss.amount;
                if ( newValue !== undefined )
                {
                    Hero.energies.kiss.amount = newValue;
                }
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'quest.amount' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.quest.amount;
                if ( newValue !== undefined )
                {
                    Hero.energies.quest.amount = newValue;
                }
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'fight.max_amount' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.fight.max_amount;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'kiss.max_amount' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.kiss.max_amount;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'quest.max_amount' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.quest.max_amount;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'challenge.max_amount' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.challenge.max_amount;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'soft_currency' :
            if ( getHero().infos.soft_currency !== undefined )
            {
                return getHero().infos.soft_currency;
                if ( newValue !== undefined )
                {
                    Hero.infos.soft_currency = newValue;
                }
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'hard_currency' :
            if ( getHero().infos.hard_currency !== undefined )
            {
                returnValue = getHero().infos.hard_currency;
                if ( newValue !== undefined )
                {
                    Hero.infos.hard_currency = newValue;
                }
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'level' :
            if ( getHero().infos.level !== undefined )
            {
                returnValue = getHero().infos.level;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'questing.current_url' :
            if ( getHero().infos.questing.current_url !== undefined )
            {
                returnValue = getHero().infos.questing.current_url;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'questing.id_world' :
            if ( getHero().infos.questing.id_world !== undefined )
            {
                returnValue = getHero().infos.questing.id_world;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'quest.seconds_per_point' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.quest.seconds_per_point;
                break;
            }
            else
            {
                returnValue = 450;
                break;
            }
            break;

        case 'fight.seconds_per_point' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.fight.seconds_per_point;
                break;
            }
            else
            {
                returnValue = 1800;
                break;
            }
            break;

        case 'challenge.seconds_per_point' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.challenge.seconds_per_point;
                break;
            }
            else
            {
                returnValue = 2100;
                break;
            }
            break;

        case 'kiss.seconds_per_point' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.kiss.seconds_per_point;
                break;
            }
            else
            {
                returnValue = 3600;
                break;
            }
            break;

        case 'quest.next_refresh_ts' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.quest.next_refresh_ts;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'fight.next_refresh_ts' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.fight.next_refresh_ts;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'challenge.next_refresh_ts' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.challenge.next_refresh_ts;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;

        case 'kiss.next_refresh_ts' :
            if ( getHero().energies !== undefined )
            {
                returnValue = getHero().energies.kiss.next_refresh_ts;
                break;
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
            break;
        default:
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hero info not found : "+infoSearched);
                logHHAuto(JSON.stringify("Hero info not found : "+infoSearched));
                returnValue = -1;
                break;
            }
    }
    return returnValue;
}

function getGirlsMap()
{
    return unsafeWindow.GirlSalaryManager.girlsMap;
}

function getPage()
{
    try{
        var ob = document.getElementById("hh_nutaku");
        if(ob===undefined || ob === null)
        {
            ob = document.getElementById("hh_gay");
        }
        if(ob===undefined || ob === null)
        {
            ob = document.getElementById("hh_hentai");
        }
        var p=ob.className.match(/.*page-(.*) .*/i)[1];
        if (p=="missions" && $('h4.contests.selected').size()>0)
        {
            return "activities"
        }
        if (p=="missions" && $('h4.pop.selected').size()>0)
        {
            // if on Pop menu
            var t;
            var popList= $("div.pop_list")
            if (popList.attr('style') !='display:none' )
            {
                t = 'main';
            }
            else
            {
                t=$(".pop_thumb_selected").attr("index");
                if (t === undefined)
                {
                    var queryString = window.location.search;
                    var urlParams = new URLSearchParams(queryString);
                    var index = urlParams.get('index');
                    if (index !== null)
                    {
                        addPopToUnableToStart(index,"Unable to go to Pop "+index+" as it is locked.");
                        removePopFromPopToStart(index);
                        t='main';
                    }
                }
            }
            return "powerplace"+t
        }
        else
        {
            return p;
        }
    }
    catch(err)
    {
        return ""
    }
}

function url_add_param(url, param) {
    if (url.indexOf('?') === -1) url += '?';
    else url += '&';
    return url+param;
}

// Retruns true if on correct page.
function gotoPage(page)
{
    var cp=getPage();
    console.log(new Date().toISOString()+":"+getCallerFunction()+":",'going '+cp+'->'+page);
    logHHAuto(JSON.stringify('going '+cp+'->'+page));
    var index;
    var originalPage = page;
    if (page.startsWith('powerplace'))
    {
        index = page.substring('powerplace'.length);
        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Powerplace index : '+index);
        logHHAuto(JSON.stringify('Powerplace index : '+index));
        page = 'powerplace';
    }

    if(getPage() === originalPage)
    {
        if (page=='missions')
        {
            $('h4.missions').each(function(){this.click();});
        }
        if (page=='activities')
        {
            $('h4.contests').each(function(){this.click();});
        }
        if (page=='powerplace')
        {
            $('h4.pop').each(function(){this.click();});
        }
        return true;
    }
    else
    {
        var togoto = undefined;

        // get page path
        switch(page)
        {
            case "home":
                togoto = $("nav div[rel='content'] a:has(.home)").attr("href");
                break;
            case "missions":
                togoto = $("nav div[rel='content'] a:has(.activities)").attr("href");
                break;
            case "powerplace":
                togoto = $("nav div[rel='content'] a:has(.activities)").attr("href");
                break;
            case "activities":
                togoto = $("nav div[rel='content'] a:has(.activities)").attr("href");
                break;
            case "harem":
                togoto = $("nav div[rel='content'] a:has(.harem)").attr("href");
                break;
            case "map":
                togoto = $("nav div[rel='content'] a:has(.map)").attr("href");
                break;
            case "arena":
                togoto =$("nav div[rel='content'] a:has(.arena)").attr("href");
                if (togoto === undefined)
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Arena page not found, disabling arena");
                    logHHAuto(JSON.stringify("Arena page not found, disabling arena"));
                    Storage().HHAuto_Setting_autoArenaBattle = "false";
                    location.reload();
                    return false;
                }
                break;
            case "pachinko":
                togoto = $("nav div[rel='content'] a:has(.pachinko)").attr("href");
                break;
            case "leaderboard":
                togoto = $("nav div[rel='content'] a:has(.leaderboard)").attr("href");
                break;
            case "shop":
                togoto = $("nav div[rel='content'] a:has(.shop)").attr("href");
                break;
            case "quest":
                togoto = getSetHeroInfos('questing.current_url');
                if (togoto.includes("world"))
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","All quests finished, turning off AutoQuest!");
                    logHHAuto(JSON.stringify("All quests finished, turning off AutoQuest!"));
                    Storage().HHAuto_Setting_autoQuest = false;
                    location.reload();
                    return false;
                }
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Current quest page: "+togoto);
                logHHAuto(JSON.stringify("Current quest page: "+togoto));
                break;
            case "champions_map":
                togoto = $("nav div[rel='content'] a:has(.champions)").attr("href");
                break;
            case "season" :
                togoto = "/season.html";
                break;
            case "season-arena" :
                togoto = "/season-arena.html";
                break;
            default:
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Unknown goto page request. No page \'"+page+"\' defined.");
                logHHAuto(JSON.stringify("Unknown goto page request. No page \'"+page+"\' defined."));
        }
        if(togoto != undefined)
        {
            if (page=="missions")
            {
                togoto = url_add_param(togoto, "tab=" + "missions");
            }
            if (page=="activities")
            {
                togoto = url_add_param(togoto, "tab=" + "contests");
            }
            if (page=="powerplace")
            {
                togoto = url_add_param(togoto, "tab=" + "pop");
                if (index != 'main' )
                {
                    togoto = url_add_param(togoto, "index=" + index);
                }
            }

            sessionStorage.HHAuto_Temp_autoLoop = "false";
            console.log(new Date().toISOString()+":"+getCallerFunction()+":",'GotoPage : '+togoto);
            logHHAuto(JSON.stringify('GotoPage : '+togoto));
            window.location = window.location.origin + togoto;
        }
        else
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Couldn't find page path. Page was undefined...");
            logHHAuto(JSON.stringify("Couldn't find page path. Page was undefined..."));
        }
        return false;
    }
}

var proceedQuest = function () {
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":","Starting auto quest.");
    //logHHAuto(JSON.stringify("Starting auto quest."));
    // Check if at correct page.
    if (!gotoPage("quest")) {
        // Click on current quest to naviagte to it.
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to current quest.");
        logHHAuto(JSON.stringify("Navigating to current quest."));
        return;
    }
    $("#popup_message close").click();
    // Get the proceed button type
    var proceedButtonMatch = $("#controls button:not([style='display: none;'])");
    if (proceedButtonMatch.length === 0){proceedButtonMatch = $("#controls button[act='free']");}
    var proceedCostEnergy = Number($("#controls .cost span[cur='*']").text());
    var units = [" ", "K", "M", "G", "T", "P", "E", "Z", "Y"]
    var proceedCostMoney = $("#controls .cost span[cur='$']").text();
    var Unit=proceedCostMoney.substr(-1);
    if (units.includes(Unit))
    {
        proceedCostMoney=Number(proceedCostMoney.split(Unit)[0].replace(/[^0-9]/gi, ''))*(1000**units.indexOf(Unit))
    }
    else
    {
        proceedCostMoney=Number(proceedCostMoney.replace(/[^0-9]/gi, ''));
    }
    var proceedType = proceedButtonMatch.attr("act");

    if (proceedButtonMatch.length === 0)
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Could not find resume button.");
        logHHAuto(JSON.stringify("Could not find resume button."));
    }
    else if (proceedType === "free") {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Proceeding for free.");
        logHHAuto(JSON.stringify("Proceeding for free."));
        proceedButtonMatch.click();
    }
    else if (proceedType === "pay") {
        var energyCurrent = getSetHeroInfos('quest.amount');
        var moneyCurrent = getSetHeroInfos('soft_currency');
        if(proceedCostEnergy <= energyCurrent)
        {
            // We have energy.
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Spending "+proceedCostEnergy+" Energy to proceed.");
            logHHAuto(JSON.stringify("Spending "+proceedCostEnergy+" Energy to proceed."));
        }
        else
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Quest requires "+proceedCostEnergy+" Energy to proceed.");
            logHHAuto(JSON.stringify("Quest requires "+proceedCostEnergy+" Energy to proceed."));
            sessionStorage.HHAuto_Temp_questRequirement = "*"+proceedCostEnergy;
            return;
        }
        if(proceedCostMoney <= moneyCurrent)
        {
            // We have money.
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Spending "+proceedCostMoney+" Money to proceed.");
            logHHAuto(JSON.stringify("Spending "+proceedCostMoney+" Money to proceed."));
        }
        else
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Spending "+proceedCostEnergy+" Energy to proceed.");
            logHHAuto(JSON.stringify("Spending "+proceedCostEnergy+" Energy to proceed."));
            sessionStorage.HHAuto_Temp_questRequirement = "$"+proceedCostMoney;
            return;
        }
        proceedButtonMatch.click();
        sessionStorage.HHAuto_Temp_autoLoop = "false";
        location.reload();
    }
    else if (proceedType === "use_item") {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Proceeding by using X" + Number($("#controls .item span").text()) + " of the required item.");
        logHHAuto(JSON.stringify("Proceeding by using X" + Number($("#controls .item span").text()) + " of the required item."));
        proceedButtonMatch.click();
    }
    else if (proceedType === "battle") {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Proceeding to battle troll...");
        logHHAuto(JSON.stringify("Proceeding to battle troll..."));
        sessionStorage.HHAuto_Temp_questRequirement = "battle";
        // Proceed to battle troll.
        proceedButtonMatch.click();
        sessionStorage.HHAuto_Temp_autoLoop = "false";
        location.reload();
    }
    else if (proceedType === "end_archive") {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Reached end of current archive. Proceeding to next archive.");
        logHHAuto(JSON.stringify("Reached end of current archive. Proceeding to next archive."));
        sessionStorage.HHAuto_Temp_autoLoop = "false";
        proceedButtonMatch.click();
    }
    else if (proceedType === "end_play") {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Reached end of current play. Proceeding to next play.");
        logHHAuto(JSON.stringify("Reached end of current play. Proceeding to next play."));
        sessionStorage.HHAuto_Temp_autoLoop = "false";
        proceedButtonMatch.click();
    }
    else {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Could not identify given resume button.");
        logHHAuto(JSON.stringify("Could not identify given resume button."));
        sessionStorage.HHAuto_Temp_questRequirement = "unknownQuestButton";
    }
};

/**
* Recieves a list of mission objects and returns the mission object to use.
* A mission object looks similar to this :-
* Eg 1:   {"id_member_mission":"256160093","id_mission":"23","duration":"53","cost":"1","remaining_time":"-83057","rewards":[{"classList":{"0":"slot","1":"slot_xp"},"type":"xp","data":28},{"classList":{"0":"slot","1":"slot_SC"},"type":"money","data":277}]}
* Eg 2:   {"id_member_mission":"256160095","id_mission":"10","duration":"53","cost":"1","remaining_time":"-81330","rewards":[{"classList":{"0":"slot","1":"slot_xp"},"type":"xp","data":28},{"classList":{"0":"slot","1":"rare"},"type":"item","data":{"id_item":"23","type":"gift","subtype":"0","identifier":"K3","rarity":"rare","value":"80","carac1":0,"carac2":0,"carac3":0,"endurance":0,"chance":0,"ego":0,"damage":0,"duration":0,"level_mini":"1","name":"Bracelet","Name":"Bracelet","ico":"https://content.haremheroes.com/pictures/items/K3.png","price_sell":5561,"count":1,"id_m_i":[]}}]}
* Eg 3:   {"id_member_mission":"256822795","id_mission":"337","duration":"17172","cost":"144","remaining_time":null,"remaining_cost":"144","rewards":[{"classList":{"0":"slot","1":"slot_HC"},"type":"koban","data":11}]}
* Eg 1 has mission rewards of xp and money.
* Eg 2 has mission rewards of xp and item.
* Eg 3 has mission rewards of koban/hard_currency.
* cost is the koban price for instant complete.
*/
function getSuitableMission(missionsList)
{
    var msn = missionsList[0];
    for(var m in missionsList)
    {
        if(Number(msn.duration) > Number(missionsList[m].duration))
        {
            msn = missionsList[m];
        }
    }
    return msn;
}

// returns boolean to set busy
function doMissionStuff()
{
    if(!gotoPage("missions"))
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to activities page.");
        logHHAuto(JSON.stringify("Navigating to activities page."));
        // return busy
        return true;
    }
    else
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","On activities page.");
        logHHAuto(JSON.stringify("On activities page."));
        if (Storage().HHAuto_Setting_autoMissionC==="true")
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Collecting finished mission's reward.");
            logHHAuto(JSON.stringify("Collecting finished mission's reward."));
            $(".mission_button button:visible[rel='claim']").click();
        }
        // TODO: select new missions and parse reward data from HTML, it's there in data attributes of tags
        var missions = [];
        var allGood = true;
        // parse missions
        $(".mission_object").each(function(idx,missionObject){
            var data = $.data(missionObject).d;
            // Do not list completed missions
            var toAdd=true;
            if(data.remaining_time !== null){
                // This is not a fresh mission
                if(data.remaining_time > 0)
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Unfinished mission detected...("+data.remaining_time+"sec. remaining)");
                    logHHAuto(JSON.stringify("Unfinished mission detected...("+data.remaining_time+"sec. remaining)"));
                    setTimer('nextMissionTime',Number(data.remaining_time)+1);
                    allGood = false;
                    return;
                }
                else{
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Unclaimed mission detected...");
                    logHHAuto(JSON.stringify("Unclaimed mission detected..."));
                    if (Storage().HHAuto_Setting_autoMissionC==="true")
                    {
                        allGood = false;
                    }
                }
                return;
            }
            data.missionObject = missionObject;
            var rewards = [];
            // set rewards
            {
                // get Reward slots
                var slots = missionObject.querySelectorAll(".slot");
                // traverse slots
                $.each(slots,function(idx,slotDiv){
                    var reward = {};
                    // get slot class list
                    reward.classList = slotDiv.classList;
                    // set reward type
                    if(reward.classList.contains("slot_xp"))reward.type = "xp";
                    else if(reward.classList.contains("slot_SC"))reward.type = "money";
                    else if(reward.classList.contains("slot_HC"))reward.type = "koban";
                    else reward.type = "item";
                    // set value if xp
                    if(reward.type === "xp" || reward.type === "money" || reward.type === "koban")
                    {
                        // remove all non numbers and HTML tags
                        try{
                            reward.data = Number(slotDiv.innerHTML.replace(/<.*?>/g,'').replace(/\D/g,''));
                        }
                        catch(e){
                            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Couldn't parse xp/money data.");
                            logHHAuto(JSON.stringify("Couldn't parse xp/money data."));
                            console.log(new Date().toISOString()+":"+getCallerFunction()+":",slotDiv);
                            logHHAuto(JSON.stringify(slotDiv));
                        }
                    }
                    // set item details if item
                    else if(reward.type === "item")
                    {
                        try{
                            reward.data = $.data(slotDiv).d;
                        }
                        catch(e){
                            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Couldn't parse item reward slot details.");
                            logHHAuto(JSON.stringify("Couldn't parse item reward slot details."));
                            console.log(new Date().toISOString()+":"+getCallerFunction()+":",slotDiv);
                            logHHAuto(JSON.stringify(slotDiv));
                            reward.type = "unknown";
                        }
                    }
                    rewards.push(reward);
                });
            }
            data.rewards = rewards;

            missions.push(data);
        });
        if(!allGood){
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Something went wrong, need to retry later...");
            logHHAuto(JSON.stringify("Something went wrong, need to retry later..."));
            // busy
            return true;
        }
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Missions parsed, mission list is:-");
        logHHAuto(JSON.stringify("Missions parsed, mission list is:-"));
        console.log(new Date().toISOString()+":"+getCallerFunction()+":",missions);
        logHHAuto(JSON.stringify(missions));
        if(missions.length > 0)
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Selecting mission from list.");
            logHHAuto(JSON.stringify("Selecting mission from list."));
            var mission = getSuitableMission(missions);
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Selected mission:-");
            logHHAuto(JSON.stringify("Selected mission:-"));
            console.log(new Date().toISOString()+":"+getCallerFunction()+":",mission);
            logHHAuto(JSON.stringify(mission));
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Selected mission duration: "+mission.duration+"sec.");
            logHHAuto(JSON.stringify("Selected mission duration: "+mission.duration+"sec."));
            var missionButton = $(mission.missionObject).find("button:visible").first();
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Mission button of type: "+missionButton.attr("rel"));
            logHHAuto(JSON.stringify("Mission button of type: "+missionButton.attr("rel")));
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Clicking mission button.");
            logHHAuto(JSON.stringify("Clicking mission button."));
            missionButton.click();
            setTimer('nextMissionTime',Number(mission.duration)+1);
        }
        else
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","No missions detected...!");
            logHHAuto(JSON.stringify("No missions detected...!"));
            // get gift
            var ck = sessionStorage['giftleft'];
            var isAfterGift = document.querySelector("#missions .after_gift").style.display === 'block';
            if(!isAfterGift){
                if(ck === 'giftleft')
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Collecting gift.");
                    logHHAuto(JSON.stringify("Collecting gift."));
                    delete sessionStorage['giftleft'];
                    document.querySelector(".end_gift button").click();
                }
                else{
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Refreshing to collect gift...");
                    logHHAuto(JSON.stringify("Refreshing to collect gift..."));
                    sessionStorage['giftleft']='giftleft';
                    location.reload();
                    // is busy
                    return true;
                }
            }
            var time = 0;
            for(var e in unsafeWindow.HHTimers.timers){
                try{if(unsafeWindow.HHTimers.timers[e].$elm.selector.includes("#missions_counter"))
                    time=unsafeWindow.HHTimers.timers[e];
                   }
                catch(e){}
            }
            if (time !== undefined)
            {
                time = time.remainingTime;
            }
            if(time === undefined)
            {
                //try again with different selector
                for(e in unsafeWindow.HHTimers.timers){
                    try{if(unsafeWindow.HHTimers.timers[e].$elm.selector.includes(".after_gift"))
                        time=unsafeWindow.HHTimers.timers[e];
                       }
                    catch(e){}
                }
                if (time !== undefined)
                {
                    time = time.remainingTime;
                }
            }
            if(time === undefined){
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","New mission time was undefined... Setting it manually to 10min.");
                logHHAuto(JSON.stringify("New mission time was undefined... Setting it manually to 10min."));
                time = 10*60;
            }
            setTimer('nextMissionTime',Number(time)+1);
        }
        // not busy
        return false;
    }
}

function moduleDisplayPopID()
{
    if ($('.HHPopIDs').length  > 0) {return}
    $('div.pop_list div[pop_id]').each(function() {
        $(this).prepend('<div class="HHPopIDs">'+$(this).attr('index')+'</div>');
    });
}

function collectAndUpdatePowerPlaces()
{
    //if PopToStart exist bypass function
    var popToStartExist = Storage().HHAuto_Temp_PopToStart?false:true;
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":","startcollect : "+popToStartExist);
    //logHHAuto(JSON.stringify("startcollect : "+popToStartExist));
    if (popToStartExist)
    {
        if(!gotoPage("powerplacemain"))
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to powerplaces main page.");
            logHHAuto(JSON.stringify("Navigating to powerplaces main page."));
            // return busy
            return true;
        }
        else
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","On powerplaces main page.");
            logHHAuto(JSON.stringify("On powerplaces main page."));
            Storage().HHAuto_Temp_Totalpops=$("div.pop_list div[pop_id]").length; //Count how many different POPs there are and store them locally
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","totalpops : "+Storage().HHAuto_Temp_Totalpops);
            logHHAuto(JSON.stringify("totalpops : "+Storage().HHAuto_Temp_Totalpops));
            var newFilter="";
            $("div.pop_list div[pop_id]").each(function(){newFilter=newFilter+';'+$(this).attr('index');});
            //for (var id=1;id<Number(Storage().HHAuto_Temp_Totalpops)+1;id++)
            //{
            //    newFilter=newFilter+';'+id;
            //}
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":","newfilter : "+newFilter.substring(1));
            //logHHAuto(JSON.stringify("newfilter : "+newFilter.substring(1)));
            if (Storage().HHAuto_Setting_autoPowerPlacesAll === "true")
            {
                Storage().HHAuto_Setting_autoPowerPlacesIndexFilter = newFilter.substring(1);
            }

            var filteredPops = Storage().HHAuto_Setting_autoPowerPlacesIndexFilter?Storage().HHAuto_Setting_autoPowerPlacesIndexFilter.split(";"):[];
            var popUnableToStart = Storage().HHAuto_Temp_PopUnableToStart?Storage().HHAuto_Temp_PopUnableToStart.split(";"):[];
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":","filteredPops : "+filteredPops);
            //logHHAuto(JSON.stringify("filteredPops : "+filteredPops));
            var PopToStart=[];
            $("div.pop_thumb[status='pending_reward']").each(function()
                                                             {
                var pop_id = $(this).attr('index');
                //if index is in filter
                if (filteredPops.includes(pop_id) && ! popUnableToStart.includes(pop_id) && newFilter.includes(pop_id))
                {
                    PopToStart.push(Number(pop_id));
                }
            });
            //collect all
            var rewardQuery="div#rewards_popup button.blue_button_L";
            $("button[rel='pop_thumb_claim'].purple_button_L").each(function()
                                                                    {
                this.click();
                if ($(rewardQuery).length >0 )
                {
                    $(rewardQuery).click();
                }
            });

            //get all already started Pop timers
            var currIndex;
            var currTime;
            var minTime = -1;
            var maxTime = -1;
            var e;


            clearTimer('minPowerPlacesTime');
            clearTimer('maxPowerPlacesTime');
            for(e in unsafeWindow.HHTimers.timers){
                try{
                    if(unsafeWindow.HHTimers.timers[e].$elm.selector.includes(".pop_thumb"))
                    {
                        //console.log(new Date().toISOString()+":"+getCallerFunction()+":","found timer "+HHTimers.timers[e].$elm.context.outerHTML);
                        //logHHAuto(JSON.stringify("found timer "+HHTimers.timers[e].$elm.context.outerHTML));
                        currIndex = $(HHTimers.timers[e].$elm.context.outerHTML).attr('index');
                        //if index is in filter
                        if (filteredPops.includes(currIndex) && ! popUnableToStart.includes(currIndex))
                        {
                            currTime=unsafeWindow.HHTimers.timers[e].remainingTime;
                            if (minTime === -1 || currTime === -1 || minTime>currTime)
                            {
                                minTime = currTime;

                            }
                            if (maxTime === -1 || maxTime<currTime)
                            {
                                maxTime = currTime;
                            }
                        }
                    }
                }
                catch(e){}
            }

            if (minTime != -1)
            {
                if ( minTime > 20*60 )
                {
                    //force check of PowerPlaces every 20 mins
                    setTimer('minPowerPlacesTime',Number(20*60)+1);
                }
                else
                {
                    setTimer('minPowerPlacesTime',Number(minTime)+1);
                }
            }
            else
            {
                setTimer('minPowerPlacesTime',60);
            }
            if (maxTime != -1)
            {
                setTimer('maxPowerPlacesTime',Number(maxTime)+1);
            }
            //building list of Pop to start
            $("div.pop_thumb[status='can_start']").each(function()
                                                        {
                var pop_id = $(this).attr('index');
                //if index is in filter
                if (filteredPops.includes(pop_id) && ! popUnableToStart.includes(pop_id))
                {
                    PopToStart.push(Number(pop_id));
                    clearTimer('minPowerPlacesTime');
                }
            });
            if (PopToStart.length === 0)
            {
                Storage().removeItem('HHAuto_Temp_PopUnableToStart');
            }
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","build popToStart : "+PopToStart);
            logHHAuto(JSON.stringify("build popToStart : "+PopToStart));
            Storage().HHAuto_Temp_PopToStart = JSON.stringify(PopToStart);
            return false;
        }
    }
    else
    {
        return false;
    }
}


function waitForKeyElements (selectorTxt,maxMilliWaitTime)
{
    var targetNodes;
    var timer= new Date().getTime() + maxMilliWaitTime;
    targetNodes = jQuery(selectorTxt);

    while ( targetNodes.length === 0 && Math.ceil(timer)-Math.ceil(new Date().getTime()) > 0)
    {
        targetNodes = jQuery(selectorTxt);
    }
    if (targetNodes.length === 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function cleanTempPopToStart()
{
    Storage().removeItem('HHAuto_Temp_PopUnableToStart');
    Storage().removeItem('HHAuto_Temp_popToStart');
}

function removePopFromPopToStart(index)
{
    var epop;
    var popToSart;
    var newPopToStart;
    popToSart= Storage().HHAuto_Temp_PopToStart?JSON.parse(Storage().HHAuto_Temp_PopToStart):[];
    newPopToStart=[];
    for (epop of popToSart)
    {
        if (epop != index)
        {
            newPopToStart.push(epop);
        }
    }
    Storage().HHAuto_Temp_PopToStart = JSON.stringify(newPopToStart);
}

function addPopToUnableToStart(popIndex,message)
{
    var popUnableToStart=Storage().HHAuto_Temp_PopUnableToStart?Storage().HHAuto_Temp_PopUnableToStart:"";
    console.log(new Date().toISOString()+":"+getCallerFunction()+":",message);
    logHHAuto(JSON.stringify(message));
    if (popUnableToStart === "")
    {
        Storage().HHAuto_Temp_PopUnableToStart = String(popIndex);
    }
    else
    {
        Storage().HHAuto_Temp_PopUnableToStart = popUnableToStart+";"+String(popIndex);
    }
}

// returns boolean to set busy
function doPowerPlacesStuff(index)
{
    if(!gotoPage("powerplace"+index))
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to powerplace"+index+" page.");
        logHHAuto(JSON.stringify("Navigating to powerplace"+index+" page."));
        // return busy
        return true;
    }
    else
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","On powerplace"+index+" page.");
        logHHAuto(JSON.stringify("On powerplace"+index+" page."));

        //getting reward in case failed on main page
        var querySelectorText = "button[rel='pop_claim']";
        if ($(querySelectorText).length>0)
        {
            $(querySelectorText).click();
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Claimed powerplace"+index);
            logHHAuto(JSON.stringify("Claimed powerplace"+index));
        }

        if ($("div.pop_right_part div.no_girls_message").length >0)
        {
            addPopToUnableToStart(index,"Unable to start Pop "+index+" no girls available.");
            removePopFromPopToStart(index);
            return false;
        }
        querySelectorText = "button.blue_button_L[rel='pop_auto_assign']:not([disabled])"
        if ($(querySelectorText).length>0)
        {
            document.querySelector(querySelectorText).click();
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Autoassigned powerplace"+index);
            logHHAuto(JSON.stringify("Autoassigned powerplace"+index));
        }
        querySelectorText = "button.blue_button_L[rel='pop_action']:not([disabled])"
        if ($(querySelectorText).length>0)
        {
            document.querySelector(querySelectorText).click();
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Started powerplace"+index);
            logHHAuto(JSON.stringify("Started powerplace"+index));
        }
        else if ($("button.blue_button_L[rel='pop_action'][disabled]").length >0 && $("div.grid_view div.pop_selected").length >0)
        {
            addPopToUnableToStart(index,"Unable to start Pop "+index+" not enough girls available.");
            removePopFromPopToStart(index);

            return false;
        }


        // need to get next powerplaces timer data
        var time = 0;
        for(var e in unsafeWindow.HHTimers.timers){
            try
            {
                if(unsafeWindow.HHTimers.timers[e].$elm.selector.startsWith(".pop_central_part"))
                    time=unsafeWindow.HHTimers.timers[e];
            }
            catch(e){}
        }
        time = time.remainingTime;
        try{
            if(time === undefined)
            {
                //try again with different selector
                time = undefined;
                for(e in unsafeWindow.HHTimers.timers){
                    if(unsafeWindow.HHTimers.timers[e].$elm && unsafeWindow.HHTimers.timers[e].$elm.selector.startsWith(".pop_remaining"))
                        // get closest time
                        if(!(unsafeWindow.HHTimers.timers[e].remainingTime>time))
                            time=unsafeWindow.HHTimers.timers[e].remainingTime;
                }
            }
        }
        catch(e){}
        if(time === undefined){
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","New powerplace time was undefined... Setting it manually to 30secs.");
            logHHAuto(JSON.stringify("New powerplace time was undefined... Setting it manually to 30secs."));
            time = 30;
        }
        else
        {
            removePopFromPopToStart(index);
        }
        // Not busy
        return false;
    }
}

// returns boolean to set busy
function doContestStuff()
{
    if(!gotoPage("activities"))
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to activities page.");
        logHHAuto(JSON.stringify("Navigating to activities page."));
        // return busy
        return true;
    }
    else
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","On activities page.");
        logHHAuto(JSON.stringify("On activities page."));
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Collecting finished contests's reward.");
        logHHAuto(JSON.stringify("Collecting finished contests's reward."));
        $(".contest .ended button[rel='claim']").click();
        // need to get next contest timer data
        var time = 0;
        for(var e in unsafeWindow.HHTimers.timers){
            try{if(unsafeWindow.HHTimers.timers[e].$barElm/*.selector.includes(".contest_timer")*/)
                time=unsafeWindow.HHTimers.timers[e];
               }
            catch(e){}
        }
        time = time.remainingTime;
        try{if(time === undefined)
        {
            //try again with different selector
            time = undefined;
            for(e in unsafeWindow.HHTimers.timers){
                if(unsafeWindow.HHTimers.timers[e].$elm && unsafeWindow.HHTimers.timers[e].$elm[0].className.includes("contest_timer"))
                    // get closest time
                    if(!(unsafeWindow.HHTimers.timers[e].remainingTime>time))
                        time=unsafeWindow.HHTimers.timers[e].remainingTime;
            }
        }}catch(e){}
        if(time === undefined){
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","New contest time was undefined... Setting it manually to 10min.");
            logHHAuto(JSON.stringify("New contest time was undefined... Setting it manually to 10min."));
            time = 10*60;
        }
        setTimer('nextContestTime',Number(time)+1);
        // Not busy
        return false;
    }
}

function randomInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var CollectMoney = function()
{
    var Clicked=[];
    var ToClick=[];

    function ClickThem()
    {
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Need to click: ',ToClick.length);
        //logHHAuto(JSON.stringify('Need to click: ',ToClick.length));
        if (ToClick.length>0)
        {
            //console.log('clicking N ',ToClick[0].formAction.split('/').last())
            $(ToClick[0]).click();
            ToClick.shift();
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'will click again');
            //logHHAuto(JSON.stringify('will click again'));
            setTimeout(ClickThem,randomInterval(300,900));

            window.top.postMessage({ImAlive:true},'*');
        }
        else
        {
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'nothing to click, checking data');
            //logHHAuto(JSON.stringify('nothing to click, checking data'));
            CollectData();
        }
    }

    function CollectData()
    {
        var btns=$("#harem_whole #harem_left .salary:not('.loads') button");
        //console.log('buttons: ',btns.size())
        btns.each(function (index, element) {
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",index,element.formAction);
            //logHHAuto(JSON.stringify(index,element.formAction));
            var gid=Number(element.parentElement.parentElement.parentElement.getAttribute('girl'));
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'checking '+gid);
            //logHHAuto(JSON.stringify('checking '+gid));
            if (!Clicked.includes(gid))
            {
                Clicked.push(gid);
                ToClick.push(element);
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'added! ',Clicked,ToClick);
                //logHHAuto(JSON.stringify('added! ',Clicked,ToClick));
            }
        });

        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Collected Data: ',Clicked,ToClick);
        logHHAuto(JSON.stringify('Collected Data: ',Clicked,ToClick));

        if (ToClick.length>0)
        {
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'clicking!');
            //logHHAuto(JSON.stringify('clicking!'));
            setTimeout(ClickThem,randomInterval(150,500));
        }
        else//nothing to collect
        {
            var closestTime = undefined;
            var closestGirl = 0;
            var gMap = getGirlsMap();
            if(gMap === undefined)
            {
                // error
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Girls Map was undefined...! Error, manually setting salary time to 2 min.");
                logHHAuto(JSON.stringify("Girls Map was undefined...! Error, manually setting salary time to 2 min."));
                closestTime = 2*60;
            }
            else
            {
                try{
                    // Calc. closest time
                    for(var key in gMap)
                    {
                        // undefined comparision is always false so first iteration is false, hence the not(!)
                        if(!(closestTime<gMap[key].gData.pay_in) && !Clicked.includes(key) && gMap[key].gData.pay_in!=0)
                        {
                            closestTime = gMap[key].gData.pay_in;
                            closestGirl = key;
                        }
                    }
                }
                catch(exp){
                    // error
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Girls Map had undefined property...! Error, manually setting salary time to 2 min.");
                    logHHAuto(JSON.stringify("Girls Map had undefined property...! Error, manually setting salary time to 2 min."));
                    closestTime = 2*60;
                }
            }
            if(closestTime === undefined)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","closestTime was undefined...! Error, manually setting salary time to 2 min.");
                logHHAuto(JSON.stringify("closestTime was undefined...! Error, manually setting salary time to 2 min."));
                closestTime = 2*60;
            }
            var st=Number(Storage().HHAuto_Setting_autoSalaryTimer?Storage().HHAuto_Setting_autoSalaryTimer:"120");
            if(closestTime <= st )
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","closestTime is "+closestTime+" ("+closestGirl+")");
                logHHAuto(JSON.stringify("closestTime is "+closestTime+" ("+closestGirl+")"));
                closestTime = st;
            }
            setTimer('nextSalaryTime',Number(closestTime)+1);
            sessionStorage.HHAuto_Temp_autoLoop = "true";
            setTimeout(autoLoop, Number(Storage().HHAuto_Temp_autoLoopTimeMili));
        }
    }

    CollectData();
}

var getSalary = function () {
    try {
        if(getPage() == "harem")
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Detected Harem Screen. Fetching Salary");
            logHHAuto(JSON.stringify("Detected Harem Screen. Fetching Salary"));
            is_cheat_click=function(e) {
                return false;
            };
            sessionStorage.HHAuto_Temp_autoLoop = "false";
            CollectMoney();
            // return busy
            return true;
        }
        else if (getPage() == "home")
        {
            var salaryButton = $("#collect_all_container button[id='collect_all']")
            var salaryToCollect = salaryButton.attr("style")==="display: inline-block;"?true:false;
            var getButtonClass = salaryButton.attr("class");
            if (salaryToCollect)
            {
                if (getButtonClass === "blue_button_L")
                {
                    is_cheat_click=function(e) {
                        return false;
                    };
                    salaryButton.click();
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Collected all Premium salary');
                    logHHAuto(JSON.stringify('Collected all Premium salary'));
                    setTimer('nextSalaryTime',Number(Storage().HHAuto_Setting_autoSalaryTimer?Storage().HHAuto_Setting_autoSalaryTimer:"120")+1);
                    return true;
                }
                else if ( getButtonClass === "orange_button_L")
                {
                    // Not at Harem screen then goto the Harem screen.
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to Harem window.");
                    logHHAuto(JSON.stringify("Navigating to Harem window."));
                    gotoPage("harem");
                    // return busy
                    return true;

                }
                else
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Unknown salary button color : "+getButtonClass);
                    logHHAuto(JSON.stringify("Unknown salary button color : "+getButtonClass));
                    setTimer('nextSalaryTime',Number(Storage().HHAuto_Setting_autoSalaryTimer?Storage().HHAuto_Setting_autoSalaryTimer:"120")+1);
                }
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","No salary to collect");
                logHHAuto(JSON.stringify("No salary to collect"));
                setTimer('nextSalaryTime',Number(Storage().HHAuto_Setting_autoSalaryTimer?Storage().HHAuto_Setting_autoSalaryTimer:"120")+1);
            }
        }
        else
        {
            // Not at Harem screen then goto the Harem screen.
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to Home window.");
            logHHAuto(JSON.stringify("Navigating to Home window."));
            gotoPage("home");
            return true;
        }

    }
    catch (ex) {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Could not collect salary... " + ex);
        logHHAuto(JSON.stringify("Could not collect salary... " + ex));
        // return not busy
        return false;
    }
};

var doStatUpgrades=function()
{
    //Stats?
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'stats');
    //logHHAuto(JSON.stringify('stats'));
    var Hero=getHero();
    var level=getSetHeroInfos('level');
    var stats=[getSetHeroInfos('carac1'),getSetHeroInfos('carac2'),getSetHeroInfos('carac3')];
    var money=getSetHeroInfos('soft_currency');
    var count=0;
    var M=Storage().HHAuto_Setting_autoStats?Number(Storage().HHAuto_Setting_autoStats):500000000;
    var MainStat=stats[getSetHeroInfos('class')-1];
    var Limit=getSetHeroInfos('level')*30;//getSetHeroInfos('level')*19+Math.min(getSetHeroInfos('level'),25)*21;
    var carac=getSetHeroInfos('class');
    var mp=0;
    var mults=[60,30,10,1];
    for (var car=0; car<3; car++)
    {
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'stat '+carac);
        //logHHAuto(JSON.stringify('stat '+carac));
        var s=stats[carac-1];
        for (var mu=0;mu<5;mu++)
        {
            var mult=mults[mu];
            var price = 5+s*2+(Math.max(0,s-2000)*2)+(Math.max(0,s-4000)*2)+(Math.max(0,s-6000)*2)+(Math.max(0,s-8000)*2);
            price*=mult;
            if (carac==getSetHeroInfos('class'))
            {
                mp=price;
            }
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'money: '+money+' stat'+carac+': '+stats[carac-1]+' price: '+price);
            //logHHAuto(JSON.stringify('money: '+money+' stat'+carac+': '+stats[carac-1]+' price: '+price));
            if ((stats[carac-1]+mult)<=Limit && (money-price)>M && (carac==getSetHeroInfos('class') || price<mp/2 || (MainStat+mult)>Limit))
            {
                count++;
                console.log(new Date().toISOString()+":"+getCallerFunction()+":",'money: '+money+' stat'+carac+': '+stats[carac-1]+' [+'+mult+'] price: '+price);
                logHHAuto(JSON.stringify('money: '+money+' stat'+carac+': '+stats[carac-1]+' [+'+mult+'] price: '+price));
                money-=price;
                var params = {
                    class: "Hero",
                    carac: carac,
                    action: "update_stats",
                    nb: mult
                };
                hh_ajax(params, function(data) {

                });
                break;
            }
        }
        carac=(carac+1)%3+1;
    }
}

var doShopping=function()
{
    try
    {

        var Hero=getHero();
        var MS='carac'+getSetHeroInfos('class');
        var SS1='carac'+(getSetHeroInfos('class')%3+1);
        var SS2='carac'+((getSetHeroInfos('class')+1)%3+1);
        var money=getSetHeroInfos('soft_currency');
        var kobans=getSetHeroInfos('hard_currency');

        try
        {
            var shop=JSON.parse(sessionStorage.HHAuto_Temp_storeContents);
        }
        catch(wtf)
        {
            sessionStorage.HHAuto_Temp_charLevel=0;
            return;
        }

        if (!sessionStorage.HHAuto_Temp_haveAff)
        {
            sessionStorage.HHAuto_Temp_charLevel=0;
            return;
        }

        var LGM=Number(Storage().HHAuto_Setting_autoLGM);
        var EGM=Number(Storage().HHAuto_Setting_autoEGM);
        var LGR=Number(Storage().HHAuto_Setting_autoLGR);
        var Exp=Number(Storage().HHAuto_Setting_autoExp);
        var Aff=Number(Storage().HHAuto_Setting_autoAff);
        var MaxAff=Number(Storage().HHAuto_Setting_MaxAff);
        var MaxExp=Number(Storage().HHAuto_Setting_MaxExp);
        var HaveAff=Number(sessionStorage.HHAuto_Temp_haveAff);
        var HaveExp=Number(sessionStorage.HHAuto_Temp_haveExp);


        if (Storage().HHAuto_Setting_autoLGMW==="true" || Storage().HHAuto_Setting_autoLGRW==="true" )//|| Storage().HHAuto_Setting_autoEGMW==="true")
        {
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'items');
            //logHHAuto(JSON.stringify('items'));
            var Was=shop[0].length;
            for (var n0=shop[0].length-1;n0>=0;n0--)
            {

                if (Storage().HHAuto_Setting_autoLGMW==="true" && money>=LGM+Number(shop[0][n0].price) && shop[0][n0][MS]>0 && shop[0][n0][SS1]==0 && shop[0][n0][SS2]==0 && shop[0][n0].chance==0 && shop[0][n0].endurance==0 && shop[0][n0].rarity=='legendary'||
                    //Storage().HHAuto_Setting_autoEGMW==="true" && money>=EGM+Number(shop[0][n0].price) && shop[0][n0][MS]>0 && shop[0][n0][SS1]==0 && shop[0][n0][SS2]==0 && shop[0][n0].chance==0 && shop[0][n0].endurance==0 && shop[0][n0].rarity=='epic'||
                    Storage().HHAuto_Setting_autoLGRW==="true" && money>=LGR+Number(shop[0][n0].price) && shop[0][n0][MS]>0 && shop[0][n0][SS1]>0 && shop[0][n0][SS2]>0 && shop[0][n0].rarity=='legendary')
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":",'wanna buy ',shop[0][n0]);
                    logHHAuto(JSON.stringify('wanna buy ',shop[0][n0]));
                    if (money>=shop[0][n0].price)
                    {
                        console.log(new Date().toISOString()+":"+getCallerFunction()+":","yay?");
                        logHHAuto(JSON.stringify("yay?"));
                        money-=Number(shop[0][n0].price);
                        var params0 = {
                            class: "Item",
                            action: "buy",
                            id_item: shop[0][n0].id_item,
                            type: "armor",
                            who: 1,
                            id_skin: shop[0][n0].id_skin,
                            id_equip: shop[0][n0].id_equip
                        };
                        hh_ajax(params0, function(data) {

                        });
                        shop[0].splice(n0,1);
                    }
                    else
                    {
                        console.log(new Date().toISOString()+":"+getCallerFunction()+":","but can't");
                        logHHAuto(JSON.stringify("but can't"));
                    }
                }
            }
            if (shop[0].length==0 && Was>0)
            {
                sessionStorage.HHAuto_Temp_charLevel=0;
            }
        }

        var boosterFilter = Storage().HHAuto_Setting_autoBuyBoostersFilter.split(";");
        if (Storage().HHAuto_Setting_autoBuyBoosters==="true" && boosterFilter.length > 0)
        {
            Was=shop[1].length;

            for (var boost of boosterFilter)
            {
                for (var n1=shop[1].length-1;n1>=0;n1--)
                {
                    if (kobans>=Number(Storage().HHAuto_Setting_kobanBank)+Number(shop[1][n1].price_hc) && shop[1][n1].identifier == boost  && shop[1][n1].rarity=='legendary')
                    {
                        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'wanna buy ',shop[1][n1]);
                        logHHAuto(JSON.stringify('wanna buy ',shop[1][n1]));
                        if (kobans>=Number(shop[1][n1].price_hc))
                        {
                            console.log(new Date().toISOString()+":"+getCallerFunction()+":","yay?");
                            logHHAuto(JSON.stringify("yay?"));
                            kobans-=Number(shop[1][n1].hc_price);
                            var params1 = {
                                class: "Item",
                                action: "buy",
                                id_item: shop[1][n1].id_item,
                                type: "booster",
                                who: 1
                            };
                            hh_ajax(params1, function(data) {

                            });
                            shop[1].splice(n1,1);
                        }
                        else
                        {
                            console.log(new Date().toISOString()+":"+getCallerFunction()+":","but can't");
                            logHHAuto(JSON.stringify("but can't"));
                        }
                    }
                }
            }

            if (shop[1].length==0 && Was>0)
            {
                sessionStorage.HHAuto_Temp_charLevel=0;
            }
        }

        if (Storage().HHAuto_Setting_autoAffW==="true" && HaveAff<MaxAff)
        {
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'gifts');
            //logHHAuto(JSON.stringify('gifts'));
            Was=shop[2].length;
            for (var n2=shop[2].length-1;n2>=0;n2--)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":",'wanna buy ',shop[2][n2]);
                logHHAuto(JSON.stringify('wanna buy ',shop[2][n2]));
                if (money>=Aff+Number(shop[2][n2].price) && money>=Number(shop[2][n2].price))
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","yay?");
                    logHHAuto(JSON.stringify("yay?"));
                    money-=Number(shop[2][n2].price);
                    var params2 = {
                        class: "Item",
                        action: "buy",
                        id_item: shop[2][n2].id_item,
                        type: "gift",
                        who: 1
                    };
                    hh_ajax(params2, function(data) {

                    });
                    shop[2].splice(n2,1);
                }
                else
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","but can't");
                    logHHAuto(JSON.stringify("but can't"));
                }
            }
            if (shop[2].length==0 && Was>0)
            {
                sessionStorage.HHAuto_Temp_charLevel=0;
            }
        }

        if (Storage().HHAuto_Setting_autoExpW==="true" && HaveExp<MaxExp)
        {
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'books');
            //logHHAuto(JSON.stringify('books'));
            Was=shop[3].length;
            for (var n3=shop[3].length-1;n3>=0;n3--)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":",'wanna buy ',shop[3][n3]);
                logHHAuto(JSON.stringify('wanna buy ',shop[3][n3]));
                if (money>=Exp+Number(shop[3][n3].price) && money>=Number(shop[3][n3].price))
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","yay?");
                    logHHAuto(JSON.stringify("yay?"));
                    money-=Number(shop[3][n3].price);
                    var params3 = {
                        class: "Item",
                        action: "buy",
                        id_item: shop[3][n3].id_item,
                        type: "potion",
                        who: 1
                    };
                    hh_ajax(params3, function(data) {

                    });
                    shop[3].splice(n3,1);
                }
                else
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","but can't");
                    logHHAuto(JSON.stringify("but can't"));
                }
            }
            if (shop[3].length==0 && Was>0)
            {
                sessionStorage.HHAuto_Temp_charLevel=0;
            }
        }
        sessionStorage.HHAuto_Temp_storeContents=JSON.stringify(shop);
        //unsafeWindow.Hero.infos.soft_currency=money;
        getSetHeroInfos('soft_currency',money);
    }
    catch (ex)
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":",ex);
        logHHAuto(JSON.stringify(ex));
        sessionStorage.HHAuto_Temp_charLevel=0;
    }
}

var doBossBattle = function()
{
    var currentPower = getSetHeroInfos('fight.amount');
    if(currentPower < 1)
    {
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":","No power for battle.");
        //logHHAuto(JSON.stringify("No power for battle."));
        return;
    }

    var TTF;
    if (Storage().HHAuto_Setting_plusEvent==="true" && (!checkTimer("eventGoing") || !checkTimer("eventMythicGoing")) && sessionStorage.HHAuto_Temp_eventTroll)
    {
        TTF=sessionStorage.HHAuto_Temp_eventTroll;
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Event troll fight");
        logHHAuto(JSON.stringify("Event troll fight"));
    }
    else if(Storage().HHAuto_Temp_trollToFight !== undefined && !isNaN(Storage().HHAuto_Temp_trollToFight) && Storage().HHAuto_Temp_trollToFight !== "0")
    {
        TTF=Storage().HHAuto_Temp_trollToFight;
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Custom troll fight.");
        logHHAuto(JSON.stringify("Custom troll fight."));
    }
    else
    {
        TTF=getSetHeroInfos('questing.id_world')-1;
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Last troll fight");
        logHHAuto(JSON.stringify("Last troll fight"));
    }

    if (Storage().HHAuto_Temp_autoTrollBattleSaveQuest == "true")
    {
        TTF=getSetHeroInfos('questing.id_world')-1;
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Last troll fight for quest item.");
        logHHAuto(JSON.stringify("Last troll fight for quest item."));
        Storage().HHAuto_Temp_autoTrollBattleSaveQuest = "false";
    }

    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Fighting troll N "+TTF);
    logHHAuto(JSON.stringify("Fighting troll N "+TTF));
    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Going to crush: "+Trollz[Number(TTF)]);
    logHHAuto(JSON.stringify("Going to crush: "+Trollz[Number(TTF)]));

    // Battles the latest boss.
    // Navigate to latest boss.
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'!!!!!',window.location.href,window.location.href=="/battle.html?id_troll=" + TTF);
    //logHHAuto(JSON.stringify('!!!!!',window.location.href,window.location.href=="/battle.html?id_troll=" + TTF));
    if(window.location.pathname=="/battle.html" && window.location.search=="?id_troll=" + TTF)
    {
        // On the battle screen.
        CrushThem();
    }
    else
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to chosen Troll.");
        logHHAuto(JSON.stringify("Navigating to chosen Troll."));
        sessionStorage.HHAuto_Temp_autoLoop = "false";
        location.href = "/battle.html?id_troll=" + TTF;
        return true;
    }
};

var doChampionStuff=function()
{
    var page=getPage();
    if (page=='champions')
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'on champion page');
        logHHAuto(JSON.stringify('on champion page'));
        if ($('button[rel=perform].blue_button_L').length==0)
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Something is wrong!');
            logHHAuto(JSON.stringify('Something is wrong!'));
            gotoPage("home");
            return true;
        }
        else
        {
            var TCount=Number($('div.input-field > span')[1].innerText.split(' / ')[1]);
            var ECount= getSetHeroInfos('quest.amount');
            console.log("T:"+TCount+" E:"+ECount+" "+(Storage().HHAuto_Setting_autoChampsUseEne==="true"))
            if ( TCount==0)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","No tickets!");
                logHHAuto(JSON.stringify("No tickets!"));
                setTimer('nextChampionTime',15*60);
                return false;
            }
            else
            {
                if (TCount!=0)
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Using ticket");
                    logHHAuto(JSON.stringify("Using ticket"));
                    $('button[rel=perform].blue_button_L').click();
                }
                setTimeout(function(){gotoPage('champions_map');},500);
                return true;
            }
        }
    }
    else if (page=='champions_map')
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'on champion map');
        logHHAuto(JSON.stringify('on champion map'));
        var Filter=Storage().HHAuto_Setting_autoChampsFilter.split(';').map(s=>Number(s));
        var minTime = -1;
        var currTime;
        var e;

        for (let i=0;i<$('span.stage-bar-tier').length;i++)
        {
            let Impression=$('span.stage-bar-tier')[i].getAttribute("hh_title");
            let Started=Impression.split('/')[0]!="0";
            let OnTimerOld=$($('a.champion-lair div.champion-lair-name')[i+1]).find('div[rel=timer]').length>0
            let timerNew=Number($($('a.champion-lair div.champion-lair-name')[i+1]).find('div#championTimer').attr('timer'));
            let OnTimerNew=false;
            if ( ! isNaN(timerNew) && (timerNew > Math.ceil(new Date().getTime()/1000)))
            {
                OnTimerNew = true;
            }

            let OnTimer= OnTimerOld || OnTimerNew;
            let Filtered=Filter.includes(i+1);
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Champion "+(i+1)+" ["+Impression+"]"+(Started?" Started;":" Not started;")+(OnTimer?" on timer;":" not on timer;")+(Filtered?" Included in filter":" Excluded from filter"));
            logHHAuto(JSON.stringify("Champion "+(i+1)+" ["+Impression+"]"+(Started?" Started;":" Not started;")+(OnTimer?" on timer;":" not on timer;")+(Filtered?" Included in filter":" Excluded from filter")));

            if (Started && !OnTimer && Filtered)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Let's do him!");
                logHHAuto(JSON.stringify("Let's do him!"));
                window.location = window.location.origin + '/champions/'+(i+1);
                return true;
            }
        }

        console.log(new Date().toISOString()+":"+getCallerFunction()+":","No good candidate");
        logHHAuto(JSON.stringify("No good candidate"));
        currTime = -1;
        $('a.champion-lair div.champion-lair-name div#championTimer').each(function()
                                                                           {
            var timer = $(this).attr('timer');
            var currTime=Number(timer)-Math.ceil(new Date().getTime()/1000);

            if (minTime === -1 || currTime === -1 || minTime>currTime)
            {
                minTime = currTime;
            }
        });

        for(e in unsafeWindow.HHTimers.timers){
            try
            {
                if(unsafeWindow.HHTimers.timers[e].$elm[0].offsetParent.className === "champion-lair")
                {
                    currTime=unsafeWindow.HHTimers.timers[e].remainingTime;
                    if (minTime === -1 || currTime === -1 || minTime>currTime)
                    {
                        minTime = currTime;
                    }
                }
            }
            catch(e){}

        }
        //fetching min


        if (minTime === -1 || minTime > 30*60)
        {
            setTimer('nextChampionTime',15*60);
        }
        else
        {
            setTimer('nextChampionTime',minTime);
        }
        return false;
    }
    else
    {
        gotoPage('champions_map');
        return true;
    }
}


// Numbers: rounding to K, M, G and T
function nRounding(num, digits, updown) {
    var power = [
        { value: 1, symbol: '' },
        { value: 1E3, symbol: 'K' },
        { value: 1E6, symbol: 'M' },
        { value: 1E9, symbol: 'B' },
        { value: 1E12, symbol: 'T' },
    ];
    var i;
    for (i = power.length - 1; i > 0; i--) {
        if (num >= power[i].value) {
            break;
        }
    }
    if (updown == 1) {
        return (Math.ceil(num / power[i].value * Math.pow(10, digits)) / Math.pow(10, digits)).toFixed(digits) + power[i].symbol;
    }
    else if (updown == 0) {
        return (Math.round(num / power[i].value * Math.pow(10, digits)) / Math.pow(10, digits)).toFixed(digits) + power[i].symbol;
    }
    else if (updown == -1) {
        return (Math.floor(num / power[i].value * Math.pow(10, digits)) / Math.pow(10, digits)).toFixed(digits) + power[i].symbol;
    }
}
/* ============
    calculatePower Credit Raphael, 1121, Sluimerstand, shal (Hentai Heroes++ (OCD) 0.12.2)
   ============ */

function calculatePower(playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponentName,opponentEgo,opponentDef,opponentAtk,opponentClass,opponentAlpha,opponentBeta,opponentOmega,opponentExcitement)
{

    var opponentBetaAdd;
    var opponentOmegaAdd;
    var opponentProcHCBase;
    var opponentProcHCAddOrgasm1;
    var opponentProcHCAddOrgasm2;
    var opponentProcHCAddOrgasm3;
    var opponentProcCH;
    var opponentProcKH;
    var opponentAlphaClass;
    var playerOrgasm;
    var playerOrgasmCount;
    var opponentOrgasm;
    var opponentOrgasmCount;
    var playerEgoCheck;
    var playerBetaAdd;
    var playerOmegaAdd;
    var matchRating;


    if (playerClass == 'class1') {
        playerBetaAdd = playerBeta.caracs.carac1;
        playerOmegaAdd = playerOmega.caracs.carac1;
    }
    if (playerClass == 'class2') {
        playerBetaAdd = playerBeta.caracs.carac2;
        playerOmegaAdd = playerOmega.caracs.carac2;
    }
    if (playerClass == 'class3') {
        playerBetaAdd = playerBeta.caracs.carac3;
        playerOmegaAdd = playerOmega.caracs.carac3;
    }

    if (opponentClass == 'class1') {
        opponentBetaAdd = opponentBeta.caracs.carac1;
        opponentOmegaAdd = opponentOmega.caracs.carac1;
    }
    if (opponentClass == 'class2') {
        opponentBetaAdd = opponentBeta.caracs.carac2;
        opponentOmegaAdd = opponentOmega.caracs.carac2;
    }
    if (opponentClass == 'class3') {
        opponentBetaAdd = opponentBeta.caracs.carac3;
        opponentOmegaAdd = opponentOmega.caracs.carac3;
    }



    //Calculate opponent proc values, determine applicable alpha class and adjust starting ego values for proc
    opponentProcHCBase = Math.round(opponentAtk * 0.5);
    opponentProcHCAddOrgasm1 = Math.round(opponentAtk * 0.25);
    opponentProcHCAddOrgasm2 = Math.round(opponentBetaAdd * 1.3 * 0.75);
    opponentProcHCAddOrgasm3 = Math.round(opponentOmegaAdd * 1.3 * 0.75);
    opponentProcCH = opponentDef * 2;
    opponentProcKH = Math.round(opponentEgo * 0.1);
    opponentAlphaClass = opponentAlpha.class;

    if (opponentAlphaClass == '1') {
        playerEgo -= opponentProcHCBase;
    }
    if (opponentAlphaClass == '2') {
        opponentEgo += opponentProcCH;
    }
    if (opponentAlphaClass == '3') {
        opponentEgo += opponentProcKH;
    }

    //Log opponent name and starting egos for sim
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Simulation log for: ' + opponentName);
    //logHHAuto(JSON.stringify('Simulation log for: ' + opponentName));
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Starting Egos adjusted for worst-case proc scenario:');
    //logHHAuto(JSON.stringify('Starting Egos adjusted for worst-case proc scenario:'));
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Player Ego: ' + playerEgo);
    //logHHAuto(JSON.stringify('Player Ego: ' + playerEgo));
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Opponent Ego: ' + opponentEgo);
    //logHHAuto(JSON.stringify('Opponent Ego: ' + opponentEgo));

    playerOrgasm = 0;
    playerOrgasmCount = 0;
    opponentOrgasm = 0;
    opponentOrgasmCount = 0;

    function playerTurn() {
        //Orgasm
        if (playerOrgasm >= playerExcitement) {
            //Orgasm damage
            opponentEgo -= Math.round(playerAtk * 1.5 - opponentDef);
            playerOrgasmCount++;

            //Log results
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': Player orgasm! -' + Math.round(playerAtk * 1.5 - opponentDef));
            //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': Player orgasm! -' + Math.round(playerAtk * 1.5 - opponentDef)));

            //Orgasm 1
            if (playerOrgasmCount == 1) {
                playerAtk += Math.round(playerBetaAdd * 1.3);
                opponentDef += Math.round(opponentBetaAdd * 1.75);
            }

            //Orgasm 2
            if (playerOrgasmCount == 2) {
                playerAtk += Math.round(playerOmegaAdd * 1.3);
                opponentDef += Math.round(opponentOmegaAdd * 1.75);
            }

            //Reset excitement value
            playerOrgasm = 0;
        }

        //No orgasm
        else {
            opponentEgo -= playerAtk - opponentDef;
            playerOrgasm += playerAtk * 2;
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': Player hit! -' + (playerAtk - opponentDef));
            //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': Player hit! -' + (playerAtk - opponentDef)));
        }

        //Log results
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'after Round ' + (turns + 1) + ': Opponent ego: ' + opponentEgo);
        //logHHAuto(JSON.stringify('after Round ' + (turns + 1) + ': Opponent ego: ' + opponentEgo));
    }

    function opponentTurn() {
        //Orgasm
        if (opponentOrgasm >= opponentExcitement) {
            //Orgasm damage
            playerEgo -= Math.round(opponentAtk * 1.5 - playerDef);
            opponentOrgasmCount++;

            //Log results
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': Opponent orgasm! -' + Math.round(opponentAtk * 1.5 - playerDef));
            //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': Opponent orgasm! -' + Math.round(opponentAtk * 1.5 - playerDef)));

            //Orgasm 1
            if (opponentOrgasmCount == 1) {
                opponentAtk += Math.round(opponentBetaAdd * 1.3);
                playerDef += Math.round(playerBetaAdd * 1.75);
                if (opponentAlphaClass == '1') {
                    playerEgo -= opponentProcHCAddOrgasm1;
                    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': HC opponent possibility of Wild Burst on first orgasm! -' + opponentProcHCAddOrgasm1);
                    //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': HC opponent possibility of Wild Burst on first orgasm! -' + opponentProcHCAddOrgasm1));
                }
            }

            //Orgasm 2
            if (opponentOrgasmCount == 2) {
                opponentAtk += Math.round(opponentOmegaAdd * 1.3);
                playerDef += Math.round(playerOmegaAdd * 1.75);
                if (opponentAlphaClass == '1') {
                    playerEgo -= opponentProcHCAddOrgasm2;
                    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': HC opponent possibility of Wild Burst on second orgasm! -' + opponentProcHCAddOrgasm2);
                    //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': HC opponent possibility of Wild Burst on second orgasm! -' + opponentProcHCAddOrgasm2));
                }
            }

            //Orgasm 3
            if (opponentOrgasmCount == 3) {
                if (opponentAlphaClass == '1') {
                    playerEgo -= opponentProcHCAddOrgasm3;
                    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': HC opponent possibility of Wild Burst on third orgasm! -' + opponentProcHCAddOrgasm3);
                    //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': HC opponent possibility of Wild Burst on third orgasm! -' + opponentProcHCAddOrgasm3));
                }
            }

            //Reset excitement value
            opponentOrgasm = 0;
        }

        //No orgasm
        else {
            playerEgo -= opponentAtk - playerDef;
            opponentOrgasm += opponentAtk * 2;
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': Opponent hit! -' + (opponentAtk - playerDef));
            //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': Opponent hit! -' + (opponentAtk - playerDef)));
        }

        //Log results
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'after Round ' + (turns + 1) + ': Player ego: ' + playerEgo);
        //logHHAuto(JSON.stringify('after Round ' + (turns + 1) + ': Player ego: ' + playerEgo));
    }

    //Simulate challenge
    for (var turns = 0; turns < 99; turns++) {
        if (playerEgo > 0) {
            playerTurn()
        }
        else {
            break
        }
        if (opponentEgo > 0) {
            opponentTurn()
        }
        else {
            //Check if victory is only a one-turn advantage
            playerEgoCheck = playerEgo;

            //Orgasm
            if (opponentOrgasm >= opponentExcitement) {
                playerEgoCheck -= Math.round(opponentAtk * 1.5 - playerDef);
                opponentOrgasmCount++;

                //Log results
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': Possibly next: Opponent orgasm! -' + Math.round(opponentAtk * 1.5 - playerDef));
                //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': Possibly next: Opponent orgasm! -' + Math.round(opponentAtk * 1.5 - playerDef)));

                if (opponentAlphaClass == '1') {
                    if (opponentOrgasmCount == 1) {
                        playerEgoCheck -= opponentProcHCAddOrgasm1;
                        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': Possibly next: HC opponent possibility of Wild Burst on first orgasm! -' + opponentProcHCAddOrgasm1);
                        //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': Possibly next: HC opponent possibility of Wild Burst on first orgasm! -' + opponentProcHCAddOrgasm1));
                    }
                    if (opponentOrgasmCount == 2) {
                        playerEgoCheck -= opponentProcHCAddOrgasm2;
                        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': Possibly next: HC opponent possibility of Wild Burst on second orgasm! -' + opponentProcHCAddOrgasm2);
                        //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': Possibly next: HC opponent possibility of Wild Burst on second orgasm! -' + opponentProcHCAddOrgasm2));
                    }
                    if (opponentOrgasmCount == 3) {
                        playerEgoCheck -= opponentProcHCAddOrgasm3;
                        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': Possibly next: HC opponent possibility of Wild Burst on third orgasm! -' + opponentProcHCAddOrgasm3);
                        //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': Possibly next: HC opponent possibility of Wild Burst on third orgasm! -' + opponentProcHCAddOrgasm3));
                    }
                }
            }
            //No orgasm
            else {
                playerEgoCheck -= opponentAtk - playerDef;
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Round ' + (turns + 1) + ': Possibly next: Opponent hit! -' + (opponentAtk - playerDef));
                //logHHAuto(JSON.stringify('Round ' + (turns + 1) + ': Possibly next: Opponent hit! -' + (opponentAtk - playerDef)));
            }

            if (playerEgoCheck <= 0) {
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Close call! After Round ' + (turns + 1) + ': Player ego: ' + playerEgoCheck);
                //logHHAuto(JSON.stringify('Close call! After Round ' + (turns + 1) + ': Player ego: ' + playerEgoCheck));
            }
            break
        }
    }

    //Round defeated player's ego up to 0 to not skew results
    if (playerEgo < 0) {
        playerEgo = 0;
    }
    if (opponentEgo < 0) {
        opponentEgo = 0;
    }

    //Publish the ego difference as a match rating
    matchRating = playerEgo - opponentEgo;
    var customLimits = Storage().HHAuto_Setting_calculatePowerLimits.split(";");
    if(customLimits.length === 2 && Number(customLimits[0]) < Number(customLimits[1]))
    {
        if (matchRating >= 0)
        {
            matchRating = '+' + matchRating;
        }
        if ( Number(matchRating) < Number(customLimits[0]) )
        {
            return 'r'+matchRating
        }
        else
        {
            if ( Number(matchRating) < Number(customLimits[1]) )
            {
                return 'y'+matchRating
            }
            else
            {
                return 'g'+matchRating
            }
        }
    }
    else
    {
        if ( Storage().HHAuto_Setting_calculatePowerLimits !== "default")
        {
            Storage().HHAuto_Setting_calculatePowerLimits = "Invalid limits";
        }
        if (matchRating >= 0)
        {
            matchRating = '+' + matchRating;

            if (playerEgoCheck <= 0)
            {
                return 'y'+matchRating
            }
            else
            {
                return 'g'+matchRating
            }
        }
        else {
            matchRating = matchRating;
            return 'r'+matchRating
        }
    }
}

var doSeason = function () {
    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Performing auto Season.");
    logHHAuto(JSON.stringify("Performing auto Season."));
    // Confirm if on correct screen.
    var page = getPage();
    var current_kisses = getSetHeroInfos('kiss.amount');
    if(page === "season")
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","On season page.");
        logHHAuto(JSON.stringify("On season page."));
        if (Storage().HHAuto_Setting_autoSeasonCollect === "true")
        {
            $("button[id='claim_btn_s'").click();
        }
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Remaining kisses : "+ current_kisses);
        logHHAuto(JSON.stringify("Remaining kisses : "+ current_kisses));
        if ( current_kisses > 0 )
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Switching to Season Arena screen.");
            logHHAuto(JSON.stringify("Switching to Season Arena screen."));
            gotoPage("season-arena");
        }
        else
        {
            setTimer('nextSeasonTime',getSetHeroInfos('kiss.next_refresh_ts'));
        }
        return;
        //<button id="claim_btn_s" class="bordeaux_button_s" style="z-index: 1000; visibility: visible;">Claim</button>
    }
    else if (page === "season_arena")
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","On season arena page.");
        logHHAuto(JSON.stringify("On season arena page."));

        var chosenID=moduleSimSeasonBattle();
        if (chosenID !== -1 && chosenID !== -2 )
        {
            location.href = document.getElementsByClassName("opponent_perform_button_container")[chosenID].children[0].getAttribute('href');
            sessionStorage.HHAuto_Temp_autoLoop = "false";
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Going to crush : "+$("div.season_arena_opponent_container .hero_details div:not([class]):not([carac])")[chosenID].innerText);
            logHHAuto(JSON.stringify("Going to crush : "+$("div.season_arena_opponent_container .hero_details div:not([class]):not([carac])")[chosenID].innerText));
            return true;
        }
        if (chosenID === -2 )
        {
            //change opponents and reload

            function refreshOpponents()
            {
                var params = {
                    namespace: 'h\\Season',
                    class: 'Arena',
                    action: 'arena_reload'
                };
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Three red opponents, paying for refresh.");
                logHHAuto(JSON.stringify("Three red opponents, paying for refresh."));
                hh_ajax(params, function(data){
                    Hero.update("hard_currency", data.hard_currency, false);
                    location.reload();
                })
            }
            sessionStorage.HHAuto_Temp_autoLoop = "false";
            setTimer('nextSeasonTime',5);
            setTimeout(refreshOpponents,randomInterval(800,1200));

            return true;
        }
    }

    //     else if (page==="battle")
    //     {
    //         CrushThem();
    //     }
    else
    {
        // Switch to the correct screen
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Remaining kisses : "+ current_kisses);
        logHHAuto(JSON.stringify("Remaining kisses : "+ current_kisses));
        if ( current_kisses > 0 )
        {
            if (Storage().HHAuto_Setting_autoSeasonCollect === "true")
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Switching to Season screen.");
                logHHAuto(JSON.stringify("Switching to Season screen."));
                gotoPage("season");
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Switching to Season Arena screen.");
                logHHAuto(JSON.stringify("Switching to Season Arena screen."));
                gotoPage("season-arena");
            }
            return;
        }
        else
        {
            setTimer('nextSeasonTime',getSetHeroInfos('kiss.next_refresh_ts'));
        }
        return;
    }
};

var doBattle = function () {
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":","Performing auto battle.");
    //logHHAuto(JSON.stringify("Performing auto battle."));
    // Confirm if on correct screen.
    var page = getPage();
    if(page === "arena")
    {
        if ($("#arena[class='canvas']").length === 1) {
            // Oponent choose screen
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","On opponent choose screen.");
            logHHAuto(JSON.stringify("On opponent choose screen."));
            if(document.getElementById("popups").style.display === "block")
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Popup detetcted. Refresh page.");
                logHHAuto(JSON.stringify("Popup detetcted. Refresh page."));
                unsafeWindow.reload();
                return;
            }
            else{
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","No popups.");
                logHHAuto(JSON.stringify("No popups."));
            }

            var fought = sessionStorage.HHAuto_Temp_fought?sessionStorage.HHAuto_Temp_fought:0;
            console.log(new Date().toISOString()+":"+getCallerFunction()+":",'already fought: '+fought);
            logHHAuto(JSON.stringify('already fought: '+fought));
            if(fought>=3)
            {
                console.log("No arena opponents found, storing nextArenaTime...")
                var arenatime = 0;
                for(var e in unsafeWindow.HHTimers.timers){
                    try{
                        if(unsafeWindow.HHTimers.timers[e].$elm.selector.startsWith(".arena_refresh_counter"))
                            arenatime=unsafeWindow.HHTimers.timers[e];
                    }
                    catch(e){}
                }
                arenatime = arenatime.remainingTime;
                setTimer('nextArenaTime',Number(arenatime)+1);
                sessionStorage.HHAuto_Temp_fought=0;
                return;
            }
            //selbutton[0].click();
            sessionStorage.HHAuto_Temp_autoLoop = "false";
            sessionStorage.HHAuto_Temp_fought=Number(fought)+1;
            window.location = window.location.origin + '/battle.html?id_arena='+fought;
        }
    }
    else if (page==="battle")
    {
        CrushThem();
    }
    else
    {
        // Switch to the correct screen
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Switching to battle screen.");
        logHHAuto(JSON.stringify("Switching to battle screen."));
        gotoPage("arena");
        return;
    }
};

var getLeagueCurrentLevel = function ()
{
    if(unsafeWindow.league_tag === undefined)
    {
        setTimeout(autoLoop, Number(Storage().HHAuto_Temp_autoLoopTimeMili))
    }
    return unsafeWindow.league_tag;
}

var doLeagueBattle = function () {
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":","Performing auto leagues.");
    //logHHAuto(JSON.stringify("Performing auto leagues."));
    // Confirm if on correct screen.
    var currentPower = getSetHeroInfos('challenge.amount');
    var leagueScoreSecurityThreshold = 40;
    var ltime;

    var page = getPage();
    if(page==='battle')
    {
        // On the battle screen.
        CrushThem();
    }
    else if(page === "leaderboard")
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","On leaderboard page.");
        logHHAuto(JSON.stringify("On leaderboard page."));
        if (Storage().HHAuto_Setting_autoLeaguesCollect === "true")
        {
            $('#leagues_middle .forced_info button[rel="claim"]').click(); //click reward
        }
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",new Date().toISOString()+":"+getCallerFunction()+":",'ls! '+$('h4.leagues').size());
        //logHHAuto(JSON.stringify(new Date().toISOString()+":"+getCallerFunction()+":",'ls! '+$('h4.leagues').size()));
        logHHAuto(JSON.stringify('ls! '+$('h4.leagues').size()));
        $('h4.leagues').each(function(){this.click();});

        if(currentPower < 1)
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","No power for leagues.");
            logHHAuto(JSON.stringify("No power for leagues."));
            //prevent paranoia to wait for league
            Storage().HHAuto_Temp_paranoiaLeagueBlocked="true";
            setTimer('nextLeaguesTime',getSetHeroInfos('challenge.next_refresh_ts')+1);
            //             for(var e in unsafeWindow.HHTimers.timers){
            //                 try{
            //                     if(unsafeWindow.HHTimers.timers[e].type=="energy_challenge")
            //                     {
            //                         ltime=unsafeWindow.HHTimers.timers[e];
            //                     }
            //                     if(unsafeWindow.HHTimers.timers[e].type=="challenge")
            //                     {
            //                         ltime=unsafeWindow.HHTimers.timers[e];
            //                     }
            //                 }
            //                 catch(e){}
            //             }
            //             ltime = Number(ltime.remainingTime)+15;
            //             setTimer('nextLeaguesTime',ltime);
            return;
        }

        while ($("span[sort_by='level'][select='asc']").size()==0)
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":",'resorting');
            logHHAuto(JSON.stringify('resorting'));
            $("span[sort_by='level']").each(function(){this.click()});
        }
        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'parsing enemies');
        logHHAuto(JSON.stringify('parsing enemies'));
        var Data=[];
        $(".leadTable[sorting_table] tr").each(function(){if (this.cells[3].innerHTML==='0/3' || this.cells[3].innerHTML==='1/3' || this.cells[3].innerHTML==='2/3'){Data.push($(this).attr("sorting_id"));}});
        if (Data.length==0)
        {
            ltime=35*60;
            console.log(new Date().toISOString()+":"+getCallerFunction()+":",'No valid targets!');
            logHHAuto(JSON.stringify('No valid targets!'));
            //prevent paranoia to wait for league
            Storage().HHAuto_Temp_paranoiaLeagueBlocked="true";
            setTimer('nextLeaguesTime',ltime);
        }
        else
        {
            var getPlayerCurrentLevel = getLeagueCurrentLevel();

            if (isNaN(getPlayerCurrentLevel))
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Could not get current Rank, stopping League.");
                logHHAuto(JSON.stringify("Could not get current Rank, stopping League."));
                //prevent paranoia to wait for league
                Storage().HHAuto_Temp_paranoiaLeagueBlocked="true";
                setTimer('nextLeaguesTime',Number(30*60)+1);
                return;
            }
            var currentRank = Number($("tr[class=personal_highlight] td span")[0].innerText);
            var currentScore = Number($("tr[class=personal_highlight] td")[4].innerText.replace(/\D/g, ''));

            if (Number(Storage().HHAuto_Temp_leaguesTarget) < Number(getPlayerCurrentLevel))
            {
                var maxDemote = 0;
                var totalOpponents = Number($("div.leagues_table table tr td:contains(/3)").length)+1;
                if (screen.width < 1026)
                {
                    totalOpponents = totalOpponents+1;
                }
                var rankDemote = totalOpponents - 14;
                if (currentRank > (totalOpponents - 15))
                {
                    rankDemote = totalOpponents - 15;
                }
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Current league above target, needs to demote. max rank : "+rankDemote+"/"+totalOpponents);
                logHHAuto(JSON.stringify("Current league above target, needs to demote. max rank : "+rankDemote+"/"+totalOpponents));
                maxDemote = Number($("div.leagues_table table tr td span:contains("+rankDemote+")").filter(function() {
                    return Number($.trim($(this).text())) === rankDemote;
                }).parent().parent()[0].lastElementChild.innerText.replace(/\D/g, ''));

                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Current league above target, needs to demote. Score should not be higher than : "+maxDemote);
                logHHAuto(JSON.stringify("Current league above target, needs to demote. Score should not be higher than : "+maxDemote));
                if ( currentScore + leagueScoreSecurityThreshold >= maxDemote )
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Can't do league as could go above demote, setting timer to 30 mins");
                    logHHAuto(JSON.stringify("Can't do league as could go above demote, setting timer to 30 mins"));
                    setTimer('nextLeaguesTime',Number(30*60)+1);
                    //prevent paranoia to wait for league
                    Storage().HHAuto_Temp_paranoiaLeagueBlocked="true";
                    gotoPage("home");
                    return;
                }
            }

            var maxLeague = $("div.tier_icons img").length;
            if ( maxLeague === undefined )
            {
                maxLeague = Leagues.length;
            }

            if (Number(Storage().HHAuto_Temp_leaguesTarget) === Number(getPlayerCurrentLevel) && Number(Storage().HHAuto_Temp_leaguesTarget) < maxLeague)
            {
                var maxStay = 0;
                var rankStay = 16;
                if (currentRank > 15)
                {
                    rankStay = 15;
                }
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Current league is target, needs to stay. max rank : "+rankStay);
                logHHAuto(JSON.stringify("Current league is target, needs to stay. max rank : "+rankStay));
                maxStay = Number($("div.leagues_table table tr td span:contains("+rankStay+")").filter(function() {
                    return Number($.trim($(this).text())) === rankStay;
                }).parent().parent()[0].lastElementChild.innerText.replace(/\D/g, ''));


                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Current league is target, needs to stay. Score should not be higher than : "+maxStay);
                logHHAuto(JSON.stringify("Current league is target, needs to stay. Score should not be higher than : "+maxStay));
                if ( currentScore + leagueScoreSecurityThreshold >= maxStay )
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Can't do league as could go above stay, setting timer to 30 mins");
                    logHHAuto(JSON.stringify("Can't do league as could go above stay, setting timer to 30 mins"));
                    setTimer('nextLeaguesTime',Number(30*60)+1);
                    //prevent paranoia to wait for league
                    Storage().HHAuto_Temp_paranoiaLeagueBlocked="true";
                    gotoPage("home");
                    return;
                }
            }
            console.log(new Date().toISOString()+":"+getCallerFunction()+":",Data.length+' valid targets!');
            logHHAuto(JSON.stringify(Data.length+' valid targets!'));
            sessionStorage.HHAuto_Temp_autoLoop = "false";
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Hit?" );
            logHHAuto(JSON.stringify("Hit?" ));
            if (Storage().HHAuto_Setting_autoLeaguesPowerCalc == "true")
            {
                var oppoID = getLeagueOpponentId(Data);
                if (oppoID == -1)
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":",'opponent list is building next league time in 2 min');
                    logHHAuto(JSON.stringify('opponent list is building next league time in 2 min'));
                    setTimer('nextLeaguesTime',2*60);
                }
                else
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":",'going to crush ID : '+oppoID);
                    logHHAuto(JSON.stringify('going to crush ID : '+oppoID));
                    location.href = "/battle.html?league_battle=1&id_member=" + oppoID;
                    sessionStorage.HHAuto_Temp_autoLoop = "false";
                    clearTimer('nextLeaguesTime');
                }
            }
            else
            {
                location.href = "/battle.html?league_battle=1&id_member=" + Data[0]
            }

        }
    }
    else if (page==="battle")
    {
        CrushThem();
    }
    else
    {
        // Switch to the correct screen
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Switching to leagues screen.");
        logHHAuto(JSON.stringify("Switching to leagues screen."));
        gotoPage("leaderboard");
        return;
    }
};

function LeagueDisplayGetOpponentPopup(numberDone,remainingTime)
{
    $("#leagues #leagues_middle").prepend('<div id="popup_message_league" class="popup_message_league" name="popup_message_league" style="display: block;color: #FF2F2F;font-size: 20px;text-align: center;">Opponent list is building : <br>'+numberDone+' opponents parsed ('+remainingTime+')</div>');
}
function LeagueClearDisplayGetOpponentPopup()
{
    $("#popup_message_league").each(function(){this.remove();});
}

function LeagueUpdateGetOpponentPopup(numberDone,remainingTime)
{
    LeagueClearDisplayGetOpponentPopup();
    LeagueDisplayGetOpponentPopup(numberDone,remainingTime);
}

function getLeagueOpponentId(opponentsIDList)
{
    var opponentsPowerList = sessionStorage.HHAuto_Temp_LeagueOpponentList?JSON.parse(sessionStorage.HHAuto_Temp_LeagueOpponentList,reviverMap):[];
    var opponentsListExpirationDate = sessionStorage.HHAuto_Temp_opponentsListExpirationDate?sessionStorage.HHAuto_Temp_opponentsListExpirationDate:'empty';
    var opponentsIDs= opponentsIDList;
    var oppoNumber = opponentsIDList.length;
    var playerEgo;
    var playerDefHC;
    var playerDefKH;
    var playerDefCH;

    var playerAtk;
    var playerClass;
    var playerAlpha;
    var playerBeta;
    var playerOmega;
    var playerExcitement;
    var DataOppo=new Map([]);

    if (opponentsListExpirationDate === 'empty' || opponentsListExpirationDate < new Date() || opponentsPowerList.length ==0)
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Opponents list not found or expired. Fetching all opponents.");
        logHHAuto(JSON.stringify("Opponents list not found or expired. Fetching all opponents."));
        playerEgo = Math.round(getSetHeroInfos('caracs.ego'));
        playerDefHC = Math.round(getSetHeroInfos('caracs.def_carac1'));
        playerDefCH = Math.round(getSetHeroInfos('caracs.def_carac2'));
        playerDefKH = Math.round(getSetHeroInfos('caracs.def_carac3'));
        playerAtk = Math.round(getSetHeroInfos('caracs.damage'));
        playerClass = $('div#leagues_left .icon').attr('carac');
        playerAlpha = JSON.parse($('div#leagues_left .girls_wrapper .team_girl[g=1]').attr('girl-tooltip-data'));
        playerBeta = JSON.parse($('div#leagues_left .girls_wrapper .team_girl[g=2]').attr('girl-tooltip-data'));
        playerOmega = JSON.parse($('div#leagues_left .girls_wrapper .team_girl[g=3]').attr('girl-tooltip-data'));
        playerExcitement = Math.round((playerAlpha.caracs.carac1 + playerAlpha.caracs.carac2 + playerAlpha.caracs.carac3) * 28);
        getOpponents();
        return -1;
    }
    else
    {
        console.log("Found valid opponents list, using it.")
        return FindOpponent(opponentsPowerList,opponentsIDs);
    }

    function getOpponents()
    {
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Need to click: ',ToClick.length);
        //logHHAuto(JSON.stringify('Need to click: ',ToClick.length));
        var findText = 'playerLeaguesData = ';
        if (opponentsIDList.length>0)
        {
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'getting data for opponent : '+opponentsIDList[0]);
            //logHHAuto(JSON.stringify('getting data for opponent : '+opponentsIDList[0]));
            $.post('/ajax.php',
                   {
                class: 'Leagues',
                action: 'get_opponent_info',
                opponent_id: opponentsIDList[0]
            },
                   function(data)
                   {
                var opponent = JSON.parse(data.html.substring(data.html.indexOf(findText)+findText.length,data.html.lastIndexOf(';')));
                var opponentDef;
                var playerDef;
                if (opponent.class == '1') {
                    playerDef = playerDefHC;
                }
                if (opponent.class == '2') {
                    playerDef = playerDefCH;
                }
                if (opponent.class == '3') {
                    playerDef = playerDefKH;
                }
                if (playerClass == 'class1') {
                    opponentDef = opponent.caracs.def_carac1;
                }
                if (playerClass == 'class2') {
                    opponentDef = opponent.caracs.def_carac2;
                }
                if (playerClass == 'class3') {
                    opponentDef = opponent.caracs.def_carac3;
                }
                var opponentExcitement = Math.round((opponent.team["1"].caracs.carac1 + opponent.team["1"].caracs.carac2 + opponent.team["1"].caracs.carac3) * 28);
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponent.Name,opponent.caracs.ego,opponentDef,opponent.caracs.damage,'class'+opponent.class,opponent.team["1"],opponent.team["2"],opponent.team["1"],opponentExcitement);
                //logHHAuto(JSON.stringify(playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponent.Name,opponent.caracs.ego,opponentDef,opponent.caracs.damage,'class'+opponent.class,opponent.team["1"],opponent.team["2"],opponent.team["1"],opponentExcitement));
                var matchRating = calculatePower(playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponent.Name,opponent.caracs.ego,opponentDef,opponent.caracs.damage,'class'+opponent.class,opponent.team["1"],opponent.team["2"],opponent.team["1"],opponentExcitement);
                matchRating = Number(matchRating.substring(1));
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'matchRating:'+matchRating);
                //logHHAuto(JSON.stringify('matchRating:'+matchRating));
                DataOppo.set(opponent.id_member,matchRating);
                //DataOppo.push(JSON.parse(data.html.substring(data.html.indexOf(findText)+findText.length,data.html.lastIndexOf(';'))));

            });
            opponentsIDList.shift();
            LeagueUpdateGetOpponentPopup(DataOppo.size+'/'+oppoNumber, toHHMMSS((oppoNumber-DataOppo.size)*1.2));
            setTimeout(getOpponents,randomInterval(800,1200));

            window.top.postMessage({ImAlive:true},'*');
        }
        else
        {
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'nothing to click, checking data');
            //logHHAuto(JSON.stringify('nothing to click, checking data'));
            sessionStorage.HHAuto_Temp_opponentsListExpirationDate=new Date().getTime() + 10*60 * 1000
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",DataOppo);
            //logHHAuto(JSON.stringify(DataOppo));
            sessionStorage.HHAuto_Temp_LeagueOpponentList = JSON.stringify(DataOppo,replacerMap);
            LeagueClearDisplayGetOpponentPopup();
            doLeagueBattle();
        }
    }

    function FindOpponent(opponentsPowerList,opponentsIDList)
    {
        var maxScore = -1;
        var IdOppo = -1;
        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'finding best chance opponent in '+opponentsIDList.length);
        logHHAuto(JSON.stringify('finding best chance opponent in '+opponentsIDList.length));
        for (var oppo of opponentsIDList)
        {
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",oppo,Number(opponentsPowerList.get(oppo)),maxScore);
            //logHHAuto(JSON.stringify(oppo,Number(opponentsPowerList.get(oppo)),maxScore));
            if (maxScore == -1 || Number(opponentsPowerList.get(oppo)) > maxScore)
            {

                maxScore = Number(opponentsPowerList.get(oppo));
                IdOppo = oppo;
            }
        }
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","highest score opponent : "+IdOppo+'('+maxScore+')');
        logHHAuto(JSON.stringify("highest score opponent : "+IdOppo+'('+maxScore+')'));
        return IdOppo;
    }


    return true;
};

function replacerMap(key, value) {
    const originalObject = this[key];
    if(originalObject instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(originalObject.entries()), // or with spread: value: [...originalObject]
        };
    } else {
        return value;
    }
}

function reviverMap(key, value) {
    if(typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}

var  CrushThem = function()
{
    if (getPage() === "battle") {
        // On battle page.
        if ($("#rewards_popup .blue_text_button").size()>0)
        {
            $("#rewards_popup .blue_text_button").click();
        }
        if ($("#rewards_popup .blue_button_L").size()>0)
        {
            $("#rewards_popup .blue_button_L").click();
        }

        //console.log(new Date().toISOString()+":"+getCallerFunction()+":","On Battle Page.");
        //logHHAuto(JSON.stringify("On Battle Page."));
        if ($("#battle[class='canvas']").length === 1) {
            // Battle screen
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","On battle screen.");
            logHHAuto(JSON.stringify("On battle screen."));
            // get button with no autofight, i.e. no koban
            var battleButton = $('#battle button[rel="launch"]:not(.autofight)');
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",battleButton.get());
            //logHHAuto(JSON.stringify(battleButton.get()));
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",battleButton);
            //logHHAuto(JSON.stringify(battleButton));
            var currentPower = getSetHeroInfos('fight.amount');
            if(battleButton === undefined){
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Battle Button was undefined. Disabling all auto-battle.");
                logHHAuto(JSON.stringify("Battle Button was undefined. Disabling all auto-battle."));
                document.getElementById("autoTrollCheckbox").checked = false;
                //document.getElementById("autoArenaCheckbox").checked = false;
                if (sessionStorage.HHAuto_Temp_questRequirement === "battle")
                {
                    document.getElementById("autoQuestCheckbox").checked = false;
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Auto-quest disabled since it requires battle and auto-battle has errors.");
                    logHHAuto(JSON.stringify("Auto-quest disabled since it requires battle and auto-battle has errors."));
                }
                return;
            }
            var battle_price = battleButton.find('span').size()>0?battleButton.attr("price_fe"):0;

            if (location.search.split("league_battle=")[1])
            {
                currentPower=getSetHeroInfos('challenge.amount');
            }
            if(battle_price === undefined){
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Could not detect battle button price. Error.");
                logHHAuto(JSON.stringify("Could not detect battle button price. Error."));
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Disabling all auto-battle.");
                logHHAuto(JSON.stringify("Disabling all auto-battle."));
                document.getElementById("autoTrollCheckbox").checked = false;
                //document.getElementById("autoArenaCheckbox").checked = false;
                if (sessionStorage.HHAuto_Temp_questRequirement === "battle")
                {
                    document.getElementById("autoQuestCheckbox").checked = false;
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Auto-quest disabled since it requires battle and auto-battle has errors.");
                    logHHAuto(JSON.stringify("Auto-quest disabled since it requires battle and auto-battle has errors."));
                }
                return;
            }
            console.log("battle price: "+battle_price+"P")
            if(currentPower >= battle_price)
            {
                // We have the power.
                is_cheat_click=function(e) {
                    return false;
                };
                battleButton.click();
                // Skip
                setTimeout(function(){$("#battle_middle button[rel='skip']").click();},2000);
                setTimeout(function(){$("#rewards_popup .blue_text_button").click();$("#rewards_popup .blue_button_L").click();},3500);

                if (sessionStorage.HHAuto_Temp_questRequirement === "battle") {
                    // Battle Done.
                    sessionStorage.HHAuto_Temp_questRequirement = "none";
                }

                gotoPage("home");
                return true;
            }
            else
            {
                // We need more power.
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Battle requires "+battle_price+" power.");
                logHHAuto(JSON.stringify("Battle requires "+battle_price+" power."));
                sessionStorage.HHAuto_Temp_battlePowerRequired = battle_price;
                if(sessionStorage.HHAuto_Temp_questRequirement === "battle")sessionStorage.HHAuto_Temp_questRequirement = "P"+battle_price;
            }
        }
        else {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Could not identify battle screen.");
            logHHAuto(JSON.stringify("Could not identify battle screen."));
            if (sessionStorage.HHAuto_Temp_questRequirement === "battle") sessionStorage.HHAuto_Temp_questRequirement = "errorInAutoBattle";
            return;
        }
    }
}

var setTimer=function(name, seconds)
{
    var ND=new Date().getTime() + seconds * 1000;
    Timers[name]=ND;
    sessionStorage.HHAuto_Temp_Timers=JSON.stringify(Timers);
    console.log(new Date().toISOString()+":"+getCallerFunction()+":",name+" set to "+toHHMMSS(ND/1000-new Date().getTimezoneOffset()*60)+' ('+ toHHMMSS(seconds)+')');
    logHHAuto(JSON.stringify(name+" set to "+toHHMMSS(ND/1000-new Date().getTimezoneOffset()*60)+' ('+ toHHMMSS(seconds)+')'));
}

var clearTimer=function(name)
{
    delete Timers[name];
    sessionStorage.HHAuto_Temp_Timers=JSON.stringify(Timers);
}

var checkTimer=function(name)
{
    if (!Timers[name])
    {
        return true;
    }
    if (Timers[name]<new Date())
    {
        return true;
    }
    return false;
}

var getTimer=function(name)
{
    if (!Timers[name])
    {
        return -1;
    }
    return Timers[name];
}

var getSecondsLeft=function(name)
{
    if (!Timers[name])
    {
        return 0;
    }
    return Math.ceil(Timers[name]/1000)-Math.ceil(new Date().getTime()/1000);
}

var getTimeLeft=function(name)
{
    if (!Timers[name])
    {
        return "No timer";
    }
    var diff=getSecondsLeft(name);
    if (diff<=0)
    {
        return "Time's up!";
    }
    return toHHMMSS(diff);
}



var updateData = function () {
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":","updating UI");
    //logHHAuto(JSON.stringify("updating UI"));
    if ($('#LoadDialog[open]').length > 0) {return}
    var leaguesOptions = document.getElementById("autoLeaguesSelector");
    Storage().HHAuto_Setting_autoLeaguesSelectedIndex = leaguesOptions.selectedIndex;
    Storage().HHAuto_Temp_leaguesTarget = Number(leaguesOptions.value)+1;

    var trollOptions = document.getElementById("autoTrollSelector");
    Storage().HHAuto_Setting_autoTrollSelectedIndex = trollOptions.selectedIndex;
    Storage().HHAuto_Temp_trollToFight = trollOptions.value;
    Storage().HHAuto_Setting_plusEvent = document.getElementById("plusEvent").checked;
    Storage().HHAuto_Setting_autoSalary = document.getElementById("autoSalaryCheckbox").checked;
    Storage().HHAuto_Setting_autoSalaryTimer = document.getElementById("autoSalaryTextbox").value;
    Storage().HHAuto_Setting_autoContest = document.getElementById("autoContestCheckbox").checked;
    Storage().HHAuto_Setting_autoMission = document.getElementById("autoMissionCheckbox").checked;
    Storage().HHAuto_Setting_autoPowerPlaces = document.getElementById("autoPowerPlaces").checked;

    var newValue = String(document.getElementById("autoPowerPlacesAll").checked);
    if (Storage().HHAuto_Setting_autoPowerPlacesAll != newValue)
    {
        Storage().HHAuto_Setting_autoPowerPlacesAll = document.getElementById("autoPowerPlacesAll").checked;
        clearTimer('minPowerPlacesTime');
        cleanTempPopToStart();
    }
    newValue = String(document.getElementById("autoPowerPlacesIndexFilter").value);
    if (Storage().HHAuto_Setting_autoPowerPlacesIndexFilter != newValue)
    {
        Storage().HHAuto_Setting_autoPowerPlacesIndexFilter = document.getElementById("autoPowerPlacesIndexFilter").value;
        clearTimer('minPowerPlacesTime');
        cleanTempPopToStart();
    }

    Storage().HHAuto_Setting_autoPowerPlacesIndexFilter = document.getElementById("autoPowerPlacesIndexFilter").value;
    Storage().HHAuto_Setting_autoSalaryTimer = document.getElementById("autoSalaryTextbox").value;
    Storage().HHAuto_Setting_autoMissionC = document.getElementById("autoMissionCollect").checked;
    Storage().HHAuto_Setting_autoQuest = document.getElementById("autoQuestCheckbox").checked;
    Storage().HHAuto_Setting_autoTrollBattle = document.getElementById("autoTrollCheckbox").checked;
    Storage().HHAuto_Setting_eventTrollOrder = document.getElementById("eventTrollOrder").value;

    Storage().HHAuto_Setting_plusEventMythic = document.getElementById("plusEventMythic").checked;
    Storage().HHAuto_Setting_eventMythicPrio = document.getElementById("eventMythicPrio").checked;
    Storage().HHAuto_Setting_autoTrollMythicByPassThreshold = document.getElementById("autoTrollMythicByPassThreshold").checked ;
    Storage().HHAuto_Setting_buyCombTimer = document.getElementById("buyCombTimer").value;
    //Storage().HHAuto_Setting_autoArenaBattle = document.getElementById("autoArenaCheckbox").checked;
    Storage().HHAuto_Setting_autoSeason = document.getElementById("autoSeasonCheckbox").checked;
    Storage().HHAuto_Setting_autoSeasonCollect = document.getElementById("autoSeasonCollect").checked;
    Storage().HHAuto_Setting_autoLeagues = document.getElementById("autoLeagues").checked;
    Storage().HHAuto_Setting_autoLeaguesCollect = document.getElementById("autoLeaguesCollect").checked;
    Storage().HHAuto_Setting_autoLeaguesPowerCalc = document.getElementById("autoLeaguesPowerCalc").checked;
    //Storage().HHAuto_Setting_autoLeaguesMaxRank = document.getElementById("autoLeaguesMaxRank").value;
    Storage().HHAuto_Setting_autoStats = document.getElementById("autoStats").value;
    Storage().HHAuto_Setting_paranoia = document.getElementById("paranoia").checked;
    Storage().HHAuto_Setting_paranoiaSpendsBefore = document.getElementById("paranoiaSpendsBefore").checked;
    Storage().HHAuto_Setting_autoFreePachinko = document.getElementById("autoFreePachinko").checked;
    Storage().HHAuto_Setting_autoExp = document.getElementById("autoExp").value;
    Storage().HHAuto_Setting_autoExpW = document.getElementById("autoExpW").checked;
    Storage().HHAuto_Setting_MaxExp = document.getElementById("maxExp").value;
    Storage().HHAuto_Setting_autoAff = document.getElementById("autoAff").value;
    Storage().HHAuto_Setting_autoAffW = document.getElementById("autoAffW").checked;
    Storage().HHAuto_Setting_MaxAff = document.getElementById("maxAff").value;
    Storage().HHAuto_Setting_autoLGM = document.getElementById("autoLGM").value;
    Storage().HHAuto_Setting_autoLGMW = document.getElementById("autoLGMW").checked;
    Storage().HHAuto_Setting_autoLGR = document.getElementById("autoLGR").value;
    Storage().HHAuto_Setting_autoLGRW = document.getElementById("autoLGRW").checked;
    //Storage().HHAuto_Setting_autoEGM = document.getElementById("autoEGM").value;
    //Storage().HHAuto_Setting_autoEGMW = document.getElementById("autoEGMW").checked;
    Storage().HHAuto_Setting_autoBuyBoosters = document.getElementById("autoBuyBoosters").checked;
    Storage().HHAuto_Setting_autoBuyBoostersFilter = document.getElementById("autoBuyBoostersFilter").value;

    if (localStorage.HHAuto_Setting_settPerTab === "true")
    {
        if ( localStorage.HHAuto_Temp_showInfo !== undefined)
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","force set showInfo : "+localStorage.HHAuto_Temp_showInfo);
            logHHAuto(JSON.stringify("force set showInfo : "+localStorage.HHAuto_Temp_showInfo));
            Storage().HHAuto_Setting_showInfo = localStorage.HHAuto_Temp_showInfo;
            document.getElementById("showInfo").checked = Storage().HHAuto_Setting_showInfo=="true";
            setTimeout(function() {
                localStorage.removeItem('HHAuto_Temp_showInfo');
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","removed showInfo");
                logHHAuto(JSON.stringify("removed showInfo"));
            }, 1000);
        }
        else
        {
            newValue = String(document.getElementById("showInfo").checked);
            if (Storage().HHAuto_Setting_showInfo !== newValue)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","setting showInfo :"+newValue);
                logHHAuto(JSON.stringify("setting showInfo :"+newValue));
                Storage().HHAuto_Setting_showInfo = document.getElementById("showInfo").checked;
                localStorage.HHAuto_Temp_showInfo = Storage().HHAuto_Setting_showInfo;
            }
        }


        if ( localStorage.HHAuto_Temp_showCalculatePower !== undefined )
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","force set showCalculatePower : "+localStorage.HHAuto_Temp_showCalculatePower);
            logHHAuto(JSON.stringify("force set showCalculatePower : "+localStorage.HHAuto_Temp_showCalculatePower));
            Storage().HHAuto_Setting_showCalculatePower = localStorage.HHAuto_Temp_showCalculatePower;
            document.getElementById("showCalculatePower").checked = Storage().HHAuto_Setting_showCalculatePower=="true";
            setTimeout(function() {
                localStorage.removeItem('HHAuto_Temp_showCalculatePower');
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","removed showCalculatePower");
                logHHAuto(JSON.stringify("removed showCalculatePower"));
            }, 1000);
        }
        else
        {
            newValue = String(document.getElementById("showCalculatePower").checked);
            if (Storage().HHAuto_Setting_showCalculatePower !== newValue)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","setting showCalculatePower :"+newValue);
                logHHAuto(JSON.stringify("setting showCalculatePower :"+newValue));
                Storage().HHAuto_Setting_showCalculatePower = document.getElementById("showCalculatePower").checked;
                localStorage.HHAuto_Temp_showCalculatePower = Storage().HHAuto_Setting_showCalculatePower;
            }
        }

    }
    else
    {
        Storage().HHAuto_Setting_showCalculatePower = document.getElementById("showCalculatePower").checked;
        Storage().HHAuto_Setting_showInfo = document.getElementById("showInfo").checked;

    }

    Storage().HHAuto_Setting_calculatePowerLimits = document.getElementById("calculatePowerLimits").value;
    Storage().HHAuto_Setting_autoChamps = document.getElementById("autoChamps").checked;
    Storage().HHAuto_Setting_autoChampsUseEne = document.getElementById("autoChampsUseEne").checked;
    Storage().HHAuto_Setting_autoChampsFilter = document.getElementById("autoChampsFilter").value;

    Storage().HHAuto_Setting_spendKobans0 = document.getElementById("spendKobans0").checked;
    Storage().HHAuto_Setting_spendKobans1 = document.getElementById("spendKobans1").checked && Storage().HHAuto_Setting_spendKobans0=="true";
    document.getElementById("spendKobans1").checked=Storage().HHAuto_Setting_spendKobans1=="true";
    Storage().HHAuto_Setting_spendKobans2 = document.getElementById("spendKobans2").checked && Storage().HHAuto_Setting_spendKobans1=="true" && Storage().HHAuto_Setting_spendKobans0=="true";
    document.getElementById("spendKobans2").checked=Storage().HHAuto_Setting_spendKobans2=="true";

    Storage().HHAuto_Setting_autoTrollThreshold = document.getElementById("autoTrollThreshold").value;
    Storage().HHAuto_Setting_autoQuestThreshold = document.getElementById("autoQuestThreshold").value;
    Storage().HHAuto_Setting_autoLeaguesThreshold = document.getElementById("autoLeaguesThreshold").value;
    Storage().HHAuto_Setting_autoSeasonThreshold = document.getElementById("autoSeasonThreshold").value;

    Storage().HHAuto_Setting_buyCombat=document.getElementById("buyCombat").checked && Storage().HHAuto_Setting_spendKobans2=="true" && Storage().HHAuto_Setting_spendKobans1=="true" && Storage().HHAuto_Setting_spendKobans0=="true";
    document.getElementById("buyCombat").checked=Storage().HHAuto_Setting_buyCombat=="true";
    Storage().HHAuto_Setting_autoBuyBoosters=document.getElementById("autoBuyBoosters").checked && Storage().HHAuto_Setting_spendKobans2=="true" && Storage().HHAuto_Setting_spendKobans1=="true" && Storage().HHAuto_Setting_spendKobans0=="true";
    document.getElementById("autoBuyBoosters").checked=Storage().HHAuto_Setting_autoBuyBoosters=="true";
    Storage().HHAuto_Setting_autoSeasonPassReds=document.getElementById("autoSeasonPassReds").checked && Storage().HHAuto_Setting_spendKobans2=="true" && Storage().HHAuto_Setting_spendKobans1=="true" && Storage().HHAuto_Setting_spendKobans0=="true";
    document.getElementById("autoSeasonPassReds").checked=Storage().HHAuto_Setting_autoSeasonPassReds=="true";
    Storage().HHAuto_Setting_kobanBank=document.getElementById("kobanBank").value;


    localStorage.HHAuto_Setting_settPerTab = document.getElementById("settPerTab").checked;

    Storage().HHAuto_Setting_master=document.getElementById("master").checked;

    if (Storage().HHAuto_Setting_showInfo=="true")
    {
        var Tegzd='';
        Tegzd+='Master: '+(Storage().HHAuto_Setting_master==="true"?"ON":"OFF");
        if (Storage().HHAuto_Setting_paranoia=="true")
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+sessionStorage.HHAuto_Temp_pinfo+': '+getTimeLeft('paranoiaSwitch');
        }
        if (Storage().HHAuto_Setting_autoSalary=="true")
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'Salary check: '+getTimeLeft('nextSalaryTime');
        }
        /*
        if (Storage().HHAuto_Setting_autoArenaBattle=="true")
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'Arena fight: '+getTimeLeft('nextArenaTime');
        }
        */
        if (Storage().HHAuto_Setting_autoSeason=="true")
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'Season: '+getSetHeroInfos('kiss.amount')+'/'+getSetHeroInfos('kiss.max_amount')+' ('+getTimeLeft('nextSeasonTime')+')';
        }
        if (Storage().HHAuto_Setting_autoLeagues=="true")
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'League fight: '+getSetHeroInfos('challenge.amount')+'/'+getSetHeroInfos('challenge.max_amount')+' ('+getTimeLeft('nextLeaguesTime')+')';
        }
        if (Storage().HHAuto_Setting_autoChamps=="true")
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'Champions check: '+getTimeLeft('nextChampionTime');
        }
        // if (autoBuy())
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'Shop update: '+getTimeLeft('nextShopTime');
        }
        if (Storage().HHAuto_Setting_autoMission=="true")
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'Mission: '+getTimeLeft('nextMissionTime');
        }
        if (Storage().HHAuto_Setting_autoContest=="true")
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'Contest: '+getTimeLeft('nextContestTime');
        }
        if (Storage().HHAuto_Setting_autoPowerPlaces=="true")
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'PowerPlaces'+': '+getTimeLeft('minPowerPlacesTime');
        }
        if (Storage().HHAuto_Setting_autoFreePachinko=="true")
        {
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'Great Pachinko: '+getTimeLeft('nextPachinkoTime');
            Tegzd+=(Tegzd.length>0?'\r\n':'')+'Mythic Pachinko: '+getTimeLeft('nextPachinko2Time');
        }
        Tegzd+=(Tegzd.length>0?'\r\n':'')+'haveAff: '+sessionStorage.HHAuto_Temp_haveAff;
        Tegzd+=(Tegzd.length>0?'\r\n':'')+'haveExp: '+sessionStorage.HHAuto_Temp_haveExp;
        if (Tegzd.length>0)
        {
            document.getElementById('pInfo').style.display='block';
            document.getElementById('pInfo').textContent=Tegzd;
        }
        else
        {
            document.getElementById('pInfo').style.display='none';
        }
    }
    else
    {
        document.getElementById('pInfo').style.display='none';
    }
};

var getPachinko = function(){
    try {
        if(!gotoPage("pachinko"))
        {
            // Not at Pachinko screen then goto the Pachinko screen.
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to Pachinko window.");
            logHHAuto(JSON.stringify("Navigating to Pachinko window."));
            return;
        }
        else {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Detected Pachinko Screen. Fetching Pachinko");
            logHHAuto(JSON.stringify("Detected Pachinko Screen. Fetching Pachinko"));
            var counter=0;
            while ($('#playzone-replace-info button[free=1]')[0]===undefined && (counter++)<250)
            {
                $('.game-simple-block[type-pachinko=great]')[0].click();
            }
            //if ($('#playzone-replace-info button[free=1]')[0].style.display=="none")
            if ($('#playzone-replace-info button[free=1]')[0]===undefined)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Not ready yet');
                logHHAuto(JSON.stringify('Not ready yet'));
            }
            else
            {
                $('#playzone-replace-info button[free=1]')[0].click();
            }
            var npach;
            for(var e in unsafeWindow.HHTimers.timers){
                if(unsafeWindow.HHTimers.timers[e].$elm && unsafeWindow.HHTimers.timers[e].$elm.selector.startsWith(".pachinko_change"))
                    npach=unsafeWindow.HHTimers.timers[e].remainingTime;
            }
            if(npach !== undefined || npach !== 0)
            {
                setTimer('nextPachinkoTime',Number(npach)+1);
            }
            else
            {
                clearTimer('nextPachinkoTime');
            }
        }
    }
    catch (ex) {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Could not collect Great Pachinko... " + ex);
        logHHAuto(JSON.stringify("Could not collect Great Pachinko... " + ex));
    }
};

var getPachinko2 = function(){
    try {
        if(!gotoPage("pachinko"))
        {
            // Not at Pachinko screen then goto the Pachinko screen.
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to Pachinko window.");
            logHHAuto(JSON.stringify("Navigating to Pachinko window."));
            return;
        }
        else {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Detected Pachinko Screen. Fetching Pachinko");
            logHHAuto(JSON.stringify("Detected Pachinko Screen. Fetching Pachinko"));
            var butt;
            if (hh_nutaku)
            {
                butt=$('#playzone-replace-info button[play="pachinko5|25|hard_currency"]')[0];
            }
            else
            {
                butt=$('#playzone-replace-info button[play="pachinko5|150|hard_currency"]')[0];
            }
            var counter=0;
            //while (butt===undefined && (counter++)<250)
            while ($('#playzone-replace-info button[free=1]')[0]===undefined && (counter++)<250)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":",'to mythic');
                logHHAuto(JSON.stringify('to mythic'));
                $('.game-simple-block[type-pachinko=mythic]')[0].click();
            }
            //if (butt===undefined)
            if ($('#playzone-replace-info button[free=1]')[0]===undefined)
            {
                //   console.log(new Date().toISOString()+":"+getCallerFunction()+":","Fuck my life!");
                logHHAuto(JSON.stringify("Fuck my life!"));
                //    setTimer('nextPachinko2Time',600);
                //    return false;
                console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Not ready yet');
                logHHAuto(JSON.stringify('Not ready yet'));
            }
            else
            {
                $('#playzone-replace-info button[free=1]')[0].click();
            }
            //if (butt.className!="blue_button_L")
            //{
            //   console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Not ready yet');
            logHHAuto(JSON.stringify('Not ready yet'));
            //}
            //else
            //{
            //   console.log(new Date().toISOString()+":"+getCallerFunction()+":",'click');
            logHHAuto(JSON.stringify('click'));
            //    butt.click();
            //}
            var npach;
            for(var e in unsafeWindow.HHTimers.timers){
                if(unsafeWindow.HHTimers.timers[e].$elm && unsafeWindow.HHTimers.timers[e].$elm.selector.startsWith('.game-simple-block[type-pachinko="mythic"]'))
                    npach=unsafeWindow.HHTimers.timers[e].remainingTime;
            }
            if(npach !== undefined || npach !== 0)
            {
                setTimer('nextPachinko2Time',Number(npach)+1);
            }
            else
            {
                clearTimer('nextPachinko2Time');
            }
        }
    }
    catch (ex) {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Could not collect Mythic Pachinko... " + ex);
        logHHAuto(JSON.stringify("Could not collect Mythic Pachinko... " + ex));
    }
};

var updateShop=function()
{
    if(!gotoPage("shop"))
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Navigating to Market window.");
        logHHAuto(JSON.stringify("Navigating to Market window."));
        return true;
    }
    else {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Detected Market Screen. Fetching Assortment");
        logHHAuto(JSON.stringify("Detected Market Screen. Fetching Assortment"));

        var assA=[];
        var assB=[];
        var assG=[];
        var assP=[];
        $('#shop div.armor .slot').each(function(){if (this.dataset.d)assA.push(JSON.parse(this.dataset.d));});
        $('#shop div.booster .slot').each(function(){if (this.dataset.d)assB.push(JSON.parse(this.dataset.d));});
        $('#shop div.gift .slot').each(function(){if (this.dataset.d)assG.push(JSON.parse(this.dataset.d));});
        $('#shop div.potion .slot').each(function(){if (this.dataset.d)assP.push(JSON.parse(this.dataset.d));});

        var HaveAff=0;
        var HaveExp=0;
        $('#inventory div.gift .slot').each(function(){if (this.dataset.d) { var d=JSON.parse(this.dataset.d); HaveAff+=d.count*d.value;}});
        $('#inventory div.potion .slot').each(function(){if (this.dataset.d) { var d=JSON.parse(this.dataset.d); HaveExp+=d.count*d.value;}});

        sessionStorage.HHAuto_Temp_haveAff=HaveAff;
        sessionStorage.HHAuto_Temp_haveExp=HaveExp;

        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'counted',sessionStorage.HHAuto_Temp_haveAff+' Aff ',sessionStorage.HHAuto_Temp_haveExp+' Exp');
        logHHAuto(JSON.stringify('counted',sessionStorage.HHAuto_Temp_haveAff+' Aff ',sessionStorage.HHAuto_Temp_haveExp+' Exp'));

        sessionStorage.HHAuto_Temp_storeContents = JSON.stringify([assA,assB,assG,assP]);
        sessionStorage.HHAuto_Temp_charLevel=getSetHeroInfos('level');

        var nshop;
        for(var e in unsafeWindow.HHTimers.timers){
            if(unsafeWindow.HHTimers.timers[e].$elm && unsafeWindow.HHTimers.timers[e].$elm.selector.startsWith(".shop_count"))
                nshop=unsafeWindow.HHTimers.timers[e].remainingTime;
        }
        if(nshop !== undefined && nshop !== 0)
        {
            setTimer('nextShopTime',Number(nshop)+1);
        }
        else
        {
            setTimer('nextShopTime',60);
        }
    }
    return false;
}

var toHHMMSS = function (secs)  {
    var sec_num = parseInt(secs, 10);
    var days   = Math.floor(sec_num / 86400);
    var hours   = Math.floor(sec_num / 3600) % 24;
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;
    var n=0;
    return [days,hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => {if (v !== "00"){n++; return true;} return n > 0})
        .join(":");
}

var checkParanoiaSpendings=function(spendingFunction)
{
    var pSpendings=new Map([]);
    // not set
    if ( ! Storage().HHAuto_Temp_paranoiaSpendings )
    {
        return -1;
    }
    else
    {
        pSpendings = JSON.parse(Storage().HHAuto_Temp_paranoiaSpendings,reviverMap);
    }

    if ( Storage().HHAuto_Temp_paranoiaQuestBlocked !== undefined && pSpendings.has('quest'))
    {
        pSpendings.delete('quest');
    }

    if ( Storage().HHAuto_Temp_paranoiaLeagueBlocked !== undefined && pSpendings.has('challenge'))
    {
        pSpendings.delete('challenge');
    }

    // for all count remaining
    if (spendingFunction === undefined)
    {
        var spendingsRemaining=0;
        for (var i of pSpendings.values())
        {
            spendingsRemaining+=i;
        }
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":","Paranoia spending remaining : "+JSON.stringify(pSpendings,replacerMap));
        //logHHAuto(JSON.stringify("Paranoia spending remaining : "+JSON.stringify(pSpendings,replacerMap)));
        return spendingsRemaining;
    }
    else
    {
        // return value if exist else -1
        if (!pSpendings.has(spendingFunction))
        {
            return -1;
        }
        return pSpendings.get(spendingFunction);
    }
}

var clearParanoiaSpendings=function()
{
    Storage().removeItem('HHAuto_Temp_paranoiaSpendings');
    Storage().removeItem('HHAuto_Temp_toNextSwitch');
    Storage().removeItem('HHAuto_Temp_paranoiaQuestBlocked');
    Storage().removeItem('HHAuto_Temp_paranoiaLeagueBlocked');
}

//sets spending to do before paranoia
var setParanoiaSpendings=function()
{
    var maxPointsDuringParanoia;
    var totalPointsEndParanoia;
    var paranoiaSpendings=new Map([]);
    var paranoiaSpend;
    var currentEnergy;
    var maxEnergy;
    var toNextSwitch;
    if (Storage().HHAuto_Temp_toNextSwitch && Storage().HHAuto_Setting_paranoiaSpendsBefore === "true")
    {
        toNextSwitch = Number(Storage().HHAuto_Temp_toNextSwitch);

        //if autoLeague is on
        if(Storage().HHAuto_Setting_autoLeagues === "true" && getSetHeroInfos('level')>=20)
        {
            if ( Storage().HHAuto_Temp_paranoiaLeagueBlocked === undefined )
            {
                maxPointsDuringParanoia = Math.ceil((toNextSwitch-Number(getSetHeroInfos('challenge.next_refresh_ts')))/Number(getSetHeroInfos('challenge.seconds_per_point')));
                currentEnergy=Number(getSetHeroInfos('challenge.amount'));
                maxEnergy=Number(getSetHeroInfos('challenge.max_amount'));
                totalPointsEndParanoia = currentEnergy+maxPointsDuringParanoia;
                //if point refreshed during paranoia would go above max
                if ( totalPointsEndParanoia >= maxEnergy)
                {
                    paranoiaSpend=totalPointsEndParanoia - maxEnergy + 1;
                    paranoiaSpendings.set("challenge",paranoiaSpend);
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Setting Paranoia spendings for league : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") spending "+paranoiaSpend);
                    logHHAuto(JSON.stringify("Setting Paranoia spendings for league : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") spending "+paranoiaSpend));
                }
                else
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Setting Paranoia spendings for league : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") No spending ");
                    logHHAuto(JSON.stringify("Setting Paranoia spendings for league : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") No spending "));
                }
            }
        }
        //if autoquest is on
        if(Storage().HHAuto_Setting_autoQuest === "true")
        {
            if ( Storage().HHAuto_Temp_paranoiaQuestBlocked === undefined )
            {
                maxPointsDuringParanoia = Math.ceil((toNextSwitch-Number(getSetHeroInfos('quest.next_refresh_ts')))/Number(getSetHeroInfos('quest.seconds_per_point')));
                currentEnergy=Number(getSetHeroInfos('quest.amount'));
                maxEnergy=Number(getSetHeroInfos('quest.max_amount'));
                totalPointsEndParanoia = currentEnergy+maxPointsDuringParanoia;
                //if point refreshed during paranoia would go above max
                if ( totalPointsEndParanoia >= maxEnergy)
                {
                    paranoiaSpend=totalPointsEndParanoia - maxEnergy + 1;
                    paranoiaSpendings.set("quest",paranoiaSpend);
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Setting Paranoia spendings for quest : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") spending "+paranoiaSpend);
                    logHHAuto(JSON.stringify("Setting Paranoia spendings for quest : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") spending "+paranoiaSpend));
                }
                else
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Setting Paranoia spendings for quest : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") No spending ");
                    logHHAuto(JSON.stringify("Setting Paranoia spendings for quest : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") No spending "));
                }
            }
        }
        //if autoTrollBattle is on
        if(Storage().HHAuto_Setting_autoTrollBattle === "true" && getSetHeroInfos('questing.id_world')>0)
        {
            maxPointsDuringParanoia = Math.ceil((toNextSwitch-Number(getSetHeroInfos('fight.next_refresh_ts')))/Number(getSetHeroInfos('fight.seconds_per_point')));
            currentEnergy=Number(getSetHeroInfos('fight.amount'));
            maxEnergy=Number(getSetHeroInfos('fight.max_amount'));
            totalPointsEndParanoia = currentEnergy+maxPointsDuringParanoia;
            //if point refreshed during paranoia would go above max
            if ( totalPointsEndParanoia >= maxEnergy)
            {
                paranoiaSpend=totalPointsEndParanoia - maxEnergy + 1;
                paranoiaSpendings.set("fight",paranoiaSpend);
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Setting Paranoia spendings for troll : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") spending "+paranoiaSpend);
                logHHAuto(JSON.stringify("Setting Paranoia spendings for troll : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") spending "+paranoiaSpend));
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Setting Paranoia spendings for troll : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") No spending ");
                logHHAuto(JSON.stringify("Setting Paranoia spendings for troll : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") No spending "));
            }
        }
        //if autoSeason is on
        if(Storage().HHAuto_Setting_autoSeason === "true")
        {
            maxPointsDuringParanoia = Math.ceil((toNextSwitch-Number(getSetHeroInfos('kiss.next_refresh_ts')))/Number(getSetHeroInfos('kiss.seconds_per_point')));
            currentEnergy=Number(getSetHeroInfos('kiss.amount'));
            maxEnergy=Number(getSetHeroInfos('kiss.max_amount'));
            totalPointsEndParanoia = currentEnergy+maxPointsDuringParanoia;
            //if point refreshed during paranoia would go above max
            if ( totalPointsEndParanoia >= maxEnergy)
            {
                paranoiaSpend=totalPointsEndParanoia - maxEnergy + 1;
                paranoiaSpendings.set("kiss",paranoiaSpend);
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Setting Paranoia spendings for Season : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") spending "+paranoiaSpend);
                logHHAuto(JSON.stringify("Setting Paranoia spendings for Season : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") spending "+paranoiaSpend));
            }
            else
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Setting Paranoia spendings for Season : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") No spending ");
                logHHAuto(JSON.stringify("Setting Paranoia spendings for Season : "+currentEnergy+"+"+maxPointsDuringParanoia+" max gained in "+toNextSwitch+" secs => ("+totalPointsEndParanoia+"/"+maxEnergy+") No spending "));
            }
        }

        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Setting paranoia spending to : "+JSON.stringify(paranoiaSpendings,replacerMap));
        logHHAuto(JSON.stringify("Setting paranoia spending to : "+JSON.stringify(paranoiaSpendings,replacerMap)));
        Storage().HHAuto_Temp_paranoiaSpendings=JSON.stringify(paranoiaSpendings,replacerMap);
    }
}

var flipParanoia=function()
{
    var burst=getBurst();

    var Setting=Storage().HHAuto_Temp_paranoiaSettings;

    var S1=Setting.split('/').map(s=>s.split('|').map(s=>s.split(':')));

    var toNextSwitch;
    var period;
    var n = new Date().getHours();
    S1[2].some(x => {if (n<x[0]) {period=x[1]; return true;}});

    if (burst)
    {
        var periods=Object.assign(...S1[1].map(d => ({[d[0]]: d[1].split('-')})));

        toNextSwitch=Number(Storage().HHAuto_Temp_toNextSwitch?Storage().HHAuto_Temp_toNextSwitch:randomInterval(Number(periods[period][0]),Number(periods[period][1])));
        /*
        if (toNextSwitch<=1800 && Storage().HHAuto_Setting_autoArenaBattle == "true")
        {
            var sl=getSecondsLeft("nextArenaTime");
            toNextSwitch=toNextSwitch<sl?toNextSwitch:sl;
        }
        */
        if ( checkParanoiaSpendings() === -1 && Storage().HHAuto_Setting_paranoiaSpendsBefore === "true" )
        {
            Storage().HHAuto_Temp_toNextSwitch=toNextSwitch;
            setParanoiaSpendings();
            return;
        }
        if ( checkParanoiaSpendings() === 0 || Storage().HHAuto_Setting_paranoiaSpendsBefore === "false")
        {
            clearParanoiaSpendings();
            cleanTempPopToStart();
            //going into hiding
            sessionStorage.HHAuto_Temp_burst="false";
        }
        else
        {
            //refresh remaining
            setParanoiaSpendings(toNextSwitch);
            //let spending go before going in paranoia
            return;
        }
    }
    else
    {
        //if (getPage()!='home') return;
        //going to work
        sessionStorage.HHAuto_Temp_autoLoop = "false";
        sessionStorage.HHAuto_Temp_burst="true";
        var b=S1[0][0][0].split('-');
        toNextSwitch=randomInterval(Number(b[0]),Number(b[1]));
    }
    var ND=new Date().getTime() + toNextSwitch * 1000;
    var offs=new Date().getTimezoneOffset();
    var message=period+(burst?" rest":" burst");
    console.log(new Date().toISOString()+":"+getCallerFunction()+":","PARANOIA: "+message);
    logHHAuto(JSON.stringify("PARANOIA: "+message));
    sessionStorage.HHAuto_Temp_pinfo=message;

    setTimer('paranoiaSwitch',toNextSwitch);
    if (sessionStorage.HHAuto_Temp_burst=="true")
    {
        if (hh_nutaku)
        {
            window.top.postMessage({reloadMe:true},'*');
        }
        else
        {
            window.top.location.reload();
        }
    }
}

function moduleSimLeague() {
    var playerEgo;
    var playerDefHC;
    var playerDefKH;
    var playerDefCH;
    var playerDef;
    var playerAtk;
    var playerClass;
    var playerAlpha;
    var playerBeta;
    var playerOmega;
    var playerExcitement;
    var opponentName;
    var opponentEgo;
    var opponentDefHC;
    var opponentDefKH;
    var opponentDefCH;
    var opponentDef;
    var opponentAtk;
    var opponentClass;
    var opponentAlpha;
    var opponentBeta;
    var opponentOmega;
    var opponentExcitement;
    var matchRating;
    var matchRatingFlag;

    var SimPower = function()
    {
        if ($("div.matchRatingNew img#powerLevelScouter").length != 0)
        {
            return;
        }
        // player stats
        playerEgo = Math.round(getSetHeroInfos('caracs.ego'));
        playerDefHC = Math.round(getSetHeroInfos('caracs.def_carac1'));
        playerDefCH = Math.round(getSetHeroInfos('caracs.def_carac2'));
        playerDefKH = Math.round(getSetHeroInfos('caracs.def_carac3'));
        playerAtk = Math.round(getSetHeroInfos('caracs.damage'));
        playerClass = $('div#leagues_left .icon').attr('carac');
        playerAlpha = JSON.parse($('div#leagues_left .girls_wrapper .team_girl[g=1]').attr('girl-tooltip-data'));
        playerBeta = JSON.parse($('div#leagues_left .girls_wrapper .team_girl[g=2]').attr('girl-tooltip-data'));
        playerOmega = JSON.parse($('div#leagues_left .girls_wrapper .team_girl[g=3]').attr('girl-tooltip-data'));
        playerExcitement = Math.round((playerAlpha.caracs.carac1 + playerAlpha.caracs.carac2 + playerAlpha.caracs.carac3) * 28);
        // opponent stats
        opponentName = $('div#leagues_right div.player_block div.title').text();
        opponentEgo = parseInt($('div#leagues_right div.lead_ego div:nth-child(2)').text().replace(/[^0-9]/gi, ''));
        opponentDefHC = $('div#leagues_right div.stats_wrap div:nth-child(2)').text();
        opponentDefCH = $('div#leagues_right div.stats_wrap div:nth-child(4)').text();
        opponentDefKH = $('div#leagues_right div.stats_wrap div:nth-child(6)').text();
        opponentAtk = $('div#leagues_right div.stats_wrap div:nth-child(8)').text();
        opponentClass = $('div#leagues_right .icon').attr('carac');
        opponentAlpha = JSON.parse($('div#leagues_right .girls_wrapper .team_girl[g=1]').attr('girl-tooltip-data'));
        opponentBeta = JSON.parse($('div#leagues_right .girls_wrapper .team_girl[g=2]').attr('girl-tooltip-data'));
        opponentOmega = JSON.parse($('div#leagues_right .girls_wrapper .team_girl[g=3]').attr('girl-tooltip-data'));
        opponentExcitement = Math.round((opponentAlpha.caracs.carac1 + opponentAlpha.caracs.carac2 + opponentAlpha.caracs.carac3) * 28);

        //Determine each side's actual defense
        if (playerClass == 'class1') {
            opponentDef = opponentDefHC;
        }
        if (playerClass == 'class2') {
            opponentDef = opponentDefCH;
        }
        if (playerClass == 'class3') {
            opponentDef = opponentDefKH;
        }

        if (opponentClass == 'class1') {
            playerDef = playerDefHC;
        }
        if (opponentClass == 'class2') {
            playerDef = playerDefCH;
        }
        if (opponentClass == 'class3') {
            playerDef = playerDefKH;
        }

        if (opponentDef.includes('.') || opponentDef.includes(',')) {
            opponentDef = parseInt(opponentDef.replace('K', '00').replace(/[^0-9]/gi, ''));
        }
        else {
            opponentDef = parseInt(opponentDef.replace('K', '000').replace(/[^0-9]/gi, ''));
        }


        if (opponentAtk.includes('.') || opponentAtk.includes(',')) {
            opponentAtk = parseInt(opponentAtk.replace('K', '00').replace(/[^0-9]/gi, ''));
        }
        else
        {
            opponentAtk = parseInt(opponentAtk.replace('K', '000').replace(/[^0-9]/gi, ''));
        }
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponentName,opponentEgo,opponentDef,opponentAtk,opponentClass,opponentAlpha,opponentBeta,opponentOmega,opponentExcitement);
        //logHHAuto(JSON.stringify(playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponentName,opponentEgo,opponentDef,opponentAtk,opponentClass,opponentAlpha,opponentBeta,opponentOmega,opponentExcitement));
        matchRating = calculatePower(playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponentName,opponentEgo,opponentDef,opponentAtk,opponentClass,opponentAlpha,opponentBeta,opponentOmega,opponentExcitement);

        //Publish the ego difference as a match rating
        matchRatingFlag = matchRating.substring(0,1);
        matchRating = matchRating.substring(1);

        switch (matchRatingFlag)
        {
            case 'g':
                $('div#leagues_right .girls_wrapper').append('<div class="matchRatingNew plus"><img id="powerLevelScouter" src="https://i.postimg.cc/qgkpN0sZ/Opponent-green.png">' + matchRating + '</div>');
                break;
            case 'y':
                $('div#leagues_right .girls_wrapper').append('<div class="matchRatingNew close"><img id="powerLevelScouter" src="https://i.postimg.cc/3JCgVBdK/Opponent-orange.png">' + matchRating + '</div>');
                break;
            case 'r':
                $('div#leagues_right .girls_wrapper').append('<div class="matchRatingNew minus"><img id="powerLevelScouter" src="https://i.postimg.cc/PxgxrBVB/Opponent-red.png">' + matchRating + '</div>');
                break;
        }


        //Replace opponent excitement with the correct value
        //$('div#leagues_right div.stats_wrap div:nth-child(9) span:nth-child(2)').empty().append(nRounding(opponentExcitement, 0, 1));

        //Replace player excitement with the correct value
        //$('div#leagues_left div.stats_wrap div:nth-child(9) span:nth-child(2)').empty().append(nRounding(playerExcitement, 0, 1));
    }
    if ($("div.matchRatingNew img#powerLevelScouter").length != 0)
    {
        return;
    }
    SimPower();

    // Refresh sim on new opponent selection (Credit: BenBrazke)
    var opntName;
    $('.leadTable').click(function() {
        opntName=''
    })
    function waitOpnt() {
        setTimeout(function() {
            if (JSON.parse($('div#leagues_right .girls_wrapper .team_girl[g=3]').attr('girl-tooltip-data'))) {
                SimPower();
            }
            else {
                waitOpnt()
            }
        }, 50);
    }
    var observeCallback = function() {
        var opntNameNew = $('div#leagues_right div.player_block div.title')[0].innerHTML
        if (opntName !== opntNameNew) {
            opntName = opntNameNew;
            waitOpnt();
        }
    }
    var observer = new MutationObserver(observeCallback);
    var test = document.getElementById('leagues_right');
    observer.observe(test, {attributes: false, childList: true, subtree: false});

    //CSS

    var sheet = (function() {
        var style = document.createElement('style');
        document.head.appendChild(style);
        return style.sheet;
    })();

    GM_addStyle('#leagues_right .player_block .lead_player_profile .level_wrapper {'
                + 'top: -8px !important;}'
               );

    GM_addStyle('#leagues_right .player_block .lead_player_profile .icon {'
                + 'top: 5px !important;}'
               );

    GM_addStyle('.matchRatingNew {'
                + 'margin-top: 50px; '
                + 'margin-left: -120px; '
                + 'text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000; '
                + 'line-height: 17px; '
                + 'font-size: 14px;}'
               );

    GM_addStyle('.plus {'
                + 'color: #66CD00;}'
               );

    GM_addStyle('.minus {'
                + 'color: #FF2F2F;}'
               );

    GM_addStyle('.close {'
                + 'color: #FFA500;}'
               );

    GM_addStyle('#powerLevelScouter {'
                + 'margin-left: -8px; '
                + 'margin-right: 1px; '
                + 'width: 25px;}'
               );
}



function moduleSimBattle() {
    var playerEgo;
    var playerDefHC;
    var playerDefKH;
    var playerDefCH;
    var playerDef;
    var playerAtk;
    var playerClass;
    var playerAlpha;
    var playerBeta;
    var playerOmega;
    var playerExcitement;
    var opponentName;
    var opponentEgo;
    var opponentDefHC;
    var opponentDefKH;
    var opponentDefCH;
    var opponentDef;
    var opponentAtk;
    var opponentClass;
    var opponentAlpha;
    var opponentBeta;
    var opponentOmega;
    var opponentExcitement;
    var matchRating;
    var matchRatingFlag;
    if ($("div.matchRatingNew img#powerLevelScouter").length != 0)
    {
        return;
    }
    // player stats
    playerEgo = Math.round(getSetHeroInfos('caracs.ego'));
    playerDefHC = Math.round(getSetHeroInfos('caracs.def_carac1'));
    playerDefCH = Math.round(getSetHeroInfos('caracs.def_carac2'));
    playerDefKH = Math.round(getSetHeroInfos('caracs.def_carac3'));
    playerAtk = Math.round(getSetHeroInfos('caracs.damage'));
    playerClass = 'class'+getSetHeroInfos('class');
    //playerClass = $('div#leagues_left .icon').attr('carac');
    playerAlpha = JSON.parse($("div.battle_hero .battle-faces div[girl_n=0]").attr('girl-tooltip-data'));
    playerBeta =  JSON.parse($("div.battle_hero .battle-faces div[girl_n=1]").attr('girl-tooltip-data'));
    playerOmega = JSON.parse($("div.battle_hero .battle-faces div[girl_n=2]").attr('girl-tooltip-data'));
    playerExcitement = Math.round((playerAlpha.caracs.carac1 + playerAlpha.caracs.carac2 + playerAlpha.caracs.carac3) * 28);
    // opponent stats
    opponentName = $('div.battle_opponent h3')[0].innerText;
    opponentEgo = parseInt($('div.battle_opponent .battle-bar-ego .over').text().replace(/[^0-9]/gi, ''));

    opponentDefHC = Number($('div.battle_opponent .stats_wrap').children()[1].innerText.split('-')[0].replace(/[^0-9]/gi, ''));
    opponentDefCH = Number($('div.battle_opponent .stats_wrap').children()[3].innerText.split('-')[0].replace(/[^0-9]/gi, ''));
    opponentDefKH = Number($('div.battle_opponent .stats_wrap').children()[5].innerText.split('-')[0].replace(/[^0-9]/gi, ''));
    opponentAtk = Number($('div.battle_opponent .stats_wrap').children()[7].innerText.split('-')[0].replace(/[^0-9]/gi, ''));
    opponentClass = $('div.battle_opponent h3 div[hh_class_tooltip]').attr('carac');
    opponentAlpha = JSON.parse($('div.battle_opponent .battle-faces div[girl_n=0]').attr('girl-tooltip-data'));
    opponentBeta = JSON.parse($('div.battle_opponent  .battle-faces div[girl_n=1]').attr('girl-tooltip-data'));
    opponentOmega = JSON.parse($('div.battle_opponent  .battle-faces div[girl_n=2]').attr('girl-tooltip-data'));
    opponentExcitement = Math.round((opponentAlpha.caracs.carac1 + opponentAlpha.caracs.carac2 + opponentAlpha.caracs.carac3) * 28);

    //Determine each side's actual defense
    if (playerClass == 'class1') {
        opponentDef = opponentDefHC;
    }
    if (playerClass == 'class2') {
        opponentDef = opponentDefCH;
    }
    if (playerClass == 'class3') {
        opponentDef = opponentDefKH;
    }

    if (opponentClass == 'class1') {
        playerDef = playerDefHC;
    }
    if (opponentClass == 'class2') {
        playerDef = playerDefCH;
    }
    if (opponentClass == 'class3') {
        playerDef = playerDefKH;
    }
    //console.log(new Date().toISOString()+":"+getCallerFunction()+":",playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponentName,opponentEgo,opponentDef,opponentAtk,opponentClass,opponentAlpha,opponentBeta,opponentOmega,opponentExcitement);
    //logHHAuto(JSON.stringify(playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponentName,opponentEgo,opponentDef,opponentAtk,opponentClass,opponentAlpha,opponentBeta,opponentOmega,opponentExcitement));
    matchRating = calculatePower(playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponentName,opponentEgo,opponentDef,opponentAtk,opponentClass,opponentAlpha,opponentBeta,opponentOmega,opponentExcitement);

    //Publish the ego difference as a match rating
    matchRatingFlag = matchRating.substring(0,1);
    matchRating = matchRating.substring(1);

    switch (matchRatingFlag)
    {
        case 'g':
            $('div.battle_opponent .battle-bar-ego .over').append('<div class="matchRatingNew plus"><img id="powerLevelScouter" src="https://i.postimg.cc/qgkpN0sZ/Opponent-green.png">' + matchRating + '</div>');
            break;
        case 'y':
            $('div.battle_opponent .battle-bar-ego .over').append('<div class="matchRatingNew close"><img id="powerLevelScouter" src="https://i.postimg.cc/3JCgVBdK/Opponent-orange.png">' + matchRating + '</div>');
            break;
        case 'r':
            $('div.battle_opponent .battle-bar-ego .over').append('<div class="matchRatingNew minus"><img id="powerLevelScouter" src="https://i.postimg.cc/PxgxrBVB/Opponent-red.png">' + matchRating + '</div>');
            break;
    }




    //Replace opponent excitement with the correct value
    //$('div#leagues_right div.stats_wrap div:nth-child(9) span:nth-child(2)').empty().append(nRounding(opponentExcitement, 0, 1));

    //Replace player excitement with the correct value
    //$('div#leagues_left div.stats_wrap div:nth-child(9) span:nth-child(2)').empty().append(nRounding(playerExcitement, 0, 1));




    var sheet = (function() {
        var style = document.createElement('style');
        document.head.appendChild(style);
        return style.sheet;
    })();

    //CSS

    GM_addStyle('.matchRatingNew {'
                + 'text-align: left; '
                + 'margin-top: -25px; '
                + 'text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000; '
                + 'line-height: 17px; '
                + 'font-size: 14px;}'
               );

    GM_addStyle('.plus {'
                + 'color: #66CD00;}'
               );

    GM_addStyle('.minus {'
                + 'color: #FF2F2F;}'
               );

    GM_addStyle('.close {'
                + 'color: #FFA500;}'
               );

    GM_addStyle('#powerLevelScouter {'
                + 'margin-left: -8px; '
                + 'margin-right: 1px; '
                + 'width: 25px;}'
               );
}

function moduleSimSeasonBattle() {

    var oppoName;
    var playerEgo;
    var playerDefHC;
    var playerDefKH;
    var playerDefCH;

    var playerAtk;
    var playerClass;
    var playerAlpha;
    var playerBeta;
    var playerOmega;
    var playerExcitement;
    var matchRating;
    var matchRatingFlag;
    var mojoOppo=[];
    var scoreOppo=[];
    var nameOppo=[];
    var index;
    var marker='!!';
    var doDisplay=false;

    try
    {
        if ($("div.matchRatingNew img#powerLevelScouter").length != 3)
        {
            doDisplay=true;
        }
        // player stats
        playerEgo = Math.round(getSetHeroInfos('caracs.ego'));
        playerDefHC = Math.round(getSetHeroInfos('caracs.def_carac1'));
        playerDefCH = Math.round(getSetHeroInfos('caracs.def_carac2'));
        playerDefKH = Math.round(getSetHeroInfos('caracs.def_carac3'));
        playerAtk = Math.round(getSetHeroInfos('caracs.damage'));
        playerClass = 'class'+getSetHeroInfos('class');
        //playerClass = $('div#leagues_left .icon').attr('carac');
        playerAlpha = JSON.parse($("div.hero_team div[girl_n=0]").attr('girl-tooltip-data'));
        playerBeta =  JSON.parse($("div.hero_team div[girl_n=1]").attr('girl-tooltip-data'));
        playerOmega = JSON.parse($("div.hero_team div[girl_n=2]").attr('girl-tooltip-data'));
        playerExcitement = Math.round((playerAlpha.caracs.carac1 + playerAlpha.caracs.carac2 + playerAlpha.caracs.carac3) * 28);




        for (index=0;index<3;index++)
        {
            var opponentName = $("div.season_arena_opponent_container .hero_details div:not([class]):not([carac])")[index].innerText;
            var opponentEgo = Number(document.getElementsByClassName("season_arena_opponent_container")[index].getElementsByClassName("hero_stats")[0].children[2].innerText.replace(/[^0-9]/gi, ''));
            var opponentDef = Number(document.getElementsByClassName("season_arena_opponent_container")[index].getElementsByClassName("hero_stats")[0].children[1].innerText.split('-')[0].replace(/[^0-9]/gi, ''));
            var opponentAtk = Number(document.getElementsByClassName("season_arena_opponent_container")[index].getElementsByClassName("hero_stats")[0].children[0].innerText.split('-')[0].replace(/[^0-9]/gi, ''));

            var opponentClass = $($("div.season_arena_opponent_container .hero_details div[hh_class_tooltip]")[index]).attr('carac');
            var opponentAlpha = JSON.parse($($("div.season_arena_opponent_container .hero_team div[rel='g1']")[index]).attr('girl-tooltip-data'));
            var opponentBeta = JSON.parse($($("div.season_arena_opponent_container .hero_team div[rel='g2']")[index]).attr('girl-tooltip-data'));
            var opponentOmega = JSON.parse($($("div.season_arena_opponent_container .hero_team div[rel='g3']")[index]).attr('girl-tooltip-data'));

            var playerDef;
            if (opponentClass == 'class1') {
                playerDef = playerDefHC;
            }
            if (opponentClass == 'class2') {
                playerDef = playerDefCH;
            }
            if (opponentClass == 'class3') {
                playerDef = playerDefKH;
            }
            var opponentExcitement = Math.round((opponentAlpha.caracs.carac1 + opponentAlpha.caracs.carac2 + opponentAlpha.caracs.carac3) * 28);

            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponentName,opponentEgo,opponentDef,opponentAtk,opponentClass,opponentAlpha,opponentBeta,opponentOmega,opponentExcitement);
            //logHHAuto(JSON.stringify(playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponentName,opponentEgo,opponentDef,opponentAtk,opponentClass,opponentAlpha,opponentBeta,opponentOmega,opponentExcitement));
            matchRating = calculatePower(playerEgo,playerDef,playerAtk,playerClass,playerAlpha,playerBeta,playerOmega,playerExcitement,opponentName,opponentEgo,opponentDef,opponentAtk,opponentClass,opponentAlpha,opponentBeta,opponentOmega,opponentExcitement);
            scoreOppo[index]=matchRating;
            mojoOppo[index]=Number($("div.season_arena_opponent_container .slot_victory_points p")[index].innerText);
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",Number($("div.season_arena_opponent_container .slot_victory_points p")[index].innerText));
            //logHHAuto(JSON.stringify(Number($("div.season_arena_opponent_container .slot_victory_points p")[index].innerText)));
            nameOppo[index]=opponentName;
            //Publish the ego difference as a match rating
            matchRatingFlag = matchRating.substring(0,1);
            matchRating = matchRating.substring(1);

            if (doDisplay)
            {

                switch (matchRatingFlag)
                {
                    case 'g':
                        $($('div.season_arena_opponent_container')[index]).append('<div class="matchRatingNew plus"><img id="powerLevelScouter" src="https://i.postimg.cc/qgkpN0sZ/Opponent-green.png">' + matchRating + '</div>');
                        break;
                    case 'y':
                        $($('div.season_arena_opponent_container')[index]).append('<div class="matchRatingNew close"><img id="powerLevelScouter" src="https://i.postimg.cc/3JCgVBdK/Opponent-orange.png">' + matchRating + '</div>');
                        break;
                    case 'r':
                        $($('div.season_arena_opponent_container')[index]).append('<div class="matchRatingNew minus"><img id="powerLevelScouter" src="https://i.postimg.cc/PxgxrBVB/Opponent-red.png">' + matchRating + '</div>');
                        break;
                }
            }
        }

        var chosenID = -1;
        var chosenRating = -1;
        var chosenFlag = -1;
        var chosenMojo = -1;
        var currentFlag;
        var currentScore;
        var currentMojo;
        var numberOfReds=0;

        for (index=0;index<3;index++)
        {
            currentScore = Number(scoreOppo[index].substring(1));
            currentFlag = scoreOppo[index].substring(0,1);
            currentMojo = Number(mojoOppo[index]);
            switch (currentFlag)
            {
                case 'g':
                    currentFlag = 1;
                    break;
                case 'y':
                    currentFlag = 0;
                    break;
                case 'r':
                    currentFlag = -1;
                    numberOfReds++;
                    break;
            }
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",nameOppo[index],currentFlag,currentScore,currentMojo);
            //logHHAuto(JSON.stringify(nameOppo[index],currentFlag,currentScore,currentMojo));
            //not chosen or better flag
            if (chosenRating == -1 || chosenFlag < currentFlag)
            {
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'first');
                //logHHAuto(JSON.stringify('first'));
                chosenRating = currentScore;
                chosenFlag = currentFlag;
                chosenID = index;
                chosenMojo = currentMojo;
                oppoName = nameOppo[index];
            }
            //same orange flag but better score
            else if (chosenFlag == currentFlag && currentFlag == 0 && chosenRating < currentScore)
            {
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'second');
                //logHHAuto(JSON.stringify('second'));
                chosenRating = currentScore;
                chosenFlag = currentFlag;
                chosenID = index;
                chosenMojo = currentMojo;
                oppoName = nameOppo[index];
            }
            //same red flag but better mojo
            else if (chosenFlag == currentFlag && currentFlag == -1 && chosenMojo < currentMojo)
            {
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'second');
                //logHHAuto(JSON.stringify('second'));
                chosenRating = currentScore;
                chosenFlag = currentFlag;
                chosenID = index;
                chosenMojo = currentMojo;
                oppoName = nameOppo[index];
            }
            //same green flag but better mojo
            else if (chosenFlag == currentFlag && currentFlag == 1 && chosenMojo < currentMojo)
            {
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'third');
                //logHHAuto(JSON.stringify('third'));
                chosenRating = currentScore;
                chosenFlag = currentFlag;
                chosenID = index;
                chosenMojo = currentMojo;
                oppoName = nameOppo[index];
            }
            //same green flag same mojo but better score
            else if (chosenFlag == currentFlag && currentFlag == 1 && chosenMojo == currentMojo && chosenRating < currentScore)
            {
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'third');
                //logHHAuto(JSON.stringify('third'));
                chosenRating = currentScore;
                chosenFlag = currentFlag;
                chosenID = index;
                chosenMojo = currentMojo;
                oppoName = nameOppo[index];
            }
        }

        var price=Number($("div.opponents_arena button#refresh_villains").attr('price'));
        if (isNaN(price))
        {
            price = 12;
        }
        if (numberOfReds === 3 && Storage().HHAuto_Setting_autoSeasonPassReds === "true" && getSetHeroInfos('hard_currency')>=price+Number(Storage().HHAuto_Setting_kobanBank))
        {
            chosenID = -2;
        }

        //console.log(new Date().toISOString()+":"+getCallerFunction()+":","Best opportunity opponent : "+oppoName+'('+chosenRating+')');
        //logHHAuto(JSON.stringify("Best opportunity opponent : "+oppoName+'('+chosenRating+')'));
        if (doDisplay)
        {

            //$('div.season_arena_opponent_container div.matchRatingNew')[chosenID].innerHTML=$('div.season_arena_opponent_container div.matchRatingNew')[chosenID].innerHTML+marker;
            $($('div.season_arena_opponent_container div.matchRatingNew')[chosenID]).append('<img id="powerLevelScouterChosen" src="https://i.postimg.cc/MfKwNbZ8/Opponent-go.png">');


            var sheet = (function() {
                var style = document.createElement('style');
                document.head.appendChild(style);
                return style.sheet;
            })();

            //CSS

            GM_addStyle('.matchRatingNew {'
                        + 'text-align: center; '
                        + 'margin-top: -14px; '
                        + 'text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000; '
                        + 'line-height: 17px; '
                        + 'font-size: 14px;}'
                       );

            GM_addStyle('.plus {'
                        + 'color: #66CD00;}'
                       );

            GM_addStyle('.minus {'
                        + 'color: #FF2F2F;}'
                       );

            GM_addStyle('.close {'
                        + 'color: #FFA500;}'
                       );

            GM_addStyle('#powerLevelScouter {'
                        + 'margin-left: -8px; '
                        + 'margin-right: 1px; '
                        + 'width: 25px;}'
                       );
            GM_addStyle('#powerLevelScouterChosen {'
                        + 'width: 25px;}'
                       );
        }
        return chosenID;
    }
    catch(err)
    {
        return -1;
    }
}


var autoLoop = function () {
    updateData();
    if (!sessionStorage.HHAuto_Temp_questRequirement)
    {
        sessionStorage.HHAuto_Temp_questRequirement="none";
    }
    if (!sessionStorage.HHAuto_Temp_userLink)
    {
        sessionStorage.HHAuto_Temp_userLink="none"
    }
    if (!sessionStorage.HHAuto_Temp_battlePowerRequired)
    {
        sessionStorage.HHAuto_Temp_battlePowerRequired="0";
    }



    var busy = false;
    var page = window.location.href;
    var currentPower = getSetHeroInfos('fight.amount');

    var burst=getBurst();

    if (burst /*|| checkTimer('nextMissionTime')*/)
    {
        if (!checkTimer("paranoiaSwitch") )
        {
            clearParanoiaSpendings();
        }
        else
        {
            setParanoiaSpendings();
        }
        if(Storage().HHAuto_Setting_autoFreePachinko === "true" && busy === false){
            // Navigate to pachinko

            if (checkTimer("nextPachinkoTime")) {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to fetch Great Pachinko.");
                logHHAuto(JSON.stringify("Time to fetch Great Pachinko."));
                getPachinko();
                busy = true;
            }
            if (checkTimer("nextPachinko2Time")) {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to fetch Mythic Pachinko.");
                logHHAuto(JSON.stringify("Time to fetch Mythic Pachinko."));
                getPachinko2();
                busy = true;
            }
        }
        if(Storage().HHAuto_Setting_autoLeagues === "true" && getSetHeroInfos('level')>=20 && busy === false ){
            // Navigate to leagues
            if ((checkTimer('nextLeaguesTime') && Number(getSetHeroInfos('challenge.amount')) > Number(Storage().HHAuto_Setting_autoLeaguesThreshold) ) || Number(checkParanoiaSpendings('challenge')) > 0)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to fight in Leagues.");
                logHHAuto(JSON.stringify("Time to fight in Leagues."));
                doLeagueBattle();
                busy = true;
            }
            else
            {
                if (checkTimer('nextLeaguesTime'))
                {
                    setTimer('nextLeaguesTime',getSetHeroInfos('challenge.next_refresh_ts'));
                }
            }
        }
        if(Storage().HHAuto_Setting_autoContest === "true" && busy === false){
            if (checkTimer('nextContestTime') || unsafeWindow.has_contests_datas ||$(".contest .ended button[rel='claim']").size()>0){
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to get contest rewards.");
                logHHAuto(JSON.stringify("Time to get contest rewards."));
                busy = doContestStuff();
            }
        }
        if(Storage().HHAuto_Setting_autoPowerPlaces === "true" && busy === false){

            var popToStart = Storage().HHAuto_Temp_PopToStart?JSON.parse(Storage().HHAuto_Temp_PopToStart):[];
            if (popToStart.length != 0 || checkTimer('minPowerPlacesTime'))
            {
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":","pop1:",popToStart);
                //logHHAuto(JSON.stringify("pop1:",popToStart));
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Go and collect");
                logHHAuto(JSON.stringify("Go and collect"));
                busy = collectAndUpdatePowerPlaces();
                var indexes=(Storage().HHAuto_Setting_autoPowerPlacesIndexFilter?Storage().HHAuto_Setting_autoPowerPlacesIndexFilter:"").split(";");

                popToStart = Storage().HHAuto_Temp_PopToStart?JSON.parse(Storage().HHAuto_Temp_PopToStart):[];
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":","pop2:",popToStart);
                //logHHAuto(JSON.stringify("pop2:",popToStart));
                for(var index of indexes)
                {
                    if (busy === false && popToStart.includes(Number(index)))
                    {
                        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to do PowerPlace"+index+".");
                        logHHAuto(JSON.stringify("Time to do PowerPlace"+index+"."));
                        busy = doPowerPlacesStuff(index);
                    }
                }
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":","pop3:",Storage().HHAuto_Temp_PopToStart);
                //logHHAuto(JSON.stringify("pop3:",Storage().HHAuto_Temp_PopToStart));
                popToStart = Storage().HHAuto_Temp_PopToStart?JSON.parse(Storage().HHAuto_Temp_PopToStart):[];
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":","pop3:",popToStart);
                //logHHAuto(JSON.stringify("pop3:",popToStart));
                if (popToStart.length === 0)
                {
                    //console.log(new Date().toISOString()+":"+getCallerFunction()+":","removing popToStart");
                    //logHHAuto(JSON.stringify("removing popToStart"));
                    Storage().removeItem('HHAuto_Temp_PopToStart');
                    gotoPage("home");
                }
            }
        }
        if(Storage().HHAuto_Setting_autoMission === "true" && busy === false){
            if (checkTimer('nextMissionTime')){
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to do missions.");
                logHHAuto(JSON.stringify("Time to do missions."));
                busy = doMissionStuff();
            }
        }

        if (Storage().HHAuto_Setting_autoQuest === "true" && busy === false )
        {
            Storage().HHAuto_Temp_autoTrollBattleSaveQuest = (Storage().HHAuto_Temp_autoTrollBattleSaveQuest ? Storage().HHAuto_Temp_autoTrollBattleSaveQuest : "false") ;
            if (sessionStorage.HHAuto_Temp_questRequirement === "battle")
            {
                if (Storage().HHAuto_Temp_autoTrollBattleSaveQuest === "false")
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Quest requires battle.");
                    logHHAuto(JSON.stringify("Quest requires battle."));
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","prepare to save one battle for quest");
                    logHHAuto(JSON.stringify("prepare to save one battle for quest"));
                    Storage().HHAuto_Temp_autoTrollBattleSaveQuest = "true";
                    doBossBattle();
                }
                busy = false;
            }
            else if (sessionStorage.HHAuto_Temp_questRequirement[0] === '$')
            {
                if (Number(sessionStorage.HHAuto_Temp_questRequirement.substr(1)) < getSetHeroInfos('soft_currency')) {
                    // We have enough money... requirement fulfilled.
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Continuing quest, required money obtained.");
                    logHHAuto(JSON.stringify("Continuing quest, required money obtained."));
                    sessionStorage.HHAuto_Temp_questRequirement = "none";
                    proceedQuest();
                    busy = false;
                }
                else
                {
                    //prevent paranoia to wait for quest
                    Storage().HHAuto_Temp_paranoiaQuestBlocked="true";
                    if(isNaN(sessionStorage.HHAuto_Temp_questRequirement.substr(1)))
                    {
                        console.log(new Date().toISOString()+":"+getCallerFunction()+":",sessionStorage.HHAuto_Temp_questRequirement);
                        logHHAuto(JSON.stringify(sessionStorage.HHAuto_Temp_questRequirement));
                        sessionStorage.HHAuto_Temp_questRequirement = "none";
                        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Invalid money in session storage quest requirement !");
                        logHHAuto(JSON.stringify("Invalid money in session storage quest requirement !"));
                    }
                    else
                    {
                        // Else we need more money.
                        //console.log(new Date().toISOString()+":"+getCallerFunction()+":","Need money for quest, cannot continue. Turning ON AutoSalary.");
                        //logHHAuto(JSON.stringify("Need money for quest, cannot continue. Turning ON AutoSalary."));
                        Storage().HHAuto_Setting_autoQuest = "true";
                    }
                    busy = false;
                }
            }
            else if (sessionStorage.HHAuto_Temp_questRequirement[0] === '*')
            {
                var energyNeeded = Number(sessionStorage.HHAuto_Temp_questRequirement.substr(1));
                var energyCurrent = getSetHeroInfos('quest.amount');
                if (energyNeeded <= energyCurrent)
                {
                    if (Number(getSetHeroInfos('quest.amount')) > Number(Storage().HHAuto_Setting_autoQuestThreshold) || Number(checkParanoiaSpendings('quest')) > 0 )
                    {
                        // We have enough energy... requirement fulfilled.
                        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Continuing quest, required energy obtained.");
                        logHHAuto(JSON.stringify("Continuing quest, required energy obtained."));
                        sessionStorage.HHAuto_Temp_questRequirement = "none";
                        proceedQuest();
                        busy = true;
                    }
                    else
                    {
                        busy = false;
                    }
                }
                // Else we need energy, just wait.
                else
                {
                    //prevent paranoia to wait for quest
                    Storage().HHAuto_Temp_paranoiaQuestBlocked="true";
                    busy = false;
                    //console.log(new Date().toISOString()+":"+getCallerFunction()+":","Replenishing energy for quest.(" + energyNeeded + " needed)");
                    //logHHAuto(JSON.stringify("Replenishing energy for quest.(" + energyNeeded + " needed)"));
                }
            }
            else if (sessionStorage.HHAuto_Temp_questRequirement[0] === 'P')
            {
                // Battle power required.
                var neededPower = Number(sessionStorage.HHAuto_Temp_questRequirement.substr(1));
                if(currentPower < neededPower)
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Quest requires "+neededPower+" Battle Power for advancement. Waiting...");
                    logHHAuto(JSON.stringify("Quest requires "+neededPower+" Battle Power for advancement. Waiting..."));
                    busy = false;
                    //prevent paranoia to wait for quest
                    Storage().HHAuto_Temp_paranoiaQuestBlocked="true";
                }
                else
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Battle Power obtained, resuming quest...");
                    logHHAuto(JSON.stringify("Battle Power obtained, resuming quest..."));
                    sessionStorage.HHAuto_Temp_questRequirement = "none";
                    proceedQuest();
                    busy = true;
                }
            }
            else if (sessionStorage.HHAuto_Temp_questRequirement === "unknownQuestButton")
            {
                //prevent paranoia to wait for quest
                Storage().HHAuto_Temp_paranoiaQuestBlocked="true";
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","AutoQuest disabled.HHAuto_Setting_AutoQuest cannot be performed due to unknown quest button. Please manually proceed the current quest screen.");
                logHHAuto(JSON.stringify("AutoQuest disabled.HHAuto_Setting_AutoQuest cannot be performed due to unknown quest button. Please manually proceed the current quest screen."));
                document.getElementById("autoQuestCheckbox").checked = false;
                Storage().HHAuto_Setting_autoQuest = "false";
                sessionStorage.HHAuto_Temp_questRequirement = "none";
                busy = false;
            }
            else if (sessionStorage.HHAuto_Temp_questRequirement === "errorInAutoBattle")
            {
                //prevent paranoia to wait for quest
                Storage().HHAuto_Temp_paranoiaQuestBlocked="true";
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","AutoQuest disabled.HHAuto_Setting_AutoQuest cannot be performed due errors in AutoBattle. Please manually proceed the current quest screen.");
                logHHAuto(JSON.stringify("AutoQuest disabled.HHAuto_Setting_AutoQuest cannot be performed due errors in AutoBattle. Please manually proceed the current quest screen."));
                document.getElementById("autoQuestCheckbox").checked = false;
                Storage().HHAuto_Setting_autoQuest = "false";
                sessionStorage.HHAuto_Temp_questRequirement = "none";
                busy = false;
            }
            else if(sessionStorage.HHAuto_Temp_questRequirement === "none")
            {
                if (Number(getSetHeroInfos('quest.amount')) > Number(Storage().HHAuto_Setting_autoQuestThreshold) || Number(checkParanoiaSpendings('quest')) > 0 )
                {
                    //console.log(new Date().toISOString()+":"+getCallerFunction()+":","NONE req.");
                    //logHHAuto(JSON.stringify("NONE req."));
                    busy = true;
                    proceedQuest();
                }
            }
            else
            {
                //prevent paranoia to wait for quest
                Storage().HHAuto_Temp_paranoiaQuestBlocked="true";
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Invalid quest requirement : "+sessionStorage.HHAuto_Temp_questRequirement);
                logHHAuto(JSON.stringify("Invalid quest requirement : "+sessionStorage.HHAuto_Temp_questRequirement));
                busy=false;
            }
        }
        else if(Storage().HHAuto_Setting_autoQuest === "false")
        {
            sessionStorage.HHAuto_Temp_questRequirement = "none";
        }
        /*
        if(Storage().HHAuto_Setting_autoArenaBattle === "true" && busy === false)
        {
            if ($('a[rel=arena] span.button-notification-icon').size()>0)
            {
               console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Missed one in arena!');
logHHAuto(JSON.stringify('Missed one in arena!'));
                setTimer('nextArenaTime',0);
            }
            if(checkTimer("nextArenaTime"))
            {
               console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to fight in arena.");
logHHAuto(JSON.stringify("Time to fight in arena."));
                doBattle();
                busy = true;
            }
        }
        */
        if(Storage().HHAuto_Setting_autoSeason === "true" && busy === false )
        {
            if (Number(getSetHeroInfos('kiss.amount')) > 0 && ( (Number(getSetHeroInfos('kiss.amount')) > Number(Storage().HHAuto_Setting_autoSeasonThreshold) && checkTimer('nextSeasonTime')) || Number(checkParanoiaSpendings('kiss')) > 0 ) )
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to fight in Season.");
                logHHAuto(JSON.stringify("Time to fight in Season."));
                doSeason();
                busy = true;
            }
            else
            {
                if (checkTimer('nextSeasonTime'))
                {
                    setTimer('nextSeasonTime',getSetHeroInfos('kiss.next_refresh_ts'));
                }
            }

        }



        if(Storage().HHAuto_Setting_autoTrollBattle === "true" && getSetHeroInfos('questing.id_world')>0)
        {
            if(busy === false && currentPower >= Number(sessionStorage.HHAuto_Temp_battlePowerRequired) && currentPower > 0)
            {
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",getSetHeroInfos('fight.amount'),Number(Storage().HHAuto_Setting_autoTrollThreshold),Number(checkParanoiaSpendings('fight')));
                //logHHAuto(JSON.stringify(getSetHeroInfos('fight.amount'),Number(Storage().HHAuto_Setting_autoTrollThreshold),Number(checkParanoiaSpendings('fight'))));
                if (Number(getSetHeroInfos('fight.amount')) > Number(Storage().HHAuto_Setting_autoTrollThreshold) || Number(checkParanoiaSpendings('fight')) > 0 || (sessionStorage.HHAuto_Temp_eventTrollIsMythic === "true" && Storage().HHAuto_Setting_autoTrollMythicByPassThreshold === "true" ))
                {
                    sessionStorage.HHAuto_Temp_battlePowerRequired = "0";
                    busy = true;
                    if(Storage().HHAuto_Setting_autoQuest === "true")
                    {
                        if(sessionStorage.HHAuto_Temp_questRequirement[0] === 'P')
                        {
                            console.log(new Date().toISOString()+":"+getCallerFunction()+":","AutoBattle disabled for power collection for AutoQuest.");
                            logHHAuto(JSON.stringify("AutoBattle disabled for power collection for AutoQuest."));
                            document.getElementById("autoTrollCheckbox").checked = false;
                            Storage().HHAuto_Setting_autoTrollBattle = "false";
                            busy = false;
                        }
                        else
                        {
                            doBossBattle();
                        }
                    }
                    else
                    {
                        doBossBattle();
                    }
                }
            }
        }
        else
        {
            sessionStorage.HHAuto_Temp_battlePowerRequired = "0";
        }

        var ECt= getSetHeroInfos('quest.amount');
        if (ECt>=60 && (Storage().HHAuto_Setting_autoChampsUseEne==="true"))
        {
            function buyTicket()
            {
                var params = {
                    namespace: 'h\\Champions',
                    class: 'Champions',
                    action: 'buy_ticket',
                    currency: 'energy_quest',
                    amount: 1
                };
                console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Buying ticket with energy');
                logHHAuto(JSON.stringify('Buying ticket with energy'));
                hh_ajax(params, function(data) {
                    anim_number($('.tickets_number_amount'), data.tokens - amount, amount);
                    Hero.updates(data.heroChangesUpdate);
                    location.reload();
                });
            }
            sessionStorage.HHAuto_Temp_autoLoop = "false";
            busy = true;;
            setTimeout(buyTicket,randomInterval(800,1200));
        }

        if (busy==false && Storage().HHAuto_Setting_autoChamps==="true" && checkTimer('nextChampionTime'))
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to check on champions!");
            logHHAuto(JSON.stringify("Time to check on champions!"));
            busy=doChampionStuff();
        }

        if (/*autoBuy() &&*/ busy===false)
        {
            if (sessionStorage.HHAuto_Temp_charLevel===undefined)
            {
                sessionStorage.HHAuto_Temp_charLevel=0;
            }
            if (checkTimer('nextShopTime') || sessionStorage.HHAuto_Temp_charLevel<getSetHeroInfos('level')) {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to check shop.");
                logHHAuto(JSON.stringify("Time to check shop."));
                busy = updateShop();
            }
        }

        if (Storage().HHAuto_Setting_autoSalary === "true" && busy === false) {
            if (checkTimer("nextSalaryTime")) {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","Time to fetch salary.");
                logHHAuto(JSON.stringify("Time to fetch salary."));
                busy = getSalary();
            }
        }

        if(busy === true && sessionStorage.HHAuto_Temp_userLink==="none" && !window.location.pathname.startsWith("/quest"))
        {
            sessionStorage.HHAuto_Temp_userLink = page;
        }
        else if(sessionStorage.HHAuto_Temp_userLink !=="none" && busy === false)
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","Restoring page "+sessionStorage.HHAuto_Temp_userLink);
            logHHAuto(JSON.stringify("Restoring page "+sessionStorage.HHAuto_Temp_userLink));
            window.location = sessionStorage.HHAuto_Temp_userLink;
            sessionStorage.HHAuto_Temp_userLink = "none";
        }
    }

    if(Storage().HHAuto_Setting_paranoia === "true" && Storage().HHAuto_Setting_master==="true" && busy === false){
        if (checkTimer("paranoiaSwitch")) {
            flipParanoia();
        }
    }

    if(isNaN(Storage().HHAuto_Temp_autoLoopTimeMili)){
        console.log(new Date().toISOString()+":"+getCallerFunction()+":","AutoLoopTimeMili is not a number.");
        logHHAuto(JSON.stringify("AutoLoopTimeMili is not a number."));
        setDefaults();
    }
    else{
        if (sessionStorage.HHAuto_Temp_autoLoop === "true") setTimeout(autoLoop, Number(Storage().HHAuto_Temp_autoLoopTimeMili));
        else
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","autoLoop Disabled");
            logHHAuto(JSON.stringify("autoLoop Disabled"));
        }
    }

    var currentPage = window.location.pathname;

    if (getPage() === "leaderboard" && Storage().HHAuto_Setting_showCalculatePower === "true") {
        moduleSimLeague();
    }
    if (getPage() === "battle" && Storage().HHAuto_Setting_showCalculatePower === "true" && $(".preBattleAnim").length == 0) {
        moduleSimBattle();
    }
    if (getPage() === "season_arena" && Storage().HHAuto_Setting_showCalculatePower === "true") {
        moduleSimSeasonBattle();
    }
    if (getPage() === "home" && $("div.event-widget div.widget[style='display: block;']").length !== 0) {
        moduleDisplayEventPriority();
    }
    if (getPage() === "powerplacemain" ) {
        moduleDisplayPopID();
    }
};

var setDefaults = function () {
    console.log(new Date().toISOString()+":"+getCallerFunction()+":","Setting Defaults.");
    logHHAuto(JSON.stringify("Setting Defaults."));
    Storage().HHAuto_Setting_autoSalary = "false";
    Storage().HHAuto_Setting_autoSalaryTimer = "120";
    Storage().HHAuto_Setting_autoContest = "false";
    Storage().HHAuto_Setting_autoMission = "false";
    Storage().HHAuto_Setting_autoPowerPlaces = "false";
    Storage().HHAuto_Setting_autoPowerPlacesAll = "false";
    Storage().HHAuto_Setting_autoPowerPlacesIndexFilter = "1;2;3";
    Storage().HHAuto_Setting_autoMissionC = "false";
    Storage().HHAuto_Setting_autoLeagues = "false";
    Storage().HHAuto_Setting_autoLeaguesCollect = "false";
    Storage().HHAuto_Setting_autoLeaguesPowerCalc = "false";
    //Storage().HHAuto_Setting_autoLeaguesMaxRank = "0";
    Storage().HHAuto_Temp_leaguesTarget = "9";
    Storage().HHAuto_Setting_autoStats = "500000000";
    sessionStorage.HHAuto_Temp_autoLoop = "true";
    sessionStorage.HHAuto_Temp_userLink = "none";
    Storage().HHAuto_Temp_autoLoopTimeMili = "500";
    Storage().HHAuto_Setting_autoQuest = "false";
    Storage().HHAuto_Setting_autoTrollBattle = "false";
    Storage().HHAuto_Setting_plusEvent = "false";
    Storage().HHAuto_Setting_plusEventMythic = "false";
    Storage().HHAuto_Setting_eventMythicPrio = "false";
    Storage().HHAuto_Setting_autoTrollMythicByPassThreshold = "false";
    Storage().HHAuto_Setting_eventTrollOrder="";
    Storage().HHAuto_Setting_buyCombTimer="16";
    //Storage().HHAuto_Setting_autoArenaBattle = "false";
    Storage().HHAuto_Setting_autoSeason = "false";
    Storage().HHAuto_Setting_autoSeasonCollect = "false";
    sessionStorage.HHAuto_Temp_battlePowerRequired = "0";
    sessionStorage.HHAuto_Temp_questRequirement = "none";
    Storage().HHAuto_Temp_freshStart = "no";
    Storage().HHAuto_Setting_autoChamps="false";
    Storage().HHAuto_Setting_autoChampsUseEne="false";
    Storage().HHAuto_Setting_autoChampsFilter="1;2;3;4;5;6";
    Storage().HHAuto_Setting_autoFreePachinko = "false";
    Storage().HHAuto_Setting_autoExp = "500000000";
    Storage().HHAuto_Setting_autoExpW = "false";
    Storage().HHAuto_Setting_MaxExp = "10000";
    Storage().HHAuto_Setting_autoAff = "500000000";
    Storage().HHAuto_Setting_autoAffW = "false";
    Storage().HHAuto_Setting_MaxAff = "50000";
    Storage().HHAuto_Setting_autoLGM = "500000000";
    Storage().HHAuto_Setting_autoLGMW = "false";
    Storage().HHAuto_Setting_autoLGR = "500000000";
    Storage().HHAuto_Setting_autoLGRW = "false";
    //Storage().HHAuto_Setting_autoEGM = "500000000";
    //Storage().HHAuto_Setting_autoEGMW = "false";
    Storage().HHAuto_Setting_autoBuyBoostersFilter = "B1;B2;B3;B4";
    Storage().HHAuto_Setting_autoBuyBoosters = "false";
    Storage().HHAuto_Setting_paranoia="true";
    Storage().HHAuto_Setting_paranoiaSpendsBefore="false";

    Storage().HHAuto_Setting_calculatePowerLimits = "default";
    Storage().HHAuto_Setting_autoTrollThreshold="0";
    Storage().HHAuto_Setting_autoQuestThreshold="0";
    Storage().HHAuto_Setting_autoLeaguesThreshold="0";
    Storage().HHAuto_Setting_autoSeasonThreshold="0";

    Storage().HHAuto_Setting_spendKobans0="false";
    Storage().HHAuto_Setting_autoSeasonPassReds ="false";
    Storage().HHAuto_Temp_paranoiaSettings="120-300/Sleep:28800-29400|Active:300-420|Casual:1800-2100/6:Sleep|18:Active|22:Casual|24:Sleep";
    Storage().HHAuto_Setting_master="false";
};

var moduleDisplayEventPriority=function()
{
    var eventGirlz=sessionStorage.HHAuto_Temp_eventsGirlz?JSON.parse(sessionStorage.HHAuto_Temp_eventsGirlz):[];
    if ($('.HHEventPriority').length  > 0) {return}
    //$("div.event-widget div.widget[style='display: block;'] div.container div.scroll-area div.rewards-block-tape div.girl_reward div.HHEventPriority").each(function(){this.remove();});
    if ( eventGirlz.length >0 )
    {
        var widgetGirlz=[];
        var prio;
        for ( var e in eventGirlz)
        {
            prio = Number(eventGirlz[e].split(";")[2]);
            widgetGirlz[prio] = e;
        }
        $("div.event-widget div.widget[style='display: block;'] div.container div.scroll-area div.rewards-block-tape div.girl_reward").each(function()
                                                                                                                                            {
            var currentGirl = Number($(this).attr('girl'));
            if ( currentGirl in widgetGirlz )
            {
                var prio = Number(widgetGirlz[currentGirl])+1;
                $(this).prepend('<div class="HHEventPriority">'+prio+'</div>');
            }
        });
    }

}


var CollectEventData=function()
{
    if (unsafeWindow.event_data || unsafeWindow.mythic_event_data)
    {
        //var Trollz=[];
        //var TrollzMythic=[];
        var eventsGirlz=[];
        var Priority=(Storage().HHAuto_Setting_eventTrollOrder?Storage().HHAuto_Setting_eventTrollOrder:"").split(";");

        if (unsafeWindow.event_data && Storage().HHAuto_Setting_plusEvent==="true")
        {
            var timeLeft=event_data.seconds_until_event_end;
            setTimer('eventGoing',timeLeft);

            for (var i=0;i<event_data.girls.length;i++)
            {
                if (!event_data.girls[i].owned_girl && event_data.girls[i].troll)
                {
                    if (Number(event_data.girls[i].troll.id_troll)<getSetHeroInfos('questing.id_world'))
                    {
                        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Event girl : "+event_data.girls[i].name+" ("+event_data.girls[i].shards+"/100) at troll "+event_data.girls[i].troll.id_troll+" priority : "+Priority.indexOf(event_data.girls[i].troll.id_troll));
                        logHHAuto(JSON.stringify("Event girl : "+event_data.girls[i].name+" ("+event_data.girls[i].shards+"/100) at troll "+event_data.girls[i].troll.id_troll+" priority : "+Priority.indexOf(event_data.girls[i].troll.id_troll)));
                        eventsGirlz.push("event;"+i+";"+event_data.girls[i].id_girl+";"+event_data.girls[i].troll.id_troll);
                        //Trollz.push(Number(event_data.girls[i].troll.id_troll));
                    }
                }
            }
        }

        if (unsafeWindow.mythic_event_data && Storage().HHAuto_Setting_plusEventMythic==="true")
        {
            var timeLeftMythic=mythic_event_data.seconds_until_event_end;
            setTimer('eventMythicGoing',timeLeftMythic);

            for (i=0;i<mythic_event_data.girls.length;i++)
            {
                if (Number(mythic_event_data.girls[i].shards) !== 100 && Number(mythic_event_data.event_data.shards_available) !== 0 && mythic_event_data.girls[i].troll)
                {
                    if (Number(mythic_event_data.girls[i].troll.id_troll)<getSetHeroInfos('questing.id_world'))
                    {
                        console.log(new Date().toISOString()+":"+getCallerFunction()+":","Mythic Event girl : "+mythic_event_data.girls[i].name+" "+mythic_event_data.girls[i].shards+"/100");
                        logHHAuto(JSON.stringify("Mythic Event girl : "+mythic_event_data.girls[i].name+" "+mythic_event_data.girls[i].shards+"/100"));
                        //Trollz.push(Number(mythic_event_data.girls[i].troll.id_troll));
                        eventsGirlz.push("mythic_event;"+i+";"+mythic_event_data.girls[i].id_girl+";"+mythic_event_data.girls[i].troll.id_troll);
                        //TrollzMythic.push(Number(mythic_event_data.girls[i].troll.id_troll));
                    }
                }
            }
        }

        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",Priority);
        //logHHAuto(JSON.stringify(Priority));
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",Trollz);
        //logHHAuto(JSON.stringify(Trollz));
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":","EventGirls",eventsGirlz);
        //logHHAuto(JSON.stringify("EventGirls",eventsGirlz));
        eventsGirlz = eventsGirlz.filter(function (a) {
            var a_split = a.split(";");
            var a_weighted = Number(Priority.indexOf(a_split[3]));
            if ( a_split[0] === "mythic_event" && Storage().HHAuto_Setting_eventMythicPrio === "true")
            {
                return true;
            }
            else
            {
                return a_weighted !== -1;
            }
        });
        //console.log(new Date().toISOString()+":"+getCallerFunction()+":","Filtered EventGirls",eventsGirlz);
        //logHHAuto(JSON.stringify("Filtered EventGirls",eventsGirlz));
        if (eventsGirlz.length>0)
        {

            if (Priority[0]!='')
            {
                eventsGirlz.sort(function (a, b) {
                    var a_split = a.split(";");
                    var b_split = b.split(";");
                    var a_weighted = Number(Priority.indexOf(a_split[3]));
                    if ( a_split[0] === "mythic_event" && Storage().HHAuto_Setting_eventMythicPrio === "true")
                    {
                        a_weighted=a_weighted/10;
                    }
                    var b_weighted = Number(Priority.indexOf(b_split[3]));
                    if ( b_split[0] === "mythic_event" && Storage().HHAuto_Setting_eventMythicPrio === "true")
                    {
                        b_weighted=b_weighted/10;
                    }
                    return a_weighted-b_weighted;

                });
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":","Sorted EventGirls",eventsGirlz);
                //logHHAuto(JSON.stringify("Sorted EventGirls",eventsGirlz));
            }
            sessionStorage.HHAuto_Temp_eventsGirlz = JSON.stringify(eventsGirlz);
            var chosenTroll = Number(eventsGirlz[0].split(";")[3])
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","ET: "+chosenTroll);
            logHHAuto(JSON.stringify("ET: "+chosenTroll));
            if ( eventsGirlz[0].split(";")[0] === "mythic_event" )
            {
                sessionStorage.HHAuto_Temp_eventTrollIsMythic="true";
            }
            else
            {
                sessionStorage.HHAuto_Temp_eventTrollIsMythic="false";
            }
            sessionStorage.HHAuto_Temp_eventTroll=chosenTroll;
        }
        else
        {
            sessionStorage.removeItem('HHAuto_Temp_eventsGirlz');
            sessionStorage.removeItem('HHAuto_Temp_eventTroll');
            sessionStorage.HHAuto_Temp_eventTrollIsMythic="false";
        }
        /*         if (Trollz.length>0)
        {
            if (Priority[0]!='')
            {
                var found=false;
                for (var n=0;n<Priority.length;n++)
                {
                    if (Trollz.includes(Number(Priority[n])))
                    {
                       console.log(new Date().toISOString()+":"+getCallerFunction()+":","ET: "+Priority[n]);
logHHAuto(JSON.stringify("ET: "+Priority[n]));
                        sessionStorage.HHAuto_Temp_eventTroll=Number(Priority[n]);
                        found=true;
                        break;
                    }
                }
                if (!found)
                {
                    delete sessionStorage.HHAuto_Temp_eventTroll;
                    //sessionStorage.HHAuto_Temp_eventTroll=Trollz.sort((a,b)=>{return a-b;})[0];
                }
            }
            else
            {
                sessionStorage.HHAuto_Temp_eventTroll=Trollz.sort((a,b)=>{return a-b;})[0];
            }
        }
        else
        {
            delete sessionStorage.HHAuto_Temp_eventTroll;
        }
        //priorize mythic event over all
        if (Storage().HHAuto_Setting_eventMythicPrio === "true" && TrollzMythic.length>0)
        {
            sessionStorage.HHAuto_Temp_eventTroll=Number(TrollzMythic[0]);
        }
*/

        //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'WTF?');
        //logHHAuto(JSON.stringify('WTF?'));
        if (Storage().HHAuto_Setting_buyCombat=="true" && (Storage().HHAuto_Setting_plusEvent==="true" || Storage().HHAuto_Setting_plusEventMythic==="true"))
        {
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'WTF!');
            //logHHAuto(JSON.stringify('WTF!'));
            var diff=Math.ceil(Timers["eventGoing"]/1000)-Math.ceil(new Date().getTime()/1000);
            var diffMythic=Math.ceil(Timers["eventMythicGoing"]/1000)-Math.ceil(new Date().getTime()/1000);
            //console.log(new Date().toISOString()+":"+getCallerFunction()+":",diff);
            //logHHAuto(JSON.stringify(diff));
            var hero=getHero();
            if ((diff<Storage().HHAuto_Setting_buyCombTimer*3600 || diffMythic<Storage().HHAuto_Setting_buyCombTimer*3600) && sessionStorage.HHAuto_Temp_eventTroll && getSetHeroInfos('fight.amount')==0)//Less than 20 hours remains and we still haven't get all troll girls
            {
                var price=hero.get_recharge_cost("fight");
                //console.log(new Date().toISOString()+":"+getCallerFunction()+":",'PRC: '+price);
                //logHHAuto(JSON.stringify('PRC: '+price));
                if (getSetHeroInfos('hard_currency')>=price+Number(Storage().HHAuto_Setting_kobanBank))
                {
                    console.log(new Date().toISOString()+":"+getCallerFunction()+":",'Buying comb');
                    logHHAuto(JSON.stringify('Buying comb'));
                    RechargeCombat(price);
                }
            }
        }
        return true;
    }
    console.log(new Date().toISOString()+":"+getCallerFunction()+":",'no  event');
    logHHAuto(JSON.stringify('no  event'));
    return false;
}

var RechargeCombat=function(price) {
    hh_ajax(
        {
            class: "Hero",
            action: "recharge",
            type: "fight"
        }, function(data) {
            Hero.update("fight.amount", getSetHeroInfos('fight.max_amount'));
            Hero.update("hard_currency", 0 - price, true);
        });

}

/*var autoBuy=function()
{
    return true ;
}*/

var getBurst=function()
{
    if (document.getElementById('sMenu'))
    {
        if (document.getElementById('sMenu').parentElement.style.display=='block')
        {
            return false;
        }
    }
    return Storage().HHAuto_Setting_master==="true"&&(!(Storage().HHAuto_Setting_paranoia==="true") || sessionStorage.HHAuto_Temp_burst==="true");
}

function saveHHVarsSettingsAsJSON() {
    var dataToSave={};
    var name='HH_SaveSettings_'+Date.now()+'.json';
    Object.keys(localStorage).forEach((key) =>
                                      {
        if (key.startsWith("HHAuto_Setting_"))
        {
            dataToSave["localStorage."+key] = localStorage.getItem(key);
        }
    });
    Object.keys(sessionStorage).forEach((key) =>
                                        {
        if (key.startsWith("HHAuto_Setting_"))
        {
            dataToSave["sessionStorage."+key] = sessionStorage.getItem(key);
        }
    });
    const a = document.createElement('a')
    a.download = name
    a.href = URL.createObjectURL(new Blob([JSON.stringify(dataToSave)], {type: 'application/json'}))
    a.click()
}

function getBrowserData(nav) {
    var data = {};

    var ua = data.uaString = nav.userAgent;
    var browserMatch = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
    if (browserMatch[1]) { browserMatch[1] = browserMatch[1].toLowerCase(); }
    var operaMatch = browserMatch[1] === 'chrome';
    if (operaMatch) { operaMatch = ua.match(/\bOPR\/([\d\.]+)/); }

    if (/trident/i.test(browserMatch[1])) {
        var msieMatch = /\brv[ :]+([\d\.]+)/g.exec(ua) || [];
        data.name = 'msie';
        data.version = msieMatch[1];
    }
    else if (operaMatch) {
        data.name = 'opera';
        data.version = operaMatch[1];
    }
    else if (browserMatch[1] === 'safari') {
        var safariVersionMatch = ua.match(/version\/([\d\.]+)/i);
        data.name = 'safari';
        data.version = safariVersionMatch[1];
    }
    else {
        data.name = browserMatch[1];
        data.version = browserMatch[2];
    }

    var versionParts = [];
    if (data.version) {
        var versionPartsMatch = data.version.match(/(\d+)/g) || [];
        for (var i=0; i < versionPartsMatch.length; i++) {
            versionParts.push(versionPartsMatch[i]);
        }
        if (versionParts.length > 0) { data.majorVersion = versionParts[0]; }
    }
    data.name = data.name || '(unknown browser name)';
    data.version = {
        full: data.version || '(unknown full browser version)',
        parts: versionParts,
        major: versionParts.length > 0 ? versionParts[0] : '(unknown major browser version)'
    };

    return data.name + ' ' + data.version['full'];
};

function saveHHDebugLog()
{
    var dataToSave={};
    var name='HH_DebugLog_'+Date.now()+'.log';
    dataToSave['HHAuto_browserVersion']=getBrowserData(window.navigator || navigator);
    dataToSave['HHAuto_scriptHandler']=GM_info.scriptHandler+' '+GM_info.version;
    dataToSave['HHAuto_version']=GM_info.script.version;
    dataToSave['HHAuto_HHSite']=window.location.origin;
    Object.keys(localStorage).forEach((key) =>
                                      {
        if (key.startsWith("HHAuto_Setting_"))
        {
            dataToSave["localStorage."+key] = localStorage.getItem(key);
        }
    });
    Object.keys(sessionStorage).forEach((key) =>
                                        {
        if (key.startsWith("HHAuto_Setting_"))
        {
            dataToSave["sessionStorage."+key] = sessionStorage.getItem(key);
        }
    });
    Object.keys(localStorage).forEach((key) =>
                                      {
        if (key.startsWith("HHAuto_Temp_"))
        {
            dataToSave["localStorage."+key] = localStorage.getItem(key);
        }
    });
    Object.keys(sessionStorage).forEach((key) =>
                                        {
        if (key.startsWith("HHAuto_Temp_") && key !== "HHAuto_Temp_Logging")
        {
            dataToSave["sessionStorage."+key] = sessionStorage.getItem(key);
        }
    });
    if (sessionStorage.HHAuto_Temp_Logging)
    {
        dataToSave["sessionStorage.HHAuto_Temp_Logging"] = sessionStorage.getItem('HHAuto_Temp_Logging').split("\n");
    }
    const a = document.createElement('a')
    a.download = name
    a.href = URL.createObjectURL(new Blob([JSON.stringify(dataToSave, null, 2)], {type: 'application/json'}))
    a.click()
}

function myfileLoad_onChange(event)
{
    $('#LoadConfError')[0].innerText =' ';
    if (event.target.files.length == 0) {return}
    var reader = new FileReader();
    reader.onload = myfileLoad_onReaderLoad;
    reader.readAsText(event.target.files[0]);
}

function myfileLoad_onReaderLoad(event){
    var text = event.target.result;
    var storageType;
    var storageItem;
    var variableName;

    //Json validation
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
                             replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                             replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'the json is ok');
        logHHAuto(JSON.stringify('the json is ok'));
        var jsonNewSettings = JSON.parse(event.target.result);
        //Assign new values to Storage();
        for (const [key, value] of Object.entries(jsonNewSettings)) {
            storageType=key.split(".")[0];
            variableName=key.split(".")[1];
            switch (storageType)
            {
                case 'localStorage' :
                    storageItem = localStorage;
                    break;
                case 'sessionStorage' :
                    storageItem = sessionStorage;
                    break;
            }
            console.log(new Date().toISOString()+":"+getCallerFunction()+":",key+':'+ value);
            logHHAuto(JSON.stringify(key+':'+ value));
            storageItem[variableName] = value;
        }
        location.reload();
    }else{
        $('#LoadConfError')[0].innerText ='Selected file broken!';
        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'the json is Not ok');
        logHHAuto(JSON.stringify('the json is Not ok'));
    }
}


var Trollz=["Latest","Dark Lord","Ninja Spy","Gruntt","Edwarda","Donatien","Silvanus","Bremen","Finalmecia","Roko Senseï","Karole","Jackson\'s Crew","Pandora witch","Nike"];
var Leagues=["Wanker I","Wanker II","Wanker III","Sexpert I","Sexpert II","Sexpert III","Dicktator I","Dicktator II","Dicktator III"];
var Timers={};
var HHVars=["Storage().HHAuto_Setting_autoAff",
            "Storage().HHAuto_Setting_autoAffW",
            "Storage().HHAuto_Setting_autoArenaBattle",
            "Storage().HHAuto_Setting_autoBuyBoosters",
            "Storage().HHAuto_Setting_autoBuyBoostersFilter",
            "Storage().HHAuto_Setting_autoChamps",
            "Storage().HHAuto_Setting_autoChampsFilter",
            "Storage().HHAuto_Setting_autoChampsUseEne",
            "Storage().HHAuto_Setting_autoContest",
            "Storage().HHAuto_Setting_autoEGM",
            "Storage().HHAuto_Setting_autoEGMW",
            "Storage().HHAuto_Setting_autoExp",
            "Storage().HHAuto_Setting_autoExpW",
            "Storage().HHAuto_Setting_autoFreePachinko",
            "Storage().HHAuto_Setting_autoLeagues",
            "Storage().HHAuto_Setting_autoLeaguesCollect",
            "Storage().HHAuto_Setting_autoLeaguesMaxRank",
            "Storage().HHAuto_Setting_autoLeaguesPowerCalc",
            "Storage().HHAuto_Setting_autoLeaguesSelectedIndex",
            "Storage().HHAuto_Setting_autoLeaguesThreshold",
            "Storage().HHAuto_Setting_autoLGM",
            "Storage().HHAuto_Setting_autoLGMW",
            "Storage().HHAuto_Setting_autoLGR",
            "Storage().HHAuto_Setting_autoLGRW",
            "Storage().HHAuto_Setting_autoMission",
            "Storage().HHAuto_Setting_autoMissionC",
            "Storage().HHAuto_Setting_autoPowerPlaces",
            "Storage().HHAuto_Setting_autoPowerPlacesAll",
            "Storage().HHAuto_Setting_autoPowerPlacesIndexFilter",
            "Storage().HHAuto_Setting_autoQuest",
            "Storage().HHAuto_Setting_autoQuestThreshold",
            "Storage().HHAuto_Setting_autoSalary",
            "Storage().HHAuto_Setting_autoSalaryTimer",
            "Storage().HHAuto_Setting_autoSeason",
            "Storage().HHAuto_Setting_autoSeasonCollect",
            "Storage().HHAuto_Setting_autoSeasonPassReds",
            "Storage().HHAuto_Setting_autoSeasonThreshold",
            "Storage().HHAuto_Setting_autoStats",
            "Storage().HHAuto_Setting_autoTrollBattle",
            "Storage().HHAuto_Setting_autoTrollMythicByPassThreshold",
            "Storage().HHAuto_Setting_autoTrollSelectedIndex",
            "Storage().HHAuto_Setting_autoTrollThreshold",
            "Storage().HHAuto_Setting_buyCombat",
            "Storage().HHAuto_Setting_buyCombTimer",
            "Storage().HHAuto_Setting_calculatePowerLimits",
            "Storage().HHAuto_Setting_eventMythicPrio",
            "Storage().HHAuto_Setting_eventTrollOrder",
            "Storage().HHAuto_Setting_kobanBank",
            "Storage().HHAuto_Setting_master",
            "Storage().HHAuto_Setting_MaxAff",
            "Storage().HHAuto_Setting_MaxExp",
            "Storage().HHAuto_Setting_paranoia",
            "Storage().HHAuto_Setting_paranoiaSpendsBefore",
            "Storage().HHAuto_Setting_plusEvent",
            "Storage().HHAuto_Setting_plusEventMythic",
            "localStorage.HHAuto_Setting_settPerTab",
            "Storage().HHAuto_Setting_showCalculatePower",
            "Storage().HHAuto_Setting_showInfo",
            "Storage().HHAuto_Setting_spendKobans0",
            "Storage().HHAuto_Setting_spendKobans1",
            "Storage().HHAuto_Setting_spendKobans2",
            "Storage().HHAuto_Temp_trollToFight",
            "sessionStorage.HHAuto_Temp_autoLoop",
            "Storage().HHAuto_Temp_autoLoopTimeMili",
            "Storage().HHAuto_Temp_autoTrollBattleSaveQuest",
            "sessionStorage.HHAuto_Temp_battlePowerRequired",
            "sessionStorage.HHAuto_Temp_burst",
            "sessionStorage.HHAuto_Temp_charLevel",
            "sessionStorage.HHAuto_Temp_eventsGirlz",
            "sessionStorage.HHAuto_Temp_eventTroll",
            "sessionStorage.HHAuto_Temp_eventTrollIsMythic",
            "sessionStorage.HHAuto_Temp_fought",
            "Storage().HHAuto_Temp_freshStart",
            "sessionStorage.HHAuto_Temp_haveAff",
            "sessionStorage.HHAuto_Temp_haveExp",
            "sessionStorage.HHAuto_Temp_LeagueOpponentList",
            "Storage().HHAuto_Temp_leaguesTarget",
            "sessionStorage.HHAuto_Temp_opponentsListExpirationDate",
            "Storage().HHAuto_Temp_paranoiaLeagueBlocked",
            "Storage().HHAuto_Temp_paranoiaQuestBlocked",
            "Storage().HHAuto_Temp_paranoiaSettings",
            "Storage().HHAuto_Temp_paranoiaSpendings",
            "sessionStorage.HHAuto_Temp_pinfo",
            "Storage().HHAuto_Temp_PopToStart",
            "Storage().HHAuto_Temp_PopUnableToStart",
            "sessionStorage.HHAuto_Temp_questRequirement",
            "localStorage.HHAuto_Temp_showCalculatePower",
            "localStorage.HHAuto_Temp_showInfo",
            "sessionStorage.HHAuto_Temp_storeContents",
            "sessionStorage.HHAuto_Temp_Timers",
            "Storage().HHAuto_Temp_toNextSwitch",
            "Storage().HHAuto_Temp_Totalpops",
            "sessionStorage.HHAuto_Temp_userLink",
            "localStorage.HHAuto_Temp_MigratedVars"];

var migrateHHVars = function ()
{
    var storageType;
    var variableName;
    var oldVarName;
    var storageItem;
    var migratedVars = localStorage.HHAuto_Temp_MigratedVars?true:false;

    if (!migratedVars)
    {
        if (localStorage.settPerTab)
        {
            console.log(new Date().toISOString()+":"+getCallerFunction()+":","set settbyTab");
            logHHAuto(JSON.stringify("set settbyTab"));
            localStorage.HHAuto_Setting_settPerTab = localStorage.settPerTab;
        }

        if(!localStorage.HHAuto_Setting_settPerTab)
        {
            localStorage.HHAuto_Setting_settPerTab="false";
        }

        for (var i in HHVars)
        {
            storageType = HHVars[i].split(".")[0];
            variableName = HHVars[i].split(".")[1];
            oldVarName = variableName.split("_")[2];
            switch (storageType)
            {
                case 'Storage()' :
                    storageItem = Storage();
                    break;
                case 'localStorage' :
                    storageItem = localStorage;
                    break;
                case 'sessionStorage' :
                    storageItem = sessionStorage;
                    break;
            }
            if (storageItem.getItem(oldVarName) !== null && storageItem.getItem(variableName) !== null)
            {
                console.log(new Date().toISOString()+":"+getCallerFunction()+":","set var : "+variableName);
                logHHAuto(JSON.stringify("set var : "+variableName));
                storageItem.setItem(variableName,storageItem.getItem(oldVarName));
            }
            //storageItem.removeItem(oldVarName)
        }
        localStorage.HHAuto_Temp_MigratedVars="true";
    }
}

var start = function () {

    if (unsafeWindow.Hero===undefined)
    {
        console.log(new Date().toISOString()+":"+getCallerFunction()+":",'???no Hero???');
        logHHAuto(JSON.stringify('???no Hero???'));
        $('.hh_logo').click();
        return;
    }
    $('.redirect.gayharem').hide();

    $('#starter_offer').hide();
    $('#starter_offer_background').hide();
    migrateHHVars();
    if (sessionStorage.HHAuto_Temp_Timers)
    {
        Timers=JSON.parse(sessionStorage.HHAuto_Temp_Timers);
    }
    // Add UI buttons.
    var UIcontainer = $("#contains_all nav div[rel='content']");
    UIcontainer.html( '<div style="font-size:x-small;position: absolute;right: 22%;width: inherit;text-align: center;display:flex;flex-direction:column;z-index:1000" id="sMenu">'
                     //dialog Box
                     + '<dialog id=\"LoadDialog\"> <form method=\"dialog\"><p>After you select the file the settings will be automatically updated.</p><p> If nothing happened, then the selected file contains errors.</p><p id="LoadConfError"style="color:#f53939;"></p><p><label><input type=\"file\" id=\"myfile\" name=\"myfile\"> </label></p> <menu> <button value=\"cancel\">Cancel</button></menu> </form></dialog>'
                     + '<div style="display:flex;flex-direction:row;">'
                     +  '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +   '<span><div><label class=\"myButton\" id=\"git\">GitHub</label><label class=\"myButton\" id=\"saveDebug\">saveDebug</label></div></span>'
                     +   '<span><div><label class=\"myButton\" id=\"saveConfig\">saveConfig</label><label class=\"myButton\" id=\"loadConfig\">loadConfig</label></div></span>'
                     +   '<span>Master switch</span><div><label class="switch" title="Turn off to pause script"><input id="master" type="checkbox"><span class="slider round"></span></label></div>'
                     +   '<span>Settings per tab</span><div><label class="switch"><input id="settPerTab" type="checkbox"><span class="slider round"></span></label></div>'
                     // Region Paranoia
                     +   '<div style="display:flex;flex-direction:column; border: 1px dotted;">'
                     +    '<div style="display:flex;flex-direction:row;">'
                     +     '<div style="display:flex;flex-direction:column;">'
                     +      '<span>Paranoia mode</span><div><label class="switch"><input id="paranoia" type="checkbox"><span class="slider round"></span></label></div>'
                     +     '</div>'
                     +     '<div style="padding-left:10px;display:flex;flex-direction:column;">'
                     +      '<span>Spends points before</span><div><label class="switch"><input id="paranoiaSpendsBefore" type="checkbox"><span class="slider round"></span></label></div>'
                     +     '</div>'
                     +    '</div>'
                     +   '</div>'
                     //end region paranoia
                     // Region Shit
                     +   '<div style="display:flex;flex-direction:column; border: 1px dotted;">'
                     +   '<div style="display:flex;flex-direction:row;">'
                     +    '<div style="display:flex;flex-direction:column;">'
                     +     '<span>Questionable Shit</span><div><label title="Koban security switch 1" class="switch"><input id="spendKobans0" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="padding-left:20px;display:flex;flex-direction:column;">'
                     +     '<span>Are you sure?</span><div><label title="Koban security switch 2" class="switch"><input id="spendKobans1" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +   '</div>'
                     +   '<div style="display:flex;flex-direction:row;">'
                     +    '<div style="display:flex;flex-direction:column;">'
                     +     '<span>You\'ve been warned</span><div><label title="Koban security switch 3" class="switch"><input id="spendKobans2" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="display:flex;flex-direction:column;">'
                     +     '<span>Koban Bank</span><div><input id="kobanBank" style="width:70%" type="text"></div>'
                     +    '</div>'
                     +   '</div>'
                     +   '<div style="display:flex;flex-direction:row;">'
                     +    '<div style="display:flex;flex-direction:column;">'
                     +     '<span>Buy comb. in events</span><div><label class="switch"><input id="buyCombat" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="display:flex;flex-direction:column;">'
                     +     '<span>Hours to buy Comb</span><div><input id="buyCombTimer" style="width:50%" type="text"></div>'
                     +    '</div>'
                     +   '</div>'
                     +   '<div style="display:flex;flex-direction:row;">'
                     +    '<div style="display:flex;flex-direction:column;">'
                     +     '<span>Buy Leg. Boosters</span><div><label title="Activate to buy Legendary boosters, all 3 koban security switches must be on."class="switch"><input id="autoBuyBoosters" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="display:flex;flex-direction:column;">'
                     +     '<span>Filter</span><div><input title="B1:Ginseng B2:Jujubes B3:Chlorella B4:Cordyceps"style="width:70px" id="autoBuyBoostersFilter" type="text"></div>'
                     +    '</div>'
                     +    '<div style="display:flex;flex-direction:column;">'
                     +     '<span>Pass 3 reds</span><div><label title="activate to spends kobans to pass three reds opponent in season." class="switch"><input id="autoSeasonPassReds" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +   '</div>'
                     +  '</div>'
                     // End Region Shit
                     // calculate Power Region
                     +  '<div style="display:flex;flex-direction:row; border: 1px dotted;">'
                     +   '<div style="display:flex;flex-direction:column;">'
                     +    '<span>Show PowerCalc</span><div><label class="switch"><input id="showCalculatePower" type="checkbox"><span class="slider round"></span></label></div>'
                     +   '</div>'
                     +   '<div style="padding-left:10px;display:flex;flex-direction:column;">'
                     +    '<span>Own limits (red;yellow)</span><div><input id="calculatePowerLimits" style="width:80%" type="text"></div>'
                     +   '</div>'
                     +  '</div>'
                     // End Calculate power region
                     +   '<span>Show info</span><div><label title="Activate to display timers"class="switch"><input id="showInfo" type="checkbox"><span class="slider round"></span></label></div>'
                     +  '</div>'
                     +  '<div style="padding:10px; display:flex;flex-direction:column;">'
                     // Region AutoSalary
                     +   '<div style="display:flex;flex-direction:row; border: 1px dotted;">'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>AutoSal.</span><div><label class="switch"><input id="autoSalaryCheckbox" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>min wait</span><div><input id="autoSalaryTextbox" style="width:80%" type="text"></div>'
                     +    '</div>'
                     //End Region AutoSalary
                     +   '</div>'
                     //Region AutoMission
                     +   '<div style="display:flex;flex-direction:row; border: 1px dotted;">'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>AutoMission</span><div><label class="switch"><input id="autoMissionCheckbox" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>Collect</span><div><label class="switch"><input id="autoMissionCollect" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +   '</div>'
                     //End Region AutoMission
                     // Region AutoTroll
                     +   '<div style="display:flex;flex-direction:column; border: 1px dotted;">'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>AutoTrollBattle</span><div><label class="switch"><input id="autoTrollCheckbox" type="checkbox">'
                     +     '<span class="slider round"></span></label><select id="autoTrollSelector"></select></div>'
                     +     '<span>Threshold</span><div><input style="width:50px" id="autoTrollThreshold" type="text"></div>'
                     +    '</div>'
                     +    '<div style="display:flex;flex-direction:row;">'
                     +     '<div style="display:flex;flex-direction:column;">'
                     +      '<span>Event Troll Order</span><div><input id="eventTrollOrder" style="width:150px" type="text"></div>'
                     +     '</div>'
                     +     '<div style="display:flex;flex-direction:column;">'
                     +      '<span>+Event</span><div><label class="switch"><input id="plusEvent" type="checkbox"><span class="slider round"></span></label></div>'
                     +     '</div>'
                     +    '</div>'
                     +    '<div style="display:flex;flex-direction:row;">'
                     +     '<div style="display:flex;flex-direction:column;">'
                     +      '<span>+Mythic Event</span><div><label class="switch"><input id="plusEventMythic" type="checkbox"><span class="slider round"></span></label></div>'
                     +     '</div>'
                     +     '<div style="padding-left:10px;display:flex;flex-direction:column;">'
                     +      '<span>Priorize over Event Troll Order</span><div><label class="switch"><input id="eventMythicPrio" type="checkbox"><span class="slider round"></span></label></div>'
                     +     '</div>'
                     +     '<div style="padding-left:10px;display:flex;flex-direction:column;">'
                     +      '<span>Mythic bypass Threshold</span><div><label class="switch"><input id="autoTrollMythicByPassThreshold" type="checkbox"><span class="slider round"></span></label></div>'
                     +     '</div>'
                     +    '</div>'
                     +   '</div>'
                     // End Region AutoTroll
                     //+   '<span>AutoArenaBattle</span><div><label class="switch"><input id="autoArenaCheckbox" type="checkbox"><span class="slider round"></span></label></div>'
                     // Region AutoSeason
                     +   '<div style="display:flex;flex-direction:row; border: 1px dotted;">'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>AutoSeason</span><div><label class="switch"><input id="autoSeasonCheckbox" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>Collect</span><div><label class="switch"><input id="autoSeasonCollect" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>Threshold</span><div><input style="width:50px" id="autoSeasonThreshold" type="text"></div>'
                     +    '</div>'
                     +   '</div>'
                     // End Region AutoSeason
                     // Region quest
                     +   '<div style="display:flex;flex-direction:row; border: 1px dotted;">'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>AutoQuest</span><div><label class="switch"><input id="autoQuestCheckbox" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>Threshold</span><div><input style="width:50px" id="autoQuestThreshold" type="text"></div>'
                     +    '</div>'
                     +   '</div>'
                     //end regin quest
                     +   '<span>AutoContest</span><div><label class="switch"><input id="autoContestCheckbox" type="checkbox"><span class="slider round"></span></label></div>'
                     +   '<span>AutoPachinko(Free)</span><div><label class="switch"><input id="autoFreePachinko" type="checkbox"><span class="slider round"></span></label></div>'
                     +  '</div>'
                     +  '<div style="padding:10px; display:flex;flex-direction:column;">'
                     // Region AutoLeagues
                     +   '<div style="display:flex;flex-direction:column; border: 1px dotted;">'
                     +    '<div style="padding:0px; display:flex;flex-direction:row;">'
                     +     '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +      '<span>AutoLeagues</span><div><label class="switch"><input id="autoLeagues" type="checkbox"><span class="slider round"></span></label></div>'
                     +     '</div>'
                     +     '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +      '<span>UsePowerCalc</span><div><label class="switch"><input id="autoLeaguesPowerCalc" type="checkbox"><span class="slider round"></span></label></div>'
                     +     '</div>'
                     +     '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +      '<span>Collect</span><div><label class="switch"><input id="autoLeaguesCollect" type="checkbox"><span class="slider round"></span></label></div>'
                     +     '</div>'
                     +    '</div>'
                     +    '<div style="padding:0px; display:flex;flex-direction:row;">'
                     +     '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +      '<span>Target League</span><div><select id="autoLeaguesSelector"></select></div>'
                     +     '</div>'
                     +     '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +      '<span>Threshold</span><div><input style="width:50px" id="autoLeaguesThreshold" type="text"></div>'
                     +     '</div>'
                     +    '</div>'
                     +   '</div>'
                     // End Region AutoLeagues
                     // Region PowerPlace
                     +   '<div style="display:flex;flex-direction:row; border: 1px dotted;">'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>AutoPowerPlaces</span><div><label class="switch"><input id="autoPowerPlaces" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>Index Filter</span><div><input id="autoPowerPlacesIndexFilter" type="text"></div>'
                     +    '</div>'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>Do All</span><div><label class="switch"><input id="autoPowerPlacesAll" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +   '</div>'
                     // End Region PowerPlace
                     // Region AutoChampions
                     +   '<div style="display:flex;flex-direction:row; border: 1px dotted;">'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>AutoChampions</span><div><label class="switch"><input id="autoChamps" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>UseEne</span><div><label class="switch"><input id="autoChampsUseEne" type="checkbox"><span class="slider round"></span></label></div>'
                     +    '</div>'
                     +    '<div style="padding:10px; display:flex;flex-direction:column;">'
                     +     '<span>Filter</span><div><input id="autoChampsFilter" type="text"></div>'
                     // End Region AutoChampions
                     +    '</div>'
                     +   '</div>'
                     +   '<span>AutoStats</span><div><input id="autoStats" type="text"></div>'
                     +   '<span>Buy Exp</span><div><label class="switch"><input id="autoExpW" type="checkbox"><span class="slider round"></span></label><input id="autoExp" type="text"><input id="maxExp" type="text"></div>'
                     +   '<span>Buy Aff</span><div><label class="switch"><input id="autoAffW" type="checkbox"><span class="slider round"></span></label><input id="autoAff" type="text"><input id="maxAff" type="text"></div>'
                     +   '<span>Buy Leg Gear Mono</span><div><label class="switch"><input id="autoLGMW" type="checkbox"><span class="slider round"></span></label><input id="autoLGM" type="text"></div>'
                     +   '<span>Buy Leg Gear Rainbow</span><div><label class="switch"><input id="autoLGRW" type="checkbox"><span class="slider round"></span></label><input id="autoLGR" type="text"></div>'
                     //+   '<span>Buy Epi Gear Mono</span><div><label class="switch"><input id="autoEGMW" type="checkbox"><span class="slider round"></span></label><input id="autoEGM" type="text"></div>'
                     +  '</div>'
                     + '</div>'
                     +'</div>'+UIcontainer.html());

    var div = document.createElement('div');
    div.innerHTML = '<div id="pInfo" style="padding-left:3px;z-index:-1;white-space: pre;position: absolute;right: 5%; left:70%; top:8%;border: 1px solid #ffa23e;background-color: rgba(0,0,0,.5);border-radius: 5px;"></div>'.trim();
    document.getElementById('contains_all').appendChild(div.firstChild);

    // Add auto troll options
    var trollOptions = document.getElementById("autoTrollSelector");

    for (var i=0;i<getSetHeroInfos('questing.id_world');i++)
    {
        var option = document.createElement("option");
        option.value=i;
        option.text = Trollz[i];
        trollOptions.add(option);
    };

    // Add league options
    var leaguesOptions = document.getElementById("autoLeaguesSelector");

    for (var j in Leagues)
    {
        var optionL = document.createElement("option");
        optionL.value=j;
        optionL.text = Leagues[j];
        leaguesOptions.add(optionL);
    };

    document.getElementById("settPerTab").checked = localStorage.HHAuto_Setting_settPerTab === "true";
    trollOptions.selectedIndex = Storage().HHAuto_Setting_autoTrollSelectedIndex;
    leaguesOptions.selectedIndex = Storage().HHAuto_Setting_autoLeaguesSelectedIndex;
    document.getElementById("autoSalaryCheckbox").checked = Storage().HHAuto_Setting_autoSalary === "true";
    document.getElementById("autoSalaryTextbox").value = Storage().HHAuto_Setting_autoSalaryTimer?Storage().HHAuto_Setting_autoSalaryTimer:"120";
    document.getElementById("autoContestCheckbox").checked = Storage().HHAuto_Setting_autoContest === "true";
    document.getElementById("autoMissionCheckbox").checked = Storage().HHAuto_Setting_autoMission === "true";
    document.getElementById("autoMissionCollect").checked = Storage().HHAuto_Setting_autoMissionC === "true";
    document.getElementById("autoQuestCheckbox").checked = Storage().HHAuto_Setting_autoQuest === "true";
    document.getElementById("autoTrollCheckbox").checked = Storage().HHAuto_Setting_autoTrollBattle === "true";
    document.getElementById("eventTrollOrder").value = Storage().HHAuto_Setting_eventTrollOrder?Storage().HHAuto_Setting_eventTrollOrder:"1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20";
    document.getElementById("buyCombTimer").value = Storage().HHAuto_Setting_buyCombTimer?Storage().HHAuto_Setting_buyCombTimer:"16";
    //document.getElementById("autoArenaCheckbox").checked = Storage().HHAuto_Setting_autoArenaBattle === "true";
    document.getElementById("autoSeasonCheckbox").checked = Storage().HHAuto_Setting_autoSeason === "true";
    document.getElementById("autoSeasonCollect").checked = Storage().HHAuto_Setting_autoSeasonCollect === "true";
    document.getElementById("autoSeasonPassReds").checked = Storage().HHAuto_Setting_autoSeasonPassReds === "true";
    document.getElementById("autoFreePachinko").checked = Storage().HHAuto_Setting_autoFreePachinko === "true";
    document.getElementById("autoLeagues").checked = Storage().HHAuto_Setting_autoLeagues === "true";
    //document.getElementById("autoLeaguesMaxRank").value = Storage().HHAuto_Setting_autoLeaguesMaxRank?Storage().HHAuto_Setting_autoLeaguesMaxRank:"0";
    document.getElementById("autoLeaguesPowerCalc").checked = Storage().HHAuto_Setting_autoLeaguesPowerCalc === "true";
    document.getElementById("autoLeaguesCollect").checked = Storage().HHAuto_Setting_autoLeaguesCollect === "true";
    document.getElementById("autoPowerPlaces").checked = Storage().HHAuto_Setting_autoPowerPlaces === "true";
    document.getElementById("autoPowerPlacesAll").checked = Storage().HHAuto_Setting_autoPowerPlacesAll === "true";
    document.getElementById("autoPowerPlacesIndexFilter").value = Storage().HHAuto_Setting_autoPowerPlacesIndexFilter?Storage().HHAuto_Setting_autoPowerPlacesIndexFilter:"1;2;3";
    document.getElementById("autoStats").value = Storage().HHAuto_Setting_autoStats?Storage().HHAuto_Setting_autoStats:"500000000";
    document.getElementById("paranoia").checked = Storage().HHAuto_Setting_paranoia==="true";
    document.getElementById("paranoiaSpendsBefore").checked = Storage().HHAuto_Setting_paranoiaSpendsBefore==="true";
    document.getElementById("autoExp").value = Storage().HHAuto_Setting_autoExp?Storage().HHAuto_Setting_autoExp:"500000000";
    document.getElementById("autoExpW").checked = Storage().HHAuto_Setting_autoExpW === "true";
    document.getElementById("autoAff").value = Storage().HHAuto_Setting_autoAff?Storage().HHAuto_Setting_autoAff:"500000000";
    document.getElementById("autoAffW").checked = Storage().HHAuto_Setting_autoAffW === "true";
    document.getElementById("maxExp").value = Storage().HHAuto_Setting_MaxExp?Storage().HHAuto_Setting_MaxExp:"10000";
    document.getElementById("maxAff").value = Storage().HHAuto_Setting_MaxAff?Storage().HHAuto_Setting_MaxAff:"50000";
    document.getElementById("autoLGM").value = Storage().HHAuto_Setting_autoLGM?Storage().HHAuto_Setting_autoLGM:"500000000";
    document.getElementById("autoLGMW").checked = Storage().HHAuto_Setting_autoLGMW === "true";
    document.getElementById("autoLGR").value = Storage().HHAuto_Setting_autoLGR?Storage().HHAuto_Setting_autoLGR:"500000000";
    document.getElementById("autoLGRW").checked = Storage().HHAuto_Setting_autoLGRW === "true";
    document.getElementById("autoBuyBoosters").checked = Storage().HHAuto_Setting_autoBuyBoosters === "true";
    document.getElementById("autoBuyBoostersFilter").value = Storage().HHAuto_Setting_autoBuyBoostersFilter?Storage().HHAuto_Setting_autoBuyBoostersFilter:"B1;B2;B3;B4";
    //document.getElementById("autoEGM").value = Storage().HHAuto_Setting_autoEGM?Storage().HHAuto_Setting_autoEGM:"500000000";
    //document.getElementById("autoEGMW").checked = Storage().HHAuto_Setting_autoEGMW === "true";
    document.getElementById("showInfo").checked = Storage().HHAuto_Setting_showInfo?Storage().HHAuto_Setting_showInfo==="true":"false";
    document.getElementById("showCalculatePower").checked = Storage().HHAuto_Setting_showCalculatePower?Storage().HHAuto_Setting_showCalculatePower==="true":"false";
    document.getElementById("calculatePowerLimits").value = Storage().HHAuto_Setting_calculatePowerLimits?Storage().HHAuto_Setting_calculatePowerLimits:"default";
    document.getElementById("plusEvent").checked = Storage().HHAuto_Temp_trollToFight=="-1" || Storage().HHAuto_Setting_plusEvent === "true";
    document.getElementById("plusEventMythic").checked = Storage().HHAuto_Setting_plusEventMythic === "true";
    document.getElementById("eventMythicPrio").checked = Storage().HHAuto_Setting_eventMythicPrio === "true";
    document.getElementById("autoTrollMythicByPassThreshold").checked = Storage().HHAuto_Setting_autoTrollMythicByPassThreshold === "true";

    document.getElementById("autoChamps").checked = Storage().HHAuto_Setting_autoChamps === "true";
    document.getElementById("autoChampsUseEne").checked = Storage().HHAuto_Setting_autoChampsUseEne === "true";
    document.getElementById("autoChampsFilter").value = Storage().HHAuto_Setting_autoChampsFilter?Storage().HHAuto_Setting_autoChampsFilter:"1;2;3;4;5;6";

    document.getElementById("spendKobans0").checked = Storage().HHAuto_Setting_spendKobans0 === "true";
    document.getElementById("spendKobans1").checked = Storage().HHAuto_Setting_spendKobans1 === "true";
    document.getElementById("spendKobans2").checked = Storage().HHAuto_Setting_spendKobans2 === "true";
    document.getElementById("buyCombat").checked = Storage().HHAuto_Setting_buyCombat === "true";
    document.getElementById("kobanBank").value = Storage().HHAuto_Setting_kobanBank?Storage().HHAuto_Setting_kobanBank:"1000000";

    document.getElementById("autoTrollThreshold").value = Storage().HHAuto_Setting_autoTrollThreshold?Storage().HHAuto_Setting_autoTrollThreshold:"0";
    document.getElementById("autoQuestThreshold").value = Storage().HHAuto_Setting_autoQuestThreshold?Storage().HHAuto_Setting_autoQuestThreshold:"0";
    document.getElementById("autoLeaguesThreshold").value = Storage().HHAuto_Setting_autoLeaguesThreshold?Storage().HHAuto_Setting_autoLeaguesThreshold:"0";
    document.getElementById("autoSeasonThreshold").value = Storage().HHAuto_Setting_autoSeasonThreshold?Storage().HHAuto_Setting_autoSeasonThreshold:"0";

    document.getElementById("master").checked = Storage().HHAuto_Setting_master==="true";
    document.getElementById("git").addEventListener("click", function(){ window.open("https://github.com/Roukys/HHauto/wiki"); });
    document.getElementById("loadConfig").addEventListener("click", function(){
        if (typeof LoadDialog.showModal === "function") {
            LoadDialog.showModal();
        } else {
            alert("The <dialog> API is not supported by this browser");
        }
    });
    document.getElementById('myfile').addEventListener('change', myfileLoad_onChange);
    document.getElementById("saveConfig").addEventListener("click", function(){
        saveHHVarsSettingsAsJSON();
    });
    document.getElementById("saveDebug").addEventListener("click", function(){
        saveHHDebugLog();
    });

    sessionStorage.HHAuto_Temp_autoLoop = "true";
    if (typeof Storage().HHAuto_Temp_freshStart == "undefined" || isNaN(Number(Storage().HHAuto_Temp_autoLoopTimeMili))) {
        setDefaults();
    }

    if(getPage()=="shop")
    {
        updateShop();
    }

    if (/*autoBuy() &&*/ getBurst())
    {
        doShopping();
        /*}
    if (Storage().HHAuto_Setting_autoStats === "true" && getBurst())
    {*/
        doStatUpgrades();
    }

    if (!CollectEventData())
    {
        setTimeout(function(){CollectEventData();},5000);
    }


    if (hh_nutaku)
    {
        function Alive()
        {
            window.top.postMessage({ImAlive:true},'*');
            if (sessionStorage.HHAuto_Temp_autoLoop=="true")
            {
                setTimeout(Alive,2000);
            }
        }
        Alive();
    }

    autoLoop();
};

var started=false;
var hardened_start=function()
{
    if (!started)
    {
        started=true;
        start();
    }
}

$("document").ready(function()
                    {
    setTimeout(hardened_start,1000);

});

setTimeout(hardened_start,5000);
