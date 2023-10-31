define('StudentService', ['jquery'], function ($) {
    var StudentService = function () {

    }

    StudentService.prototype.getStudentData = function (callback) {
        const dataUrl = "studentData.json";

        fetch(dataUrl)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => {
                console.error('Failed to load sample data:', error);
            });
    };

    return new StudentService();
});
