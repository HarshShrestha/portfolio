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

  it('every project should have a valid GitHub URL', () => {
    projects.forEach(project => {
      expect(project.github, `Project ${project.slug} must have a GitHub URL`).toBeDefined();
      expect(project.github).toMatch(/^https:\/\/github\.com\//);
    });
  });

  it('every stat should have a label', () => {
    stats.forEach((stat, index) => {
      expect(stat.label, `Stat at index ${index} should have a label`).toBeDefined();
      expect(stat.label.length, `Stat at index ${index} label should not be empty`).toBeGreaterThan(0);
    });
  });
});
