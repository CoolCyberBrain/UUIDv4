# UUIDv4

Library for generating UUID (universally unique identifier) version 4 strings.

The library will use [window.crypto](https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto) to
generate random numbers if it detects that it is available, else it will fallback to use
[Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

## Usage

```Typescript
let uuid: string = UUIDv4.generateUUID();
```

Sample Angular Karma test

```Typescript
import { TestBed, inject } from '@angular/core/testing';
import { UUIDv4 } from 'uuid-version4';

describe('sample test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
  });

  it('it should generate UUID version 4 string', inject([], () => {
    let uuid: string = UUIDv4.generateUUID();
    expect(uuid).toBeTruthy();
    expect(uuid.length).toBe(36);
    expect(uuid[14]).toBe('4');
  }));
});
```

## Main source

The main source file is [index.ts](https://github.com/pfrandsen/UUIDv4/blob/master/src/index.ts).

## References

* Wikipedia: [Universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)
* Specification: [RFC 4122](https://www.ietf.org/rfc/rfc4122.txt)