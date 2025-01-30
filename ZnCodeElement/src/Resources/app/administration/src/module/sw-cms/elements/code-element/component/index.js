const {Component, Mixin} = Shopware;
import template from './index.html.twig';
import './index.css';

Component.register('sw-cms-el-code-element', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    watch: {
        cmsPageState: {
            deep: true,
            handler() {
                this.$forceUpdate();
            }
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('code-element');
            this.initElementData('code-element');
        }
    }
});
