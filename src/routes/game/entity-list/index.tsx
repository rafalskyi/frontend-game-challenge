import React, { useEffect, useState } from 'react';

// MODELS
import { EntityItem, userChoiceType } from '../../../store/game/model';

type EntityListProps = {
  entities: EntityItem[];
  userChoice?: userChoiceType;
  userBoard?: boolean;
  selected: string;
};

export const EntityList = ({ entities, userChoice, selected, userBoard = false }: EntityListProps) => {
  const [boardClass, setBoardClass] = useState<string>('');
  useEffect(() => {
    setBoardClass(userBoard ? 'game__list-item' : 'game__list-item game__list-item--pc');
  }, [userBoard]);

  const userChoiceEvent = (id: string) => userChoice && userChoice(id);

  return (
    <div className="game__list-box">
      <ul className="game__list">
        {entities.map((el) => (
          <li
            className={`${boardClass} ${el.id === selected ? 'game__list-item--selected' : ''}`}
            key={el.id}
            onClick={userBoard ? userChoiceEvent.bind(null, el.id) : () => {}}>
            <div className={userBoard ? 'game__image-box' : 'game__image-box game__image-box--pc'}>
              <img className="game__image" src={el.icon} alt={el.title} />
            </div>
            <p>{el.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
