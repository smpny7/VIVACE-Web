$(function() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            const obj = JSON.parse(req.responseText);
            for (var i = 0; i < 8; i++) {
                if (obj["supportedVersions"][i]) {
                    var today = new Date();
                    var expirationDate = new Date(obj["supportedVersions"][i]["expirationDate"]);
                    line = '<li class="list-group-item col-10 col-md-12"><p class="float-left m-0 ml-md-3">ver.' + obj["supportedVersions"][i]["version"] + ' has been released.</p>';
                    if (today.getTime() < expirationDate.getTime()) line += '<small><a href="' + obj["supportedVersions"][i]["url"] + '" class="float-right m-0 mt-md-1 mr-md-3" target="_blank">DOWNLOAD</a></small></li>';
                    else line += '<small><p class="float-right inactive m-0 mt-md-1 mr-md-3">DOWNLOAD</p></small></li>';
                    $('#jsonList').append(line);
                }
            }
        }
    };
    req.open("GET", "https://jokura.net/licence.min.php", false);
    req.send(null);
});