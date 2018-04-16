<?php
/**
 * Plugin Name: Lets Play With Gutenberg.
 * Plugin URI: http://rahulprajapati.me/
 * Description: Learn and play with gutenberg. 👷🏻‍♂️
 * Author: Rahul Prajapati
 * Author URI: http://rahulprajapati.me/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Lets_Play_With_Gutenberg
 */

// Exit if accessed directly .php file.
defined( 'ABSPATH' ) || exit;

/**
 * Admin notice for gutenberg editor dependency.
 */
function _lets_play_with_gutenberg_dependency_error() {
	printf( '<div class="error"><p>%s</p></div>', esc_html( _lets_play_with_gutenberg_dependency_text() ) );
}

/**
 * String describing the gutenberg editor dependency.
 *
 * @return string
 */
function _lets_play_with_gutenberg_dependency_text() {
	return __( 'Lets Play With Gutenberg plugin error: You don\'t have Gutenburg support in your WordPress installation.', 'lets-play-with-gutenberg' );
}

include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

$lpwg_wp_version = get_bloginfo( 'version' );

if ( version_compare( $lpwg_wp_version, '5.0', '<' ) && ! is_plugin_active( 'gutenberg/gutenberg.php' ) ) {

	if ( defined( 'WP_CLI' ) ) {
		WP_CLI::warning( _lets_play_with_gutenberg_dependency_text() );
	} else {
		add_action( 'admin_notices', '_lets_play_with_gutenberg_dependency_error' );
	}

	return;
}

/**
 * Admin notice for incompatible versions of PHP.
 */
function _lets_play_with_gutenberg_php_version_error() {
	printf( '<div class="error"><p>%s</p></div>', esc_html( _lets_play_with_gutenberg_php_version_text() ) );
}

/**
 * String describing the minimum PHP version.
 *
 * @return string
 */
function _lets_play_with_gutenberg_php_version_text() {
	return __( 'Lets Play With Gutenberg plugin error: Your version of PHP is too old to run this plugin. You must be running PHP 5.3 or higher.', 'lets-play-with-gutenberg' );
}

if ( version_compare( phpversion(), '5.3', '>=' ) ) {
	require_once __DIR__ . '/instance.php';
} else {

	if ( defined( 'WP_CLI' ) ) {
		WP_CLI::warning( _lets_play_with_gutenberg_php_version_text() );
	} else {
		add_action( 'admin_notices', '_lets_play_with_gutenberg_php_version_error' );
	}

	return;
}
