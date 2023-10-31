define('AjaxHelper', ['jquery'], function ($){
    var AjaxHelper  = function(){
        this.baseUrl = "/";
    }

    AjaxHelper.prototype.sendRequest = function(url, methodType, callback){
        url = this.baseUrl + url;
        var request = $.ajax({
            url: url,
            async: true,
            contentType: 'application/json',
            type: methodType
        });

        request.done(function(result){
            callback(result);
        });

        request.fail(function(jqXHR){
            console.error(jqXHR);
        });
    };

    return new AjaxHelper();
})