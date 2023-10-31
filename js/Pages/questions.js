function loadSampleData() {
    const dataUrl = "sample_data.json";

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            const questions = data.Questions;
            const table = $('#questionTable').DataTable();
            questions.forEach(question => {
                table.row.add([
                    question.q_id,
                    question.question_type,
                    question.question_description
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
