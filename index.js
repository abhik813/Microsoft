let c = 0;
let slider = document.querySelectorAll(".slider");
let a = slider.length;
for(let i = 0;i<a;i++)
{
    slider[i].style.left = `${i*100}%`;
}
let ra = document.querySelector(".rightarrow");
ra.addEventListener("click", function()
{
    c++;
    if(c==2)
    {
        c=0;
    }
    slideimg();
})
let la = document.querySelector(".leftarrow");
la.addEventListener("click", function()
{
    c--;
    if(c==-1)
    {
        c=1;
    }
    slideimg();
});

function slideimg()
{
    for(let i = 0;i<a;i++)
    {
        slider[i].style.transform = `translateX(-${c*100}%)`;
        slider[i].style.transition = "0.6s ease-in";
    }
}
document.querySelector(".hamburger").addEventListener("click", function()
{
    document.querySelector(".hamburgerinfo").classList.toggle("hamburgerdisplay");
    document.querySelector(".img-cross").classList.toggle("img-cross-display");
    document.querySelector(".slider").classList.toggle("main-display");
});