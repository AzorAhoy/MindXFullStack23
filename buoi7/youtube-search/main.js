function fetchapi(api, keyword) {
    const start = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";
    const end= '&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw';
    fetch(api ,{
        method:'GET',
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            document.getElementsByName("keyword")[0].value = keyword;
            var results = data.items;
            var total = data.pageInfo.totalResults;
            
            var nextToken = data.nextPageToken;
            console.log(data);
            console.log(total);
            //console.log(results);
            for (let index = 0; index < results.length; index++) {
                //console.log(results[index].id.videoId);
                const id = results[index].id.videoId;
                const title = results[index].snippet.title;
                const img = results[index].snippet.thumbnails.default.url;
                const desc = results[index].snippet.description;
                // var a = document.createElement("a");
                // document.getElementById("result-list").appendChild(a);
                var description = document.createElement("p");
                description.innerText = desc;
                var thumbnails = document.createElement("img");
                thumbnails.src = img;
                var div = document.createElement("div");
                var node = document.createElement("A");
                node.href = "https://www.youtube.com/watch?v=" + id;
                
                var textnode = document.createTextNode(title);
                node.innerHTML = title;
                div.appendChild(thumbnails);
                div.appendChild(node);
                div.appendChild(description);
                document.getElementById("result-list").appendChild(div);
            }
            window.onscroll = function(ev) {
                // var list = document.getElementById("result-list");
                // while (list.hasChildNodes()) {   
                //     list.removeChild(list.firstChild);
                //     //list.clear();
                // }
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && nextToken != null) {
                    // you're at the bottom of the page
                    keyword = document.getElementsByName("keyword")[0].value;
                    console.log(nextToken);
                    // console.log(keyword);
                    api = start + keyword + end + "&pageToken=" + nextToken;
                    //api = api + end + "&pageToken=" + nextToken;
                    console.log(api, keyword);
                    fetchapi(api, keyword);
                }
            };
        }).catch(err => {
            console.log('Error: ', err);
        });
}


document.getElementsByClassName("btn-primary")[0].addEventListener("click", function(e) {
    var list = document.getElementById("result-list");
    while (list.hasChildNodes()) {   
        list.removeChild(list.firstChild);
        //list.clear();
    }
    e.preventDefault();
    console.log(document.getElementsByClassName("btn-primary")[0]);
    console.log(document.getElementsByName("keyword")[0].value);
    var keyword = document.getElementsByName("keyword")[0].value;
    const start = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";
    const end= '&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw';
    var api = start + keyword + end;
    console.log("API: ",api)
    fetchapi(api, keyword);

})  


