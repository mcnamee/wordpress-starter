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
    <div class="row">

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
        <aside id="secondary" class="widget-area" role="complementary">
          <?php dynamic_sidebar( 'page-sidebar' ); ?>
        </aside> <!-- #secondary -->
      </div> <!-- /.col -->

    </div> <!-- /.row -->
  </div> <!-- /.container -->

<?php
get_footer();
