import React, { forwardRef, memo } from "react";
import style from "./Container.module.scss";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...rest }, ref) => (
    <div ref={ref} className={style.container} {...rest}>
      {children}
    </div>
  )
);

export default memo(Container);
