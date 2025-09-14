const fs = require('fs');
const path = require('path');

// Create placeholder images for the About page
const createPlaceholderImage = (width, height, color, text, filename) => {
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;

  fs.writeFileSync(filename, svg);
};

// Create directories
const aboutDir = path.join(__dirname, '../public/about');
const teamDir = path.join(aboutDir, 'team');
const timelineDir = path.join(aboutDir, 'timeline');

[aboutDir, teamDir, timelineDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate team member images
const teamMembers = [
  'sarah-johnson.jpg',
  'michael-chen.jpg', 
  'emily-rodriguez.jpg',
  'david-thompson.jpg',
  'lisa-wang.jpg',
  'alex-kumar.jpg'
];

teamMembers.forEach((filename, index) => {
  const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4'];
  const names = ['Sarah', 'Michael', 'Emily', 'David', 'Lisa', 'Alex'];
  createPlaceholderImage(400, 400, colors[index], names[index], path.join(teamDir, filename));
});

// Generate timeline images
const timelineImages = [
  '2019-founding.jpg',
  '2020-first-client.jpg',
  '2021-team-expansion.jpg',
  '2022-ai-launch.jpg',
  '2023-global-expansion.jpg',
  '2024-future.jpg'
];

timelineImages.forEach((filename, index) => {
  const colors = ['#1E40AF', '#7C3AED', '#059669', '#D97706', '#DC2626', '#0891B2'];
  const years = ['2019', '2020', '2021', '2022', '2023', '2024'];
  createPlaceholderImage(600, 300, colors[index], years[index], path.join(timelineDir, filename));
});

// Generate main about image
createPlaceholderImage(800, 600, '#4F46E5', 'Team Meeting', path.join(aboutDir, 'team-meeting.jpg'));

console.log('Placeholder images generated successfully!');
