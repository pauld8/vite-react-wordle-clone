import { useContext } from 'react';
import { Header } from 'semantic-ui-react';
import { AppContext } from '../../context/AppContext';
import { IWordleContext, WorldeContext } from '../../context/WordleContext';

const AppHeader = () => {
  const app = useContext(AppContext);

  const { guesses, maxGuesses } = useContext(WorldeContext) as IWordleContext;

  return (
    <Header className="app-header">
      <Header as="h1" className="app-header-title">
        {app?.appName} ({guesses.length}/{maxGuesses})
      </Header>
    </Header>
  );
};

export default AppHeader;
