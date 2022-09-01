const textarea =document.querySelector("#textarea")
 input =document.querySelector(".input-group")
 select =document.querySelector(".btn-light")
 bottun =document.querySelector("#btn")

select.addEventListener("change",()=>{
let selectoption = select.options[select.selectedIndex].innerText 

bottun.value = selectoption
})


 bottun.addEventListener("click",()=>{
    const blob = new Blob([textarea.value],{type:select.value})
    const filter =URL.createObjectURL(blob)
    const link =document.createElement("a")
    link.download =input.value
    link.href = filter
    link.click()
    console.log(link.download)
 })

