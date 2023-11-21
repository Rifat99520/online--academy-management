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

        InstructorController: 'Instructor/InstructorController',
        InstructorService: 'Instructor/InstructorService',

        QuestionsController: 'Questions/QuestionsController',
        QuestionsService: 'Questions/QuestionsService',
    }
});
require(['App'], function (App) {
    App.init();
});

