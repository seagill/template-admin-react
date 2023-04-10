import ErrorPage403 from '@/pages/ErrorPage/403';
interface Props {
  children: React.ReactNode;
  access: boolean;
}
function Access(props: Props) {
  return props.access ? <>{props.children}</> : <ErrorPage403 />;
}

export default Access;
