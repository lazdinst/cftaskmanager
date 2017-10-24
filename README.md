# cftaskmanager
React Coding Challenge - Task Managment App

# Travis.CI

[![Build Status](https://travis-ci.org/lazdinst/cftaskmanager.svg?branch=master)](https://travis-ci.org/lazdinst/cftaskmanager)

# Task List
  Render ordered list of tasks. Load the list when the app starts.

# Task Options
Task title should be editable and set in focus when a new task is added
“New task” button will create a new task and place it on top of the list

“Save” button: 
1. Is disabled by default
2. Is set enabled when current state of the list doesn’t match it’s initial state (task has been added,
deleted, or updated)
3. On click will send a POST request to the server with current state of the list.
4. Show success/failure alert after successful/failed request

# Task Entry
“trash” button deletes the task from the list
Alert message “x” button will remove the alert