chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log(msg)
    console.log(sender)
    sendResponse("From the background script!")
})

// console.log("Ttttttttesssssssssttting")

// var axios = require('axios');

// var data = JSON.stringify({
//     "collection": "messages",
//     "database": "zelta",
//     "dataSource": "Cluster0",
//     "filter": {
//         author: "Conor"
//     }
// });

// var config = {
//     method: 'post',
//     url: 'https://data.mongodb-api.com/app/data-bdlmk/endpoint/data/v1/action/findOne',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Request-Headers': '*',
//       'api-key': '1mUoVDXePeOC4vo2BoJr0EWdkPp1eR6HpEZtuRJ8firfReCb5krJOtd1Jh9ZN7tX',
//     },
//     data: data
// };

// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });