import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer} >
                    <Image src="/noproduct.jpg" fill alt="" />
                </div>
                Iphone
                </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Iphone" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="R$3.000" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="35" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="white" />
                    <label>Size</label>
                    <input type="number" name="size" placeholder="12" />
                    <label>Category</label>
                    <select name="category" id="category">
                        <option value="kitchen">Kitchen</option>
                        <option value="computer">Computer</option>
                    </select>
                    <label>Description</label>
                    <textarea name="description" id="description" rows={10} placeholder="description" />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage