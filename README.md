# Alex Pagnotta's Eslint Config (+ prettier)

Eslint (+prettier) configuration for all my personal projects.

## Project Structure

This project is a monorepo, each folder inside `/packages` is a separate configuration, and each configuration is published as a separate package on npm.
Check the readme inside each package for more information.

## Publishing and version

This project uses [ChangeSets](https://github.com/changesets/changesets) to manage the versioning and publishing of the packages.
You can follow this steps to publish a new version:

- Add new changes to the project, new feratures, bug fixes, etc.
- When you are ready to publish, or you have added enough changes to be summarized in a changelog point, run `npm run changeset` from the root and follow the instructions.
- Run `npm run version` to bump the version of the packages.
- Run `npm run publish` to publish the packages to npm.

**TODO**: Automate process with [github actions](https://github.com/changesets/action).
