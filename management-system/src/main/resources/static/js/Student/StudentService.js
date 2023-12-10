define('StudentService', ['jquery'], function ($) {
    var StudentService = function () {

    }

    //Refer this code to understand how to fetch data from .json files
    StudentService.prototype.getStudentData = function (callback) {
        const dataUrl = "studentData_copy.json";

        fetch(dataUrl)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => {
                console.error('Failed to load sample data:', error);
            });
    };

    return new StudentService();
});
