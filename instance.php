<?php
/**
 * Instantiates the Lets Play With Gutenberg plugin
 *
 * @package Lets_Play_With_Gutenberg
 */

namespace Lets_Play_With_Gutenberg;

global $lets_play_with_gutenberg;

require_once __DIR__ . '/php/class-plugin-base.php';
require_once __DIR__ . '/php/class-plugin.php';

$lets_play_with_gutenberg = new Plugin();

/**
 * Rt Gutenberg Blocks Plugin Instance
 *
 * @return Plugin
 */
function get_plugin_instance() {
	global $lets_play_with_gutenberg;

	return $lets_play_with_gutenberg;
}
