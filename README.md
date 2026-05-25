## .cli-tool.yaml Configuration

The `.cli-tool.yaml` file is used to configure various options for the CLI tool. Below are the key configuration options you can set:

- **config**: Path to the configuration file (default is `$HOME/.cli-tool.yaml`).
- **verbose**: Enable verbose output for detailed logging.

### Example
```yaml
config: /path/to/config
verbose: true
```

### Clarification on 'FileNotFoundError'

If you encounter a `FileNotFoundError`, ensure that the specified configuration file path exists and is accessible. Adjust the path in the configuration accordingly.

Make sure to adjust the paths and options according to your needs.


This update addresses issue #1.