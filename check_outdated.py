# Check for outdated packages

import subprocess

# Run the command to check for outdated packages
subprocess.run(['pip', 'list', '--outdated'])