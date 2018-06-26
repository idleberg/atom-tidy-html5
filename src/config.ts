const config = {
    'tidy': {
      title: 'Tidy Options',
      type: 'object',
      properties: {
        'add-xml-decl': {
          title: 'add-xml-decl',
          description: 'This option specifies if Tidy should add the XML declaration when outputting XML or XHTML. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#add-xml"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'add-xml-space': {
          title: 'add-xml-space',
          description: 'This option specifies if Tidy should add `xml:space="preserve"` to elements such as `<pre>`, `<style>` and `<script>` when generating XML. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#add-xml"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'alt-text': {
          title: 'alt-text',
          description: 'This option specifies the default `alt= text` Tidy uses for `<img>` attributes when the `alt=` attribute is missing. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#alt-text"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: ''
        },
        'anchor-as-name': {
          title: 'anchor-as-name',
          description: 'This option controls the deletion or addition of the `name` attribute in elements where it can serve as anchor. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#anchor-as"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'bare': {
          title: 'bare',
          description: 'This option specifies if Tidy should strip Microsoft specific HTML from Word 2000 documents, and output spaces rather than non-breaking spaces where they exist in the input. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#bare"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'clean': {
          title: 'clean',
          description: 'This option specifies if Tidy should perform cleaning of some legacy presentational tags (currently `<i>`, `<b>`, `<center>` when enclosed within appropriate inline tags, and `<font>`). If set to `true` then legacy tags will be replaced with CSS `<style>` tags and structural markup as appropriate. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#clean"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'coerce-endtags': {
          title: 'coerce-endtags',
          description: '  This option specifies if Tidy should coerce a start tag into an end tag in cases where it looks like an end tag was probably intended <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#coerce-endtags"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'css-prefix': {
          title: 'css-prefix',
          description: 'This option specifies the prefix that Tidy uses for styles rules. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#css-prefix"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: ''
        },
        'decorate-inferred-ul': {
          title: 'decorate-inferred-ul',
          description: 'This option specifies if Tidy should decorate inferred `<ul>` elements with some CSS markup to avoid indentation to the right. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#decorate-inferred"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'doctype': {
          title: 'doctype',
          description: 'This option specifies the `DOCTYPE` declaration generated by Tidy <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#doctype"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: 'auto',
          enum: ['html5', 'omit', 'auto', 'loose', 'strict', 'transitional', 'user']
        },
        'drop-empty-elements': {
          title: 'drop-empty-elements',
          description: 'This option specifies if Tidy should discard empty elements. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#drop-empty"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'drop-empty-paras': {
          title: 'drop-empty-paras',
          description: 'This option specifies if Tidy should discard empty paragraphs. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#drop-empty"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'drop-proprietary-attributes': {
          title: 'drop-proprietary-attributes',
          description: 'This option specifies if Tidy should strip out proprietary attributes, such as Microsoft data binding attributes. Additionally attributes that aren\'t permitted in the output version of HTML will be dropped if used with `strict-tags-attributes`. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#drop-proprietary"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'enclose-block-text': {
          title: 'enclose-block-text',
          description: 'This option specifies if Tidy should insert a `<p>` element to enclose any text it finds in any element that allows mixed content for HTML transitional but not HTML strict. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#enclose-block"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'enclose-text': {
          title: 'enclose-text',
          description: 'This option specifies if Tidy should enclose any text it finds in the body element within a `<p>` element. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#enclose-text"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'escape-cdata': {
          title: 'escape-cdata',
          description: 'This option specifies if Tidy should convert `<![CDATA[]]>` sections to normal text. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#escape-cdata"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'fix-backslash': {
          title: 'fix-backslash',
          description: 'This option specifies if Tidy should replace backslash characters `\\` in URLs with forward slashes `/. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#fix-backslash"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'fix-bad-comments': {
          title: 'fix-bad-comments',
          description: 'This option specifies if Tidy should replace unexpected hyphens with = characters when it comes across adjacent hyphens. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#fix-bad"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'fix-uri': {
          title: 'fix-uri',
          description: 'This option specifies if Tidy should check attribute values that carry URIs for illegal characters and if such are found, escape them as HTML4 recommends. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#fix-uri"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'gdoc': {
          title: 'gdoc',
          description: 'This option specifies if Tidy should enable specific behavior for cleaning up HTML exported from Google Docs. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#gdoc"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'hide-comments': {
          title: 'hide-comments',
          description: 'This option specifies if Tidy should print out comments. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#hide-comments"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'hide-endtags': {
          title: 'hide-endtags',
          description: 'This option is an alias for `omit-optional-tags`. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#hide-endtags"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'indent-cdata': {
          title: 'indent-cdata',
          description: 'This option specifies if Tidy should indent `<![CDATA[]]>` sections. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#indent-cdata"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'input-xml': {
          title: 'input-xml',
          description: 'This option specifies if Tidy should use the XML parser rather than the error correcting HTML parser. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#input-xml"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'join-classes': {
          title: 'join-classes',
          description: 'This option specifies if Tidy should combine class names to generate a single, new class name if multiple class assignments are detected on an element. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#join-classes"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'join-styles': {
          title: 'join-styles',
          description: 'This option specifies if Tidy should combine styles to generate a single, new style if multiple style values are detected on an element. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#join-styles"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'literal-attributes': {
          title: 'literal-attributes',
          description: 'This option specifies how Tidy deals with whitespace characters within attribute values. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#literal-attributes"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'logical-emphasis': {
          title: 'logical-emphasis',
          description: 'This option specifies if Tidy should replace any occurrence of `<i>` with `<em and any occurrence of `<b>` with `<strong>`. Any attributes are preserved unchanged. This option can be set independently of the clean option. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#logical-emphasis"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'lower-literals': {
          title: 'lower-literals',
          description: 'This option specifies if Tidy should convert the value of an attribute that takes a list of predefined values to lower case. This is required for XHTML documents. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#lower-literals"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'merge-divs': {
          title: 'merge-divs',
          description: 'This option can be used to modify the behavior of clean when set to `true`. This option specifies if Tidy should merge nested `<div>` such as `<div><div>...</div></div>`. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#merge-divs"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: 'auto',
          enum: ['auto', 'true', 'false']
        },
        'merge-emphasis': {
          title: 'merge-emphasis',
          description: 'This option specifies if Tidy should merge nested `<b>` and `<i>` elements <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#merge-emphasis"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'merge-spans': {
          title: 'merge-spans',
          description: 'This option can be used to modify the behavior of clean when set to `true`. This option specifies if Tidy should merge nested `<span>` such as `<span><span>...</span></span>`. The algorithm is identical to the one used by merge-divs. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#merge-spans"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: 'auto',
          enum: ['auto', 'true', 'false']
        },
        'ncr': {
          title: 'ncr',
          description: 'This option specifies if Tidy should allow numeric character references. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#ncr"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'new-blocklevel-tags': {
          title: 'new-blocklevel-tags',
          description: 'This option specifies new block-level tags. This option takes a space or comma separated list of tag names. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#new-blocklevel"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: ''
        },
        'new-empty-tags': {
          title: 'new-empty-tags',
          description: 'This option specifies new empty inline tags. This option takes a space or comma separated list of tag names. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#new-empty"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: ''
        },
        'new-inline-tags': {
          title: 'new-inline-tags',
          description: 'This option specifies new non-empty inline tags. This option takes a space or comma separated list of tag names. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#new-inline"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: ''
        },
        'new-pre-tags': {
          title: 'new-pre-tags',
          description: '  This option specifies new tags that are to be processed in exactly the same way as HTML\'s `<pre>` element. This option takes a space or comma separated list of tag names. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#new-pre"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: ''
        },
        'numeric-entities': {
          title: 'numeric-entities',
          description: 'This option specifies if Tidy should output entities other than the built-in HTML entities (`&amp;`, `&lt;`, `&gt;`, and `&quot;`) in the numeric rather than the named entity form. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#numeric-entities"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'omit-optional-tags': {
          title: 'omit-optional-tags',
          description: 'This option specifies if Tidy should omit optional start tags and end tags when generating output. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#omit-optional"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'output-html': {
          title: 'output-html',
          description: 'This option specifies if Tidy should generate pretty printed output, writing it as HTML. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#output-html"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'output-xhtml': {
          title: 'output-xhtml',
          description: 'This option specifies if Tidy should generate pretty printed output, writing it as extensible HTML. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#output-xhtml"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'output-xml': {
          title: 'output-xml',
          description: 'This option specifies if Tidy should pretty print output, writing it as well-formed XML. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#output-xml"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'preserve-entities': {
          title: 'preserve-entities',
          description: 'This option specifies if Tidy should preserve well-formed entities as found in the input. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#preserve-entities"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'quote-ampersand': {
          title: 'quote-ampersand',
          description: 'This option specifies if Tidy should output unadorned & characters as `&amp;`. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#quote-ampersand"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'quote-marks': {
          title: 'quote-marks',
          description: 'This option specifies if Tidy should output `"` characters as `&quot;` as is preferred by some editing environments. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#quote-marks"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'quote-nbsp': {
          title: 'quote-nbsp',
          description: 'This option specifies if Tidy should output non-breaking space characters as entities, rather than as the Unicode character value 160 (decimal). <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#quote-nbsp"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'repeated-attributes': {
          title: 'repeated-attributes',
          description: 'This option specifies if Tidy should keep the first or last attribute, if an attribute is repeated, e.g. has two `align` attributes. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#repeated-attributes"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: 'keep-last',
          enum: ['keep-first', 'keep-last']
        },
        'replace-color': {
          title: 'replace-color',
          description: 'This option specifies if Tidy should replace numeric values in color attributes with HTML/XHTML color names where defined, e.g. replace `#ffffff` with `white`. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#replace-color"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'show-body-only': {
          title: 'show-body-only',
          description: 'This option specifies if Tidy should print only the contents of the body tag as an HTML fragment. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#show-body"><span class="icon icon-link-external"></span></a>',
          type: 'string',
          default: 'false',
          enum: ['auto', 'true', 'false']
        },
        'skip-nested': {
          title: 'skip-nested',
          description: 'This option specifies that Tidy should skip nested tags when parsing script and style data. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#skip-nested"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: true
        },
        'strict-tags-attributes': {
          title: 'strict-tags-attributes',
          description: 'This options ensures that tags and attributes are applicable for the version of HTML that Tidy outputs. When set to `true` and the output document type is a strict doctype, then Tidy will report errors. If the output document type is a loose or transitional doctype, then Tidy will report warnings. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#strict-tags"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'uppercase-attributes': {
          title: 'uppercase-attributes',
          description: 'This option specifies if Tidy should output attribute names in upper case. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#uppercase-attributes"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'uppercase-tags': {
          title: 'uppercase-tags',
          description: 'This option specifies if Tidy should output tag names in upper case. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#uppercase-tags"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        },
        'word-2000': {
          title: 'word-2000',
          description: 'This option specifies if Tidy should go to great pains to strip out all the surplus stuff Microsoft Word 2000 inserts when you save Word documents as "Web pages". It doesn\'t handle embedded images or VML. <a href="http://api.html-tidy.org/tidy/quickref_5.4.0.html#word-2000"><span class="icon icon-link-external"></span></a>',
          type: 'boolean',
          default: false
        }
      }
    }
};

export default config;
