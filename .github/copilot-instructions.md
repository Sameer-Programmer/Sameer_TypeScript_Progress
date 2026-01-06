# Copilot Instructions for Sameer_TypeScript_Progress

## Project Overview
This is a TypeScript learning project containing simple console-based examples demonstrating TypeScript fundamentals. Each example has both a `.ts` source file and a corresponding compiled `.js` output.

## Project Structure & Patterns

### File Organization
- **Test1.ts/Test1.js**: Basic console.log output
- **Test2.ts/Test2.js**: Simple arithmetic with typed number variables  
- **Test3.ts/Test3.js**: Arithmetic with mixed integer and decimal numbers

### TypeScript Conventions
- **Type annotations**: Always explicitly annotate variable types (e.g., `let a: number = 20`)
- **Compilation pattern**: Every `.ts` file has a corresponding compiled `.js` output. When modifying TypeScript files, understand that compilation creates the JavaScript equivalent.
- **Console output**: Use `console.log()` for testing and verification

## Development Workflow

### Running Examples
- Execute any `.js` file with Node.js to test the code: `node Test1.js`
- Each test file is self-contained and produces immediate console output

### Adding New Examples
1. Create new `.ts` file following the naming convention: `TestN.ts`
2. Add explicit type annotations to all variables
3. Compile TypeScript to JavaScript (verify the `.js` output exists)
4. Test with Node.js to ensure it runs without errors

## Key Practices
- Keep examples simple and focused on single TypeScript concepts
- Maintain 1:1 parity between TypeScript source and JavaScript output files
- Use consistent console.log() for demonstrating variable values
