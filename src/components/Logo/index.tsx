import { useNavigate } from 'react-router-dom';
type LogoProps = {
  collapsed: boolean;
};

function Logo(props: LogoProps) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/')}>
      <span>S</span>
      {!props.collapsed ? (
        <>
          <span>e</span>
          <span>a</span>
          <span>g</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
        </>
      ) : null}
    </div>
  );
}

export default Logo;
