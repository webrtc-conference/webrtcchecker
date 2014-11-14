/// <reference path="typings/tsd.d.ts" />


module WebRTCChecker {

    export interface getUserMediaMandatoryObject {
        optional: any;
    }

    export class Util {

        constructor(){
        }

        public isGetUserMedia():boolean {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            if(navigator.getUserMedia) {
                return true
            }else {
                return false
            }
        }

        public isRTCPeerConnection():boolean {
            window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
            if(window.RTCPeerConnection) {
                return true
            }else {
                return false
            }
        }

    }

}