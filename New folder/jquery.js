let sun = document.getElementById("sun");
let logo = document.querySelector(".logo-img");
let logos = document.getElementById("logos");
let dark = document.querySelector("#dark");
let sun_class = document.querySelector(".sun-class");

sun.onclick = function () {
    document.body.classList.toggle("primary-colors");
    if (document.body.classList.contains("primary-colors")) {
        logo.src = "/img/logo-color.png";
        logos.src = "/img/logo-color.png";
        dark.style.display = "flex";
        darks.style.display = "none";
        sun_class.style.display = "none";
    }
    else {
        logo.src = "/img/logo_white.png";
        logos.src = "/img/logo_white.png";
        dark.style.display = "none";
        darks.style.display = "none";
        sun_class.style.display = "flex";
    }
}

let sun_classs = document.querySelector(".sun-classs");
let darks = document.getElementById("darks");
let menu_div = document.querySelector(".menu-div");
function background1() {
    document.body.classList.toggle("primary-colors");
    if (document.body.classList.contains("primary-colors")) {
        logo.src = "/img/logo-color.png";
        logos.src = "/img/logo-color.png";
        darks.style.display = "flex";
        sun_classs.style.display = "none";
    }
    else {
        logo.src = "/img/logo_white.png";
        logos.src = "/img/logo_white.png";
        darks.style.display = "none";
        sun_classs.style.display = "flex";
    }
}

let heartbtn = document.getElementById("redHeartBtn");
let icon = document.querySelector(".iconHeart");
let count = document.getElementById("count");
let clicked = false; 
heartbtn.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        icon.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count.textContent++;
        icon.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        icon.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count.textContent--;
        icon.classList.remove("jsRedFun");
    }
})

let heartbtn1 = document.getElementById("redHeartBtn1");
let icon1 = document.querySelector(".iconHeart1");
let count1 = document.getElementById("count1");
heartbtn1.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        icon1.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count1.textContent++;
        icon1.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        icon1.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count1.textContent--;
        icon1.classList.remove("jsRedFun");
    }
})

let heartbtn2 = document.getElementById("redHeartBtn2");
let icon2 = document.querySelector(".iconHeart2");
let count2 = document.getElementById("count2");
heartbtn2.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        icon2.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count2.textContent++;
        icon2.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        icon2.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count2.textContent--;
        icon2.classList.remove("jsRedFun");
    }
})

let heartbtn3 = document.getElementById("redHeartBtn3");
let icon3 = document.querySelector(".iconHeart3");
let count3 = document.getElementById("count3");
heartbtn3.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        icon3.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count3.textContent++;
        icon3.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        icon3.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count3.textContent--;
        icon3.classList.remove("jsRedFun");
    }
})

let heartbtn4 = document.getElementById("redHeartBtn4");
let icon4 = document.querySelector(".iconHeart4");
let count4 = document.getElementById("count4");
heartbtn4.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        icon4.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count4.textContent++;
        icon4.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        icon4.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count4.textContent--;
        icon4.classList.remove("jsRedFun");
    }
});

let heartbtn6 = document.getElementById("redHeartBtn6");
let icon6 = document.querySelector(".iconHeart6");
let count6 = document.getElementById("count6");
heartbtn6.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        icon6.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count6.textContent++;
        icon6.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        icon6.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count6.textContent--;
        icon6.classList.remove("jsRedFun");
    }
});

let heartbtn5 = document.getElementById("redHeartBtn5");
let icon5 = document.querySelector(".iconHeart5");
let count5 = document.getElementById("count5");
heartbtn5.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        icon5.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count5.textContent++;
        icon5.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        icon5.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count5.textContent--;
        icon5.classList.remove("jsRedFun");
    }
});


let heartbtn7 = document.getElementById("redHeartBtn7");
let icon7 = document.querySelector(".iconHeart7");
let count7 = document.getElementById("count7");
heartbtn7.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        icon7.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count7.textContent++;
        icon7.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        icon7.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count7.textContent--;
        icon7.classList.remove("jsRedFun");
    }
})

// art button div function
let redHeartBtn = document.getElementById("redHeartBtn_cnt1");
let part1_icon = document.querySelector(".part1_iconHeart");
let part_count = document.getElementById("part1_count-div");
redHeartBtn.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part1_icon.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        part_count.textContent++;
        part1_icon.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part1_icon.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        part_count.textContent--;
        part1_icon.classList.remove("jsRedFun");
    }
})

