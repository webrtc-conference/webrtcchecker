/// <reference path="typings/tsd.d.ts" />
/// <reference path="util.ts" />
$(document).ready(function () {
    var util = new WebRTCChecker.Util();

    var resultGUM = util.isGetUserMedia();
    var resultRPC = util.isRTCPeerConnection();

    $("#isGUM").text(resultGUM);
    $("#isRPC").text(resultRPC);
});
