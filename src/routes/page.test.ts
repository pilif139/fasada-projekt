import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Page from './+page.svelte';

describe("Main Page", ()=>{
  it('should render', () => {
    const {container} = render(Page);
    expect(container).toMatchSnapshot();
  });
})