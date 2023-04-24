import './style.scss';

interface IProps {
  children: React.ReactNode;
}

export const InputsBlock: React.FC<IProps> = (props) => {
  return <div className={"InputsBlock"}>{props.children}</div>;
};
