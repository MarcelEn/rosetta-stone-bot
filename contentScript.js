(function () {
    var initCheck = function () {
        var selection = getSelection();
        for (var i = 0; i < selection.length; i++) {
            if (selection[i].innerHTML.search("money") != -1) {
                selection[i].click();
                submit();
                setTimeout(next, 100)
                return;
            }
        }
    }


    var LOCAL_STORAGE_NAME = "running";
    var button = document.createElement("button");
    var running = localStorage.getItem(LOCAL_STORAGE_NAME) ? true : false;
    var submit = document.getElementById("btnCorrect");

    var submit = function () {
        document.getElementById("btnCorrect").click();
    }

    var next = function () {
        document.getElementById("btnNext").click();
    }

    function getSelection() {
        return document.querySelectorAll(".wordListArea label");
    }


    function selectBills() {
        var selection = getSelection();
        for (var i = 0; i < selection.length; i++) {
            if (selection[i].innerHTML.search("bills") != -1) {
                selection[i].click();
                return;
            }
        }
    }

    function handleClick() {
        if (running) {
            running = false;
            localStorage.removeItem(LOCAL_STORAGE_NAME);
            button.innerHTML = 'start';
            selectBills();
            submit();
            setTimeout(next, 100)

        } else {
            localStorage.setItem(LOCAL_STORAGE_NAME, " ");
            window.location.replace('https://pro1.tellmemorepro.com/TellMeMore/SystemManagement/FreeMode/FreeMode.aspx?WorkShopType=WorkshopVocabulary&fac=true&FamilyId=cd472763-22b6-44bf-836c-b47eb35243dc&SubfamilyId=f2c05245-e069-439c-a8ec-48b6f9744c02&ActivityTypeGroupName=8&ActivityType=17&CategoryId=dbac4088-ab99-41d2-84d4-445d8c180f0c');
        }
    }

    function startCheatProcess() {
        createSelectInterval();
        createRefreshTimeout();
    }

    function createSelectInterval() {
        var selection = getSelection();
        setTimeout(function () {
            if (running) {
                if (selection.length > 0) {
                    selection[Math.floor(Math.random() * selection.length)].click();
                }
                createSelectInterval();
            }
        }, 1000)
    }

    function createRefreshTimeout() {
        setTimeout(function () {
            if (running) {
                location.reload();
            }
        }, 60000)
    }

    initCheck();

    button.style = "position: absolute; bottom: 10px; left: 10px; padding: 10px; cursor: pointer; z-index: 999";
    button.innerHTML = running ? 'stop' : 'start';
    button.onclick = handleClick;

    if (running) {
        startCheatProcess();
    }



    document.querySelector("body").appendChild(button);
})()
