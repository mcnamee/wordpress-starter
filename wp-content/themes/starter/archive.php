<?php
/**
 * The template for displaying archive pages.
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
        if ( have_posts() ) : ?>

          <header class="page-header">
            <?php
              the_archive_title( '<h1 class="page-title">', '</h1>' );
              the_archive_description( '<div class="taxonomy-description">', '</div>' );
            ?>
          </header> <!-- .page-header -->

          <?php
          /* Start the Loop */
          while ( have_posts() ) : the_post();

            /*
             * Include the Post-Format-specific template for the content.
             * If you want to override this in a child theme, then include a file
             * called content-___.php (where ___ is the Post Format name) and that will be used instead.
             */
            get_template_part( 'blocks/content', get_post_format() );

          endwhile;

          the_posts_navigation();

        else :

          get_template_part( 'blocks/content', 'none' );

        endif; ?>

        </main> <!-- #main -->

      </div> <!-- /.col -->

      <div class="col-sm-4">
        <aside id="secondary" class="widget-area" role="complementary">
          <?php dynamic_sidebar( 'blog-sidebar' ); ?>
        </aside> <!-- #secondary -->
      </div> <!-- /.col -->

    </div> <!-- /.row -->
  </div> <!-- /.container -->

<?php
get_footer();
