document.addEventListener("DOMContentLoaded",(event) => {
    event.preventDefault()
    hoverlinkFunction()
    fetchingData()
    jsonDataDisplay()
    likeinteractivity()
    postingData()
})
const clicked1 = document.getElementById("button1")
const VetFormName = document.getElementById("vetName")
const likeHeart2 = document.getElementById("button3")
const myListLink = document.getElementById("myDownList")
const ImagesDivision = document.getElementById("myImages")
const registerButton = document.getElementById("button2")
const VetNameInput = document.getElementById("vetName")
const vetPhoneNumber = document.getElementById("vetPhoneNumber")
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
                        displayNamesFromServer(element["Name"],element["phoneNumber"])
                })
            })
}
function displayNamesFromServer(element,number){
    const myList = document.createElement("li")
    myList.addEventListener("click",()=>
    {
        const numberLabel = document.createElement("label")
        numberLabel.textContent = "      :" + `${number}`
        myList.appendChild(numberLabel)
    })
    myList.innerHTML = element;
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
function postingData(){
    registerButton.addEventListener("click", (event) => {
        event.preventDefault()
        let myFormObj = {}
        myFormObj["Name"] = VetFormName.value
        myFormObj["phoneNumber"] = vetPhoneNumber.value
        console.log(JSON.stringify(myFormObj))
        const configuredObject = {
                method : "POST",
                headers: {
                    "content-Type" : "application/json",
                    Accept : "application/json",
                    },
                    body:JSON.stringify(myFormObj)
                    }
        fetch("http://localhost:3000/VeterinaryDoctors",configuredObject)
         .then(response => response.json())
            .then(data => console.log(data))
            document.getElementById("myForm").reset();
        
    })
   
}
function hoverlinkFunction(){

    myListLink.addEventListener("mouseover",() =>
    {
    myListLink.style.color = "blue";
    })
    
}
function likeinteractivity(){
    const EMPTY_HEART = '♡'
    const FULL_HEART = '♥'
    likeHeart2.addEventListener("click",(event) => {
        event.preventDefault()
        let heart = event.target
         if (heart.textContent === EMPTY_HEART)
             {
               heart.textContent = FULL_HEART
               heart.classList.add('activated-heart')
             }else{
               heart.textContent = EMPTY_HEART
               heart.classList.remove('activated-heart')
             }   
    }
        )}