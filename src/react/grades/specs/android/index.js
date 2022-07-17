import junior from './junior';
import middle from './middle';
import senior from './senior';

export default {
  name: 'Android',
  soon: true,
  levels: [
    {
      name: 'Junior',
      skills: junior,
    },

    {
      name: 'Middle',
      skills: middle,
    },
    {
      name: 'Senior',
      skills: senior,
    },
  ],
};
