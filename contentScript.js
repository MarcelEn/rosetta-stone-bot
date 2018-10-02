(function () {
    var LOCAL_STORAGE_NAME = "running";
    var button = document.createElement("button");
    var running = localStorage.getItem(LOCAL_STORAGE_NAME) ? true : false;
    var selection = document.querySelectorAll(".wordListArea input");

    function handleClick() {
        if (running) {
            localStorage.removeItem(LOCAL_STORAGE_NAME);
            button.innerHTML = 'start';
            running = false;
        } else {
            localStorage.setItem(LOCAL_STORAGE_NAME, " ");
            button.innerHTML = 'stop';
            startCheatProcess();
            running = true;
        }
    }

    function startCheatProcess() {
        createSelectInterval();
        createRefreshTimeout();
    }

    function createSelectInterval() {
        setTimeout(function () {
            if (running){
                var date = new Date();
                console.log(`new Selection @${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
                selection[Math.floor(Math.random()*selection.length)].click();
                createSelectInterval();
            }
        }, 1000)
    }

    function createRefreshTimeout() {
        setTimeout(function () {
            if(running){
                location.reload();
            }
        }, 60000)
    }


    button.style = "position: absolute; bottom: 10px; left: 10px; padding: 10px; cursor: pointer; z-index: 999";
    button.innerHTML = running ? 'stop' : 'start';
    button.onclick = handleClick;

    if(running){
       startCheatProcess();
    }



    document.querySelector("body").appendChild(button);
})()
