const API_KEY = "668ceced1d5f424bb0f2c4c4805dfecc";
const url = "https://newsapi.org/v2/everything?q=";
const ARTICLES_PER_PAGE = 12;
let currentArticles = [];
let currentPage = 1;

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    currentArticles = data.articles;
    currentPage = 1;
    renderPagination();
    bindData(currentArticles.slice(0, ARTICLES_PER_PAGE));
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");
    
    cardsContainer.innerHTML = "";
    
    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");
    
    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;
    
    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });
    
    newsSource.innerHTML = `${article.source.name} · ${date}`;
    
    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

function renderPagination() {
    const paginationContainer = document.getElementById("pagination-container");
    paginationContainer.innerHTML = "";
    
    const totalPages = Math.ceil(currentArticles.length / ARTICLES_PER_PAGE);
    
    // Previous button
    const prevButton = document.createElement("button");
    prevButton.innerHTML = "Previous";
    prevButton.className = "pagination-button";
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    });
    paginationContainer.appendChild(prevButton);
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // First page shortcut if needed
    if (startPage > 1) {
        const firstPageBtn = document.createElement("button");
        firstPageBtn.innerHTML = "1";
        firstPageBtn.className = "pagination-button";
        firstPageBtn.addEventListener("click", () => goToPage(1));
        paginationContainer.appendChild(firstPageBtn);
        
        if (startPage > 2) {
            const ellipsis = document.createElement("span");
            ellipsis.innerHTML = "...";
            ellipsis.className = "pagination-ellipsis";
            paginationContainer.appendChild(ellipsis);
        }
    }
    
    // Page buttons
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement("button");
        pageButton.innerHTML = i.toString();
        pageButton.className = i === currentPage ? "pagination-button active" : "pagination-button";
        pageButton.addEventListener("click", () => goToPage(i));
        paginationContainer.appendChild(pageButton);
    }
    
    // Last page shortcut if needed
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement("span");
            ellipsis.innerHTML = "...";
            ellipsis.className = "pagination-ellipsis";
            paginationContainer.appendChild(ellipsis);
        }
        
        const lastPageBtn = document.createElement("button");
        lastPageBtn.innerHTML = totalPages.toString();
        lastPageBtn.className = "pagination-button";
        lastPageBtn.addEventListener("click", () => goToPage(totalPages));
        paginationContainer.appendChild(lastPageBtn);
    }
    
    // Next button
    const nextButton = document.createElement("button");
    nextButton.innerHTML = "Next";
    nextButton.className = "pagination-button";
    nextButton.disabled = currentPage === totalPages || totalPages === 0;
    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    });
    paginationContainer.appendChild(nextButton);
    
    // Page info
    const pageInfo = document.createElement("div");
    pageInfo.className = "pagination-info";
    pageInfo.innerHTML = `Page ${currentPage} of ${totalPages || 1}`;
    paginationContainer.appendChild(pageInfo);
}

function goToPage(page) {
    currentPage = page;
    const startIndex = (page - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    bindData(currentArticles.slice(startIndex, endIndex));
    renderPagination();
    
    // Scroll to top of results
    document.getElementById("cards-container").scrollIntoView({ behavior: "smooth" });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});

// Add event listener for Enter key in search box
searchText.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const query = searchText.value;
        if (!query) return;
        fetchNews(query);
        curSelectedNav?.classList.remove("active");
        curSelectedNav = null;
    }
});