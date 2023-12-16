import { createSignal } from "solid-js";
import SVGLogoImage from "./SVGLogoImage";
import AnimatedLogoImage from "./MatterLogoImage";
import styles from "./style.module.css";

export default function LogoImage(_props) {
  const [showAnimation, setShowAnimation] = createSignal(false);

  return (
    <>
      <div class={showAnimation() ? styles.display : styles.hide}>
        <AnimatedLogoImage run={showAnimation()} />
      </div>
      <div
        class={showAnimation() ? styles.hide : styles.display}
        onClick={() => setShowAnimation(true)}
      >
        <SVGLogoImage />
      </div>
    </>
  );
}
