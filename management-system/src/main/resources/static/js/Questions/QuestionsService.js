define('QuestionsService', ['jquery'], function ($) {
    var QuestionsService = function () {

    }

    //Refer this code to understand how to fetch data from .json files
    QuestionsService.prototype.getQuestionsData = function (callback) {
        const dataUrl = "questionsData.json";

        fetch(dataUrl)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => {
                console.error('Failed to load sample data:', error);
            });
    };

    return new QuestionsService();
});
