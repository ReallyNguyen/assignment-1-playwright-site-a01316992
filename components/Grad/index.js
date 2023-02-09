import Image from "next/Image"
import Graduation from "@/public/icons/graduation-hat.png"
import styles from "@/components/Grad/Grad.module.css";

export default function Grad() {
    return (
        <Image className={styles.Grad}
            src={Graduation}
        />
    )
}