function loadSampleData() {
    const dataUrl = "sample_data.json";

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            const instructors = data.Instructors;
            const table = $('#instructorTable').DataTable();
            instructors.forEach(instructor => {
                table.row.add([
                    instructor.i_id,
                    instructor.name,
                    instructor.avg_rating,
                    instructor.email
                ]).draw(false);
            });
        })
        .catch(error => {
            console.error('Failed to load sample data:', error);
        });
}

$(document).ready(function() {
    loadSampleData();
});
