Wordpress Starter Framework
=======

## Why?
Getting Wordpress itself setup is simple. However everytime I went to setup a new project, I found I'd consistently think - how do I get this done again?

The complexity is that Wordpress and a bunch of plugins I use have their own auto-update magic + of course user generated content (image/file uploads). So, I don't want the whole project tracked in Git, I only want the code I write tracked.

Basically, I want:
- __My project specific code__ - (both theme and plugins) tracked in the project's Git Repo
- __Everything else__ left to its own thing

***

## Who's this for?
Developers who build custom sites.

***

## Features

| Title | Description |
|---|---|
| __Wordpress Git Framework__ | An opinionated way to structure a Wordpress project. __Custom Code__ is tracked within your Git repo and __Everything Else__ (Wordpress, other generic plugins) is not (they may update themselves without affecting your repo). |
| __Performant Wordpress Starter Theme__ | A very vanilla Wordpress theme to start any custom project with. |
| __Example Wordpress Plugin__ | Coming soon... |
| __Gulp__ | Gulp is setup and ready to build out your front-end code. |
| __Sidebars / Widgets__ | Shows how to setup different sidebars - eg. a sidebar for blog and a different sidebar group of widgets for pages. |
| __Shortcodes__ | Examples for how to create shortcodes in Wordpress - eg. `[button link="http://google.com" title="Go Here"]` |

### Build Tools - Gulp
Gulp is configured and ready to go. It'll do a bunch of things for you:

- Optimise image assets (theme specific images - not user generated)
- Compiles your SCSS, turning it into an optimized CSS file
- Concatinates & Minifies your project JS
- Runs [BrowserSync](http://browsersync.io) - auto-reloads the browser, allows you to preview the site on multiple devices

### Theme Front-End Libraries
This project uses [Bower](https://bower.io/) to manage front-end dependencies.

- [Bootstrap](http://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [qTip2](http://qtip2.com/) for Tooltips
- [Slick Carousel](http://kenwheeler.github.io/slick/) for Carousels/Sliders
- [SuperFish](http://users.tpg.com.au/j_birch/plugins/superfish/) for Drop-Down Menus
- [Colorbox](http://www.jacklmoore.com/colorbox/) for Lightboxes
- [Off Canvas Menu](http://codepen.io/mcnamee/pen/Wbvoew) for Mobile Menus

***

## Setup / Installation

### 1.0 Wordpress
1. Setup Project Dir - `mkdir example && cd example` (where example is your project name)
2. Install Wordpress - `git clone https://github.com/WordPress/WordPress .`
3. Remove Wordpress Git - `rm -rf .git`
4. Install this theme - `git init && git remote add origin https://github.com/mcnamee/wordpress-starter && git fetch && git checkout -t origin/master`
5. Remove Git again, so that you can start/add your own project repo - `rm -rf .git`
6. Visit the Wordpress URL and run the normal Wordpress Setup

### 2.0 Package Dependencies
1. Install dependencies - `npm install`
2. Install front-end dependencies - `bower install`
3. Edit /gulpfile.js - within the BrowserSync task, change `proxy: 'localhost',` to the URL of the this project.
4. Run the initial build - `gulp initialBuild`

### 3.0 Change the Name of the Theme
1. Rename the theme name - `mv wp-content/themes/starter wp-content/themes/new-name` (where new-name is the directory name)
2. Ensure Git tracks the new directory - update `/.gitignore` - changing reference of `/wp-content/themes/starter` to the new dir name
3. Update Gulp to build from the right directory - update the themeDir variable in `/gulpfile.js` to point to the right place

### 4.0 Clean Up (Optional)
- Remove default WP themes - `rm -rf wp-content/themes/twentyfifteen && rm -rf wp-content/themes/twentyfourteen && rm -rf wp-content/themes/twentysixteen`
- Remove default WP plugins - `rm wp-content/plugins/hello.php`

***

## Recommended Wordpress Plugins

- Advanced Custom Fields - https://wordpress.org/plugins/advanced-custom-fields/
- ACF Repeater - http://www.advancedcustomfields.com/add-ons/repeater-field/
- Admin Menu Editor - https://wordpress.org/plugins/admin-menu-editor/
- Bulk Page Creator - https://wordpress.org/plugins/bulk-page-creator/
- Contact Form 7 - https://wordpress.org/plugins/contact-form-7/
- Contact Form DB - https://wordpress.org/plugins/contact-form-7-to-database-extension/
- Really Simple Captcha - https://wordpress.org/plugins/really-simple-captcha/
- Wordpress SEO - https://wordpress.org/plugins/wordpress-seo/
- W3 Total Cache - https://wordpress.org/plugins/w3-total-cache/

***

## Troubleshooting

### Managing Javascript / JS Packages
All Javascript dependencies are minified & concatinated into a single JS file, via Gulp

- Manage which JS files are included via the files array in `/gulpfile.js`
