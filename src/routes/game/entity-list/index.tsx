import React, { useEffect, useState } from 'react';

// MODELS
import { EntityItem, userChoiseType } from '../../../store/game/model';

type EntityListProps = {
  entities: EntityItem[];
  userChoise?: userChoiseType;
  userBoard?: boolean;
  selected: string;
};

export const EntityList = ({ entities, userChoise, selected, userBoard = false }: EntityListProps) => {
  const [boardClass, setBoardClass] = useState<string>('');
  useEffect(() => {
    setBoardClass(userBoard ? 'list-item' : 'list-item pc');
  }, [userBoard]);

  const userChoiseEvent = (id: string) => userChoise && userChoise(id);

  return (
    <div className="list-box">
      <ul className="list">
        {entities.map((el) => (
          <li
            className={`${boardClass} ${el.id === selected ? 'selected' : ''}`}
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
