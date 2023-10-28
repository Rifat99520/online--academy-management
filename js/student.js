function loadStudentData() {
    const dataUrl = "sample_data.json";

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            const students = data.Students;
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
        })
        .catch(error => {
            console.error('Failed to load sample data:', error);
        });
}

$(document).ready(function() {
    // Load student data when the document is ready
    loadStudentData();
});
