import { SettingsService } from '../services/settings.service';
import { KilogramsToPoundsPipe } from './kilograms-to-pounds.pipe';

describe('KilogramsToPoundsPipe', () => {
  it('create an instance', () => {
    const pipe = new KilogramsToPoundsPipe(new SettingsService());
    expect(pipe).toBeTruthy();
  });
});
