import { onMount } from "solid-js";
import styles from "./style.module.css";

type LogoImageProps = {
  onLogoPosition: (position: DOMRect) => void;
  onClick: (event: MouseEvent) => void;
  hidden: boolean;
};

export default function LogoImage(props: LogoImageProps) {
  let svgRef: SVGElement | undefined = undefined;

  onMount(() => {
    props.onLogoPosition(svgRef!.getBoundingClientRect());
  });

  return (
    <div
      classList={{
        [styles.LogoImage]: true,
        [styles.hidden]: props.hidden,
      }}
      onClick={(event: MouseEvent) => props.onClick(event)}
    >
      <svg
        class={styles.svg}
        ref={(el) => (svgRef = el)}
        width="256"
        height="410"
        viewBox="0 0 256 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M116.279 0.748846C116.673 0.340013 117.327 0.340012 117.721 0.748845L158.672 43.3066C159.283 43.9419 158.833 45 157.951 45L76.0488 45C75.1671 45 74.7169 43.9419 75.3282 43.3066L116.279 0.748846Z"
          fill="#2556A2"
        />
        <rect x="94" y="49" width="46" height="90" rx="1" fill="#D7C3AD" />
        <rect x="72" y="143" width="90" height="23" rx="1" fill="#D7C3AD" />
        <rect x="47" y="170" width="46" height="46" rx="1" fill="#D7C3AD" />
        <rect x="141" y="170" width="46" height="46" rx="1" fill="#D7C3AD" />

        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M137 221C137 220.448 136.552 220 136 220H48C47.4477 220 47 220.448 47 221V265C47 265.552 47.4477 266 48 266H67C67.5523 266 67.9979 265.551 68.0205 264.999C68.5453 252.208 79.0832 242 92.0061 242C104.929 242 115.467 252.208 115.992 264.999C116.014 265.551 116.46 266 117.012 266H136C136.552 266 137 265.552 137 265V221Z"
          fill="#389642"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M231 221C231 220.448 230.552 220 230 220H142C141.448 220 141 220.448 141 221V265C141 265.552 141.448 266 142 266H161C161.552 266 161.998 265.551 162.02 264.999C162.545 252.208 173.083 242 186.006 242C198.929 242 209.467 252.208 209.992 264.999C210.014 265.551 210.46 266 211.012 266H230C230.552 266 231 265.552 231 265V221Z"
          fill="#D80032"
        />

        <rect x="22" y="270" width="46" height="90" rx="1" fill="#D7C3AD" />
        <rect x="116" y="270" width="46" height="46" rx="1" fill="#2556A2" />
        <rect x="210" y="270" width="46" height="90" rx="1" fill="#D7C3AD" />

        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M90 365C90 364.448 89.5523 364 89 364H1C0.447715 364 0 364.448 0 365V409C0 409.552 0.447715 410 1 410H20C20.5523 410 20.9979 409.551 21.0205 408.999C21.5453 396.208 32.0832 386 45.0061 386C57.9289 386 68.4668 396.208 68.9916 408.999C69.0143 409.551 69.4599 410 70.0121 410H89C89.5523 410 90 409.552 90 409V365Z"
          fill="#D80032"
        />
        <rect x="116" y="320" width="46" height="90" rx="1" fill="#D7C3AD" />
        <rect x="210" y="364" width="46" height="46" rx="1" fill="#E6C320" />
      </svg>
    </div>
  );
}
