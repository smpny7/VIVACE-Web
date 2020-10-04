$(function() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            const obj = JSON.parse(req.responseText);
            for (var i = 0; i < 8; i++) {
                if (obj["success"]) {
                    var today = new Date();
                    var expirationDate = new Date(obj["version"][i]["expirationDate"]);
                    line = '<li class="list-group-item col-10 col-md-12"><p class="float-left m-0 ml-md-3">ver.' + obj["version"][i]["version"] + ' has been released.</p>';
                    if (today.getTime() < expirationDate.getTime()) line += '<small><a href="' + obj["version"][i]["url"] + '" class="float-right m-0 mt-md-1 mr-md-3" target="_blank">DOWNLOAD</a></small></li>';
                    else line += '<small><p class="float-right inactive m-0 mt-md-1 mr-md-3">DOWNLOAD</p></small></li>';
                    $('#jsonList').append(line);
                }
            }
        }
    };
    req.open("GET", "http://api.vivace-app.com/v3.0/license", false);
    req.send(null);
});