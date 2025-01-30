import './preview';
import './component';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'code-element',
    label: 'code-element.elements.config.label.codeElement',
    category: 'text',
    component: 'sw-cms-block-code-element',
    previewComponent: 'sw-cms-preview-code-element',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        content: 'code-element'
    }
});
