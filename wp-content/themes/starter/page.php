<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package wpstarter
 */

get_header(); ?>

  <div class="container">

    <div class="col-sm-8">
      <main id="main" class="site-main" role="main">
        <?php
          while ( have_posts() ) : the_post();
            get_template_part( 'blocks/content', 'page' );
          endwhile;
        ?>
      </main> <!-- #main -->
    </div> <!-- /.col -->

    <div class="col-sm-4">
      <?php get_sidebar(); ?>
    </div> <!-- /.col -->

  </div> <!-- /.container -->

<?php
get_footer();
