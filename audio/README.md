# A Writer's Growth — Nicholas Hawkins
## English 112 Multimodal Product

### Folder Structure
```
writers_growth/
├── index.html        ← main page
├── css/
│   └── style.css     ← all styles
├── js/
│   └── main.js       ← scroll animations
├── audio/            ← create this folder, add your recordings here
│   ├── area1.mp3
│   ├── area2.mp3
│   ├── area3.mp3
│   └── area4.mp3
└── images/           ← create this folder, add your images here
    ├── area1.jpg
    ├── area2.jpg
    ├── area3.jpg
    └── area4.jpg
```

### Adding Audio
In index.html, find each `audio-placeholder` div and replace it with:
```html
<audio controls src="audio/area1.mp3"></audio>
```
Change the filename for each section (area2.mp3, etc.)

### Adding Images
In index.html, find each `improvement-visual` div and add inside it:
```html
<img src="images/area1.jpg" alt="brief description">
```

### Fonts
Fonts load from Google Fonts when you have an internet connection.
Offline, the browser falls back to Georgia/Palatino (still looks good).

### To view locally
Open index.html in any browser. No server needed.

### To publish (share with Mrs. Cho)
Upload the entire folder to GitHub Pages, Netlify, or Google Sites embed.
