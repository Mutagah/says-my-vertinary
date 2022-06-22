document.addEventListener("DOMContentLoaded",(event) => {
    event.preventDefault()
    fetchingData()
    jsonDataDisplay()
})
const clicked1 = document.getElementById("button1")
const ImagesDivision = document.getElementById("myImages")
const registerButton = document.getElementById("button2")
const VetNameInput = document.getElementById("vetName")
const vetPhoneNumber = document.getElementById("vetPhoneNumber")
function clickedFunc(){clicked1.addEventListener("click",() => alert("Hello guys"))}
function fetchingData(){
fetch("https://dog.ceo/api/breed/hound/images/random/3")
    .then(resp => resp.json())
        .then(data =>
            {
                fillingImages(data)
            } )
}
function jsonDataDisplay(){
    fetch("http://localhost:3000/VeterinaryDoctors")
        .then(response => response.json())
            .then(data => {

                console.log(data)
                data.forEach(element => {
                    console.log(element["phoneNumber"])
                        displayNamesFromServer(element["Name"],element["phoneNumber"])
                    
                })
            })
}
function displayNamesFromServer(element,number){
    const myList = document.createElement("li")
    myList.addEventListener("onmouseover",()=>
    {
        const numberLabel = document.createElement("label")
        numberLabel.textContent = `${number}`
        myList.appendChild(numberLabel)
    })
    // const numberLabel = document.createElement("label")
    // numberLabel.textContent = `${number}`
    myList.innerHTML = element;
    // myList.appendChild(numberLabel)
    document.querySelector("#myVeterinaryList").appendChild(myList)


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
function postingData(myData){
    registerButton.addEventListener("click",event => {
        event.preventDefault()
        //const myList = document.createElement("li")
        // myList.innerHTML = `${myData}`
        // document.querySelector("#myVeterinaryList").appendChild(myList)
        // const configuredObject = {
        //     method : "POST",
        //     headers: {
        //         "content-Type" : "application/json",
        //         Accept : "application/json",
        //     },
        //     body:JSON.stringify(myData)
        //     }
    
        // fetch(" http://localhost:3000/VeterinaryDoctors",configuredObject)
        //     .then(response => response.json())
        //     .then(data => console.log(data))
    })
}