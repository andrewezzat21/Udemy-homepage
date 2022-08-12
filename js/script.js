
/* ----------------- Search Filter -------------- */

const searchText = document.querySelector(".search-place");
const searchButton = document.querySelector(".search-button");
let filterKey = "";

const saveToLocalStorage = () => {
    localStorage.setItem('filterKey', filterKey);
}

searchText.addEventListener('input', letter => {
    filterKey = letter.target.value;
})

searchButton.addEventListener('click', saveToLocalStorage)

async function showCourses() {
    const response = await fetch("js/courses.json");
    const data = await response.json();
    
    for(let i = 0 ; i < data.length ; i++){
        const courseIMG = data[i].image;
        const title = data[i].title;
        const autor = data[i].title;
        const rating = data[i].rating;
        const price = data[i].price;
        const course =
        `
            <div class="course-card">
            <img src="${courseIMG}" alt="course thumbnail" class="course-img">
            <h3 class="course-title">${title}</h3>
            <p class="course-author">${autor}</p>
            <div class="course-rating">
                <span>${rating}</span>
                <img class = "rating-stars" src="https://www.pngplay.com/wp-content/uploads/6/5-Star-Rating-Vector-Transparent-PNG.png" alt="rating">
            </div>
            <h3 class="course-price">${price}</h3>
                </div>
        `
        let titleLC = title.toLowerCase();
        let filterLC = localStorage.getItem("filterKey");
        if(titleLC.includes(filterLC)){
            document.querySelector(".topic-courses").innerHTML += course;
        }
        
    }
}

showCourses();

/* ---------------------------------- */