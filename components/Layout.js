import Head from 'next/head';
import Navbar from './Navbar';


const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Next App</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cerulean/bootstrap.min.css" />
            </Head>
            <Navbar />
            <div>
                {props.children}
            </div>
        </div>

    )

}


export default Layout;