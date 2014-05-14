/*global $, _, JST*/
'use strict';

$(document).ready(function() {
	// $.get('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=greycubs&key=AIzaSyBCkLzhwiM58D0-i-9EMeqXceBm0FhzxHg')
	// 	.done(function(data) {
	// 		console.log(_.first(data.items).id);
	// 		var id = _.first(data.items).id;
	// 		$.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + id + '&key=AIzaSyBCkLzhwiM58D0-i-9EMeqXceBm0FhzxHg')
	// 			.done(function(videos) {
	// 				_.each(videos, function(video) {
	// 					$('.videos').append(JST['private/templates/video.ejs'](video));
	// 				});
	// 			});
	// 	});

	// $.get('http://vimeo.com/api/v2/madewithaloe/videos.json')
	// 	.done(function(videos) {
	// 		_.each(videos, function(video) {
	// 			$('.videos').append(JST['private/templates/video.ejs'](video));
	// 		});
	// 	});
});
