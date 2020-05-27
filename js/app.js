const render = function() {


    (async() => {
        // debugger;
        console.log("hey there")
        const url = "https://api.github.com/repos/ieee8023/covid-chestxray-dataset/contents/images/"
        const response = await fetch(url, {
            method: "GET",
            // mode: 'no-cors',
            headers: { "Content-Type": "application/json; charset=utf-8" }
        });
        console.log(response)
        const result = await response.json();
        console.log(response.status)
        if (response.status === 200){
            console.log(result)
            var table = document.getElementById("imgTable");
            var ncol = 4;
            var row ;
            var cell1 ;
            result.map((image, idx) => {
                if (idx > 19)
                    return;
                if (idx%ncol) {
                    cell = row.insertCell(0);
                    curcol ++;
                }else{
                    row = table.insertRow(0);
                    cell = row.insertCell(0);
                    curcol = 0
                }

                cell.innerHTML = '<img src="' + image.download_url + '" width="200" height="200"/>';
                
            });
            
        }
        else if (response.status === 500)
            // Exception details.
            console.log(result.details);
    })()
}