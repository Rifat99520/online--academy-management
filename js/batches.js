function loadSampleData() {
    const dataUrl = "sample_data.json";

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            const batches = data.Batches;
            const table = $('#batchTable').DataTable();
            batches.forEach(batch => {
                table.row.add([
                    batch.batch_id,
                    batch.name,
                    batch.start_date,
                    batch.i_id
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
