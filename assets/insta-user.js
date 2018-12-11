
$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '8895079927',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '8895079927.1677ed0.4632c5a970ff4684a9433be059539fa0',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

userFeed.run();

});
