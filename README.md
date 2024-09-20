# YOUR PROJECT TITLE
#### Video Demo:  <https://youtu.be/30RgUvva7W4>
#### Description:
This is a website I created with the help of the knowledge I have gained from going through the CS50 course, I have implimented a Parallax look onto my website via a javascript function. This project consists of 5 HTML files, 1 CSS and 1 javascript files and 2 images.

The 5 HTML files are index.html, home.html, about.html, qrcode.html and cs50.html

where index.html consists of the main page where all the buttons to the other html files are displayed
The index.html file is the main landing page of the website.
Header: Contains the navigation bar with links to different sections of the website, including Home, About, MakeQR Code!, and CS50. The navigation is styled to be fixed at the top of the page for easy access.
Parallax Sections: There are two parallax sections in the HTML. These sections have background images that create a dynamic scrolling effect, enhancing the visual appeal of the website.
Content Sections: Two content sections provide information about the projects and mission of the website. These sections use a container class to center the content and add padding for readability.
Footer: A footer section at the bottom of the page contains copyright information.

home.html basically redirect the web page back to index.html
i have achived this by tracking back to the index.htlm file when clicked

about.html consists of a small paragraph that states about coding in general
i have achived this by using the paragraph command along with header styles like "h1","h2" etc

qrcode.html was created to convert text/URL directly to QR codes i have achived this by creating a function in JS "generateQRcode()" where it uses a api from "https://goqr.me/api/"

cs50.html consists of all the lectures offered by CS50 by Harvard University in 2024, i have created a table with data fed into them

for me the CSS was the most fun part of this project where i got to experiment with the alignment, the colours, the backgrounds etc
The styles.css file contains custom CSS styles to complement the Bootstrap framework. Key styles include:
General Styles: Setting font-family to 'Poppins', min-height, and min-width for the body and html elements.
Header: Styled to be fixed at the top of the page, with a background color and padding. It uses Flexbox for layout, ensuring the logo and navigation links are properly aligned.
Input and Button Styles: Custom styles for input fields and submit buttons, including hover effects and padding.
Parallax Sections: Styling for parallax effect, including fixed background attachment and center alignment for content.
Navigation Links: Styling for navigation links, including hover effects and transitions to improve user interaction.
Responsive Design: Media queries to adjust styles for different screen sizes, ensuring the website is mobile-friendly.

The script.js file contains JavaScript code to handle dynamic interactions on the website. Currently, it includes a function to set the active class on the navigation links when they are clicked, providing visual feedback to the user.

SOME DESIGN CHOICES

Parallax scrolling was chosen to create a visually engaging user experience. This design pattern provides depth and a sense of movement, making the website more dynamic and interesting to navigate. The parallax effect is implemented with CSS, ensuring smooth and performant scrolling.

To ensure the website is accessible on various devices, responsive design principles were applied. Media queries in the CSS adjust the layout and styles for different screen sizes, from desktops to mobile phones. Bootstrap’s grid system and responsive utilities were leveraged to create a flexible and adaptable layout.

The 'Poppins' font was chosen for its modern and clean appearance, aligning with the overall design aesthetic of the website. Colors were carefully selected to create contrast and visual hierarchy. The primary color, #ECBA00 (goldish colour), is used for accents and highlights, while darker backgrounds ensure readability and focus.

JavaScript is used to enhance the interactivity of the website. The function to set the active class on navigation links provides immediate visual feedback to users, improving navigation and usability. This script is lightweight and focused, avoiding unnecessary complexity while enhancing user experience.

This project showcases the integration of HTML, CSS, and JavaScript to create a modern, responsive portfolio website. The design choices made throughout the project aim to enhance user experience through visual engagement and ease of navigation. The use of parallax scrolling, responsive design, and interactive elements contribute to a professional and appealing digital presence for Ithan Menachery.
