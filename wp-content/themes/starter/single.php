<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
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
              get_template_part( 'blocks/content', get_post_format() );

              the_post_navigation();

              // If comments are open or we have at least one comment, load up the comment template.
              if ( comments_open() || get_comments_number() ) :
                comments_template();
              endif;
            endwhile;
          ?>
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
