const bin = document.querySelector("input#binary")
const button = document.querySelector("button")
const results = document.querySelector(".results")


button.addEventListener("click", function(){
    results.innerHTML = `<h3>${bin.value}</h3>`

    if (bin.value > 8)
    alert("insira no máximo 8 números")
})

