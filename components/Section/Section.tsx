import { PostCard } from '../Post';
import { Grid, Title } from './style';

type SectionProps = {
  title: string;
};

export const Section = ({ title }: SectionProps) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        <PostCard />
        <PostCard />
        <PostCard />
      </Grid>
    </section>
  );
};
