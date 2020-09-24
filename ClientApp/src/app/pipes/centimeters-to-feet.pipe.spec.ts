import { SettingsService } from '../services/settings.service';
import { CentimetersToFeetPipe } from './centimeters-to-feet.pipe';

describe('CentimetersToFeetPipe', () => {
  it('create an instance', () => {
    const pipe = new CentimetersToFeetPipe(new SettingsService());
    expect(pipe).toBeTruthy();
  });
});
