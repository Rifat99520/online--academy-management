define('SideBarController', ['require','jquery', 'SideBarService'], function(require, $, sideBarService){
    var SideBarController = function(){

    };

    SideBarController.prototype.loadSideBar = function(callback){
        //TODO: Load Data Dynamically
        sideBarService.getSideBarData(function(data){
            console.log(data);
            //Loop on the data and insert into sidebar
            //with a href = ".html" and id="controller"
        });

        $('#sidebar').find('li').each(function(i, item){
            $(item).find('a').eq(0).click(function(e){
                e.preventDefault();
                let pageHtml = $(this).attr('href');
                let controller = $(this).attr('id');

                $("#main-content").empty();
                $("#main-content").load(pageHtml, function(){
                    require([controller], function(controllerObject){
                        controllerObject.init();
                    });
                    
                    if(callback)
                        callback(pageHtml);
                });
            })
        })

    }

    return new SideBarController();
});