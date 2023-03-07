---
title: An Open Source Back-End as a Service for All Your Needs
slug: 2023-01-18-appwrites-service-map
coverImage: /images/appwrite/cover.svg
coverWidth: 16
coverHeight: 9
date: 2023-01-18
excerpt: Appwrite is an open-source back-end service that can help you quickly set up back-end APIs for your projects. It provides robust and reliable databases, storage, authentication, and other services that are essential for application development. This article will discuss the different services and features of Appwrite that empower application developers.
categories: [Appwrite]
---

[Appwrite](https://appwrite.io) is an open-source back-end service that can help you quickly set up back-end APIs for your projects. It provides robust and reliable databases, storage, authentication, and other services that are essential for application development. This article will discuss the different services and features of Appwrite that empower application developers.

The map below gives a bird's-eye view of all the services and features of Appwrite. Note that Appwrite is designed as a multi-tenant service, meaning a single Appwrite instance can provide these services to multiple applications that you can manage in your Appwrite projects.

[![Appwrite Service map.png](/images/appwrite/appwrite-service-map.png)](/images/appwrite/appwrite-service-map.png)

## Authentication & User Management

Appwrite provides robust and secure authentication services for all your applications. With Appwrite, you can rest assured that your authentication credentials are safe and secure, no matter the type of application you are using. Additionally, Appwrite's authentication service offers flexible and customizable features to meet your specific needs.

Appwrite provides email and password-based authentication, anonymous authentication, OAuth2 authentication with 40+ providers, magic link authentication, and phone-based authentication services. Furthermore, Appwrite also provides users and teams management APIs to manage users, teams, roles, and permissions. This involves services under three headings: `account`, `users`, and `teams`.

## Database

Appwrite provides a highly customizable database for building any kind of application. With its document-based architecture, server-side schema validation, and robust permission system, it can handle the database needs of any kind of application. It involves a single `databases` service that provides a way to manage database, collections, and documents data for your application.

## Storage

With customizable buckets, Appwrite can handle any kind of storage needs for your applications. It can also integrate with S3 and S3 compatible storage services, such as DigitalOcean Spaces. You can host and serve files for your application with a robust permission system. Additionally, Appwrite provides basic image manipulation services, like cropping, adding borders, and converting output types, to help you customize images as per the requirements of your application.

## Cloud Functions

Are you finding something essential for your application is lacking? Extend Appwrite with cloud functions. Functions can be written in 10+ different supported runtimes, and can be triggered based on events, HTTP calls, or a specific schedule, providing unlimited ways to build custom features.

## APIs

Appwrite provides extensive **REST APIs, GraphQL APIs,** and **Realtime APIs** to access and manage all of its services and data. You are free to use one of the 10+ officially supported SDKs or directly interface with these APIs.

## SDKs

Appwrite provides server-side and client-side SDKs to access its services in different scopes. Server-side SDKs use API keys with different scopes and should only be used for server-side communication. Client-side SDKs can be used publicly and to build front-end applications. They use authentication services to authenticate users.

Client SDKs are provided for **Flutter, Web (Javascript), Apple,** and **Android** where as server side SDKs are provided for **Node.js, Deno, PHP, Python, Ruby, Dart, Kotlin,** and **Swift**. On top of these libraries, you can also directly use REST API.

## There’s more

Apart from these major services, there are other services, such as avatars to help generate app images, icons, and avatars; localization service to customize the application according to the user's location; health service to validate and monitor your Appwrite server instance; webhooks service to allow integrations to subscribe to various events on Appwrite; and SSL service to handle SSL certification generation and management for your Appwrite instance internally.

## Impressed

All of these as a open source product, that you can install and deploy with a single docker command. All you need is docker and docker compose in order to get started. [Give it a try today.](https://appwrite.io/docs/installation)