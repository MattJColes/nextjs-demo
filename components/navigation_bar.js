import Link from 'next/link';

const NavigationBar = () => {
    const style = {
        display: 'flex',
        backgroundColor: '#442211',
        justifyContent: 'center',
        padding: '0.5rem',
    }
    return (
        <div style={style}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    );
}

export default NavigationBar;