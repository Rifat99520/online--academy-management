define('App', ['jquery', 'SideBarController'], function($, sideBarController){
    var init = function(){
        //TODO: LOAD DATA FROM SIDEBAR
        sideBarController.loadSideBar(function(pageHtml){
            console.log(pageHtml + " loaded Successfully");
        });

    }

    return {
        init: init
    };
})





// export default loadContent;
// window.loadContent = loadContent;