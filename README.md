# CF Task Manager
[![Build Status](https://travis-ci.org/lazdinst/cftaskmanager.svg?branch=master)](https://travis-ci.org/lazdinst/cftaskmanager)

## Purpose
React Coding Challenge - Task Managment App
This application was built with React and Redux

## UI Interactions
User Interface requires by feature

### Tasks
1. Render ordered list of tasks. Load the list when the app starts.
2. Task title should be editable and set in focus when a new task is added
3. “New task” button will create a new task and place it on top of the list

### Save Button
1. Is disabled by default
2. Is set enabled when current state of the list doesn’t match it’s initial state (task has been added,
deleted, or updated)
3. On click will send a POST request to the server with current state of the list.

### Task Entry
1. “trash” button deletes the task from the list

### Notifications
1. Show success alert after successful request
2. Show failure alert after failed request
3. Alert message “x” button will remove the alert

# Installation
```javascript
yarn
yarn run build
yarn run server
```
# Testing
```javascript
yarn test
```
