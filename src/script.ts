/// <reference path="typings/tsd.d.ts" />
/// <reference path="util.ts" />

$(document).ready(function(){

    var util = new WebRTCChecker.Util();

    var resultGUM:string = <string>util.isGetUserMedia();
    var resultRPC:string = <string>util.isRTCPeerConnection();

    $("#isGUM").text(resultGUM);
    $("#isRPC").text(resultRPC);

});