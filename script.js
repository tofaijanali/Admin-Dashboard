

// Sare progress circles aur percentage numbers ko select karna  
const progressBars = document.querySelectorAll('.insights .proggress svg circle');
const progressNumbers = document.querySelectorAll('.insights .number');

// Har progress number ke liye loop chalega aur circle ka fill update karega  
progressNumbers.forEach((num, index) => {
    let percent = parseInt(num.textContent); // Jo percentage likha hai usko number me convert karna  
    let circumference = 2 * Math.PI * 30; // Circle ka total circumference nikalna  
    let offset = circumference - (percent / 100) * circumference; // Percentage ke hisaab se offset calculate karna  
    
    // Jo stroke values calculate hue hain unko apply karna taaki progress dikh sake  
    progressBars[index].style.strokeDasharray = `${circumference}`;
    progressBars[index].style.strokeDashoffset = `${offset}`;
});

//  Main Section End Here //


//Right Panel Fix Start Here //  

document.addEventListener("DOMContentLoaded", function () {
    // Right panel ko select karna  
    const rightPanel = document.querySelector(".right");
    
    if (rightPanel) {
        rightPanel.style.height = "92vh"; // Panel ka height 92% viewport ke barabar set karna  
        rightPanel.style.overflowY = "auto"; // Scroll karne ka option dena agar zaroori ho  
        rightPanel.style.transition = "all 300ms ease"; // Smooth transition lagana taaki changes smoothly ho  
    }
});

// Right Panel Fix End Here // 
