define('QuestionsController', ['jquery', 'QuestionsService', 'DataTable'], function ($, questionsService, DataTable) {

    var QuestionsController = function () {

    }

    QuestionsController.prototype.init = function () {


        questionsService.getQuestionsData(function (questionsList) {

            console.log(questionsList);
            const table = $('#questionsTable').DataTable();
            questionsList.forEach(question => {
                table.row.add([

                    question.q_id,
                    question.question_type,
                    question.question_description,

                ]).draw(false);
            });


        });
    }


    return new QuestionsController();

});
