"use strict";jQuery(function(e){function a(e){var a=1===e.data,t=2===e.data,o=0===e.data;n(a,t,o)}function n(e,a,n){e&&(s.removeClass("is-paused"),s.toggleClass("is-playing")),a&&(s.removeClass("is-playing"),s.toggleClass("is-paused")),n&&s.removeClass("is-playing","is-paused")}function t(e,a,n){var t,o,i,l=null,s=0;n||(n={});var u=function(){s=n.leading===!1?0:Date.now(),l=null,i=e.apply(t,o),l||(t=o=null)};return function(){var r=Date.now();s||n.leading!==!1||(s=r);var f=a-(r-s);return t=this,o=arguments,f<=0||f>a?(l&&(clearTimeout(l),l=null),s=r,i=e.apply(t,o),l||(t=o=null)):l||n.trailing===!1||(l=setTimeout(u,f)),i}}var o,i=e(window),l=e("#featured-media"),s=e("#featured-video"),u=l.offset().top,r=Math.floor(u+l.outerHeight()/2);window.onYouTubeIframeAPIReady=function(){o=new YT.Player("featured-video",{events:{onStateChange:a}})},i.on("resize",t(function(){u=l.offset().top,r=Math.floor(u+l.outerHeight()/2)},150)).on("scroll",t(function(){s.toggleClass("is-sticky",i.scrollTop()>r&&s.hasClass("is-playing"))},150))});