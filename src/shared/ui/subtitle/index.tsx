import './style.scss';

type Props = JSX.IntrinsicElements['h3'] & {
  className?: string;
};

export const Subtitle: React.FC<Props> = ({ className, ...restProps }) => {
  const props = {
    ...restProps,
    className: `Subtitle ${className ? className : ''}`,
  };
  return <h3 {...props}>{restProps.children}</h3>;
};
