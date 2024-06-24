import LogoImage from "../LogoImage";
import { Introduction, Logo, LogoTitle } from "../Content/Content";
import { createSignal, JSX, onMount } from "solid-js";
import MatterLogoImage from "../MatterLogoImage";
import styles from "./style.module.css";

const Header = (props: { children: JSX.Element }) => {
  let headerRef: HTMLElement | undefined = undefined;
  const [boundingRect, setBoundingRect] = createSignal<DOMRect | undefined>();
  const [run, setRun] = createSignal<boolean>(false);

  const [logoPosition, setLogoPosition] = createSignal<{
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
  } | null>(null);

  const handler = () => {
    setBoundingRect(headerRef!.getBoundingClientRect());
  };

  onMount(() => {
    handler();
    window.addEventListener("resize", handler);
  });

  return (
    <header class={styles.Header} ref={(el) => (headerRef = el)}>
      {logoPosition() && (
        <MatterLogoImage
          position={logoPosition()!}
          height={boundingRect()!.height}
          width={boundingRect()!.width}
          run={run()}
        />
      )}
      <Logo>
        <LogoImage
          hidden={run()}
          onClick={() => setRun(true)}
          onLogoPosition={(position) => {
            setLogoPosition({
              x: position.x,
              y: position.y,
              scaleX: position.scaleX,
              scaleY: position.scaleY,
            });
          }}
        />
        <LogoTitle>bruggen</LogoTitle>
      </Logo>
      <Introduction>{props.children}</Introduction>
    </header>
  );
};

export default Header;
