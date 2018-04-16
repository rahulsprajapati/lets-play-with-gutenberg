<?php
/**
 * Bootstraps the Rt Gutenberg Blocks plugin.
 *
 * @package Lets_Play_With_Gutenberg
 */

namespace Lets_Play_With_Gutenberg;

/**
 * Main plugin bootstrap file.
 */
class Plugin extends Plugin_Base {

	/**
	 * Initiate the plugin resources.
	 *
	 * Priority is 9 because WP_Customize_Widgets::register_settings() happens at
	 * after_setup_theme priority 10. This is especially important for plugins
	 * that extend the Customizer to ensure resources are available in time.
	 *
	 * @action after_setup_theme, 9
	 */
	public function init() {
		$this->config = apply_filters( 'lets_play_with_gutenberg_plugin_config', $this->config, $this );
	}

	/**
	 * Enqueue block editor assets
	 *
	 * @action enqueue_block_editor_assets
	 */
	public function enqueue_block_editor_assets() {

		wp_enqueue_script(
			'lpwg-block',
			$this->dir_url . 'js/block.build.js',
			[ 'wp-blocks', 'wp-i18n', 'wp-element', 'moment' ],
			filemtime( $this->dir_path . '/js/block.build.js' )
		);

		wp_enqueue_style(
			'lpwg-editor-style',
			$this->dir_url . 'css/editor.css',
			[ 'wp-edit-blocks' ],
			filemtime( $this->dir_path . '/css/editor.css' )
		);
	}

	/**
	 * Enqueue block assets
	 *
	 * @action enqueue_block_assets
	 */
	public function enqueue_block_assets() {
		wp_enqueue_style(
			'lpwg-style',
			$this->dir_url . '/css/style.css',
			[ 'wp-blocks' ],
			filemtime( $this->dir_path . '/css/style.css' )
		);
	}

	/**
	 * Enqueue front end styles.
	 *
	 * @action wp_enqueue_scripts
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'lpwg-blocks', $this->dir_url . 'css/style.css' );
	}

	/**
	 * Registers all block assets so that they can be enqueued through Gutenberg in
	 * the corresponding context.
	 *
	 * @action init
	 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
	 */
	function sample_block_init() {

	}
}
