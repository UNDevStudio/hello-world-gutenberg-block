<?php
/**
 * Plugin Name: Hello World Block
 * Description: A simple Gutenberg block that displays Hello World.
 * Version: 1.0.0
 * Author: Muhammad Umar
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the Hello World block.
 */
function hello_world_block_register() {
	register_block_type( __DIR__ . '/build/block.json' );
}

add_action( 'init', 'hello_world_block_register' );