let redHeartBtn2 = document.getElementById("redHeartBtn_cnt2");
let part1_icon2 = document.querySelector(".part1_iconHeart2");
let part_count2 = document.getElementById("part1_count-div2");
redHeartBtn2.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part1_icon2.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        part_count2.textContent++;
        part1_icon2.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part1_icon2.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        part_count2.textContent--;
        part1_icon2.classList.remove("jsRedFun");
    }
});


let redHeartBtn3 = document.getElementById("redHeartBtn_cnt3");
let part1_icon3 = document.querySelector(".part1_iconHeart3");
let part_count3 = document.getElementById("part1_count-div3");
redHeartBtn3.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part1_icon3.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        part_count3.textContent++;
        part1_icon3.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part1_icon3.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        part_count3.textContent--;
        part1_icon3.classList.remove("jsRedFun");
    }
});

let redHeartBtn4 = document.getElementById("redHeartBtn_cnt4");
let part1_icon4 = document.querySelector(".part1_iconHeart4");
let part_count4 = document.getElementById("part1_count-div4");
redHeartBtn4.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part1_icon4.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        part_count4.textContent++;
        part1_icon4.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part1_icon4.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        part_count4.textContent--;
        part1_icon4.classList.remove("jsRedFun");
    }
});

// 
let part2RedBtn = document.getElementById("part2btn");
let part2_icon = document.querySelector(".part2_iconHeart");
let part2Count = document.getElementById("part2_count_div");
part2RedBtn.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part2_icon.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        part2Count.textContent++;
        part2_icon.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part2_icon.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        part2Count.textContent--;
        part2_icon.classList.remove("jsRedFun");
    }
});

let part2btn2 = document.getElementById("part2btn2");
let part2_icon2 = document.querySelector(".part2_icon2");
let countValue2 = document.getElementById("countValue2");
part2btn2.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part2_icon2.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        countValue2 .textContent++;
        part2_icon2.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part2_icon2.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        countValue2 .textContent--;
        part2_icon2.classList.remove("jsRedFun");
    }
});
let part2btn3 = document.getElementById("part2btn3");
let part2_icon3 = document.querySelector(".part2_icon3");
let countValue3 = document.getElementById("countValue3");
part2btn3.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part2_icon3.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        countValue3 .textContent++;
        part2_icon3.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part2_icon3.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        countValue3 .textContent--;
        part2_icon3.classList.remove("jsRedFun");
    }
});

let part2btn4 = document.getElementById("part2btn4");
let part2_icon4 = document.querySelector(".part2_icon4");
let countValue4 = document.getElementById("countValue4");
part2btn4.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part2_icon4.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        countValue4 .textContent++;
        part2_icon4.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part2_icon4.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        countValue4 .textContent--;
        part2_icon4.classList.remove("jsRedFun");
    }
});

let part3btn = document.getElementById("part3btn");
let part2_iconHart = document.querySelector(".part2_iconHart");
let count4Value = document.getElementById("count4Value");
part3btn.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part2_iconHart.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count4Value.textContent++;
        part2_iconHart.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part2_iconHart.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count4Value.textContent--;
        part2_iconHart.classList.remove("jsRedFun");
    }
});

let part3btn2 = document.getElementById("part3btn2");
let part2_iconHart2 = document.querySelector(".part2_iconHart2");
let count4Value2 = document.getElementById("count4Value2");
part3btn2.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part2_iconHart2.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count4Value2.textContent++;
        part2_iconHart2.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part2_iconHart2.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count4Value2.textContent--;
        part2_iconHart2.classList.remove("jsRedFun");
    }
});
let part3btn3 = document.getElementById("part3btn3");
let part2_iconHart3 = document.querySelector(".part2_iconHart3");
let count4Value3 = document.getElementById("count4Value3");
part3btn3.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part2_iconHart3.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count4Value3.textContent++;
        part2_iconHart3.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part2_iconHart3.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count4Value3.textContent--;
        part2_iconHart3.classList.remove("jsRedFun");
    }
});

let part3btn4 = document.getElementById("part3btn4");
let part2_iconHart4 = document.querySelector(".part2_iconHart4");
let count4Value4 = document.getElementById("count4Value4");
part3btn4.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part2_iconHart4.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count4Value4.textContent++;
        part2_iconHart4.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part2_iconHart4.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count4Value4.textContent--;
        part2_iconHart4.classList.remove("jsRedFun");
    }
});

