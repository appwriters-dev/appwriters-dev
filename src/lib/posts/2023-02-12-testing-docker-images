---
title: Testing Docker Images
slug: testing-docker-images
date: 2023-02-12
excerpt: Docker containers have become standards for containarized development and deployment. It is very important to make sure that the docker image we build are not missing anything and are working properly. In this article we will learn how we can write tests for docker images to make sure it is built properly.
coverImage:
coverWidth:
coverHeight:
categories: [Docker, Testing]
---

Unit testing docker images will help you become confident about your built images. It will also support by reducing time spent running docker image and trying to figure out why it's not working properly.

In this article we will learn about tools that can help us test our docker images. We will learn to write unit tests for our docker images and automate it as well.

One of the best tool I found to test docker images was [Container structure test](https://github.com/GoogleContainerTools/container-structure-test). Let us see how we can use it to test our docker images.

## Dockerfile

First take a docker file from [utopia audit](https://github.com/utopia-php/audit/blob/master/Dockerfile) library

```bash
FROM composer:2.0 as step0

WORKDIR /src/

COPY composer.lock /src/
COPY composer.json /src/

RUN composer update --ignore-platform-reqs --optimize-autoloader \
    --no-plugins --no-scripts --prefer-dist

FROM php:8.0-cli-alpine as final

LABEL maintainer="team@appwrite.io"

RUN docker-php-ext-install pdo_mysql

WORKDIR /code

COPY --from=step0 /src/vendor /code/vendor

# Add Source Code
COPY ./tests /code/tests
COPY ./src /code/src
COPY ./phpunit.xml /code/phpunit.xml
COPY ./psalm.xml /code/psalm.xml

CMD [ "tail", "-f", "/dev/null" ]
```

Here is the folder structure of the library

```
src/
  Audit/
    Audit.php
tests/
  Audit/
	AuditTest.php
composer.json
composer.lock
Dockerfile
phpunit.xml
psalm.xml
```

We can build this docker file using the following command.

```bash
docker build -t docker-unit-testing .
```

## Writing Tests

Container structure test supports writing test configuration as a `.json` or a `.yaml` files. I like `.yaml` as it's more simpler so let's write our tests config using `.yaml` file.

### File Existence Test

The first type of test is the file existence test. This is a test to make sure the built image includes the files we expect and exclueds the files we don't want. Let's see how we can write file existence test.

`config.yaml`
```yaml
schemaVersion: "2.0.0"

fileExistenceTests:
  - name: 'Audit'
    path: '/code/src/Audit/Audit.php'
    shouldExist: true
  
  - name: 'Audit Test'
    path: '/code/tests/Audit/AuditTest.php'
    shouldExist: true
# we can also test for user and group ownership
# if you want to make sure files are owned by proper
# user and group using uid and gid
# uid: 1000
# git: 100
```

To run the test we must first install the container structure test, run the following command to install it. More information and installation details for other systems can be found in their [readme in GitHub repository](https://github.com/GoogleContainerTools/container-structure-test).

```bash
curl -LO https://storage.googleapis.com/container-structure-test/latest/container-structure-test-linux-amd64 && chmod +x container-structure-test-linux-amd64 && sudo mv container-structure-test-linux-amd64 /usr/local/bin/container-structure-test
```

Once the installation is complete we can run the test using the following command.

```bash
container-structure-test test --image docker-unit-testing \
--config config.yaml
```

We should see the following output

```
====================================
====== Test file: config.yaml ======
====================================
=== RUN: File Existence Test: Audit
--- PASS
duration: 0s
=== RUN: File Existence Test: Audit Test
--- PASS
duration: 0s

=====================================
============== RESULTS ==============
=====================================
Passes:      2
Failures:    0
Duration:    0s
Total tests: 2

PASS
```

Similarly we can write file existence tests for more files. Also we can test to make sure files are excluded by changing `shouldExist: false` to make sure that ignored files are not in the final image. Learn more properties of [file existence test at GitHub](https://github.com/GoogleContainerTools/container-structure-test#file-existence-tests).

## File Contents Test

Next type of test we can do is for the content of file. We can make sure the file has certain content inside it. Let's add next property in our config file to test file contents

`config.yaml`
```yaml
fileContentTests:
  - name: 'Audit Class'
    path: '/code/src/Audit/Audit.php'
    expectedContents: ['.*class Audit.*']
    excludedContents: ['.*class AuditTest.*']
  
  - name: 'Audit Test Class'
    path: '/code/tests/Audit/AuditTest.php'
    expectedContents: ['.*extends TestCase.*']
    excludedContents: ['.*COLLECTION.*']
```

We use list of strings with regex patterns inside `expectedContents` array to check multiple values. We can similarly use `excludedContents` property to make sure certain text doesn't exist in the file. We can add more similar tests to test content of other files and run again using the above command. Learn more properties of [file content tests at GitHub](https://github.com/GoogleContainerTools/container-structure-test#file-content-tests).

## Command Tests

Command tests are used to make sure various commands are available in the docker image and they execute successfully giving the expected output. We can write the command tests as the following by adding a new `commandTests` section in our config file.

`config.yaml`
```yaml
commandTests:
  - name: 'PHP version 8'
    command: "php"
    args: ["--version"]
    expectedOutput: [".*PHP.*8.0*"]
```

We can also add `excludedOutput` and `excludedError` properties that accept array of regex strings. Learn more properties of [command tests at GitHub](https://github.com/GoogleContainerTools/container-structure-test#command-tests).

## Metadata Test

We can also test various metadata of the image like exposed ports, labels, environment variables, command and more. Let's see a metadata test to make sure our command and workdir are correct by adding a new `metadataTest` section in our config file as the following.

`config.yaml`
```yaml
metadataTest:
  cmd: ["tail", "-f", "/dev/null"]
  workdir: "/code"
```

Learn more properties of [metadata test at GitHub](https://github.com/GoogleContainerTools/container-structure-test#metadata-test).

## Summary

In this article we looked at how we can test our docker images to make sure it works as expected and be relived of manually debugging. We learned about file existence test, file content tests, command tests and metadata tests that help us test our docker image in various ways. I hope you enjoyed the article, if yes then don't forget to share it with your friends.
