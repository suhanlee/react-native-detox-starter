# React Native Detox Example

## Prerequisites

Running Detox (on iOS) requires the following:

* Mac with macOS (at least macOS El Capitan 10.11)

* Xcode 8.3+ with Xcode command line tools
> TIP: Verify Xcode command line tools is installed by typing `gcc -v` in terminal (shows a popup if not installed)

* A working [React Native](https://facebook.github.io/react-native/docs/getting-started.html) app you want to test

<br>

https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md


## Instruction

```
$ detox build # d:build once
$ detox test  # d:test
configuration="ios.sim.debug" artifactsLocation="artifacts/ios.sim.debug.2018-09-05 04-13-26Z" node_modules/.bin/jest e2e --config=e2e/config.json --maxWorkers=1 '--testNamePattern=^((?!:android:).)*$'
detox[59772] INFO:  [DetoxServer.js] server listening on localhost:57900...
 PASS  e2e/firstTest.spec.js (12.92s)
  Example
    ✓ should have welcome screen (936ms)
    ✓ should show hello screen after tap (1400ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        13.03s
Ran all test suites matching /e2e/i with tests matching "^((?!:android:).)*$".
```
