// JS code for Project Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('project');
    if( n > slides.length){
        slideIndex = 1;
    }
    if( n < 1){
        slideIndex = slides.length;
    }
    for( i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display = "block";
}

// JS code for recommendation section
function addRecommendation(){  
    const feedback = document.getElementById('new_recommendation').value;
    if(feedback ==""){
        alert("Please enter a recommendation before submitting. ");
    }
    else{
        let ele = document.getElementById('all_recommendations');
        let box = document.createElement('div');
        box.className='recommendation';
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        span1.innerHTML = "&#8220"; 
        span2.innerHTML = "&#8221";
        let br = document.createElement('br');
        let viewer_name = document.getElementById('viewer_name').value;
        let name = document.createElement('b');
        name.innerHTML = viewer_name;
    box.append(span1,feedback,span2,br,"-",name);
    ele.appendChild(box);
    var count = 1;
    var counter = setInterval(timer, 1000);
    function timer(){
        count -= 1;
        if(count ==0){
            alert("Thank you for your recommendation :) ");
        }
    }
    }

}

