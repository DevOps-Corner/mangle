# Contributing to Mangle

## We are glad that you are interested in contributing...

The Mangle project team welcomes contributions from the community. We are always thrilled to receive [pull requests](https://help.github.com/articles/creating-a-pull-request), and do our best to process them as fast as we can. If you wish to contribute code and you have not signed our contributor license agreement \(CLA\), our bot will update the issue when you open a Pull Request. For any questions about the CLA process, please refer to our [FAQ](https://cla.vmware.com/faq).

Before you start to code, we recommend discussing your plans through a [Github issue](https://github.com/vmware/mangle/issues) or discuss it first with the official project maintainers via [Slack](https://join.slack.com/t/vmwmangle/shared_invite/enQtOTE0OTAwOTkwNDY0LWNmMTA2ZGY2ODdkNTQ2MzZkNTE2NTcyY2NiOTQ1NjAzZGQ4NjM3OGE3ODMxN2UyZWIxMDAzNmZkZDNmZmNhMGQ), especially for more ambitious contributions. This gives other contributors a chance to point you in the right direction, give you feedback on your design, and help you find out if someone else is working on the same thing.

### Contribution Flow

This is a rough outline of what a contributor's workflow looks like:

* Create a topic branch from where you want to base your work
* Make commits of logical units
* Make sure your commit messages are in the proper format \(see below\)
* Push your changes to a topic branch in your fork of the repository
* Submit a pull request

Example:

```text
git remote add upstream https://github.com/vmware/mangle.git
git checkout -b my-new-feature master
git commit -a
git push origin my-new-feature
```

#### Staying In Sync With Upstream

When your branch gets out of sync with the vmware/master branch, use the following to update:

```text
git checkout my-new-feature
git fetch -a
git pull --rebase upstream master
git push --force-with-lease origin my-new-feature
```

#### Updating pull requests

If your PR needs changes based on code review, you'll most likely want to squash these changes into existing commits.

If your pull request contains a single commit or your changes are related to the most recent commit, you can simply amend the commit.

```text
git add .
git commit --amend
git push --force-with-lease origin my-new-feature
```

If you need to squash changes into an earlier commit, you can use:

```text
git add .
git commit --fixup <commit>
git rebase -i --autosquash master
git push --force-with-lease origin my-new-feature
```

Be sure to add a comment to the PR indicating your new changes are ready to review, as GitHub does not generate a notification when you git push.

#### Code Style

#### Formatting Commit Messages

We follow the conventions on [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/).

Be sure to include any related GitHub issue references in the commit message. See [GFM syntax](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) for referencing issues and commits.

### Reporting Bugs and Creating Issues

When opening a new issue through [Github](https://github.com/vmware/mangle/issues), try to roughly follow the commit message format conventions above.

### Repository Structure

```text
├──  assets/files
├──  checkstyle
├──  docker
├──  docs
├──  formatter
├──  mangle-byteman-root
│    ├──  agent
│    ├──  bin
│    ├──  download
│    ├──  install
│    ├──  licenses
│    │    submit
│    │    README
│    │    pom.xml 
├──  mangle-default-plugin
├──  mangle-metric-reporter
├──  mangle-models
├──  mangle-services
├──  mangle-support
├──  mangle-task-framework
├──  mangle-test-plugin
├──  mangle-ui
├──  mangle-utils
├──  mangle-vcenter-adapter
│    .gitbook.yaml
│    .gitignore
│    CONTRIBUTING.md
│    LICENSE
│    NOTICE
│    pom.xml
```

