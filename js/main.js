require.config({
    baseUrl: 'js',
    paths : {
        jquery : 'ExternalScript/jquery.min',
        DataTable: 'ExternalScript/jquery.dataTables.min',
        App : 'App',
        AjaxHelper: 'Utility/AjaxHelper',
        SideBarController: 'SideBar/SideBarController',
        SideBarService: 'SideBar/SideBarService',

        StudentController: 'Student/StudentController',
        StudentService: 'Student/StudentService',
    }
});
require(['App'], function (App) {
    App.init();
});