let part4btn = document.getElementById("part4btn");
let part4_icon = document.querySelector(".part4_icon");
let count5Value = document.getElementById("count4Value4");
part4btn.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part4_icon.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count5Value.textContent++;
        part4_icon.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part4_icon.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count4Value4.textContent--;
        part4_icon.classList.remove("jsRedFun");
    }
});

let part4btn2 = document.getElementById("part4btn2");
let part4_icon2 = document.querySelector(".part4_icon2");
let count5Value2 = document.getElementById("count5Value2");
part4btn2.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part4_icon2.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count5Value2.textContent++;
        part4_icon2.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part4_icon2.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count5Value2.textContent--;
        part4_icon2.classList.remove("jsRedFun");
    }
});

let part4btn3 = document.getElementById("part4btn3");
let part4_icon3 = document.querySelector(".part4_icon3");
let count5Value3 = document.getElementById("count5Value3");
part4btn3.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part4_icon3.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count5Value3.textContent++;
        part4_icon3.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part4_icon3.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count5Value3.textContent--;
        part4_icon3.classList.remove("jsRedFun");
    }
});


let part4btn4 = document.getElementById("part4btn4");
let part4_icon4 = document.querySelector(".part4_icon4");
let count5Value4 = document.getElementById("count5Value4");
part4btn4.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part4_icon4.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count5Value4.textContent++;
        part4_icon4.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part4_icon4.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count5Value4.textContent--;
        part4_icon4.classList.remove("jsRedFun");
    }
});

let part5btn = document.getElementById("part5btn");
let part5_icon = document.querySelector(".part5_icon");
let count6Value = document.getElementById("count6Value");
part5btn.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part5_icon.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count6Value.textContent++;
        part5_icon.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part5_icon.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count6Value.textContent--;
        part5_icon.classList.remove("jsRedFun");
    }
});

let part5btn2 = document.getElementById("part5btn2");
let part5_icon2 = document.querySelector(".part5_icon2");
let count6Value2 = document.getElementById("count6Value2");
part5btn2.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part5_icon2.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count6Value2.textContent++;
        part5_icon2.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part5_icon2.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count6Value2.textContent--;
        part5_icon2.classList.remove("jsRedFun");
    }
});

let part5btn3 = document.getElementById("part5btn3");
let part5_icon3 = document.querySelector(".part5_icon3");
let count6Value3 = document.getElementById("count6Value3");
part5btn3.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part5_icon3.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count6Value3.textContent++;
        part5_icon3.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part5_icon3.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count6Value3.textContent--;
        part5_icon3.classList.remove("jsRedFun");
    }
});

let part5btn4 = document.getElementById("part5btn4");
let part5_icon4 = document.querySelector(".part5_icon4");
let count6Value4 = document.getElementById("count6Value4");
part5btn4.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part5_icon4.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count6Value4.textContent++;
        part5_icon4.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part5_icon4.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count6Value4.textContent--;
        part5_icon4.classList.remove("jsRedFun");
    }
});

let part6btn = document.getElementById("part6btn");
let part6_icon = document.querySelector(".part6_icon");
let count7Value = document.getElementById("count7Value");
part6btn.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part6_icon.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count7Value.textContent++;
        part6_icon.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part6_icon.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count7Value.textContent--;
        part6_icon.classList.remove("jsRedFun");
    }
});


let part6btn2 = document.getElementById("part6btn2");
let part6_icon2 = document.querySelector(".part6_icon2");
let count7Value2 = document.getElementById("count7Value2");
part6btn2.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part6_icon2.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count7Value2.textContent++;
        part6_icon2.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part6_icon2.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count7Value2.textContent--;
        part6_icon2.classList.remove("jsRedFun");
    }
});


let part6btn3 = document.getElementById("part6btn3");
let part6_icon3 = document.querySelector(".part6_icon3");
let count7Value3 = document.getElementById("count7Value3");
part6btn3.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part6_icon3.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count7Value3.textContent++;
        part6_icon3.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part6_icon3.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count7Value3.textContent--;
        part6_icon3.classList.remove("jsRedFun");
    }
});

let part6btn4 = document.getElementById("part6btn4");
let part6_icon4 = document.querySelector(".part6_icon4");
let count7Value4 = document.getElementById("count7Value4");
part6btn4.addEventListener("click",()=>{
    if(!clicked){
        clicked = true;
        part6_icon4.innerHTML =`<i class="fa-solid fa-heart"></i>`;
        count7Value4.textContent++;
        part6_icon4.classList.add("jsRedFun");
    }
    else{
        clicked=false;
        part6_icon4.innerHTML =`<i class="fa-regular fa-heart"></i>`;
        count7Value4.textContent--;
        part6_icon4.classList.remove("jsRedFun");
    }
});

