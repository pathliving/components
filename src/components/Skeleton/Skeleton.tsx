import { forwardRef, HTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";
import style from "./skeleton.module.css";
import "@/styles/colors.css";
import "@/styles/transition.css";
import "@/styles/spacing.css";

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  /**
   * What additional styles to add
   */
  className?: string;
  /**
   * What shape of skeleton to choose
   */
  appearance?: "container" | "circle" | "text";
};

/**
 * Skeleton loader
 */
const Skeleton = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const {
    className,
    appearance = "container",
    ...rest
  } = props;

  return (
    <span className={clsx(style.skeleton, style[appearance], className)} ref={ref} {...rest} />
  );
});

export default Skeleton;