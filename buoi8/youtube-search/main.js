let pageToken;
let isloadingmore = false;
let searchTimeOut;
const loading = `               <div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-cube"><div></div><div></div><div></div><div></div></div><style type="text/css">@keyframes lds-cube {
    0% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes lds-cube {
    0% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  .lds-cube {
    position: relative;
  }
  .lds-cube div {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 10px;
    left: 10px;
    background: #3be8b0;
    -webkit-animation: lds-cube 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    animation: lds-cube 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
  .lds-cube div:nth-child(2) {
    top: 10px;
    left: 110px;
    background: #1aafd0;
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
  .lds-cube div:nth-child(3) {
    top: 110px;
    left: 110px;
    background: #ffb900;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  .lds-cube div:nth-child(4) {
    top: 110px;
    left: 10px;
    background: #6a67ce;
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }
  .lds-cube {
    width: 45px !important;
    height: 45px !important;
    -webkit-transform: translate(-22.5px, -22.5px) scale(0.225) translate(22.5px, 22.5px);
    transform: translate(-22.5px, -22.5px) scale(0.225) translate(22.5px, 22.5px);
  }
  </style>
  </div>`;
// document.querySelector("#search").addEventListener('submit', function() {
//     event.preventDefault();
//     document.querySelector("#result-list").innerHTML = "";
//     console.log(document.querySelector("#keyword").value);
//     const kw = document.querySelector("#keyword").value;
//     fetch(
//         'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+ kw +'&type=video&key=AIzaSyCKBs-zBjF_l-jaW1NaqjwouYimFF9F4us',
//         {
//             method:'GET'
//         }
//     ).then((response) => {
//         return response.json();
//     }).then((data) => {
//         pageToken = data.nextPageToken;
//         const items = data.items;
//         for (let i = 0; i < items.length; i++) {
//             const item = items[i];
//             //console.log(item);
//             const itemDOM = document.createElement('div');
//             itemDOM.innerHTML = `<div>
//                                     <img src="${item.snippet.thumbnails.high.url}">
//                                     <a href ="https://www.youtube.com/watch?v=${item.id.videoId}">${item.snippet.title}</a>
//                                     <p>${item.snippet.description}</p>
//                                 </div>`;
//             document.querySelector('#result-list').appendChild(itemDOM);
//         }
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     })
// })

document.querySelector("#keyword").addEventListener('input', function() {
    event.preventDefault();
    document.querySelector("#result-list").innerHTML = "";
    console.log(document.querySelector("#keyword").value);
    const kw = document.querySelector("#keyword").value;
    clearTimeout(searchTimeOut);
    const loadingLogo = document.createElement('div');
    loadingLogo.innerHTML = loading;
    document.querySelector('#loading').appendChild(loadingLogo);
    searchTimeOut = setTimeout(function() {
        fetch(
            'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+ kw +'&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw',
            {
                method:'GET'
            }
        ).then((response) => {
            return response.json();
        }).then((data) => {
            loadingLogo.innerHTML = "";
            pageToken = data.nextPageToken;
            const items = data.items;
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                //console.log(item);
                const itemDOM = document.createElement('div');
                itemDOM.innerHTML = `<div id = "result" style="padding:30px">
                                        <img src="${item.snippet.thumbnails.default.url}" width='120px' height='90px'>
                                        <div display="inline">
                                        <a href ="https://www.youtube.com/watch?v=${item.id.videoId}">${item.snippet.title}</a>
                                        <p>${item.snippet.description}</p>
                                        </div>
                                     </div>`;
                document.querySelector('#result-list').appendChild(itemDOM);
            }
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
    }, 1000);

})

window.onscroll = function() {
    //this.console.log("Scrolling!");
    //this.console.log(document.body.offsetHeight);
    //this.console.log(window.innerHeight + window.scrollY);
    if (!isloadingmore &&  document.body.offsetHeight -(window.innerHeight + window.scrollY)  < 100 && pageToken) {

        isloadingmore = true;
        console.log("bottom");
        const kw = document.querySelector("#keyword").value;
        const loadingLogo = document.createElement('div');
        loadingLogo.innerHTML = loading;
        document.querySelector('#loading').appendChild(loadingLogo);
        fetch(
            'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+ kw +'&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken='+ pageToken,
            {
                method:'GET'
            }
        ).then((response) => {
            return response.json();
        }).then((data) => {
            loadingLogo.innerHTML = "";
            pageToken = data.nextPageToken;
            const items = data.items;
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                console.log(item.id);
                const itemDOM = document.createElement('div');
                itemDOM.innerHTML = `<div id = "result" style="padding:30px">
                                        <img src="${item.snippet.thumbnails.default.url}" width='120px' height='90px'>
                                        <div background-color="blue">
                                        <a href ="https://www.youtube.com/watch?v=${item.id.videoId}">${item.snippet.title}</a>
                                        <p>${item.snippet.description}</p>
                                        </div>
                                    </div>`;
                document.querySelector('#result-list').appendChild(itemDOM);
            }
            isloadingmore = false;
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
    }
}

