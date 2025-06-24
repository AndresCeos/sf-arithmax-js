# Arithmax - Deployment Guide

This guide explains how to build and deploy Arithmax for Windows and Mac platforms using Electron.

## Prerequisites

Before building, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **Yarn** package manager
- **Git** (for version control)

### Platform-Specific Requirements

#### Windows
- Windows 10/11 (64-bit recommended)
- Visual Studio Build Tools (for native modules)
- Wine (if building on non-Windows systems)

#### macOS
- macOS 10.15 or higher
- Xcode Command Line Tools
- Apple Developer Account (for code signing)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arithmax
```

2. Install dependencies:
```bash
yarn install
```

## Build Scripts

### Quick Build Commands

```bash
# Build for all platforms
yarn electron:dist

# Build for Windows only
yarn electron:build:win

# Build for macOS only
yarn electron:build:mac

# Build specific targets
yarn electron:build:win:portable    # Windows portable executable
yarn electron:build:win:nsis        # Windows installer
yarn electron:build:mac:dmg         # macOS DMG installer
yarn electron:build:mac:zip         # macOS ZIP archive
```

### Using the Deployment Script

For automated deployment with better error handling:

```bash
# Deploy for Windows
node scripts/deploy.js win

# Deploy for macOS
node scripts/deploy.js mac

# Deploy specific targets
node scripts/deploy.js win portable
node scripts/deploy.js win nsis
node scripts/deploy.js mac dmg
node scripts/deploy.js mac zip
```

## Build Output

All build artifacts are placed in the `release/` directory:

### Windows Builds
- `Arithmax Setup.exe` - NSIS installer (recommended)
- `Arithmax.exe` - Portable executable
- `Arithmax-<version>-win.zip` - ZIP archive

### macOS Builds
- `Arithmax-<version>.dmg` - DMG installer
- `Arithmax-<version>-mac.zip` - ZIP archive
- `Arithmax-<version>-mac-arm64.zip` - Apple Silicon version

## Architecture Support

### Windows
- **x64** (64-bit Intel/AMD) - Primary target
- **ia32** (32-bit Intel/AMD) - Legacy support

### macOS
- **x64** (Intel Macs) - Intel processors
- **arm64** (Apple Silicon) - M1/M2/M3 processors

## Code Signing (Recommended)

### macOS Code Signing

1. Obtain an Apple Developer Certificate
2. Add to your keychain
3. Set environment variables:
```bash
export CSC_LINK=/path/to/certificate.p12
export CSC_KEY_PASSWORD=your_password
```

### Windows Code Signing

1. Obtain a code signing certificate
2. Set environment variables:
```bash
set CSC_LINK=/path/to/certificate.p12
set CSC_KEY_PASSWORD=your_password
```

## Notarization (macOS)

For macOS distribution outside the App Store:

1. Set up notarization credentials:
```bash
export APPLE_ID=your_apple_id@example.com
export APPLE_ID_PASS=your_app_specific_password
```

2. Build with notarization:
```bash
yarn electron:build:mac
```

## Distribution

### Windows Distribution
- **NSIS Installer**: Recommended for most users
- **Portable**: For users who prefer no installation
- **ZIP**: For manual distribution

### macOS Distribution
- **DMG**: Standard macOS installer format
- **ZIP**: Alternative distribution method

## Troubleshooting

### Common Issues

1. **Build fails on Windows**
   - Ensure Visual Studio Build Tools are installed
   - Run as Administrator if needed

2. **Build fails on macOS**
   - Install Xcode Command Line Tools: `xcode-select --install`
   - Ensure you have proper permissions

3. **Code signing errors**
   - Verify certificate is valid and in keychain
   - Check environment variables are set correctly

4. **Notarization fails**
   - Verify Apple ID credentials
   - Check app-specific password is correct

### Build Logs

Check the console output for detailed error messages. Build logs are also saved in the `release/` directory.

## Performance Optimization

### Windows
- Use NSIS installer for better user experience
- Consider code signing for trust indicators

### macOS
- Enable hardened runtime for security
- Use DMG format for professional distribution
- Notarize for Gatekeeper compatibility

## Security Considerations

- Enable hardened runtime on macOS
- Use proper entitlements for file access
- Sign your application for trust
- Notarize macOS builds for distribution

## Version Management

Update the version in `package.json` before each release:

```json
{
  "version": "1.0.0"
}
```

The build system will automatically include the version in filenames and metadata.

## Support

For build issues or questions, check:
1. Electron Builder documentation
2. Platform-specific build requirements
3. Console output for error details 