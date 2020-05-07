function update() {
    quaratime = document.getElementById("quaratime").value;
    if (quaratime == "") {
        document.getElementById("output").innerHTML = ""
        return
    }
    quaratime = parseInt(quaratime)
    // Save values
    localStorage.setItem('quaratime', quaratime);

    var date = new Date();
    // JS dates are milliseconds, we have hours
    quaratime = quaratime * 60 * 60 * 1000
    date.setTime(date.getTime() + quaratime)

    document.getElementById("output").innerHTML = `Quarantine ends:<br/> ${date}`
}

function on_load() {
    quaratime.addEventListener("input", function (e) { update() });

    // Load saved values
    if (localStorage.getItem('quaratime')) {
        document.getElementById("quaratime").value = localStorage.getItem('quaratime');
    }
    else
        document.getElementById("quaratime").value = "72"
    update();
}
