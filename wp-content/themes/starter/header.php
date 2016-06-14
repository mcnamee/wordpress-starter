<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and the header
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package wpstarter
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<!-- ICONS -->
<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/dist/img/ms-tile-icon.png" />
<meta name="msapplication-TileColor" content="#8cc641" />
<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/dist/img/favicon.ico" />
<link rel="apple-touch-icon-precomposed" href="<?php echo get_template_directory_uri(); ?>/dist/img/apple-touch-icon.png" />

<!-- WP_HEAD -->
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div class="offCanvas" data-menu="offcanv_menu">
  <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'offCanvas_menu' ) ); ?>
</div> <!-- /.offCanvas -->

<div class="onCanvas">
  <div id="page" class="site">
    <header id="masthead" class="site-header" role="banner">
      <div class="site-branding grid_12 grid_12_s grid_12_xs">
        <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
      </div><!-- .site-branding -->

      <div class="visible_phone grid_12 grid_12_s grid_12_xs">
        <a href="#" id="offcanv_menu"></a>
      </div> <!-- /.grid -->

      <div class="clear"></div>

      <nav id="site-navigation" class="main-navigation hidden_phone" role="navigation">
        <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
      </nav><!-- #site-navigation -->
    </header><!-- #masthead -->

    <div id="content" class="site-content">
