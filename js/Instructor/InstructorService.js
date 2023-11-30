define('InstructorService', ['jquery'], function ($) {
    var InstructorService = function () {

    }

    //Refer this code to understand how to fetch data from .json files
    InstructorService.prototype.getInstructorData = function (callback) {
        const dataUrl = "instructorData.json";

        fetch(dataUrl)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => {
                console.error('Failed to load sample data:', error);
            });
    };

    return new InstructorService();
});
