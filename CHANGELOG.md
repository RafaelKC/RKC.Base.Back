# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.2.1]

### **Bugfixes**

- Fixed PagedGetListInput export;
- Fixed PagedGetListResult export;

## [v1.2.0]

### **Added**

- TestUtilsBase;
- PagedGetListInput;
- PagedGetListResult;

### **Changes and bugfixes**

- **UserCredential:**
  - Fixed database name;
  - Created a `constructor` with `IUserCredentials` interface.
- **User:**
  - Now set default valeu as true for `isActive` prop on database;
  - Created a `constructor` with `IUser` interface;
  - Fixed `fullName` prop.
