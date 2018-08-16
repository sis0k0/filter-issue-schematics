# Schematics `filter` issue

This is a demo project for the issue described in .

# Steps to reproduce
1. Build the schematics project.
```
cd test-schematic
npm i && npm run build
cd ..
```

2. Install the schematic in the demo app.
```
cd testapp
npm i -D ../test-schematic # npm5+ will create a symlink to the target dir
```

> npm 5+ will create a symlink to the target dir.

3. Run the blank schematic
```
ng g test-schematic:test-schematic
```

# Error message
You'll get the following error message:

```
Tree type is not supported.
```

> See the linked issue for more details

