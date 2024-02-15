const pstList = document.querySelectorAll('.post-area div');
const pstArray = Array.from(pstList); 

let currentIndex = 0;

// function changeImage() {
//   pstList.forEach(pst => pst.style.display = "none");
//   pstList[currentIndex].style.display = "block";
//   currentIndex = (currentIndex + 1) % pstArray.length;
// }

// setInterval(changeImage, 8000);