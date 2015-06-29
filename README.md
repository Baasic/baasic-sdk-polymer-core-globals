# baasic-globals

> [Baasic](http://www.baasic.com) Web Component providing basic application-wide configuration settings and globals varables.

## Demo

[Check it live!](http://demo.baasic.com/polymer/)

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install baasic-globals --save

Or download the source code and install it manually in your projects.

## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/baasic-globals/`, where `baasic-globals` is the name of the directory containing it.

## Usage

1. Import Web Components' polyfill:

    ```
    <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    ```
    
2. Import Custom Element:

    ```
    <link rel="import" href="bower_components/baasic-globals/baasic-globals.html">
    ```
3. Start using it! This library includes behaviors only (Ajax, config, etc.), there are no Polymer elements here!

## Testing Your Element

Simply navigate to the `/test` directory of your element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/baasic-globals/test/`

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/baasic/baasic-sdk-polymer-core-globals/releases).

