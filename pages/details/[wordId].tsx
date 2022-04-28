import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { useAppSelector } from '../../redux/hooks';
import { selectWordData } from '../../redux/wordSearch';

import { Container } from '../../components/layout/Container/Container';
import { WordExtendedData } from '../../components/views/WordExtendedData/WordExtendedData';

const WordDetails: NextPage = () => {
  const router = useRouter();
  const { wordId } = router.query;
  const { data } = useAppSelector(selectWordData);
  const wordDetails = data?.find((word) => word.id === wordId);

  return (
    <Container>
      <WordExtendedData wordData={wordDetails} />
    </Container>
  );
};

export default WordDetails;
