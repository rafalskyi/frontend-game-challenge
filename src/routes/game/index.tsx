import React from 'react';
import { connect } from 'react-redux';

// ACTIONS
import { getEntities } from '../../store/game/actions';

import { ENTITIES } from '../../mock/data';

const gameComponent = () => {
  return (
    <div>
      {ENTITIES.map((el) => (
        <div key={el.id}>
          <h4>{el.title}</h4>
          <img src={el.icon} alt={el.id} />
        </div>
      ))}
    </div>
  );
};

export default connect(null, { getEntities })(gameComponent);
