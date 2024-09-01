# Svelte-Blog

The goal of this project is to be a static blog generation tool that integrates with Sveltekit, but doesn't require you to touch any of the Svelte stuff to make a post.

## How to use
The workflow to post is as follows:
1. **Enable** GitHub pages for your fork/clone of the repo
1. **Write** a markdown file in `blog_pages`
    - Make sure to follow the naming convention for each file for proper rendering: `blog_pages/YYYY-MM-DD_Dash-separated-name-of-article.md`
    - Any static content such as images and videos that you want to link to in the post should be stored under the `static/` directory
1. **Run** `npm build && npm run dev -- --open`, navigate to the `/blog` route, and check the output of the build
1. **Run** `git push`

Building inserts the markdown as subpages of the the `/pages` route. A list of links to your posts and their corresponding dates is available on the `/blog` route. Once you push, the site will be built and published to GitHub pages, including the post that you wrote!

![List of rendered posts visible in `/blog`](static/docs_images/pages-list-component.png)

*List of rendered posts visible in `/blog`*
