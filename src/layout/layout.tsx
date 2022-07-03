import styles from './Layout.module.css';
const Layout = (props: any) => {
    return (
        <main className={styles.main}>
            {props.children}
        </main>
    )
}

export default Layout;