import { card } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";
const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Smart & Secure <br className="sm:block hidden" /> Online Banking
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Manage your finances effortlessly with our advanced online banking features. From instant transfers to seamless bill payments, enjoy full control of your money anytime, anywhere—with top-tier security and convenience.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <Image src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
