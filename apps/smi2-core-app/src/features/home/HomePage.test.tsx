import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils-test';

import { HomePage } from '.';

describe('apps', () => {
  describe('smi2-core-app', () => {
    describe('HomePage', () => {
      it('should render home page when no props are present', () => {
        renderWithTheme(<HomePage />);

        expect(screen.getByText('Home Page')).toBeInTheDocument();
      });
    });
  });
});
