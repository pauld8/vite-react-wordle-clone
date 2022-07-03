import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Grid } from 'semantic-ui-react';

type AppRowProps = {
  children: JSX.Element | JSX.Element[] | string;
};

const AppRow = ({ children }: AppRowProps) => {
  const app = useContext(AppContext);

  return <Grid className="row">{children}</Grid>;
};

export default AppRow;
