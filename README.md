Wordpress Starter Framework
=======

## TLDR;

- The Wordpress Core as a Git Submodule
- Git track only the theme/plugins that belong to the project
- The repo comes with a base Wordpress Theme to start with custom development (optional)

## Why?

Getting Wordpress itself setup is simple. However everytime I went to setup a new project, I found I'd consistently think - how do I get this done again?

The complexity is that Wordpress and a bunch of plugins I use have their own auto-update magic + of course user generated content (image/file uploads). So, I don't want the whole project tracked in Git, I only want the code I write tracked.

***

# Wordpress Core

## Installation

1. Clone the Repo & Install Wordpress - `git clone --recursive git@github.com:mcnamee/wordpress-starter.git`
1. Remove Git, so that you can start/add your own project repo - `rm -rf .git`
1. Visit the Wordpress URL and run the normal Wordpress Setup

[Learn more about the theme](#The-Theme) or simply remove it:

```
  rm -rf wp-content/themes/starter node_modules gulpfile.js package.json
```

## Upgrading Wordpress

After installing this boilerplate, keeping Wordpress up-to-date via git is pretty easy.

1. From the submodule directory, fetch the tags form Git: `cd wordpress && git fetch --tags`
1. Checkout the version you want to upgrade to (e.g. `git checkout 3.7.1`): `git checkout <tag>`
1. Commit your Wordpress upgrade: `cd .. && git commit -m "Updating wordpress to <tag-name>"`

***

# Wordpress Plugins

## Installing Wordpress Plugins

Similar to the Wordpress Core, we can install and update all Wordpress Plugins via Git Submodules.

As an example, let's say we want to install [WP Migrate DB](https://wordpress.org/plugins/wp-migrate-db/). The process of adding submodules to your Git repo is actually relatively simple. Run the following command from the root of your Git repo:

```
  git submodule add -f https://github.com/wp-plugins/wp-migrate-db.git ./wp-content/plugins/wp-migrate-db
```

Thankfully the entire WordPress plugins Subversion repo is mirrored over on GitHub which makes finding Git versions of any wordpress.org plugins super easy. Check them out [over here](https://github.com/wp-plugins).

## Upgrading Wordpress Plugins

You can update individual Wordpress Plugins:

```
  cd wp-content/plugins/wp-migrate-db
  git checkout master
  git pull
```

Or you could update ALL Wordpress plugins (that have been installed as Git Submodules):

```
  git submodule foreach git pull origin master
```

## Removing Wordpress Plugins

Let's say we want to remove WP Migrate DB:

```
  git submodule deinit wp-content/plugins/wp-migrate-db
  git rm wp-content/plugins/wp-migrate-db
  rm -rf wp-content/plugins/wp-migrate-db
```

***

# The Theme

## Theme Features

| Title | Description |
|---|---|
| __Wordpress Git Framework__ | An opinionated way to structure a Wordpress project. __Custom Code__ is tracked within your Git repo and __Everything Else__ (Wordpress, other generic plugins) is not (they may update themselves without affecting your repo). |
| __Performant Wordpress Starter Theme__ | A very vanilla Wordpress theme to start any custom project with. |
| __Example Wordpress Plugin__ | Coming soon... |
| __Gulp__ | Gulp is setup and ready to build out your front-end code. |
| __Sidebars / Widgets__ | Shows how to setup different sidebars - eg. a sidebar for blog and a different sidebar group of widgets for pages. |
| __Shortcodes__ | Examples for how to create shortcodes in Wordpress - eg. `[button link="http://google.com" title="Go Here"]` |

### Front-End Libraries

This project uses [NPM](https://www.npmjs.com/) to manage front-end dependencies.

- [Bootstrap](http://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [Slick Carousel](http://kenwheeler.github.io/slick/) for Carousels/Sliders
- [SuperFish](http://users.tpg.com.au/j_birch/plugins/superfish/) for Drop-Down Menus
- [Colorbox](http://www.jacklmoore.com/colorbox/) for Lightboxes
- [Off Canvas Menu](http://codepen.io/mcnamee/pen/Wbvoew) for Mobile Menus

## Theme Installation

### 1. Install NPM Dependencies
1. Install dependencies - `npm install`
1. Edit /gulpfile.js - within the BrowserSync task, change `proxy: 'localhost',` to the URL of the this project.
1. Run the initial build - `gulp initialBuild`

### 2. Change the Name of the Theme
1. Rename the theme name - `mv wp-content/themes/starter wp-content/themes/{new-name}` (where new-name is the directory name)
1. Update Gulp to build from the right directory - update the themeDir variable in `/gulpfile.js` to point to the right place

### Developing with the theme - SCSS/JS/Build Tools

From the root directory, simply run `gulp`, which will:

1. Optimise image assets (theme specific images - not user generated)
1. Compiles your SCSS, turning it into an optimized CSS file within `/wp-content/themes/starter/dist/theme.css`
1. Concatinates & Minifies your project JS within `/wp-content/themes/starter/dist/js/theme.js`
1. Runs [BrowserSync](http://browsersync.io) - auto-reloads the browser, allows you to preview the site on multiple devices

***

# Deploying

Deploying could be automated through a `post-receive` Git hook - or simply running the following commands on the destination server.

```
  # Pull and reset to the latest code in Git
  git fetch origin develop
  git reset --hard FETCH_HEAD

  # Install Submodules (Wordpress Core + Plugins)
  git submodule init
  git submodule sync
  git submodule update

  # Reset cache
  # ...depends on which caching plugin you use...
```

***

## Recommended Wordpress Plugins

- [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/)
- [ACF Repeater](http://www.advancedcustomfields.com/add-ons/repeater-field/)
- [Admin Menu Editor](https://wordpress.org/plugins/admin-menu-editor/)
- [Bulk Page Creator](https://wordpress.org/plugins/bulk-page-creator/)
- [Contact Form 7](https://wordpress.org/plugins/contact-form-7/)
- [Contact Form DB](https://wordpress.org/plugins/contact-form-7-to-database-extension/)
- [Really Simple Captcha](https://wordpress.org/plugins/really-simple-captcha/)
- [Wordpress SEO](https://wordpress.org/plugins/wordpress-seo/)
- [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)

## Inspiration

Thanks to the ideas from the following repos/articles:

 - https://github.com/Darep/wordpress-boilerplate
 - https://deliciousbrains.com/git-submodules-manage-wordpress-themes-and-plugins/
