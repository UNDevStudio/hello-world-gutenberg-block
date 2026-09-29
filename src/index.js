import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import './style.css';

registerBlockType('hello-world-block/hello-world', {
    title: 'Hello World',
    icon: 'smiley',
    category: 'widgets',

    edit: () => {
        const blockProps = useBlockProps();

        return (
            <p {...blockProps}>
                Hello World
            </p>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save();

        return (
            <p {...blockProps}>
                Hello World
            </p>
        );
    },
});