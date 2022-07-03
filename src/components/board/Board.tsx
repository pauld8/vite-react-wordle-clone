import { useContext, useEffect } from 'react';
import AppRow from '../row/Row';
import AppTile, { TileType } from '../tile/Tile';
import { IWordleContext, WorldeContext } from '../../context/WordleContext';
import { alphabet } from '../../utils';

const AppBoard = () => {
  const {
    guesses,
    currentGuess,
    maxGuesses,
    maxWordLength,
    getRowTileGuess,
    currentRow,
    setCurrentGuess,
    addToCurrentGuess,
    removeFromCurrentGuest,
    onSubmit,
    getTileType,
  } = useContext(WorldeContext) as IWordleContext;

  const onKeyEnter = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      onSubmit();
      return;
    }

    if (e.key == 'Backspace') {
      if (currentGuess.length > 0) {
        removeFromCurrentGuest();
      }

      return;
    }

    if (
      guesses.length < maxGuesses &&
      currentGuess.length < maxWordLength &&
      alphabet.includes(e.key.toLowerCase())
    ) {
      addToCurrentGuess(e.key);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', onKeyEnter);

    return () => window.removeEventListener('keyup', onKeyEnter);
  }, [currentGuess]);

  return (
    <div className="app-board">
      {[...Array(maxGuesses)].map((_, index) => (
        <AppRow key={index}>
          {[...Array(maxWordLength)].map((_, tileIndex) => (
            <AppTile type={getTileType(index, tileIndex)} key={tileIndex}>
              {getRowTileGuess(index, tileIndex)}
            </AppTile>
          ))}
        </AppRow>
      ))}
    </div>
  );
};

export default AppBoard;
