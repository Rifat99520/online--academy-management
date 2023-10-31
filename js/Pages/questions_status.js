function loadSampleData() {
    const dataUrl = "sample_data.json";

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            const sq = data.Student_Question;
            const table = $('#qsTable').DataTable();
            sq.forEach(sq => {
                table.row.add([
                    sq.s_id,
                    sq.q_id,
                    sq.status
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
