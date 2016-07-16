<?php
/**
 * Template Name: Home Page
 * The template for displaying the page layout.
 *
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package wpstarter
 */

get_header(); ?>

  <div class="container_fluid">
    <main id="main" class="site-main" role="main">
      <?php
        while ( have_posts() ) : the_post();
          get_template_part( 'blocks/banner', 'hero' );
        endwhile;
      ?>
    </main> <!-- #main -->
  </div> <!-- /.container -->

<?php
get_footer();
