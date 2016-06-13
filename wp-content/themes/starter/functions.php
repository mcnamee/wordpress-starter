<?php
/**
 * wpstarter functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package wpstarter
 */

/**
 * Theme Setup.
 */
require get_template_directory() . '/theme-setup/theme-setup.php';

/**
 * Register shortcodes.
 */
require get_template_directory() . '/theme-setup/shortcodes.php';

/**
 * Register widgets.
 */
require get_template_directory() . '/theme-setup/widgets.php';

/**
 * Enqueue scripts and styles.
 */
require get_template_directory() . '/theme-setup/enqueue.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/theme-setup/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/theme-setup/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/theme-setup/customizer.php';
