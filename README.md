# ⚡ FlashFeed - Real-Time News Aggregator Web App

Welcome to **FlashFeed**, your one-stop portal for real-time, categorized news from trusted sources around the globe. Built using **HTML**, **CSS**, and **Vanilla JavaScript**, FlashFeed pulls the latest headlines using a **News API** and presents them in a fast, intuitive, and visually appealing interface.

<p align="center">
  <img src="./screenshots/main.png" alt="FlashFeed Preview" width="80%">
</p>

## 🌐 Live Demo

**[Click here to try FlashFeed](https://flashfeed-news.netlify.app)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/1234abcd-5678-efgh-9012-ijklmnopqrst/deploy-status)](https://app.netlify.com/sites/flashfeed-news/deploys)

---

## 🚀 Features

- 🗞 **Live News Feed** – Get the latest news headlines from top media outlets.
- 🎯 **Category-Based Navigation** – Browse by Technology, Finance, Politics, Sports, or Entertainment.
- 🔍 **Search Bar** – Find news articles by keyword in seconds.
- 🟥 **Breaking News Section** – Highlighted alerts for urgent updates.
- 🌐 **Clickable Articles** – Jump to the full article on the original website.
- 🧭 **Responsive Design** – Works seamlessly across desktop and mobile devices.

---

## 🛠 Tech Stack

| Tech                 | Description                          |
| -------------------- | ------------------------------------ |
| **HTML5**            | Structure of the web application     |
| **CSS3**             | Custom styling and responsive layout |
| **JavaScript (ES6)** | API calls, DOM updates, routing      |
| **NewsAPI.org**      | Data source for real-time news       |

---

## 📸 Screenshots

### 📰 News Cards

<img src="./screenshots/cards.png" alt="News Cards" width="80%">

### 🔍 Search Feature

<img src="./screenshots/search.png" alt="Search Feature" width="80%">

### 🚨 About Us

<img src="./screenshots/about.png" alt="Breaking News" width="80%">

### 🚨 Terms & Conditions

<img src="./screenshots/terms.png" alt="Breaking News" width="80%">

---

## 📦 How to Use

### 1️⃣ Prerequisites

- A modern web browser (Chrome, Firefox, Edge)
- [Node.js](https://nodejs.org/) and [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (optional but recommended for development)
- A free API key from [NewsAPI.org](https://newsapi.org/)

---

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/flashfeed.git
cd flashfeed
```

---

### 3️⃣ Add Your News API Key

1. Sign up at [https://newsapi.org](https://newsapi.org) and get your API key.
2. Inside the project directory, open the `script.js` or `config.js` file (depending on your structure).
3. Replace the placeholder with your key:

```javascript
const API_KEY = "YOUR_NEWS_API_KEY_HERE";
```

---

### 4️⃣ Run the App

#### Option 1: Open directly in a browser

- Open `index.html` in your browser.

#### Option 2: Use Live Server (recommended)

- Open the project folder in VS Code.
- Right-click on `index.html` → Click **"Open with Live Server"**.

---

### 5️⃣ Deploy Your Own Instance

#### Deploy to Netlify

1. Fork this repository to your GitHub account
2. Sign up for a free [Netlify](https://www.netlify.com/) account
3. Click "New site from Git" and select your forked repository
4. Configure environment variables:
   - Name: `NEWS_API_KEY`
   - Value: Your API key from NewsAPI.org
5. Click "Deploy site"

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/YourFeature

# Commit your changes
git commit -m "Add: Your feature description"

# Push to the branch
git push origin feature/YourFeature

# Open a pull request
```

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

## 🙌 Acknowledgements

- [NewsAPI.org](https://newsapi.org) for providing the free news data.
- Open source contributors and web dev community 💻🌍

---

**Stay informed, stay ahead – with FlashFeed ⚡**
