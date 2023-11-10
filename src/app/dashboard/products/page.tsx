import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/products/products.module.css"
import Image from "next/image"
import Link from "next/link"

const ProductsPage = ({}) => {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..."/>
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton} >Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src="/noproduct.jpg" width={40} height={40} alt="" className={styles.productImage}/>
                                Iphone
                            </div>
                        </td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
                        <td>R$1.890</td>
                        <td>Nov 09 2023</td>
                        <td>34</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/products/test">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </Link>    
                            </div>
                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src="/noproduct.jpg" width={40} height={40} alt="" className={styles.productImage}/>
                                Tablet
                            </div>
                        </td>
                        <td>Dolor sit amet consectetur adipisicing elit, Lorem ipsum.</td>
                        <td>R$990</td>
                        <td>Oct 10 2023</td>
                        <td>47</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </Link>    
                            </div>
                        
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </section>
    )
}
export default ProductsPage