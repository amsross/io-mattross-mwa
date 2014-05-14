this["JST"] = this["JST"] || {};

this["JST"]["private/templates/video.ejs"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class=\'video col-md-4 video-' +
((__t = ( data.source )) == null ? '' : __t) +
'\'>\r\n\t<a target=\'_blank\' href=\'' +
((__t = ( data.url || 'http://youtu.be/' + data.resourceId.videoId )) == null ? '' : __t) +
'\'>\r\n\t\t<img class=\'img-responsive\' src=\'' +
__e( data.thumbnail_large || data.thumbnails.standard.url ) +
'\' />\r\n\t</a>\r\n\t<h4>\r\n\t\t<a target=\'_blank\' href=\'' +
((__t = ( data.url || 'http://youtu.be/' + data.resourceId.videoId )) == null ? '' : __t) +
'\'>' +
__e( data.title ) +
'</a>\r\n\t</h4>\r\n</div>\r\n';
return __p
};