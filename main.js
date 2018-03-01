var element = document.querySelector("#text");
var data = "";

axios.get('http://127.0.0.1:3000', {
  headers: {
	  'Access-Control-Allow-Origin': '*',
    withCredentials: true,
	},
})
  .then(function (response) {
    console.log(response);
    data = response;
    setData();
  })
  .catch(function (error) {
    console.log(error);
  });

// var request = new XMLHttpRequest();
//
// request.open('GET', 'http://127.0.0.1:3000');
//
// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

request.send();

function setData() {
  element.innerHTML = data;
}
