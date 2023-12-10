define("SideBarController", ["require", "jquery", "SideBarService"], function (require,$,sideBarService) {
  var SideBarController = function () {};

  SideBarController.prototype.init = function () {
    //Side bar toggle event listener
    $("#sidemenu-toggle").on("click", () => {
      document.getElementById("mySidebar").classList.toggle("open");
      document.getElementById("main-content").classList.toggle("open");
    });

    //TODO: Add the code for dynamically loading the side bar
    this.loadSideBar(function (pageHtml) {
      console.log(pageHtml + " loaded Successfully");
    });
  };

  //Create function getSideBarData

  SideBarController.prototype.loadSideBar = function (callback) {
    let _this = this;

    sideBarService.getSideBarData(function (sideBarData) {
      console.log(sideBarData);

      sideBarData.forEach((sideBarMenu) => {
        console.log(sideBarMenu);
        let anchorTag = $("<a></a>")
          .attr("href", sideBarMenu.html)
          .attr("id", sideBarMenu.controller)
          .append(sideBarMenu.title);

        let listItem = $("<li></li>").append(anchorTag);
        $("#sidebar-list").append(listItem);

      });
      _this.addSideBarEventListener();


    });

    // sideBarService.getSideBarData(function(data){
    //     console.log(data);
    //     //data -> Array of JSON
    //     //Loop on the data and insert into sidebar ie li tags using jquery
    //     //with a href = ".html" and id="controller"
    // });

    
  };

  SideBarController.prototype.addSideBarEventListener = function(){
    $("#mySidebar")
      .find("li")
      .each(function (i, item) {
        $(item)
          .find("a")
          .eq(0)
          .click(function (e) {
            e.preventDefault();
            let pageHtml = $(this).attr("href");
            let controller = $(this).attr("id");

            $("#main-content").empty();
            $("#main-content").load(pageHtml, function () {
              require([controller], function (controllerObject) {
                controllerObject.init();
              });

              if (callback) callback(pageHtml);
            });
          });
      });
  }

  return new SideBarController();
});
