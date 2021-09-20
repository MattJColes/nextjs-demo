import Link from 'next/link';

const NavigationBar = () => {
    const style = {
        display: 'flex',
        backgroundColor: '#96736C',
        justifyContent: 'center',
        padding: '0.5rem',
    }
    return (
        <div style={style}>
            <Link href="/">
                <a className="navbar_item">HOME</a>
            </Link>
            <Link href="/about">
                <a className="navbar_item">ABOUT</a>
            </Link>
        </div>
    );
}

export default NavigationBar;