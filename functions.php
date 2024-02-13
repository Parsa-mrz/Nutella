<?php

/**
 * Plugin Name: Nutella
 * Plugin URI: 
 * Description:
 */
function nutella()
{
    wp_enqueue_script('first-nutella', plugin_dir_url(__FILE__) . '/src/js/js_cHKFd_8bO0egkXsYbgH0MxACUBWSGDQ97qcDnZHKSWc.js', array('jquery'));
    wp_enqueue_script('second-nutella', plugin_dir_url(__FILE__) . '/src/js/js_kvxr0xMN3ZrdxmbbfTa8s5ZO3eEav2uLRJzwExmviYc.js', array('jquery'));
    wp_enqueue_script('third-nutella', plugin_dir_url(__FILE__) . '/src/js/js_Rr7VwoLJamH2O_TDP-wjEQ9x7RajUDk1ohCHfwT6bok.js', array('jquery'));
    wp_enqueue_script('modernizer-nutella', plugin_dir_url(__FILE__) . '/src/js/modernizer.js', array('jquery'));



    wp_enqueue_style('first_nutella_css', plugin_dir_url(__FILE__) . '/src/css/css_T-VwqEBklyjxd6qRaDdpDvLL9wO_42IxFmrmuF0wrFM.css');
}
add_action('wp_enqueue_scripts', 'nutella');

function nutella_view()
{
    include(plugin_dir_path(__FILE__) . 'index.php');
}
add_shortcode('Fuck-Nutella', 'nutella_view');
