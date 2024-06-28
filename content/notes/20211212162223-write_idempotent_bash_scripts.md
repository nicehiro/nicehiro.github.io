+++
title = "Write idempotent Bash scripts"
author = ["Fangyuan"]
date = 2021-12-12
slug = "20211212162223-write-idempotent-bash-scripts"
tags = ["bash"]
draft = false
+++

## What is idempotency? {#what-is-idempotency}

Idempotent scripts can be called multiple times and each time it's
called, it will have the save effects on the system. This means, a
second call will exit with the same result and won't have any side
effects.


## Examples {#examples}


### Creating an empty file {#creating-an-empty-file}

```bash
touch example.txt
```


### Creating a directory {#creating-a-directory}

```bash
mkdir -p mydir
```


### Creating a symbolic link {#creating-a-symbolic-link}

```bash
ln -sfn source target
```


### Removing a file {#removing-a-file}

```bash
rm -f example.txt
```


### Check if variable, file or dir exists {#check-if-variable-file-or-dir-exists}

```nil
if [ ! -f "/etc/conf/foo.txt" ]; then
  echo "ttt" > /etc/conf/foo.txt
fi
```

Other flags:

-   `-f` file
-   `-d` directory
-   `-z` string of zero length
-   `-p` pipe
-   `-x` file and has execute permission, `-x "$(command -v op)"` check
    `op` binary is or not installed in your machine


### Use if for conditional choice {#use-if-for-conditional-choice}

```nil
if [ "$Name" != $USER] ...
```

Use `"$Name"` rather than `$Name`.
If `$Name` is empty, bash sees the above condition as

```nil
if [ != $USER] ...
```

Thus add `""` is the safe way to use variable in condition.


## Reference {#reference}

-   <https://arslan.io/2019/07/03/how-to-write-idempotent-bash-scripts/>
