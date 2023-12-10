define('InstructorController', ['jquery', 'InstructorService', 'DataTable'], function ($, instructorService, DataTable) {

    var InstructorController = function () {

    }

    InstructorController.prototype.init = function () {


        instructorService.getInstructorData(function (instructorList) {

            console.log(instructorList);
            const table = $('#instructorTable').DataTable();
            instructorList.forEach(instructor => {
                table.row.add([

                    instructor.i_id,
                    instructor.name,
                    instructor.avg_rating,
                    instructor.email,

                ]).draw(false);
            });


        });
    }

    return new InstructorController();

});
