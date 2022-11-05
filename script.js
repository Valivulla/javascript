document.addEventListener("readystatechange", (e)=>{
    if(e.target.readyState == 'complete'){
        console.log("ReadyState change")
        initApp()
    }
})


const initApp = () => {

    let area = document.querySelector('.area')
    let areaInner = document.querySelector('.area-inner')

    areaInner.addEventListener('click', ()=>{
        area.classList.toggle('dark')
        areaInner.innerText == "Click Here" ? areaInner.innerText = "Clicked!" : areaInner.innerText = "Click Here"
    })

    let area2 = document.querySelector('.area2')
    let areaInner2 = document.querySelector('.area-inner2')

    areaInner2.addEventListener('mouseover', ()=>{
        area2.classList.add('dark2')
        areaInner2.innerText = "Hovered!"
    })
    
    areaInner2.addEventListener('mouseout', ()=>{
        area2.classList.remove('dark2')
        areaInner2.innerText = "Hover!"
    })

}