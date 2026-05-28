# Fix edge case in config parsing

# Code to handle edge case
# Example: if config is missing a key, set default value
if 'key' not in config:
    config['key'] = 'default_value'
