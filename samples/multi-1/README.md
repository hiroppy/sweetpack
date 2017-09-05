## .sweetpack.yml

```yaml
entry:
  main: ./lib/index.js
  a: ./lib/a.js
  b: ./lib/b.js
output: dist/[name].js
```

There are three input files, and the name of the output file is determined by the key at the time of input.
