// Support for ${VAR} substitution during parse

function parseWithEnvVars(input) {
    return input.replace(/\$\{(\w+)\}/g, (match, varName) => {
        return process.env[varName] || match;
    });
}