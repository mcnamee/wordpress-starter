<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package wpstarter
 */

?>
  </div> <!-- #content -->

  <footer id="colophon" class="site-footer" role="contentinfo">
    <div class="container">
      <div class="site-info">
        &copy; <?=date('Y')?> <?php bloginfo( 'name' ); ?>. All Rights Reserved.
      </div> <!-- .site-info -->
    </div> <!-- /.container -->
  </footer> <!-- #colophon -->

</div> <!-- .onCanvas -->

<?php wp_footer(); ?>

</body>
</html>
