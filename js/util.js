/// <reference path="typings/tsd.d.ts" />
var WebRTCChecker;
(function (WebRTCChecker) {
    var Util = (function () {
        function Util() {
        }
        Util.prototype.isGetUserMedia = function () {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            if (navigator.getUserMedia) {
                return true;
            } else {
                return false;
            }
        };

        Util.prototype.isRTCPeerConnection = function () {
            window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
            if (window.RTCPeerConnection) {
                return true;
            } else {
                return false;
            }
        };
        return Util;
    })();
    WebRTCChecker.Util = Util;
})(WebRTCChecker || (WebRTCChecker = {}));
