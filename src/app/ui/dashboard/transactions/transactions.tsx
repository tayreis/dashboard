import Image from "next/image"
import styles from "./transactions.module.css"

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Last Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <div className={styles.user}>
                            <td>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                            </td>
                        <td>Tayná Reis</td>
                        </div>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>09.11.2023</td>
                        <td>R$3.000</td>
                    </tr>
                    <tr>
                        <div className={styles.user}>
                                <td>
                                    <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                                </td>
                            <td>Tayná Reis</td>
                            </div>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>09.11.2023</td>
                        <td>R$3.430</td>
                    </tr>
                    <tr>
                        <div className={styles.user}>
                            <td>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                            </td>
                            <td>Tayná Reis</td>
                        </div>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>09.11.2023</td>
                        <td>R$4.000</td>
                    </tr>
                    <tr>
                        <div className={styles.user}>
                            <td>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                            </td>
                            <td>Tayná Reis</td>
                        </div>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>09.11.2023</td>
                        <td>R$7.845</td>
                    </tr>
                    <tr>
                        <div className={styles.user}>
                            <td>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                            </td>
                            <td>Tayná Reis</td>
                        </div>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>09.11.2023</td>
                        <td>R$3.345</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Transactions