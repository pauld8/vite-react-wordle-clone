import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { TileType } from '../components/tile/Tile';

export interface IWordleContext {
  maxGuesses: number;
  maxWordLength: number;
  guesses: string[];
  currentGuess: string;
  currentRow: number;
  removeFromCurrentGuest: Function;
  onSubmit: Function;
  setCurrentGuess: (guess: string) => void;
  addToCurrentGuess: (letter: string) => void;
  getRowTileGuess: (row: number, tile: number) => string | null;
  getTileType: (row: number, tile: number) => TileType;
}

export const WorldeContext = createContext<IWordleContext | null>(null);

type WordleContextProps = {
  children: JSX.Element | JSX.Element[];
};

const WorldeContextProvider = ({ children }: WordleContextProps) => {
  const MAX_GUESSES = 6;
  const MAX_WORD_LENGTH = 5;
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');

  const currentWord = 'apple';

  const onSubmit = () => {
    if (guesses.length >= MAX_GUESSES) {
      return;
    }

    if (currentGuess.length < MAX_WORD_LENGTH) {
      toast('Not enough letters');
      return;
    }

    setGuesses((guesses) => [...guesses, currentGuess]);
    setCurrentGuess('');
  };

  const getTileType = (row: number, tile: number): TileType => {
    if (!guesses[row] || guesses.length == row) {
      return TileType.DEFAULT;
    }

    const letter = guesses[row][tile];
    let type = TileType.INCORRECT;

    if (currentWord.indexOf(letter) != -1) {
      type = TileType.EXISTS;
    }

    if (currentWord.charAt(tile).toLowerCase() === letter.toLowerCase()) {
      type = TileType.CORRECT;
    }

    return type;
  };

  const getRowTileGuess = (row: number, tile: number): string | null => {
    if (!guesses[row] && guesses.length == row) {
      return currentGuess.charAt(tile).toUpperCase();
    }

    return guesses[row]?.charAt(tile).toUpperCase();
  };

  const currentRow = () => {
    return guesses.length;
  };

  const addToCurrentGuess = (letter: string) => {
    setCurrentGuess((guess) => guess + letter);

    return currentGuess;
  };

  const removeFromCurrentGuest = () => {
    setCurrentGuess((guess) => guess.substring(0, guess.length - 1));
  };

  return (
    <WorldeContext.Provider
      value={{
        maxWordLength: MAX_WORD_LENGTH,
        maxGuesses: MAX_GUESSES,
        guesses: guesses,
        currentGuess: currentGuess,
        setCurrentGuess: setCurrentGuess,
        removeFromCurrentGuest: removeFromCurrentGuest,
        addToCurrentGuess: addToCurrentGuess,
        getRowTileGuess: getRowTileGuess,
        getTileType: getTileType,
        currentRow: currentRow(),
        onSubmit: onSubmit,
      }}
    >
      {children}
    </WorldeContext.Provider>
  );
};

export default WorldeContextProvider;
