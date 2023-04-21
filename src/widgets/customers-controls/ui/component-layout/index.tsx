import './style.scss';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Flex контейнер
 */
export const ComponentLayout: React.FC<IProps> = (props) => {
  return <div className="CustomersControls">{props.children}</div>;
};
