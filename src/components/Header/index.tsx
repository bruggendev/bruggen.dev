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
  }>({ x: 0, y: 0 });

  onMount(() => {
    setBoundingRect(headerRef!.getBoundingClientRect());
  });

  return (
    <header class={styles.Header} ref={(el) => (headerRef = el)}>
      {boundingRect() && (
        <MatterLogoImage
          logoPosition={logoPosition()!}
          height={boundingRect()!.height}
          width={boundingRect()!.width}
          run={run()}
        />
      )}
      <Logo>
        <LogoImage
          hidden={run()}
          onClick={() => setRun(true)}
          onLogoPosition={({ x, y }) =>
            setLogoPosition({
              x: x - boundingRect()!.left,
              y: y - boundingRect()!.top,
            })
          }
        />
        <LogoTitle>bruggen</LogoTitle>
      </Logo>
      <Introduction>{props.children}</Introduction>
    </header>
  );
};

export default Header;
