# Secure Password Generator

## Summary
Is your password secure? If you want to ensure your sensitive data is protected, a secure password generator is the best option for creating safe and strong passwords.

The Secure Password Generator creates a randomized password based on your requested criteria. It allows you to create passwords with lowercase letters, uppercase letters, numbers, and/or special characters.

## Features
* Bootstrap was used to create the responsive layout of this website
    * The nav bar at the top of each page renders as a toggle button on smaller screens and as links on larger screens
    * Boxes and their content resize to fit the size of any screen
    * The background image adjusts to fill different size screens

* The Bootstrap grid system was used to create a series of containers, rows, and columns in order to produce a responsive layout
    * The main section on each page is comprised of a container that holds row(s) and column(s)
    * The portfolio page contains rows, columns, sub-rows, and sub-columns in order to display the grid of images

* A sticky footer was used to keep the footer at the bottom of the pages


## Built With
* [Bootstrap](https://getbootstrap.com/) - used to create the mobile responsive layout
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - used to create the structure of the page
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - used to style HTML elements on the page
* [Git](https://git-scm.com/) - version control system used to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub

## Code
The below code illustrates how rows, columns, sub-rows, and sub-colums work with the Bootstrap grid system to render a responsive site. They allow images in the portfolio to display side by side on large screens or stacked on small screens.


    <!-- Portfolio body -->
    <div class="card-body">
        <div class="card-group">
            <!-- Subrow 1 -->
            <div class="row">
                <div class="col-md-6 d-flex">
                    <div class="card m-3">
                        <img class="card-img-top" src="https://via.placeholder.com/350" alt="placeholder image">
                    </div>
                </div>
                <div class="col-md-6 d-flex">                                                                         
                    <div class="card m-3">
                        <img class="card-img-top" src="https://via.placeholder.com/350" alt="placeholder image">
                    </div>
                </div>
            </div>
            <!-- Subrow 2 -->
            <div class="row">
                <div class="col-md-6 d-flex">
                    <div class="card m-3">
                        <img class="card-img-top" src="https://via.placeholder.com/350" alt="placeholder image">
                    </div>
                </div>
                <div class="col-md-6 d-flex">                                                                         
                    <div class="card m-3">
                        <img class="card-img-top" src="https://via.placeholder.com/350" alt="placeholder image">
                    </div>
                </div>
            </div>
            <!-- Subrow 3 -->
            <div class="row">
                <div class="col-md-9 d-flex">
                    <div class="card m-3">
                        <img class="card-img-top" src="https://via.placeholder.com/350" alt="placeholder image">
                    </div>
                </div>
            </div>
        </div>
    </div>

## Deployed Link
[View portfolio](https://engrebecca.github.io/my-portfolio/index.html)

## Site Picture
![Horiseon Website](Assets/portfolio.png)

## Author
* Rebecca Eng
* [GitHub](https://github.com/engrebecca)
* [LinkedIn](https://www.linkedin.com/in/engrebecca/)

## Credits
* Background image from [Pixabay](https://pixabay.com/)
* Tutorial for a right aligned navbar from [GeeksForGeeks](https://www.geeksforgeeks.org/how-to-align-navbar-items-to-the-right-in-bootstrap-4/)
* Tutorial for sticky footer from [CSS Tricks](https://css-tricks.com/couple-takes-sticky-footer/)

## License
This project is licensed under the MIT license