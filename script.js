document.addEventListener("DOMContentLoaded",() => {
    fetchingData()
    //clickedFunc()
})
const clicked1 = document.getElementById("button1")
const ImagesDivision = document.getElementById("myImages")
function clickedFunc(){clicked1.addEventListener("click",() => alert("Hello guys"))}
function fetchingData(){
fetch("https://dog.ceo/api/breed/hound/images/random/3")
    .then(resp => resp.json())
        .then(data =>
            {
                console.log(data)
                fillingImages(data)
            } )
}
function fillingImages(data){
    const myImages = data["message"]
    console.log(myImages)
    myImages.forEach(element => {
    let imgTag =  document.createElement("img")
    imgTag.setAttribute("src",element)    
    ImagesDivision.appendChild(imgTag)
});
}