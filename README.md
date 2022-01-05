# Travis Observable Module Snippet Example

Travis CI TypeScript Module for Observables. This is just one snippet of a bigger integration I've been working on showing the power of observables I thought was fascinating. 

## Use Case

In a different part of this project I'm working on:

```typescript
build = getTravisBuildId();
build.pipe(TravisBuldId);
```

Both lines are executed in the same tick, and the first data event can't possibly occur until the next tick - that's how the interpreter works internally. This means that you have a guarantee that the `.pipe` is processed before the first data event fires, and everything will work as expected.

