# Restaurant Reviews App

### Project Overview

The requirements for the Restaurant Reviews project for Udacity's Front End Nanodegree comprised of upgrading a static webpage's functionality on three key fronts to develop it into a mobile-ready web application. First, the page's starting CSS was modified making it responsive for users on mobile devices, then enhancements were made to the page's HTML and screen-reader testing was carried out to ensure the web page could be experienced by a wider range of users, finally, a service worker was added and tests were run verfying the page would still load under low-connectivity and offline scenarios.

## Viewing The Project Online

You can view a deployed version of my Restaurant Reviews application at the following address:
http://jamoverjelly.github.io/Restaurant-Reviews-App-Stage-1/dist/

### Running The Project

1. Clone the project's repository into a prepared directory on your local machine.

2. In the terminal, navigate to the project's directory. From there, set up a simple HTTP server to host the project files. This step can be carried out using Python as indicated in the project's original documentation:

- Check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3. With the server running, visit the site at `http://localhost:8000`.

### Resources

#### Course Resources

- [Udacity Course: Responsive Web Design Fundamentals by Google](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)

- [Udacity Course: Web Accessibility by Google](https://www.udacity.com/course/web-accessibility--ud891)

- [Udacity Course: Offline Web Applications by Google](https://www.udacity.com/course/offline-web-applications--ud899)

- [Starter Code](https://github.com/udacity/mws-restaurant-stage-1)

- [Project Spec](https://review.udacity.com/#!/rubrics/1090/view)

#### External Resources

- [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/)

- [WAI-ARIA Authoring Practices 1.1: Design Patterns and Widgets](https://www.w3.org/TR/wai-aria-practices/#aria_ex)

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

- [MDN: Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

- [MDN: Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

- [MDN: Response API](https://developer.mozilla.org/en-US/docs/Web/API/Response)

#### Attributions

- Reviewed and analyzed [Matthew Cranford's Restaurant Reviews App Walkthrough](https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-1-map-api/) for evaluating initial project action steps on September 20, 2018.

- Referenced the [Project Five forum on Slack for adding alt text to images using JS template literal syntax based on fellow student, Julian Johannesen's recommendation](https://gwgnanodegrees.slack.com/archives/CB6CR41N1/p1537544376000100) on September 22, 2018.

- Referenced Matt Gaunt's article: [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/) for understanding where to register the service worker and how to manage resource caching and requests for this project on September 24, 2018.

- [Made a post regarding a layout issue I was having on the Restaurant Details page3 to r/CSS on Reddit](https://www.reddit.com/r/css/comments/9j3u9x/student_project_having_a_lot_of_difficulty/) and received advice for fixing it by setting universal box-sizing: border-box as this often works in responsive layouts from u/funkyjivemonkey on September 26, 2018
