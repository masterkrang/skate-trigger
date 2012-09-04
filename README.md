Here's how to set up the skate-trigger code for development:

```bash
git clone https://github.com/masterkrang/skate-trigger.git
cd skate-trigger
mv src/ src.copy/
forge create
cp src/identity.json src.copy/identity.json
rm -rf src/
mv src.copy/ src/
```

