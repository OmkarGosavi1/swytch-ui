import { AppConstant } from "constant/AppConstant";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="/images/favicon2.png"
            type="image/png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jura:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          />
          <meta name="description" content={AppConstant.meta.description} />
          <meta property="og:title" content={AppConstant.meta.title} />
          <meta property="og:url" content={AppConstant.meta.url} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={AppConstant.meta.description}
          />
          <meta property="og:image" content={AppConstant.meta.image} />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="600" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={AppConstant.meta.title} />
          <meta
            name="twitter:description"
            content={AppConstant.meta.description}
          />
          <meta name="twitter:image" content={AppConstant.meta.image} />
          <script dangerouslySetInnerHTML={{
            __html: `(function(w, d) { w.CollectId = "63076ed3234f323715f2ebb9"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document)`
          }} ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
