# Upload Your Files Here

## How to Add Your Profile Image
1. Add your profile photo to the `/public/assets/` folder
2. Name it `profile.jpg` (or `profile.png` for PNG format)
3. The image should ideally be a square image (e.g., 300x300px or larger)
4. Supported formats: `jpg`, `png`, `webp`

**Example path:** `public/assets/profile.jpg`

## How to Add Your Resume PDF
1. Add your resume PDF file to the `/public/` folder
2. Name it `resume.pdf`
3. The file will be downloaded when users click the "Download My Resume" button

**Example path:** `public/resume.pdf`

## File Structure
```
portfolio/
├── public/
│   ├── resume.pdf          ← Your resume file
│   ├── assets/
│   │   └── profile.jpg     ← Your profile picture
│   └── [other files]
└── [other folders]
```

Once you've uploaded these files, restart your development server and the portfolio will display your image and resume link!
