import React from 'react';

// MODELS
import { EntityItem, userChoiseType } from '../../../store/game/model';

type EntityListProps = {
  entities: EntityItem[];
  userChoise?: userChoiseType;
  userBoard?: boolean;
};

export const EntityList = ({ entities, userChoise, userBoard = false }: EntityListProps) => {
  const userChoiseEvent = (id: string) => userChoise && userChoise(id);

  return (
    <div className="list-box">
      <ul className="list">
        {entities.map((el) => (
          <li
            className={userBoard ? 'list-item' : 'list-item pc'}
            key={el.id}
            onClick={userBoard ? userChoiseEvent.bind(null, el.id) : () => {}}>
            <div className={userBoard ? 'image-box' : 'image-box pc'}>
              <img className="image" src={el.icon} alt={el.title} />
            </div>
            <p>{el.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
