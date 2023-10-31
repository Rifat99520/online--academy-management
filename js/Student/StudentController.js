define('StudentController', ['jquery', 'StudentService', 'DataTable'], function ($, studentService, DataTable) {

    var StudentController = function () {

    }

    StudentController.prototype.init = function () {


        studentService.getStudentData(function (studentList) {
            console.log(studentList);
            const students = studentList.Students;
            const table = $('#studentTable').DataTable();
            students.forEach(student => {
                table.row.add([
                    student.s_id,
                    student.name,
                    student.grad_year,
                    student.email,
                    student.batch_id
                ]).draw(false);
            });


        });
    }



        // function loadContent(url) {
        //     // const xhttp = new XMLHttpRequest();
        //     // xhttp.onreadystatechange = function() {
        //     //     if (this.readyState === 4 && this.status === 200) {
        //     //         loadStudentData();
        //     //         document.getElementById("main-content").innerHTML = this.responseText;
        //     //     }
        //     // };
        //     // xhttp.open("GET", url, true);
        //     // xhttp.send();
        //     $("#main-content").load(url, (response, status, xhr) => {
        //         if (status == "success") {
        //             console.log("Data loaded successfully!");
        //         } else {
        //             console.log("Failed to load data");
        //         }
        //     });
        // }

        // return loadContent;

        return new StudentController();

    });
