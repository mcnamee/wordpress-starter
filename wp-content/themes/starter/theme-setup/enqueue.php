<?php
/**
 * Enqueue scripts and styles.
 */
function wpstarter_scripts() {
  wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css', array(), '4.4.0' );
  wp_enqueue_style( 'wpstarter-style', get_template_directory_uri() . '/dist/theme.css', array(), '1.0.1' );

  wp_enqueue_script( 'modernizr', 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js', array(), '2.8.3', true );
  wp_enqueue_script( 'wpstarter-scripts', get_template_directory_uri() . '/dist/theme.js', array(), '1.0.1', true );

  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }
}
add_action( 'wp_enqueue_scripts', 'wpstarter_scripts' );
