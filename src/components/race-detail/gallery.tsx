import { PreviewItem } from '@components/workout-list/workout-preview';
import { Gallery } from '@typings/race';
import React from 'react';
import { Link } from 'react-router-dom';
import { GallerWrapper } from './race-detail.style';
interface Props {
  data: Array<Gallery>;
}
const GalleryList = ({ data }: Props) => {
  console.log(data);
  return (
    <GallerWrapper>
      {data.map((val, i) => (
        <li key={i}>
          <h3>{val.date}</h3>
          <article>
            {val.workoutList.map(v => (
              <Link key={v.workOutId} to={`/workout-detail/${v.workOutId}`} state={val.date}>
                <PreviewItem item={v} />
              </Link>
            ))}
          </article>
        </li>
      ))}
    </GallerWrapper>
  );
};

export default GalleryList;
