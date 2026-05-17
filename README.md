## Error Handling

When parsing TOML files, ensure to handle potential errors such as:
- **Syntax errors**: Check for any mistakes in the TOML structure that could prevent parsing.
- **Missing fields**: Ensure all required fields are present in the TOML file.
- **Type mismatches**: Verify that the values match the expected types (e.g., strings, integers).

Implement **try-catch blocks** to gracefully handle these errors and provide clear, informative messages to the user.

## Example Usage

Here are some clearer examples of how to use the parser:

### Example 1: Basic Parsing
```python
import toml

# Load a TOML file
config = toml.load('config.toml')

# Access a value
print(config['section']['key'])
```

### Example 2: Error Handling
```python
try:
    config = toml.load('config.toml')
except toml.TomlDecodeError as e:
    print(f'Error parsing TOML: {e}')
```
