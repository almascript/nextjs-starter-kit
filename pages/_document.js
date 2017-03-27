import Document, { Head, Main, NextScript } from 'next/document';
import { StyleSheetServer } from 'aphrodite';
import { fontFamilyBase } from '../lib/theme';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, css } = StyleSheetServer.renderStatic(() => renderPage());
    return { ...html, css };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>My page</title>
          <style dangerouslySetInnerHTML={{ __html: `
            html {
              color: #222;
              font-weight: 100;
              font-size: 1em; /* ~16px; */
              font-family: ${fontFamilyBase};
              line-height: 1.375; /* ~22px */
            }

            a {
              color: #0074c2;
            }

            /*
             * Remove text-shadow in selection highlight:
             * https://twitter.com/miketaylr/status/12228805301
             *
             * These selection rule sets have to be separate.
             * Customize the background color to match your design.
             */

            ::-moz-selection {
              background: #b3d4fc;
              text-shadow: none;
            }

            ::selection {
              background: #b3d4fc;
              text-shadow: none;
            }

            /*
             * A better looking default horizontal rule
             */

            hr {
              display: block;
              height: 1px;
              border: 0;
              border-top: 1px solid #ccc;
              margin: 1em 0;
              padding: 0;
            }

            /*
             * Remove the gap between audio, canvas, iframes,
             * images, videos and the bottom of their containers:
             * https://github.com/h5bp/html5-boilerplate/issues/440
             */

            audio,
            canvas,
            iframe,
            img,
            svg,
            video {
              vertical-align: middle;
            }

            /*
             * Remove default fieldset styles.
             */

            fieldset {
              border: 0;
              margin: 0;
              padding: 0;
            }

            /*
             * Allow only vertical resizing of textareas.
             */

            textarea {
              resize: vertical;
            }

            /*
             * Browser upgrade prompt
             * ========================================================================== */

            :global(.browserupgrade) {
              margin: 0.2em 0;
              background: #ccc;
              color: #000;
              padding: 0.2em 0;
            }

            /*
             * Print styles
             * Inlined to avoid the additional HTTP request:
             * http://www.phpied.com/delay-loading-your-print-css/
             * ========================================================================== */

            @media print {
              *,
              *::before,
              *::after {
                background: transparent !important;
                color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */
                box-shadow: none !important;
                text-shadow: none !important;
              }

              a,
              a:visited {
                text-decoration: underline;
              }

              a[href]::after {
                content: ' (' attr(href) ')';
              }

              abbr[title]::after {
                content: ' (' attr(title) ')';
              }

              /*
               * Don't show links that are fragment identifiers,
               * or use the 'javascript:' pseudo protocol
               */

              a[href^='#']::after,
              a[href^='javascript:']::after {
                content: '';
              }

              pre,
              blockquote {
                border: 1px solid #999;
                page-break-inside: avoid;
              }

              /*
               * Printing Tables:
               * http://css-discuss.incutio.com/wiki/Printing_Tables
               */

              thead {
                display: table-header-group;
              }

              tr,
              img {
                page-break-inside: avoid;
              }

              img {
                max-width: 100% !important;
              }

              p,
              h2,
              h3 {
                orphans: 3;
                widows: 3;
              }

              h2,
              h3 {
                page-break-after: avoid;
              }
            }

            /*
             * Styles for insides of .newsDesc inside 
             * IndexPage component
             */

            .newsDesc h1, .newsDesc h2,
            .newsDesc h3, .newsDesc h4,
            .newsDesc h5, .newsDesc h6 {
              font-size: 1.125rem;
            }
            .newsDesc pre {
              white-space: pre-wrap;
              font-size: 0.875rem;
            }

            .newsDesc img {
              max-width: 100%;
            }
          `}} />
          <style dangerouslySetInnerHTML={{ __html: this.props.css.content }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
