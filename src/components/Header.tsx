type HeaderProps = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: HeaderProps) {
  return (
      <>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
      </>
  );
}   

export default Header;