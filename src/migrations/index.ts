import * as migration_20260427_023101 from './20260427_023101';

export const migrations = [
  {
    up: migration_20260427_023101.up,
    down: migration_20260427_023101.down,
    name: '20260427_023101'
  },
];
