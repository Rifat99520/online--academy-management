define('SideBarService', ['jquery', 'AjaxHelper'], function($, ajaxHelper){
    var SideBarService = function(){

    };

    SideBarService.prototype.getSideBarData = function(callback){
        ajaxHelper.sendRequest('sampleData/subMenuData.json', 'GET', callback);
    };

    return new SideBarService();
});