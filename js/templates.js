this["JST"] = this["JST"] || {};

this["JST"]["private/templates/video.ejs"] = function(data) {
var __t, __p = '', __e = _.escape;
__p += '<div class=\'video col-md-4\'>\r\n\t<h4>' +
__e( data.title ) +
'</h4>\r\n\t<iframe class=\'img-responsive\' src="//player.vimeo.com/video/' +
__e( data.id ) +
'" width="' +
__e( data.width ) +
'" height="' +
__e( data.height ) +
'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\r\n</div>\r\n';
return __p
};