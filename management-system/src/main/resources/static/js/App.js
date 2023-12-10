define('App', ['jquery', 'SideBarController'], function($, sideBarController){
    var init = function(){

        

        
        //TODO: Create sideBarController.init() method and add he code written in index.html script tag there
        //From the init() method call loadSideBar as well
        
        sideBarController.init();

    }

    return {
        init: init
    };
})





// export default loadContent;
// window.loadContent = loadContent;