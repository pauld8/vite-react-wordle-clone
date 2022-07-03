import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Grid } from 'semantic-ui-react';
import { classNames } from '../../utils';

export enum TileType {
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
  EXISTS = 'exists',
  DEFAULT = 'default',
}

type AppTileProps = {
  children?: JSX.Element | string | null;
  type: TileType;
};

const AppTile = ({ children, type }: AppTileProps) => {
  const app = useContext(AppContext);

  return (
    <Grid.Column className={classNames('tile', type)}>{children}</Grid.Column>
  );
};

AppTile.defaultProps = {
  type: TileType.DEFAULT,
};

export default AppTile;
