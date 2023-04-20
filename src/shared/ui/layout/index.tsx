// import './style.scss';

interface IProps {
  children: string | React.ReactNode | React.ReactNode[];
}

/**
 * Контейнер с максимальной шириной 1440px и адаптивом
 */
export const Layout: React.FC<IProps> = (props) => {
  return <div className={'Layout'}>{props.children}</div>;
};
