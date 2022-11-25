let convert_button = document.querySelector(".convert-button");
let url_input = document.querySelector(".url-input");

convert_button.addEventListener("click", function(){
    console.log(`URL : ${url_input.value}`);
    sendUrl(url_input.value);
})
function sendUrl(URL){
 window.location.href = `http://localhost:4000/download?URL=${URL}`;
}