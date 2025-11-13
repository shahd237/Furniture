


window.addEventListener("scroll",function(){
    const nav=this.document.querySelector(".navbar");
    if(this.window.scrollY>30){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled")
    }
})



const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
    const updateCounter=()=>{
        const target=+counter.getAttribute("data-target");
        const count=+counter.innerHTML;
        const inc=target/100;
        if(count<target){
            counter.innerHTML=Math.ceil(count+inc);
            setTimeout(updateCounter,20)
        }else{
            counter.innerHTML=target
        }
    }
    updateCounter()
})