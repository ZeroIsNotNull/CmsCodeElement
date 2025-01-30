const { Component, Mixin } = Shopware;

import template from './index.html.twig';
import './index.css';

Component.register('sw-cms-el-config-code-element', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('code-element');
        },

        onBlur(content) {
            this.emitChanges(content);
        },

        onInput(content) {
            this.emitChanges(content);
        },
    }
});
