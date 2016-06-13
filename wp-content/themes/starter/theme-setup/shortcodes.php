<?php
/*
 * Shortcodes
 */

/*
 * Buttons
 *  - [button link="http://google.com" title="Go Here"]
 * */
if ( !function_exists( 'button' ) ) {
    function button($atts) {
        extract(shortcode_atts(array(
            'link' => '',
            'title' => ''
        ), $atts));

        if(empty($link)) { $link = get_permalink(); }
        if(empty($title)) { $title = 'Click Here'; }

        return '<a href="' . $link . '" class="btn">'. $title .'</a>';
    }
    add_shortcode('button', 'button');
}


/*
 * Site Name
 *  - [site_name]
 * */
if ( !function_exists( 'siteName' ) ) {
    function siteName($atts) {
        return get_bloginfo('name');
    }
    add_shortcode('site_name', 'siteName');
}