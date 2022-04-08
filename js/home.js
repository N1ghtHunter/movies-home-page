/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("navbarColor01").style.marginRight = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("navbarColor01").style.marginRight = "0";
  }

  var myDiv = document.querySelectorAll(".pic-container");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
          entry.target.classList.toggle("fadeInTop",entry.isIntersecting)
          if(entry.isIntersecting) observer.unobserve(entry.target)
          })
    },
{
  threshold: 0.7,
}
)
myDiv.forEach(card =>{
  observer.observe(card);
})
// // if(entry.isIntersecting){
        //     myDiv.forEach(function (ele){
        //         ele.classList.add("fadeInTop");
        //     })
        //   setTimeout(function () {
          //     myDiv.forEach(function (ele){
          //         ele.classList.remove("fadeInTop");
          //     })
          // }, 2000);