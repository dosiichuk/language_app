import React from 'react';
import { FaBell } from 'react-icons/fa';
import { Word } from '../../../redux/wordSearch';

interface Props {
  audioSource?: Word['pronunciationAudioSource'];
}

const Component: React.FC<Props> = ({ audioSource }) => {
  const audio = new Audio(audioSource);
  return (
    <>
      {audioSource !== '' && (
        <FaBell
          className="has-text-primary is-clickable"
          onClick={() => audio.play()}
        />
      )}
    </>
  );
};

export { Component as PronunciationIcon, Component as PronunciationComponent };
