/*global $, _, JST*/
'use strict';

$(document).ready(function() {
	$.get('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=greycubs&key=AIzaSyBCkLzhwiM58D0-i-9EMeqXceBm0FhzxHg')
		.done(function(data) {
			var id = _.first(data.items).contentDetails.relatedPlaylists.uploads;
			console.log(id);
			$.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + id + '&key=AIzaSyBCkLzhwiM58D0-i-9EMeqXceBm0FhzxHg')
				.done(function(data) {
					_.each(data.items, function(video) {
						video.snippet.source = 'youtube';
						$('.videos').append(JST['private/templates/video.ejs'](video.snippet));
					});
				});
		})
		;

	$.get('http://vimeo.com/api/v2/madewithaloe/videos.json')
		.done(function(videos) {
			_.each(videos, function(video) {
				video.source = 'vimeo';
				$('.videos').append(JST['private/templates/video.ejs'](video));
			});
		});
});
