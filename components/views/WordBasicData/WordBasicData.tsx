import React from 'react';
import Link from 'next/link';
import { Word } from '../../../redux/wordSearch';

interface Props extends Pick<Word, 'id' | 'word' | 'definition'> {}

const Component: React.FC<Props> = ({ id, word, definition }) => {
  return (
    <Link href={`/details/${id}`} passHref={true}>
      <div className="box is-clickable">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong className="has-text-primary">
                  {word.toUpperCase()}
                </strong>

                <br />
                {definition}
              </p>
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
};

export { Component as WordBasicData, Component as WordBasicDataComponent };
