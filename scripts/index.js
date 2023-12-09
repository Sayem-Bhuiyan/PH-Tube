// load category tab

const loadCategory = async () => {
    // fetch category data from api
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json();
    const categories = data.data;
    console.log(categories)

    // getting the category container
    const categoryContainer = document.getElementById('category-container');
    

    categories.forEach((category) => {
        const tab = document.createElement('tab');
        tab.innerHTML = `
        <a id="active-btn" onclick="loadData('${category.category_id}')" role="tab" class="tab text-lg font-semibold bg-[#19191926] px-5text-center rounded flex justify-center items-center">${category.category}</a>
        `;
        categoryContainer.appendChild(tab);
    });

};

const loadData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    console.log(data.data);
}

document.addEventListener('DOMContentLoaded', function(){
    let activeBtn = document.getElementById('active-btn');
    activeBtn.addEventListener('click', function () {
        activeBtn.classList.add('active-button tab-active');
    });
});
loadCategory();