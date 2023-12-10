define('SideBarService', ['jquery', 'AjaxHelper'], function($, ajaxHelper){
    var SideBarService = function(){

    };

    SideBarService.prototype.getSideBarData = function(callback){
        ajaxHelper.sendRequest('submenu/getSubmenuData', 'GET', callback);
    };

    return new SideBarService();
});