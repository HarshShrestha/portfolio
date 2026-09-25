import { describe, it, expect } from 'vitest';
import { projects, stats } from './profile';

describe('Profile Data Integrity', () => {
  it('every project should have at least 3 highlights', () => {
    projects.forEach(project => {
      expect(project.highlights.length, `Project ${project.slug} should have ≥ 3 highlights`).toBeGreaterThanOrEqual(3);
    });
  });

  it('every project should have at least 3 tech stack items', () => {
    projects.forEach(project => {
      expect(project.techStack.length, `Project ${project.slug} should have ≥ 3 tech items`).toBeGreaterThanOrEqual(3);
    });
  });

  it('every project should have a unique slug', () => {
    const slugs = projects.map(p => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size, 'Project slugs must be unique').toBe(slugs.length);
  });

  it('every stat should have a label', () => {
    stats.forEach((stat, index) => {
      expect(stat.label, `Stat at index ${index} should have a label`).toBeDefined();
      expect(stat.label.length, `Stat at index ${index} label should not be empty`).toBeGreaterThan(0);
    });
  });
});
