## Error Handling

When parsing TOML files, ensure to handle potential errors such as:
- **Syntax errors**: Check for any mistakes in the TOML structure that could prevent parsing.
- **Missing fields**: Ensure all required fields are present in the TOML file.
- **Type mismatches**: Verify that the values match the expected types (e.g., strings, integers).

Implement **try-catch blocks** to gracefully handle these errors and provide clear, informative messages to the user.

# Upgrade tomllib

This updates the tomllib package to the latest version.