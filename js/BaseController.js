define(['student'], function(student){
    function loadContent(url) {
        // const xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function() {
        //     if (this.readyState === 4 && this.status === 200) {
        //         loadStudentData();
        //         document.getElementById("main-content").innerHTML = this.responseText;
        //     }
        // };
        // xhttp.open("GET", url, true);
        // xhttp.send();
        $("#main-content").load(url, (response, status, xhr) => {
            if (status == "success") {
                console.log("Data loaded successfully!");
            } else {
                console.log("Failed to load data");
            }
        });
    }
    
    return loadContent;

})


// export default loadContent;
// window.loadContent = loadContent;