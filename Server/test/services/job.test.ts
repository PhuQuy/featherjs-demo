import assert from 'assert';
import app from '../../src/app';

describe('\'job\' service', () => {
  it('registered the service', () => {
    const service = app.service('job');

    assert.ok(service, 'Registered the service');
  });
});
