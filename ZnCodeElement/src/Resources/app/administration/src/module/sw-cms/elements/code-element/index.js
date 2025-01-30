const Application = Shopware.Application;
import './component';
import './config';

Application.getContainer('service').cmsService.registerCmsElement({
    plugin: 'ErCodeElement',
    icon: 'regular-code',
    name: 'code-element',
    label: 'Code Element',
    component: 'sw-cms-el-code-element',
    configComponent: 'sw-cms-el-config-code-element',
    previewComponent: 'sw-cms-el-preview-code-element',
    defaultConfig: {
        html: {
            source: 'static',
            value: `<h3>Code Element einfügen</h3>`.trim()
        },
        js: {
            source: 'static',
            value: `console.log('JS');`,
        },
    }
});
