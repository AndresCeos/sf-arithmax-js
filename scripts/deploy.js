const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  try {
    log(`\n${colors.cyan}${description}...${colors.reset}`);
    execSync(command, { stdio: 'inherit' });
    log(`${colors.green}✓ ${description} completed${colors.reset}`);
  } catch (error) {
    log(`${colors.red}✗ ${description} failed: ${error.message}${colors.reset}`);
    process.exit(1);
  }
}

function checkPrerequisites() {
  log('Checking prerequisites...', 'blue');

  // Check if yarn is installed
  try {
    execSync('yarn --version', { stdio: 'pipe' });
  } catch (error) {
    log('Yarn is not installed. Please install yarn first.', 'red');
    process.exit(1);
  }

  // Check if electron-builder is installed
  try {
    execSync('npx electron-builder --version', { stdio: 'pipe' });
  } catch (error) {
    log('Installing electron-builder...', 'yellow');
    runCommand('yarn add --dev electron-builder', 'Installing electron-builder');
  }

  log('✓ Prerequisites check completed', 'green');
}

function buildApp() {
  log('Building application...', 'blue');
  runCommand('yarn build', 'Building React app');
}

function deploy(platform, target = null) {
  const platformLower = platform.toLowerCase();

  log(`\n${colors.bright}Deploying for ${platform}...${colors.reset}`, 'magenta');

  checkPrerequisites();
  buildApp();

  let command = `yarn electron:build:${platformLower}`;

  if (target) {
    command += `:${target}`;
  }

  runCommand(command, `Building ${platform} ${target || 'package'}`);

  log(`\n${colors.green}${colors.bright}Deployment completed successfully!${colors.reset}`);
  log('Output files are in the \'release\' directory.', 'cyan');
}

// Parse command line arguments
const args = process.argv.slice(2);
const platform = args[0];
const target = args[1];

if (!platform) {
  log('Usage: node scripts/deploy.js <platform> [target]', 'yellow');
  log('Platforms: win, mac', 'cyan');
  log('Targets:', 'cyan');
  log('  Windows: portable, nsis', 'cyan');
  log('  Mac: dmg, zip', 'cyan');
  log('\nExamples:', 'yellow');
  log('  node scripts/deploy.js win', 'cyan');
  log('  node scripts/deploy.js mac', 'cyan');
  log('  node scripts/deploy.js win portable', 'cyan');
  log('  node scripts/deploy.js mac dmg', 'cyan');
  process.exit(1);
}

if (platform !== 'win' && platform !== 'mac') {
  log('Invalid platform. Use "win" or "mac".', 'red');
  process.exit(1);
}

deploy(platform, target);