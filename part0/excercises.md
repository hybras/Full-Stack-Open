# Part 0

## [HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

## [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

## [Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)

## 4: POST /exampleapp/new_note

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST /exampleapp/new_note
    server-->>browser: 302 REDIRECT /exampleapp/notes

    browser->>server: GET /exampleapp/notes
    server-->>browser: HTML-code

    note over browser: css and js are fetched concurrently

    browser->>server: GET /exampleapp/main.css
    server-->>browser: main.css
    browser->>server: GET /exampleapp/main.js
    server-->>browser: main.js

    note over browser: browser starts executing js-code that requests JSON data from server 

    browser->>server: GET /exampleapp/data.json
    server-->>browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

    note over browser: browser executes the event handler that renders notes to display
```

![Diagram](4.svg)

## 5: GET /exampleapp/spa

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/spa
    server-->>browser: HTML-code

    note over browser: css and js are fetched concurrently

    browser->>server: GET /exampleapp/main.css
    server-->>browser: main.css
    browser->>server: GET /exampleapp/spa.js
    server-->>browser: spa.js

    note over browser: browser runs spa.js that requests data.json

    browser->>server: GET exampleapp/data.json
    server-->>browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

    note over browser: browser executes the event handler that renders notes to display
```

![Diagram](5.svg)

## 6 : POST /exampleapp/new_note

```mermaid
sequenceDiagram
    participant browser
    participant server

    note over browser: browser adds the note to its own copy of list, redraws the list

    browser->>server: POST /exampleapp/new_note
    server-->>browser: 201 CREATED {"message":"note created"}
```

![Diagram](6.svg)
