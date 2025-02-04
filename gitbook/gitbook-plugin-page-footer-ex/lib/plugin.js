/*
 * @Author: Lockly
 * @Date: 2025-01-23 10:13:48
 * @LastEditors: Lockly
 * @LastEditTime: 2025-02-04 22:11:36
 */
document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"3KtnugBE6rFgFEk4\",ck:\"3KtnugBE6rFgFEk4\"});</script>")
module.exports = function(book, page) {
    /**
     * 在package.json中配置的默认值，这里可以直接使用
     * [config: config option]
     * @type {Object}
     */
    var config = book.config.get('pluginsConfig')['page-footer-ex'];

    var wrapIfMarkdown = function(input) {
        if (!config.markdown) {
            return input;
        } else {
            return book.renderInline('markdown', input);
        }
    }
    // Gitbook Markdown rendering is asynchronous.
    return Promise.all([wrapIfMarkdown(config.copyright), wrapIfMarkdown(config.update_label)])
        .then(function(labels) {
            var copyright = labels[0];
            var updateLabel = labels[1];
            page.content += '\n\n' + [
                '<footer class="page-footer-ex">',
                    '<span class="page-footer-ex-copyright">',
                        copyright,
                    '</span>',
                    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
                    '<span class="page-footer-ex-footer-update">',
                        updateLabel,
                        '{{ file.mtime | dateFormat("' + config.update_format + '") }}',
                    '</span>',
                '</footer>'
            ].join(' ');
            return page;
        });
}
