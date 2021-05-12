import Document, { Html, Head, Main, Nextscript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <Nextscript />
                </body>
            </Html>
        )
    }
}

export default MyDocument