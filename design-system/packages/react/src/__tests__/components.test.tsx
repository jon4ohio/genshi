import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Icon } from '../Icon';

describe('Button', () => {
  it('renders children', () => {
    const html = renderToStaticMarkup(<Button>Save</Button>);
    expect(html).toContain('Save');
    expect(html).toContain('<button');
  });

  it('marks disabled state', () => {
    const html = renderToStaticMarkup(<Button disabled>Save</Button>);
    expect(html).toContain('disabled');
  });
});

describe('Badge', () => {
  it('renders label text', () => {
    const html = renderToStaticMarkup(<Badge>Active</Badge>);
    expect(html).toContain('Active');
  });
});

describe('Icon', () => {
  it('exposes accessible label', () => {
    const html = renderToStaticMarkup(<Icon label="Search" />);
    expect(html).toContain('aria-label="Search"');
    expect(html).toContain('role="img"');
  });
});
