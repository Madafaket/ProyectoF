let si = document.getElementById('si')

si.addEventListener("click", function(e) {
    swal({
        title: "Gracias por darme la oportunidad...*<3*",
        icon: "success",
    });

});
let no = document.getElementById('no')

no.addEventListener("mousemove", function(e) {
    let x = Math.round(Math.random()*93);
    let y = Math.round(Math.random()*93);
    console.log(x)
    console.log(y);
    no.style.left = x + "%";
    no.style.top = y + "%";
});