import * as migration_20260427_023101 from './20260427_023101';
import * as migration_20260428_020009 from './20260428_020009';

export const migrations = [
  {
    up: migration_20260427_023101.up,
    down: migration_20260427_023101.down,
    name: '20260427_023101',
  },
  {
    up: migration_20260428_020009.up,
    down: migration_20260428_020009.down,
    name: '20260428_020009'
  },
];