function hello() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text Hello World
  }

const  card1 =document.getElementById("card1");
const  card2 =document.getElementById("card2");
const  card3 =document.getElementById("card3");
const  card4 =document.getElementById("card4");
const  card5 =document.getElementById("card5");
const  card6 =document.getElementById("card6");
const  card7 =document.getElementById("card7");
const  card8 =document.getElementById("card8");
const photo_0= document.getElementById("photo_0");
const photo_1 = document.getElementById("photo_1");
const photo_2 =document.getElementById("photo_2");
const photo_3 =document.getElementById("photo_3");
const photo_4 =document.getElementById("photo_4");
const photo_5 =document.getElementById("photo_5");
// const photo_7 = document.getElementById("");
const photo_6 =document.getElementById("photo_6");
let cardtoggle =document.getElementById("center1");
let cardtoggle2= document.getElementById("center2");
let cardtoggle3 =document.getElementById("center3");

cardtoggle.addEventListener("click",()=>{
    
       if(!clicked){
        clicked =true;
        card1.style.display="flex";
        card2.style.display="none";
        card3.style.display="flex";
        card4.style.display="none";
        card5.style.display ="flex";
        card6.style.display ="flex";
        card7.style.display="none";
        card8.style.display="flex";
        photo_0.style.display="flex";
        photo_1.style.display="none";
        photo_2.style.display="none";
        photo_3.style.display="none";
        photo_4.style.display="none";
        photo_5.style.display="none";
        photo_6.style.display="none";
       }
       else{
        clicked =false;
        card1.style.display="flex";
        card2.style.display ="flex";
        card3.style.display ="flex";
        card4.style.display="flex";
        card5.style.display ="flex";
        card6.style.display ="flex";
        card7.style.display="flex";
        card8.style.display="flex";
        photo_0.style.display="flex";
        photo_1.style.display="none";
        photo_2.style.display="none";
        photo_3.style.display="none";
        photo_4.style.display="none";
        photo_5.style.display="none";
        photo_6.style.display="none";
       }
});

cardtoggle2.addEventListener("click",()=>{
    
    if(!clicked){
     clicked =true;
     card1.style.display="flex";
     card2.style.display="flex";
     card3.style.display="none";
     card4.style.display="flex";
     card5.style.display ="none";
     card6.style.display ="flex";
     card7.style.display="flex";
     card8.style.display="none";
     photo_0.style.display="flex";
     photo_1.style.display="none";
     photo_2.style.display="none";
     photo_3.style.display="none";
     photo_4.style.display="none";
     photo_5.style.display="none";
     photo_6.style.display="none";
    }
    else{
     clicked =false;
     card1.style.display="flex";
     card2.style.display ="flex";
     card3.style.display ="flex";
     card4.style.display="flex";
     card5.style.display ="flex";
     card6.style.display ="flex";
     card7.style.display="flex";
     card8.style.display="flex";
     photo_0.style.display="flex";
     photo_1.style.display="none";
     photo_2.style.display="none";
     photo_3.style.display="none";
     photo_4.style.display="none";
     photo_5.style.display="none";
     photo_6.style.display="none";
    }
});

cardtoggle3.addEventListener("click",()=>{
    
    if(!clicked){
     clicked =true;
     card1.style.display="none";
     card2.style.display="none";
     card3.style.display="flex";
     card4.style.display="flex";
     card5.style.display ="none";
     card6.style.display ="none";
     card7.style.display="none";
     card8.style.display="flex";
     photo_0.style.display="flex";
     photo_1.style.display="none";
     photo_2.style.display="none";
     photo_3.style.display="none";
     photo_4.style.display="none";
     photo_5.style.display="none";
     photo_6.style.display="none";
    }
    else{
     clicked =false;
     card1.style.display="flex";
     card2.style.display ="flex";
     card3.style.display ="flex";
     card4.style.display="flex";
     card5.style.display ="flex";
     card6.style.display ="flex";
     card7.style.display="flex";
     card8.style.display="flex";
     photo_0.style.display="flex";
     photo_1.style.display="none";
     photo_2.style.display="none";
     photo_3.style.display="none";
     photo_4.style.display="none";
     photo_5.style.display="none";
     photo_6.style.display="none";
    }
});