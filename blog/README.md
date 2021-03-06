# Pair Assignment for Class 11 - Routing and Web Requests

At the heart of every web app is the Web Request-Response Cycle. Pay close attention to how your app is creating and responding to requests. With client-side routing and the History API, we can add a layer of abstraction on top of the traditional routing.

**Ensure you run the blog with `node server.js` from the `starter-code` directory, or run `pushstate-server .`** (For pushstate-server, remember "Dot dot dot!")

**After launching ther server, use your web browser to visit localhost:3000 (if you ran node) or localhost:9000 (if you ran pushstate-server), otherwise you won't see the app running.**

The URLs that your app can respond to maps to your app's capabilities. Consider what public routes that your app should support. Use page.js to expose those routes as navigable URLs. Then set up controllers to handle the URLs, all on the client side.

We are now building a true Single-Page App, such that clicking links within the app should no longer start a whole new request to the web server, and clicking links will not trigger a 'click' callback, but will actually cause the URL to change through the use of routes in the "href" attributes of the links. Work through the user stories to convert the blog to SPA-style.

See a [working deployed version](https://cf-mvc-blog--class11.aerobatic.io/) of the app as a target reference.  Watch the URL change (as well as the page's visible content) as you click between Home and About, and note that no page reloads are triggered.

As a pair, or as individuals, sandbox at least two features that you don't or didn't understand in one or more of the following items: the ".zip file" starter-code, the demo code in demoCode/miniPage/, or client-side routing features listed in Day 11's prep assignment. If you already sandboxed a few features as part of your prepwork for today, then you don't need to do additional sandboxing for this lab. In any case, git a-c-p your sandbox(es), and submit the git commit hash URL(s) as part of this lab.

## User Stories: MVP
 1. As a developer, I want an articleController, so that I can group together actions related to the article resource.
  - Move the functionality from the last script tag in index.html into the articlesController.js file.
  - When the `/` route is requested, only the #articles section should be visible to the user.
 1. As a developer, I want a routing file, so that I have a central place to define what URLs my app can handle.
  - Look for the TODO items in `routes.js`. Use the `page.js` features to tell your app how to handle the `/` route and the `/about` route.
 1. As an reader, I want to view the article index, so that I can read all the articles.
  - Ensure that visiting the `/` route triggers the behavior of loading all the articles and initializing the index page view.
 1. As a reader, I want to view '/about', so that I can learn more about the brilliant dev who created this site.
  - Fill in the contents of `aboutController.js`, so the `#about` section is revealed when the about index action is triggered.
  - Ensure the function is linked to a route, so visitors to `/about` see your info, and not the blog posts.

## User Stories: Stretch goals
 1. As an admin, I want the url for my stats page to be part of my SPA, so that it works like the other "pages" of my app.
  - Where should the admin content go? You probably need to move a section out of admin.html into index.html.
  - Add a controller and a route so that `/admin` triggers the proper rendering of the statistics section.

## Technical Requirements and Grading Rubric
 - Make sure your code passes ESLint.
 - Create a single place where your app's URLs are connected to actions to handle the URLs.
 - Encapsulate each behavior of your app within an appropriate layer of MVC abstraction.
 - Use OOP and IIFEs, and make sure no functions are left in the global namespace.

## Pair Coding
Use one of the following methods to collaborate in your app development:

A. Use a single repo and work as collaborators on a new branch.

B. Use two repos -- an original and a fork, and work using cross-repo PRs as demonstrated in lecture last week. Use a new branch in both repos (both repos should use the same branch name).

In your submission, state whether you used method A or B.

## Submit
- Submit the URL(s) for your sandbox(es).
- Submit the URL of the final PR for this lab.
- Please answer these questions:
  - How long did this lab take?
  - What was most challenging?
  - What was most rewarding / useful?
