type LogoProps = {
  collapsed: boolean;
};

function Logo(props: LogoProps) {
  return (
    <div>
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
