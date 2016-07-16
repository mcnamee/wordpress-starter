<?php
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */

function wpstarter_widgets_init() {
  register_sidebar( array(
    'name'          => esc_html__( 'Blog Sidebar', 'wpstarter' ),
    'id'            => 'blog-sidebar',
    'description'   => esc_html__( 'Add widgets here.', 'wpstarter' ),
    'before_widget' => '<section id="%1$s" class="widget panel panel-primary %2$s">',
    'after_widget'  => '</div></section>',
    'before_title'  => '<div class="panel-heading"><h3 class="widget-title panel-title">',
    'after_title'   => '</h3></div><div class="panel-body">',
  ) );

  register_sidebar( array(
    'name'          => esc_html__( 'Page Sidebar', 'wpstarter' ),
    'id'            => 'page-sidebar',
    'description'   => esc_html__( 'Add widgets here.', 'wpstarter' ),
    'before_widget' => '<section id="%1$s" class="widget panel panel-primary %2$s">',
    'after_widget'  => '</div></section>',
    'before_title'  => '<div class="panel-heading"><h3 class="widget-title panel-title">',
    'after_title'   => '</h3></div><div class="panel-body">',
  ) );
}
add_action( 'widgets_init', 'wpstarter_widgets_init' );
