define('SideBarController', ['require','jquery', 'SideBarService'], function(require, $, sideBarService){
    var SideBarController = function(){

    };

    SideBarController.prototype.init = function(){

        //Side bar toggle event listener
        $("#sidemenu-toggle").on('click', ()=>{
            document.getElementById('mySidebar').classList.toggle('open');
            document.getElementById('main-content').classList.toggle('open');
        });

        //TODO: Add the code for dynamically loading the side bar
        this.loadSideBar(
            function(pageHtml){
            console.log(pageHtml + " loaded Successfully");
        }
        );

    }


    //Create function getSideBarData


    SideBarController.prototype.loadSideBar = function(callback){
        //TODO: Load Data Dynamically
        // sideBarService.getSideBarData(function(data){
        //     console.log(data);
        //     //data -> Array of JSON
        //     //Loop on the data and insert into sidebar ie li tags using jquery
        //     //with a href = ".html" and id="controller"
        // });

        $('#mySidebar').find('li').each(function(i, item){
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