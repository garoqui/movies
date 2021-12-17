export const starsHTML = {
   setList (){
    console.log("click")
    const starsList = []

    for(let i = 0; i<5; i+=1){
        starsList.push(`<fa-icon class="fa fa-star"></fa-icon>`)
    }
    console.log(starsList)
    return starsList

   } 

}