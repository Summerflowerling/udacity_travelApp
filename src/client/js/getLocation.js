const test = document.getElementById("test")

export function getLocation(){
    console.log("show me")
}

export function handleSubmit(event){
    event.preventDefault()
    let destinaitonInput = document.getElementById("destination").value
    test.innerHTML=`<p>${destinationInput}</p>`
    console.log(destinaitonInput)
  

}

