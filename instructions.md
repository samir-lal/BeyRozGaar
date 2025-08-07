# BeyRozGaar Development Instructions

## Core Development Guidelines

### UI Preservation
**DO NOT CHANGE UI** - The current user interface design, layout, styling, and visual elements should remain unchanged unless explicitly requested by the user. This includes:
- Color schemes and gradients
- Component layouts and positioning
- Typography and spacing
- Animation effects
- Responsive design breakpoints
- Icon choices and visual elements

### Architecture Guidelines
- Follow the existing React + TypeScript + Express.js architecture
- Use the established component structure in `client/src/components/`
- Maintain the current routing system with Wouter
- Keep the storage interface pattern for data operations

### Code Standards
- Use TypeScript with proper type definitions
- Follow the existing naming conventions
- Maintain consistent file organization
- Use the established utility functions and hooks

### Email System
- SendGrid integration for automated welcome emails
- Email templates should match the warm, community-focused brand
- Sender: hello@beyrozgaar.com (Sanjay Sahni)

### Content Guidelines
- Maintain Hindi-English bilingual elements
- Keep the warm, supportive tone throughout
- Focus on community, authenticity, and unlimited potential
- Preserve the cultural elements that make BeyRozGaar unique

### Technical Constraints
- DO NOT modify package.json or vite.config.ts
- Use the packager tool for dependency management
- Maintain the existing workflow configuration
- Keep the PostgreSQL + in-memory storage flexibility

### Feature Development
- Add new features without disrupting existing functionality
- Test thoroughly before considering complete
- Maintain accessibility standards
- Ensure mobile responsiveness

## Project Philosophy
BeyRozGaar is about transformation, community, and empowerment. Every code change should align with the mission of supporting unemployed individuals on their journey to discovering unlimited potential.